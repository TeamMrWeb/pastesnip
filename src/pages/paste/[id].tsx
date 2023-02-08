import { serverSideApolloFetching } from "@/apollo/serverSideApolloFetching"
import PasteUserTab from "@/components/PasteUserTab"
import Select from "@/components/Select"
import { LOGGED_USER, PASTE_BY_ID } from "@/graphql/queries"
import { PasteProps } from "interfaces"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

export default function Paste({ paste, verified }: { paste: PasteProps; verified: boolean }) {
  const [languageHighlight, setLanguageHighlight] = useState(paste.syntax_highlight)
  return (
    <div className="flex flex-col gap-5">
      {!verified ? (
        <h1 className="text-white text-xl">You must verify your account to see this content</h1>
      ) : (
        <>
          <header className="flex justify-between flex-wrap gap-y-3">
            <PasteUserTab
              pasteTitle={paste.title}
              subtitle={paste.author.username}
              createdAt={paste.createdAt}
            />
            <div className="w-full max-w-[340px]">
              <Select
                name="Syntax Highlight"
                firstValue={paste.syntax_highlight}
                options={SyntaxHighlighter.supportedLanguages}
                setValue={setLanguageHighlight}
              />
            </div>
          </header>
          <section>
            <SyntaxHighlighter
              language={languageHighlight}
              style={atomDark}
              className={`w-full min-h-[500px] !m-0 transition-all duration-1000`}
              showLineNumbers={true}
            >
              {paste.content}
            </SyntaxHighlighter>
          </section>
        </>
      )}
    </div>
  )
}

export async function getServerSideProps({ req, res, query }: { req: any; res: any; query: any }) {
  const data = await serverSideApolloFetching({
    fetch: "query",
    req,
    res,
    schema: LOGGED_USER
  })
  const loggedUser = data.data.me
  const accessToken = req.cookies["accessToken"]
  if (!accessToken) {
    return {
      redirect: {
        permanent: false,
        destination: "/signin"
      }
    }
  }
  const pasteId = query.id
  const pasteData = await serverSideApolloFetching({
    fetch: "query",
    req,
    res,
    schema: PASTE_BY_ID,
    variables: { id: pasteId }
  })
  if (pasteData.message) {
    return {
      redirect: {
        permanent: false,
        destination: "/404"
      }
    }
  }
  return {
    props: {
      paste: pasteData.data.getPasteById,
      verified: loggedUser.verified
    }
  }
}

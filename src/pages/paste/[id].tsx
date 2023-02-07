import { serverSideApolloFetching } from "@/apollo/serverSideApolloFetching"
import PasteUserTab from "@/components/PasteUserTab"
import Select from "@/components/Select"
import { LOGGED_USER } from "@/graphql/queries"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

export default function Paste({ verified }: { verified: boolean }) {
  const [languageHighlight, setLanguageHighlight] = useState("jsx")

  return (
    <div className="flex flex-col gap-5">
      {!verified ? (
        <h1 className="text-white text-xl">You must verify your account to see this content</h1>
      ) : (
        <>
          <header className="flex justify-between flex-wrap gap-y-3">
            <PasteUserTab pasteTitle="cosa" subtitle="finsiterix" createdAt="23/93" />
            <div className="w-full max-w-[340px]">
              <Select
                name="Syntax Highlight"
                firstValue="Select Syntax"
                options={["jsx", "javascript", "php"]}
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
              hoalsdoaslods
            </SyntaxHighlighter>
          </section>
        </>
      )}
    </div>
  )
}

export async function getServerSideProps({ req, res }: { req: any; res: any }) {
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
  // todo: get paste by id

  return {
    props: {
      // paste
      verified: loggedUser.verified
    }
  }
}

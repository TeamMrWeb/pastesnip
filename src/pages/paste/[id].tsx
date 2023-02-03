import { serverSideApolloFetching } from "@/apollo/serverSideApolloFetching"
import PasteUserTab from "@/components/PasteUserTab"
import Select from "@/components/Select"
import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

export default function Paste() {
  const [languageHighlight, setLanguageHighlight] = useState("jsx")

  return (
    <div className="flex flex-col gap-5">
      <header className="flex justify-between">
        <PasteUserTab pasteTitle="cosa" username="finsiterix" createdAt="23/93" />
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
    </div>
  )
}

export async function getServerSideProps({
  req,
  res,
  context
}: {
  req: any
  res: any
  context: any
}) {
  const { id } = context.query
  // const data = await serverSideApolloFetching({
  //   fetch: "query",
  //   req,
  //   res,
  //   schema: LOGGED_USER
  // })
  // return {
  //   props: { data }
  // }
}

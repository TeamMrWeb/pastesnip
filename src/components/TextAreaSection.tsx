import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark as cosa } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { useState } from "react"
import TextAreaHeader from "./TextAreaHeader"
import TextArea from "./TextArea"

function TextAreaSection() {
  const [text, setText] = useState("")
  const [showHighlight, setShowHighlight] = useState(true)
  const [languageHighlight, setLanguageHighlight] = useState("jsx")

  return (
    <section className="text-green-9">
      <h1 className="text-white text-xl">New Paste</h1>
      <div className="flex flex-col gap-2 pt-5 box-border">
        <TextAreaHeader
          showHighlight={showHighlight}
          setShowHighlight={setShowHighlight}
          setLanguageHighlight={setLanguageHighlight}
        />
        <div className="flex gap-2 transition-all duration-1000">
          <TextArea text={text} setText={setText} showHighlight={showHighlight} />
          <SyntaxHighlighter
            language={languageHighlight}
            style={cosa}
            className={`${
              showHighlight ? "w-[50%]" : "w-0 !p-0"
            } !m-0 transition-all duration-1000`}
          >
            {text}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  )
}
export default TextAreaSection

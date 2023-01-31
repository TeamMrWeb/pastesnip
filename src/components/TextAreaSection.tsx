import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { useState } from "react"
import TextAreaHeader from "./TextAreaHeader"
import TextArea from "./TextArea"
import { usePasteContext } from "@/contexts/PasteContext"

function TextAreaSection() {
  const [showHighlight, setShowHighlight] = useState(true)
  const [languageHighlight, setLanguageHighlight] = useState("jsx")
  const { paste } = usePasteContext()
  return (
    <section className="text-green-9">
      <h1 className="text-white text-xl">New Paste</h1>
      <div className="flex flex-col gap-2 pt-5 box-border">
        <TextAreaHeader
          showHighlight={showHighlight}
          setShowHighlight={setShowHighlight}
          setLanguageHighlight={setLanguageHighlight}
        />
        <div className={`flex ${showHighlight ? "gap-2" : "gap-0"} transition-all duration-1000`}>
          <TextArea showHighlight={showHighlight} />
          <SyntaxHighlighter
            language={languageHighlight}
            style={atomDark}
            className={`${
              showHighlight ? "w-[50%]" : "w-0 !p-0"
            } !m-0 transition-all duration-1000`}
          >
            {paste}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  )
}
export default TextAreaSection

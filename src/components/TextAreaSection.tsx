import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { useState } from "react"
import TextAreaHeader from "./TextAreaHeader"
import TextArea from "./TextArea"

function TextAreaSection() {
  const [text, setText] = useState("")
  const [showHighLight, setShowHighLight] = useState(true)

  return (
    <div className="text-green-9">
      <div className="flex flex-col gap-2">
        <TextAreaHeader showHighLight={showHighLight} setShowHighLight={setShowHighLight} />
        <div className="flex gap-2 transition-all duration-1000">
          <TextArea text={text} setText={setText} showHighLight={showHighLight} />
          <SyntaxHighlighter
            language="javascript"
            style={darcula}
            className={`${
              showHighLight ? "w-[50%]" : "w-0 !p-0"
            } !m-0  transition-all duration-1000`}
          >
            {text}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  )
}
export default TextAreaSection

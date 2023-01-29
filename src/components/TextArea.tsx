import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { useState } from "react"

function TextArea() {
  const [text, setText] = useState("")
  const [showHighLight, setShowHighLight] = useState(true)
  return (
    <div className="text-green-9">
      <div className="flex flex-col gap-2">
        <header>
          <div className="form-control w-40">
            <label className="cursor-pointer label">
              <span className="label-text">Show Highlight</span>
              <input
                type="checkbox"
                className="toggle toggle-accent"
                checked={showHighLight}
                onChange={() => setShowHighLight(!showHighLight)}
              />
            </label>
          </div>
        </header>
        <div className="flex gap-2 transition-all duration-1000">
          <textarea
            className={`${
              showHighLight ? "w-[50%]" : "w-full"
            } h-96 bg-green-2 text-green-9 outline-none p-2 box-border transition-all duration-1000`}
            name="cosa"
            value={text}
            onChange={e => setText(e.target.value)}
            spellCheck="false"
          />
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
export default TextArea

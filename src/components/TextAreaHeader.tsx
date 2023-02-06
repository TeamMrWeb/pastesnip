import Select from "./Select"
import Switch from "./Switch"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

export default function TextAreaHeader({
  showHighlight,
  setShowHighlight,
  setLanguageHighlight
}: {
  showHighlight: boolean
  setShowHighlight: (value: boolean) => void
  setLanguageHighlight: (value: string) => void
}) {
  return (
    <section className="w-full">
      <div className="form-control w-full flex flex-row justify-between">
        <Switch getter={showHighlight} setter={setShowHighlight} />
        <div className="w-full max-w-[340px]">
          <Select
            name="Syntax Highlight"
            firstValue="Select Syntax"
            options={SyntaxHighlighter.supportedLanguages}
            setValue={setLanguageHighlight}
          />
        </div>
      </div>
    </section>
  )
}

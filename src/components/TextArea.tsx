export default function TextArea({
  text,
  setText,
  showHighlight
}: {
  text: string
  setText: (value: string) => void
  showHighlight: boolean
}) {
  return (
    <textarea
      className={`${
        showHighlight ? "w-[50%]" : "w-full"
      } min-h-96 bg-green-1 text-gray-1 outline-none p-2 box-border transition-all duration-1000 resize-none`}
      name="cosa"
      value={text}
      onChange={e => setText(e.target.value)}
      spellCheck="false"
    />
  )
}

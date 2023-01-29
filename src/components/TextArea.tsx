export default function TextArea({
  text,
  setText,
  showHighLight
}: {
  text: string
  setText: (value: string) => void
  showHighLight: boolean
}) {
  return (
    <textarea
      className={`${
        showHighLight ? "w-[50%]" : "w-full"
      } h-96 bg-green-2 text-green-9 outline-none p-2 box-border transition-all duration-1000`}
      name="cosa"
      value={text}
      onChange={e => setText(e.target.value)}
      spellCheck="false"
    />
  )
}

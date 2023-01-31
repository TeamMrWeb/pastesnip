import { usePasteContext } from "@/contexts/PasteContext"

export default function TextArea({ showHighlight }: { showHighlight: boolean }) {
  const { paste, setPaste } = usePasteContext()
  return (
    <textarea
      className={`${
        showHighlight ? "w-[50%]" : "w-full"
      } min-h-[400px] bg-green-1 text-gray-1 outline-none p-2 box-border transition-all duration-1000 resize-none`}
      name="textarea"
      value={paste}
      onChange={e => setPaste(e.target.value)}
      spellCheck="false"
    />
  )
}

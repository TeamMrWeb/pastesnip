import Select from "./Select"
import TextInput from "./TextInput"

export default function PasteSettings() {
  return (
    <aside className="pt-5 box-border">
      <h2 className="text-xl text-white border-b border-b-green-1 mb-4 pb-2">Paste Settings</h2>
      <section className="flex flex-col gap-2">
        <TextInput name="Title" placeholder="Title" />
        <Select
          name="Syntax Highlight"
          firstValue="Select Syntax"
          options={["Javascript", "HTML", "CSS"]}
        />
        <TextInput name="Tags" placeholder="" />
        <Select name="Exposure" firstValue="Select your exposure" options={["Public", "Private"]} />
      </section>
    </aside>
  )
}

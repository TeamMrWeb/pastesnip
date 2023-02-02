import { pasteSchema } from "@/utils/yupSchemas"
import Button from "./Button"
import Select from "./Select"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import { useState } from "react"
import FormInput from "./FormInput"
import FormStringInput from "./FormStringInput"
import { useApollo } from "@/apollo/useApollo"
import { CREATE_PASTE } from "@/graphql/mutations"
import { usePasteContext } from "@/contexts/PasteContext"
interface PasteSettingsProps {
  title: string
  syntaxHighlight: string
  tags: string
  exposure: string
}

export default function PasteSettings() {
  const [exposure, setExposure] = useState("Public")
  const [syntaxhighLight, setSyntaxhighLight] = useState("Javascript")
  const { lazyMethod: createNewPaste } = useApollo({
    gqlType: CREATE_PASTE,
    successMessage: "You paste has been created successfully"
  })
  const { paste } = usePasteContext()

  const handleSubmit = (values: PasteSettingsProps) => {
    const newPaste = {
      title: values.title,
      content: paste,
      syntax_highlight: syntaxhighLight,
      private: exposure === "public",
      tags: values.tags.split(" ")
    }
    createNewPaste({ variables: newPaste })
  }

  return (
    <aside className="pt-5 box-border">
      <h2 className="text-xl text-white border-b border-b-green-1 mb-4 pb-2">Paste Settings</h2>
      <section>
        <Formik
          initialValues={{
            title: "",
            syntaxHighlight: "Javascript",
            tags: "",
            exposure: "Public"
          }}
          validationSchema={Yup.object(pasteSchema)}
          onSubmit={values => handleSubmit(values)}
        >
          <Form className="flex flex-col gap-2">
            <FormInput name="title">
              <FormStringInput
                type="text"
                name="title"
                label="Title"
                placeholder="Title"
                containerClassName="flex items-center justify-between text-gray-1"
                fieldClassName="max-w-[200px]"
              />
            </FormInput>
            <FormInput name="Syntax Highlight">
              <Select
                name="Syntax Highlight"
                firstValue="Select Syntax"
                options={["Javascript", "HTML", "CSS"]}
                setValue={setExposure}
              />
            </FormInput>
            <FormInput name="tags">
              <FormStringInput
                type="text"
                name="tags"
                label="Tags"
                placeholder=""
                containerClassName="flex items-center justify-between text-gray-1"
                fieldClassName="max-w-[200px]"
              />
            </FormInput>
            <Select
              name="Exposure"
              firstValue="Select your exposure"
              options={["Public", "Private"]}
              setValue={setSyntaxhighLight}
            />
            <Button text="Create new paste" type="submit" variant="primary" className="mt-5" />
          </Form>
        </Formik>
      </section>
    </aside>
  )
}

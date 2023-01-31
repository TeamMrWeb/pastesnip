import { Field } from "formik"

export default function FormStringInput({
  type,
  name,
  label,
  placeholder,
  minLength,
  maxLength,
  fieldClassName,
  containerClassName
}: {
  type: string
  name: string
  label: string
  placeholder: string
  minLength?: number
  maxLength?: number
  fieldClassName?: string
  containerClassName?: string
}) {
  return (
    <div className={`w-full ${containerClassName}`}>
      <label className="text-text1 text-[16px] font-medium text-gray-1" htmlFor={type}>
        {label}
      </label>
      <Field
        className={`w-full p-2 px-3 text-gray-1 bg-green-1 rounded-lg focus:outline outline-1 outline-green-4 focus:border-green-1 shadow-none focus:outline-offset-0 focus:outline-1 focus:outline-green-4 ${fieldClassName}`}
        name={name}
        type={type}
        id={type}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
      ></Field>
    </div>
  )
}

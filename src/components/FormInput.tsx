import { ErrorMessage } from "formik"

export default function FormInput({
  children,
  containerClassName,
  name
}: {
  children: React.ReactNode
  containerClassName?: string
  name: string
}) {
  return (
    <div className={`flex flex-col items-start w-full text-red-1 relative ${containerClassName}`}>
      {children}
      <ErrorMessage name={name} />
    </div>
  )
}

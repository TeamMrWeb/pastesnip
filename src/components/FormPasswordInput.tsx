import { Field } from "formik"
import { useState } from "react"
import ClosedEyeIcon from "../../public/closed-eye-icon.svg"
import EyeIcon from "../../public/eye-icon.svg"

export default function FormPasswordInput({
  type,
  name,
  label,
  placeholder,
  minLength,
  maxLength,
  fieldClassName
}: {
  type: string
  name: string
  label: string
  placeholder: string
  minLength?: number
  maxLength?: number
  fieldClassName?: string
}) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <label className="text-text1 text-[16px] font-medium text-gray-1" htmlFor={type}>
        {label}
      </label>
      <Field
        className={`w-full p-2 px-3 text-gray-1 bg-green-1 rounded-lg focus:outline outline-1 outline-green-4 focus:border-green-1 shadow-none focus:outline-offset-0 focus:outline-1 focus:outline-green-4 ${fieldClassName}`}
        name={name}
        type="password"
        id={type}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
      />
      <button type="button" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? (
          <ClosedEyeIcon className="absolute right-0 top-0 w-6 mt-[33px] mr-[15px] cursor-pointer fill-green-5" />
        ) : (
          <EyeIcon className="absolute right-0 top-0 w-6 mt-[33px] mr-[15px] cursor-pointer fill-green-5" />
        )}
      </button>
    </>
  )
}

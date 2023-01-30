import { ErrorMessage, Field } from "formik"
import { useState } from "react"
import ClosedEyeIcon from "../../public/closed-eye-icon.svg"
import EyeIcon from "../../public/eye-icon.svg"

export default function FormGroupInput({
  type,
  name,
  label,
  placeholder,
  minLength,
  maxLength
}: {
  type: string
  name: string
  label: string
  placeholder: string
  minLength?: number
  maxLength?: number
}) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col items-start w-full text-[#FF7085] relative">
      <label
        className="text-text1 text-[16px] font-medium text-black dark:text-white"
        htmlFor={type}
      >
        {label}
      </label>
      <Field
        className="w-full p-2 px-3 text-gray-1 focus:outline outline-1 outline-green-4 focus:border-green-1 shadow-none focus:outline-offset-0 focus:outline-1 focus:outline-red-1"
        name={name}
        type={type === "password" ? (showPassword ? "text" : type) : type}
        id={type}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
      ></Field>
      <button type="button" onClick={() => setShowPassword(!showPassword)}>
        {type === "password" &&
          (showPassword ? (
            <ClosedEyeIcon className="absolute right-0 top-0 w-6 mt-[33px] mr-[15px] cursor-pointer fill-green-5" />
          ) : (
            <EyeIcon className="absolute right-0 top-0 w-6 mt-[33px] mr-[15px] cursor-pointer fill-green-5" />
          ))}
      </button>
      <ErrorMessage name={name} />
    </div>
  )
}

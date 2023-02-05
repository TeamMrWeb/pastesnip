import Link from "next/link"

const variantsForButton = {
  primary: "bg-green-1 hover:bg-green-4",
  secundary:
    "bg-white hover:bg-gray-100 text-black border border-black border-solid duration-300 text-center",
  red: "bg-red-1 hover:bg-red-2",
  white: "bg-white hover:bg-gray-100 border border-red-1 text-red-1"
}

const variantsForLink = {
  primary: "hover:bg-gray-900 text-black bg-white hover:text-white",
  secundary: "bg-white duration-300 text-black hover:bg-gray-900 hover:text-white",
  red: "bg-red-1 hover:bg-red-2",
  white: "bg-white hover:bg-gray-100 border border-red-1 text-red-1"
}

export default function Button({
  variant,
  text,
  type,
  href,
  className,
  onClick
}: {
  variant: "primary" | "secundary" | "red" | "white"
  text: string
  type: "submit" | "button" | "link"
  href?: string
  className?: string
  onClick?: () => void
}) {
  return type === "link" ? (
    <Link
      className={`text-white ${variantsForLink[variant]} focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold flex justify-center items-center text-sm px-5 py-2.5 box-border text-center duration-300 rounded-lg ${className}`}
      href={href!}
    >
      {text}
    </Link>
  ) : (
    <button
      type={type}
      className={`text-white ${variantsForButton[variant]} font-semibold focus:outline-none focus:ring-4 focus:ring-gray-300 flex justify-center items-center text-sm px-5 py-2.5 box-border duration-300 text-center hover:text-white rounded-lg ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

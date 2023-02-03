import WorldIcon from "../../public/world-icon.svg"
import Link from "next/link"

export default function Paste({
  title,
  link,
  createdAt,
  syntaxHighlight
}: {
  title: string
  link: string
  createdAt: string
  syntaxHighlight: string
}) {
  return (
    <li className="flex">
      <WorldIcon className="w-5" />
      <Link href={`paste/${link}`}>{title}</Link>
      <p>{createdAt}</p>
      <p>{syntaxHighlight}</p>
    </li>
  )
}

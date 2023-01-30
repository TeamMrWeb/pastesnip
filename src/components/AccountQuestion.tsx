import Link from "next/link"

export default function AccountQuestion({
  question,
  href,
  hrefText
}: {
  question: string
  href: string
  hrefText: string
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <p className="text-text2">{question}</p>
      <Link className="font-medium text-white" href={href}>
        {hrefText}
      </Link>
    </div>
  )
}

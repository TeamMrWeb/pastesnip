import WorldIcon from "../../public/world-icon.svg"
import Link from "next/link"

interface RangesProps {
  years: number
  months: number
  weeks: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

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
  const formatCreatedAtDate = (createdAt: string) => {
    const date = new Date(Number(createdAt))
    const formatter = new Intl.RelativeTimeFormat("en")
    const ranges: RangesProps = {
      years: 3600 * 24 * 365,
      months: 3600 * 24 * 30,
      weeks: 3600 * 24 * 7,
      days: 3600 * 24,
      hours: 3600,
      minutes: 60,
      seconds: 1
    }
    const secondsElapsed = (date.getTime() - Date.now()) / 1000
    for (let key in ranges) {
      if (ranges[key as keyof RangesProps] < Math.abs(secondsElapsed)) {
        const delta = secondsElapsed / ranges[key as keyof RangesProps]
        return formatter.format(Math.round(delta), key as keyof RangesProps)
      }
    }
  }

  return (
    <li
      className="w-full grid grid-cols-4 border-t border-green-3 p-1 px-0 box-border text last:border-b"
      style={{ fontSize: "clamp(.8rem, 1vw, 1rem)" }}
    >
      <div className="flex items-center justify-center gap-2 w-max col-span-2">
        <WorldIcon className="w-5" />
        <Link
          href={`/paste/${link}`}
          className="text-[#7abefe] leading-4 h-5 justify-self-start hover:text-[#9fcffc]"
        >
          {title}
        </Link>
      </div>
      <p>{formatCreatedAtDate(createdAt)}</p>
      <p className="justify-self-end">{syntaxHighlight}</p>
    </li>
  )
}

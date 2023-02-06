import Image from "next/image"
import Link from "next/link"
import logo from "../../public/logo.png"
import UserTab from "./UserTab"
import { useLoggedUserContext } from "@/contexts/LoggedUserContext"

export default function Header() {
  const { loggedUser } = useLoggedUserContext()

  return (
    <header className="flex place-content-center border-b border-b-green-2 h-16">
      <div
        className="w-full max-w-maximum flex justify-between items-center text-green-9 py-2 box-border"
        style={{ fontSize: "clamp(.9rem, 1vw, 1rem)" }}
      >
        <Link href="/" className="flex items-center gap-5">
          <Image className="ml-5" src={logo} alt="Logo" width={40} height={40} />
          <p className="hidden sm:inline-block">PASTESNIP</p>
        </Link>
        <div className="flex gap-5">
          {loggedUser?.verified ? (
            <Link href="/pastes" className="flex items-center hover:text-green-8">
              PUBLIC PASTES
            </Link>
          ) : null}
          {loggedUser?.id?.length >= 1 ? <UserTab /> : null}
        </div>
      </div>
    </header>
  )
}

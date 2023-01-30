import Image from "next/image"
import Link from "next/link"
import logo from "../../public/logo.png"
import UserTab from "./UserTab"

export default function Header() {
  const loggeduser = true
  return (
    <header className="flex place-content-center border-b border-b-green-2">
      <div className="w-full max-w-maximum flex justify-between items-center text-green-9 py-2 box-border">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" width={100} height={100} />
          PASTESNIP
        </Link>
        <div>{loggeduser ? <UserTab /> : null}</div>
      </div>
    </header>
  )
}

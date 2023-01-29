import Image from "next/image"
import Link from "next/link"
import logo from "../../public/logo.png"
import UserIcon from "../../public/user-icon.svg"

export default function Header() {
  return (
    <header className="flex place-content-center border-b border-b-green-2">
      <div className="w-full max-w-maximum flex justify-between items-center text-green-9 p-2 box-border">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" width={100} height={100} />
          PASTESNIP
        </Link>
        <div>
          <Link href="/" className="flex items-center gap-4">
            Finisterix
            <UserIcon className="w-5 fill-green-2" />
          </Link>
        </div>
      </div>
    </header>
  )
}

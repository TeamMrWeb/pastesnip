import { useSignOut } from "@/hooks/useSignOut"
import UserIcon from "../../public/user-icon.svg"
import { useRef, useState } from "react"
import { useHandleClick } from "@/hooks/useHandleClick"
import { useLoggedUserContext } from "@/contexts/LoggedUserContext"
import Link from "next/link"

export default function UserTab() {
  const { signOut } = useSignOut()
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLUListElement>(null)
  const buttonRef = useRef<HTMLLabelElement>(null)
  useHandleClick(showDropdown, dropdownRef.current!, buttonRef.current!, setShowDropdown)
  const { loggedUser } = useLoggedUserContext()

  return (
    <>
      <div className="dropdown dropdown-end !bg-green-1 !hover:bg-green-8">
        <label
          tabIndex={0}
          className="btn m-1 flex items-center gap-4 bg-green-1 text-green-8 hover:!bg-green-2"
          style={{ fontSize: "clamp(.9rem, 1vw, 1rem)" }}
          ref={buttonRef}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <p className="hidden sm:inline-block">{loggedUser.username}</p>
          <UserIcon className="w-5 fill-green-4" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow rounded-box w-52 bg-green-1 border border-green-2"
          ref={dropdownRef}
        >
          <li>
            <Link href={`/user/${loggedUser.id}`}>Profile</Link>
          </li>
          <li>
            <button onClick={() => signOut()}>Log out</button>
          </li>
        </ul>
      </div>
    </>
  )
}

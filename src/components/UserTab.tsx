import { useSignOut } from "@/hooks/useSignOut"
import UserIcon from "../../public/user-icon.svg"
import { useRef, useState } from "react"
import { useHandleClick } from "@/hooks/useHandleClick"

export default function UserTab() {
  const { signOut } = useSignOut()
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLUListElement>(null)
  const buttonRef = useRef<HTMLLabelElement>(null)
  useHandleClick(showDropdown, dropdownRef.current!, buttonRef.current!, setShowDropdown)

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
          <p className="hidden sm:inline-block">Finisterix</p>
          <UserIcon className="w-5 fill-green-4" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow rounded-box w-52 bg-green-1 border border-green-2"
          ref={dropdownRef}
        >
          <li>
            <button onClick={signOut}>Log out</button>
          </li>
        </ul>
      </div>
    </>
  )
}

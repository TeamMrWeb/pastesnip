import Link from "next/link"
import UserIcon from "../../public/user-icon.svg"

export default function UserTab() {
  return (
    <>
      <div className="dropdown !bg-green-1 !hover:bg-green-8">
        <label
          tabIndex={0}
          className="btn m-1 flex items-center gap-4 bg-green-1 text-green-8 hover:!bg-green-2"
        >
          Finisterix
          <UserIcon className="w-5 fill-green-4" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow rounded-box w-52 bg-green-1 border border-green-2"
        >
          <li>
            <Link href="/">Log out</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

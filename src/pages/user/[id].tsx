import { serverSideApolloFetching } from "@/apollo/serverSideApolloFetching"
import Paste from "@/components/Paste"
import PasteUserTab from "@/components/PasteUserTab"
import { useLoggedUserContext } from "@/contexts/LoggedUserContext"
import { PasteProps } from "interfaces"

export default function User({ pastes }: { pastes: PasteProps[] }) {
  const { loggedUser } = useLoggedUserContext()
  const formatDate = (createdAt: string) => {
    const date = new Date(Number(createdAt)).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    })
    return date
  }

  return (
    <>
      <PasteUserTab pasteTitle={loggedUser.username} createdAt={formatDate(loggedUser.createdAt)} />
      <ul className="flex flex-col w-full mt-5">
        <h2 className="text-white text-xl">My pastes</h2>
        {pastes &&
          pastes.map((paste: PasteProps) => (
            <Paste
              key={paste.id}
              title={paste.title}
              link={paste.id}
              createdAt={paste.createdAt}
              syntaxHighlight={paste.syntax_highlight}
            />
          ))}
      </ul>
    </>
  )
}

// export async function getServerSideProps({ req, res, context }: { req: any; res: any; context: any }) {
// const accessToken = req.cookies["accessToken"]
//   if (!accessToken) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/signin"
//       }
//     }
//   }
//   const data = await serverSideApolloFetching({
//     fetch: "query",
//     req,
//     res,
//     schema: PASTES
//   })
//   const pastes = data.data.pastes
//   return {
//     props: {
//       pastes
//     }
//   }
// }

import { serverSideApolloFetching } from "@/apollo/serverSideApolloFetching"
import Paste from "@/components/Paste"
import PasteUserTab from "@/components/PasteUserTab"
import { PasteProps } from "interfaces"

export default function User({ pastes }: { pastes: PasteProps[] }) {
  return (
    <>
      <PasteUserTab pasteTitle="Finisterix" createdAt="23/93" />
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

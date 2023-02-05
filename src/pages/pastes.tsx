import { serverSideApolloFetching } from "@/apollo/serverSideApolloFetching"
import Paste from "@/components/Paste"
import { PASTES } from "@/graphql/queries"
import { PasteProps } from "interfaces"

export default function Pastes({ pastes }: { pastes: PasteProps[] }) {
  return (
    <>
      <h1 className="text-white text-xl">Pastes list</h1>
      <ul className="flex flex-col w-full mt-5">
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

export async function getServerSideProps({ req, res }: { req: any; res: any }) {
  const accessToken = req.cookies["accessToken"]
  if (!accessToken) {
    return {
      redirect: {
        permanent: false,
        destination: "/signin"
      }
    }
  }
  const { data } = await serverSideApolloFetching({
    fetch: "query",
    req,
    res,
    schema: PASTES
  })
  const pastes = data.pastes
  return {
    props: {
      pastes
    }
  }
}

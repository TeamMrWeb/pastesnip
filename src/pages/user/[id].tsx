import { serverSideApolloFetching } from "@/apollo/serverSideApolloFetching"
import Paste from "@/components/Paste"
import PasteUserTab from "@/components/PasteUserTab"
import { LOGGED_USER, PASTES_BY_AUTHOR, USER_BY_ID } from "@/graphql/queries"
import { PasteProps, UserProps } from "interfaces"

export default function User({
  user,
  pastes,
  verified
}: {
  user: UserProps
  pastes: PasteProps[]
  verified: boolean
}) {
  return (
    <>
      {!verified ? (
        <h1 className="text-white text-xl">You must verify your account to see this content</h1>
      ) : null}
      <PasteUserTab pasteTitle={user.username} createdAt={user.createdAt} />
      <ul className="flex flex-col w-full mt-5">
        <h2 className="text-white text-xl mb-5">My pastes</h2>
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

export async function getServerSideProps({ req, res, query }: { req: any; res: any; query: any }) {
  const data = await serverSideApolloFetching({
    fetch: "query",
    req,
    res,
    schema: LOGGED_USER
  })
  const loggedUser = data.data.me
  const accessToken = req.cookies["accessToken"]
  if (!accessToken) {
    return {
      redirect: {
        permanent: false,
        destination: "/signin"
      }
    }
  }
  const userId = query.id
  const userData = await serverSideApolloFetching({
    fetch: "query",
    req,
    res,
    schema: USER_BY_ID,
    variables: { id: userId }
  })
  const user = userData.data.getUserById
  const pastesData = await serverSideApolloFetching({
    fetch: "query",
    req,
    res,
    schema: PASTES_BY_AUTHOR,
    variables: { id: userId }
  })
  return {
    props: {
      pastes: pastesData.data.getPastesByAuthor,
      user,
      verified: loggedUser.verified
    }
  }
}

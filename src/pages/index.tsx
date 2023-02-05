import PasteSettings from "@/components/PasteSettings"
import TextAreaSection from "@/components/TextAreaSection"
import { LOGGED_USER } from "@/graphql/queries"
import { serverSideApolloFetching } from "../apollo/serverSideApolloFetching"
import { useEffect } from "react"
import { useLoggedUserContext } from "@/contexts/LoggedUserContext"

export default function Home({ loggedUser }: { loggedUser: any }) {
  const { setLoggedUser } = useLoggedUserContext()

  useEffect(() => {
    if (!loggedUser) return
    setLoggedUser(loggedUser)
  }, [loggedUser])

  return (
    <>
      <TextAreaSection />
      <PasteSettings />
    </>
  )
}

export async function getServerSideProps({ req, res }: { req: any; res: any }) {
  const data = await serverSideApolloFetching({
    fetch: "query",
    req,
    res,
    schema: LOGGED_USER
  })
  const loggedUser = data.data.me

  return {
    props: { loggedUser }
  }
}

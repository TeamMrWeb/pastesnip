import PasteSettings from "@/components/PasteSettings"
import TextAreaSection from "@/components/TextAreaSection"
import { LOGGED_USER } from "@/graphql/queries"
import { serverSideApolloFetching } from "../apollo/serverSideApolloFetching"

export default function Home({ data }: { data: any }) {
  console.log(data)
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

  return {
    props: { data }
  }
}

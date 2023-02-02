import { initializeApollo } from "@/apollo"
import { DocumentNode } from "@apollo/client"
import { getCookie } from "cookies-next"

export const serverSideApolloFetching = async ({
  fetch,
  schema,
  req,
  res,
  variables
}: {
  fetch: "query" | "mutation"
  schema: DocumentNode
  req: any
  res: any
  variables?: any
}) => {
  const accessToken = getCookie("accessToken", { req, res })
  const refreshToken = getCookie("refreshToken", { req, res })
  const apolloClient = initializeApollo()
  const context = {
    headers: {
      auth: accessToken,
      refresh: refreshToken
    }
  }

  if (fetch === "query") {
    await apolloClient.query({
      context,
      query: schema
    })
  } else {
    await apolloClient.mutate({
      context,
      mutation: schema,
      variables
    })
  }

  return apolloClient
}

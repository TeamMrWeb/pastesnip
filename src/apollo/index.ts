import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, split } from "@apollo/client"
import { GraphQLWsLink } from "@apollo/client/link/subscriptions"
import { getMainDefinition } from "@apollo/client/utilities"
import { createClient } from "graphql-ws"

export const apolloSetup = () => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_GQL_URL
  })

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(() => ({
      headers: {
        auth: localStorage.getItem("accessToken"),
        refresh_token: localStorage.getItem("refreshToken"),
        ...operation.getContext().headers
      }
    }))
    return forward(operation)
  })

  const wsLink =
    typeof window !== "undefined"
      ? new GraphQLWsLink(
          createClient({
            url: process.env.NEXT_PUBLIC_API_GQL_WS_URL || ""
          })
        )
      : null

  const splitLink =
    typeof window !== "undefined" && wsLink != null
      ? split(
          ({ query }) => {
            const definition = getMainDefinition(query)
            return (
              definition.kind === "OperationDefinition" && definition.operation === "subscription"
            )
          },
          wsLink,
          authLink.concat(httpLink)
        )
      : httpLink

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: splitLink
  })

  return { client }
}

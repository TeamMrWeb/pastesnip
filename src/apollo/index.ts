import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, split } from "@apollo/client"
import { GraphQLWsLink } from "@apollo/client/link/subscriptions"
import { getMainDefinition } from "@apollo/client/utilities"
import { createClient } from "graphql-ws"

let apolloClient: any

const createLink = () => {
  const wsLink =
    typeof window !== "undefined"
      ? new GraphQLWsLink(
          createClient({
            url: process.env.NEXT_PUBLIC_API_GQL_WS_URL || ""
          })
        )
      : null

  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_GQL_URL,
    credentials: "include"
  })

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(() => ({
      headers: {
        ...operation.getContext().headers
      }
    }))
    return forward(operation)
  })

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
  return splitLink
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createLink(),
    cache: new InMemoryCache()
  })
}

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient()
  if (initialState) {
    const existingCache = _apolloClient.extract()
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }
  if (typeof window === "undefined") return _apolloClient
  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}

export default apolloClient

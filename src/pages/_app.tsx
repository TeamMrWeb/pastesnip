import { useApolloInitializer } from "@/apollo/useApolloInitializer"
import PageLayout from "@/components/PageLayout"
import { LoggedUserProvider } from "@/contexts/LoggedUserContext"
import { PasteProvider } from "@/contexts/PasteContext"
import "@/styles/globals.css"
import { ApolloProvider } from "@apollo/client"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApolloInitializer(pageProps.initialApolloState)

  return (
    <PasteProvider>
      <LoggedUserProvider>
        <PageLayout>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </PageLayout>
      </LoggedUserProvider>
    </PasteProvider>
  )
}

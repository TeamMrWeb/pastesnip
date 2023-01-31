import { apolloSetup } from "@/apollo"
import PageLayout from "@/components/PageLayout"
import { PasteProvider } from "@/contexts/PasteContext"
import "@/styles/globals.css"
import { ApolloProvider } from "@apollo/client"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  const { client } = apolloSetup()
  return (
    <PasteProvider>
      <PageLayout>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </PageLayout>
    </PasteProvider>
  )
}

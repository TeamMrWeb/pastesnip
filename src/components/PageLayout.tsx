import Head from "next/head"
import Header from "./Header"
import logo from "../../public/logo.png"

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full bg-green-1">
      <Head>
        <title>Pastesnip</title>
        <meta name="description" content="A text storage website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={logo.src} />
      </Head>
      <Header />
      {children}
    </div>
  )
}

import Head from "next/head"
import Header from "./Header"
import logo from "../../public/logo.png"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full min-h-screen bg-green-1">
      <Head>
        <title>Pastesnip</title>
        <meta name="description" content="A text storage website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={logo.src} />
      </Head>
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <main className="flex place-content-center box-border">
        <div className="w-full max-w-maximum h-full p-5 pt-20 box-border bg-green-2">
          {children}
        </div>
      </main>
    </div>
  )
}

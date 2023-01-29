import PageLayout from "@/components/PageLayout"
// import Test from "@/components/Test"
import { useState } from "react"

export default function Home() {
  const [text, setText] = useState("")
  return (
    <PageLayout>
      <main className="w-full h-screen bg-black">
        <textarea name="cosa" value={text} onChange={e => setText(e.target.value)}></textarea>
      </main>
    </PageLayout>
  )
}

import PageLayout from "@/components/PageLayout"
import TextArea from "@/components/TextArea"

export default function Home() {
  return (
    <PageLayout>
      <main className="flex place-content-center pt-20 box-border">
        <div className="w-full max-w-maximum p-5 box-border">
          <TextArea />
        </div>
      </main>
    </PageLayout>
  )
}

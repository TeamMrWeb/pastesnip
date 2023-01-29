import PageLayout from "@/components/PageLayout"
import TextAreaSection from "@/components/TextAreaSection"

export default function Home() {
  return (
    <PageLayout>
      <main className="flex place-content-center pt-20 box-border">
        <div className="w-full max-w-maximum p-5 box-border">
          <TextAreaSection />
        </div>
      </main>
    </PageLayout>
  )
}

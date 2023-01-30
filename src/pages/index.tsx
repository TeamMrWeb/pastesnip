import PageLayout from "@/components/PageLayout"
import PasteSettings from "@/components/PasteSettings"
import TextAreaSection from "@/components/TextAreaSection"

export default function Home() {
  return (
    <PageLayout>
      <main className="flex place-content-center box-border">
        <div className="w-full max-w-maximum h-full p-5 pt-20 box-border bg-green-2">
          <TextAreaSection />
          <PasteSettings />
        </div>
      </main>
    </PageLayout>
  )
}

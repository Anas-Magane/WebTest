import { Suspense } from "react"
import ContactForm from "@/components/ContactForm"

export default function ContactGenericPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactForm />
    </Suspense>
  )
}

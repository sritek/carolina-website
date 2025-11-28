import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p>Use the form to route inquiries about events, press, or general feedback.</p>
      <ContactForm />
    </div>
  );
}


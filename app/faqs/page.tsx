import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/lib/data";

export default function FAQPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">FAQs</h1>
      <p>Provide quick answers about dress code, reservations, parking, and more.</p>
      <FAQAccordion items={faqs} />
    </div>
  );
}


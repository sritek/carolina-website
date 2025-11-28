import type { FAQItem } from "@/types";

type FAQAccordionProps = {
  items: FAQItem[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details className="rounded-xl border border-neutral-200 p-4" key={item.id}>
          <summary className="cursor-pointer text-base font-semibold">
            {item.question}
          </summary>
          <p className="mt-2 text-sm text-neutral-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}


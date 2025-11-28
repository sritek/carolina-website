import MenuItem from "@/components/MenuItem";
import SectionHeading from "@/components/SectionHeading";
import { menuItems } from "@/lib/data";

export default function MenuPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Menu</h1>
      <p>Use this page to outline daytime cafe service, evening bites, and cocktails.</p>
      <div className="space-y-4">
        <SectionHeading
          eyebrow="Featured"
          title="Signature offerings"
          description="Sample data is provided until a CMS or API is connected."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {menuItems.map((item) => (
            <MenuItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}


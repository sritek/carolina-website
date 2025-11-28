import type { MenuItem as MenuItemType } from "@/types/menuItem";

type MenuItemProps = {
  item: MenuItemType;
};

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-neutral-200 p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <span className="text-sm font-medium">{item.price}</span>
      </div>
      <p className="text-xs uppercase tracking-widest text-neutral-500">
        {item.category}
      </p>
      <p className="text-sm text-neutral-600">{item.description}</p>
    </div>
  );
}


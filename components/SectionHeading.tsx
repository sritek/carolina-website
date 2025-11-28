type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow ? <p className="text-xs uppercase tracking-widest">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold">{title}</h2>
      {description ? <p className="max-w-2xl text-sm text-neutral-600">{description}</p> : null}
    </div>
  );
}


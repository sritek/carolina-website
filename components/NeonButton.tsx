import Link from "next/link";
import type { ReactNode } from "react";

type NeonButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition-colors";

export default function NeonButton({
  children,
  className = "",
  href,
  type = "button",
}: NeonButtonProps) {
  if (href) {
    return (
      <Link className={`${baseClasses} ${className}`} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`} type={type}>
      {children}
    </button>
  );
}


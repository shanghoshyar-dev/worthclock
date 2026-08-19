import type { ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "on-dark";

const styles: Record<Variant, string> = {
  primary:
    "bg-copper text-cream hover:bg-copper-hover focus-visible:outline-copper",
  secondary:
    "bg-transparent text-ink ring-1 ring-ink/20 hover:bg-ink/5 focus-visible:outline-ink",
  "on-dark":
    "bg-copper text-cream hover:bg-copper-hover focus-visible:outline-cream",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-6 py-3.5 text-[0.95rem] font-semibold tracking-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

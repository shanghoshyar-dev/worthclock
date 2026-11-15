"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  const pathname = usePathname();
  const color = inverted ? "text-cream" : "text-ink";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${color} no-underline`}
      aria-label="Worthclock home"
      onClick={(e) => {
        if (pathname === "/") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          window.history.pushState(null, "", "/");
        }
      }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="16"
          cy="16"
          r="14.25"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M16 8.5V16.4L21.2 19.4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 16.8L14.1 19.7L20.6 12.6"
          stroke={inverted ? "#B08958" : "#C24E1D"}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-display text-[1.15rem] leading-none tracking-tight">
        Worthclock
      </span>
    </Link>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `#${id}`);
  return true;
}

function NavItem({
  href,
  label,
  className,
  onNavigate,
}: {
  href: string;
  label: string;
  className?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const hashIndex = href.indexOf("#");
  const hasHash = hashIndex !== -1;
  const path = hasHash ? href.slice(0, hashIndex) || "/" : href;
  const hash = hasHash ? href.slice(hashIndex) : "";

  return (
    <Link
      href={href}
      className={className}
      onClick={(e) => {
        if (!hasHash) {
          onNavigate?.();
          return;
        }

        // Same-page hash: Next.js often skips scrolling — do it ourselves
        if (pathname === path || (path === "/" && pathname === "/")) {
          e.preventDefault();
          scrollToHash(hash);
          onNavigate?.();
        }
      }}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            />
          ))}
          <Link
            href="/ai-readiness-check"
            className="rounded-md border border-copper px-2.5 py-1 text-sm text-ink-soft transition-colors hover:text-ink"
          >
            Mini Audit
          </Link>
          <Link
            href="/book"
            className="rounded-md bg-copper px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-copper-hover"
          >
            Book
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                className="py-1 text-ink-soft"
                onNavigate={() => setOpen(false)}
              />
            ))}
            <Link
              href="/ai-readiness-check"
              className="inline-flex w-fit rounded-md border border-copper px-2.5 py-1 text-ink-soft"
              onClick={() => setOpen(false)}
            >
              Mini Audit
            </Link>
            <Link
              href="/book"
              className="mt-2 rounded-md bg-copper px-4 py-3 text-center text-sm font-semibold text-cream"
              onClick={() => setOpen(false)}
            >
              Book Your Assessment
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

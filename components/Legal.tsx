import type { ReactNode } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

export function LegalDraftNotice() {
  return (
    <p className="mb-10 rounded-md border border-brass/35 bg-brass/10 px-4 py-3 text-sm leading-relaxed text-ink-soft">
      Placeholder structure. Have this reviewed by a lawyer before launch,
      especially given call recording and GDPR obligations.
    </p>
  );
}

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-muted">Last updated: {site.lastUpdated}</p>
      <div className="mt-10">{children}</div>
      <p className="mt-14 text-sm text-muted">
        Questions?{" "}
        <a href={`mailto:${site.email}`} className="underline underline-offset-4">
          {site.email}
        </a>
        {" · "}
        <Link href="/" className="underline underline-offset-4">
          Back home
        </Link>
      </p>
    </article>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl tracking-tight">{title}</h2>
      <div className="mt-4 space-y-3 leading-relaxed text-ink-soft">{children}</div>
    </section>
  );
}

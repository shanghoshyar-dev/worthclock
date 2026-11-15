import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <p className="eyebrow text-brass">404</p>
      <h1 className="font-display mt-4 text-4xl tracking-tight">
        This page isn&apos;t here.
      </h1>
      <p className="mt-4 text-ink-soft">
        The link may be outdated. Head back home and we&apos;ll get you sorted.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-md bg-copper px-6 py-3.5 font-semibold text-cream hover:bg-copper-hover"
      >
        Back to Worthclock
      </Link>
    </div>
  );
}

import type { Metadata } from "next";
import { RefundForm } from "./RefundForm";

export const metadata: Metadata = {
  title: "Request a Refund",
  description:
    "Request a refund under the WorthClock 5-hour guarantee. No login required.",
  robots: { index: false, follow: false },
};

export default function RefundRequestPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
        Request a Refund
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-ink-soft">
        If you&apos;ve implemented our recommendations in good faith and
        haven&apos;t reclaimed at least 5 hours per week within 30 days of
        receiving your report, tell us what happened below.
      </p>
      <div className="mt-10">
        <RefundForm />
      </div>
    </div>
  );
}

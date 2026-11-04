import type { Metadata } from "next";
import { Faq } from "@/components/Faq";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about WorthClock AI Tools Assessment for EU law firms: pricing, GDPR, confidentiality, and how it works.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="eyebrow text-brass">FAQ</p>
      <h1 className="font-display mt-4 text-4xl leading-tight tracking-tight sm:text-5xl">
        Frequently asked questions
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Practical answers about the AI Tools Assessment, confidentiality, and
        what to expect.
      </p>
      <div className="mt-12">
        <Faq />
      </div>
      <ButtonLink href="/book" className="mt-12">
        Book Your Assessment
      </ButtonLink>
    </div>
  );
}

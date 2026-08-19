import type { Metadata } from "next";
import { CalEmbed } from "@/components/CalEmbed";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Your Assessment",
  description: `Pick a time for your Worthclock AI Tools Assessment. Payment of ${site.price} is collected when you confirm your slot.`,
};

export default function BookPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="eyebrow text-brass">{site.entity}</p>
      <h1 className="font-display mt-4 text-4xl leading-tight tracking-tight sm:text-5xl">
        Book Your AI Tools Assessment
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Pick a time that works for you. Payment of {site.price} is collected as
        part of confirming your slot below, this secures your discovery call.
      </p>
      <div className="mt-10">
        <CalEmbed />
        <p className="mt-4 text-sm text-muted">
          You&apos;ll be asked for payment to confirm your booking.
        </p>
      </div>
    </div>
  );
}

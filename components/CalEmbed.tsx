import { site } from "@/lib/site";

export function CalEmbed() {
  if (!site.calEmbedUrl) {
    return (
      <div className="rounded-lg border border-dashed border-line bg-cream px-6 py-16 text-center">
        <p className="font-display text-xl text-ink">Booking calendar</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          Add your Cal.com embed URL to{" "}
          <code className="rounded bg-paper-2 px-1.5 py-0.5 text-[0.85em]">
            NEXT_PUBLIC_CAL_EMBED_URL
          </code>{" "}
          to show the scheduler with Stripe/PayPal payment here.
        </p>
      </div>
    );
  }

  return (
    <iframe
      src={site.calEmbedUrl}
      title="Book your AI Tools Assessment"
      className="h-[780px] w-full rounded-lg border border-line bg-cream"
    />
  );
}

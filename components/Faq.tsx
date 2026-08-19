import Link from "next/link";
import type { ReactNode } from "react";
import { faq } from "@/lib/site";

function Answer({ item }: { item: (typeof faq)[number] }) {
  if ("privacyLink" in item && item.privacyLink) {
    if (item.q.startsWith("How do you handle client confidentiality")) {
      return (
        <>
          All calls and data are handled under strict GDPR compliance. We never
          require access to privileged client files, our assessment is based on
          your workflows and tool usage, not case content. See our{" "}
          <Link
            href="/privacy"
            className="underline decoration-brass underline-offset-4 hover:text-ink"
          >
            Privacy Policy
          </Link>{" "}
          for full details.
        </>
      );
    }

    return (
      <>
        Yes. Your call is used only to generate your report and is handled under
        our privacy policy. See our{" "}
        <Link
          href="/privacy"
          className="underline decoration-brass underline-offset-4 hover:text-ink"
        >
          Privacy Policy
        </Link>{" "}
        for full details.
      </>
    );
  }

  return item.a as ReactNode;
}

export function Faq() {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faq.map((item) => (
        <details key={item.q} className="faq group">
          <summary className="flex cursor-pointer items-start justify-between gap-6 py-5 text-left">
            <h3 className="font-display text-lg leading-snug text-ink sm:text-xl">
              {item.q}
            </h3>
            <span
              className="faq-icon mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center text-2xl leading-none text-muted transition-transform"
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <p className="max-w-2xl pb-6 text-[1.02rem] leading-relaxed text-ink-soft">
            <Answer item={item} />
          </p>
        </details>
      ))}
    </div>
  );
}

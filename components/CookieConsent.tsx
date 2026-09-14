"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  applyAnalyticsConsent,
  CONSENT_REOPEN_EVENT,
  readConsentChoice,
  writeConsentChoice,
  type ConsentChoice,
} from "@/lib/consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sync = () => {
      setVisible(readConsentChoice() === null);
    };
    sync();
    window.addEventListener(CONSENT_REOPEN_EVENT, sync);
    return () => window.removeEventListener(CONSENT_REOPEN_EVENT, sync);
  }, []);

  function choose(choice: ConsentChoice) {
    writeConsentChoice(choice);
    applyAnalyticsConsent(choice === "granted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-line bg-cream/95 px-5 py-5 shadow-[0_-8px_32px_rgba(23,21,18,0.08)] backdrop-blur-sm sm:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <div className="max-w-2xl">
          <p
            id="cookie-consent-title"
            className="font-display text-lg text-ink sm:text-xl"
          >
            Analytics cookies
          </p>
          <p
            id="cookie-consent-desc"
            className="mt-1.5 text-sm leading-relaxed text-ink-soft"
          >
            We use Google Analytics to understand how this site is used. No ads.
            You can change this anytime in the footer. See our{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-ink"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold tracking-tight text-ink ring-1 ring-ink/20 transition-colors hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="inline-flex items-center justify-center rounded-md bg-copper px-5 py-2.5 text-sm font-semibold tracking-tight text-cream transition-colors hover:bg-copper-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

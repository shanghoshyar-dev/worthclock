"use client";

import { reopenConsentBanner } from "@/lib/consent";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => reopenConsentBanner()}
      className="hover:text-cream"
    >
      Cookie settings
    </button>
  );
}

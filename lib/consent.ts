export const CONSENT_STORAGE_KEY = "worthclock_cookie_consent";
export const CONSENT_REOPEN_EVENT = "worthclock:reopen-consent";

export type ConsentChoice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function readConsentChoice(): ConsentChoice | null {
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (value === "granted" || value === "denied") return value;
  } catch {
    /* ignore */
  }
  return null;
}

export function writeConsentChoice(choice: ConsentChoice) {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    /* ignore */
  }
}

export function applyAnalyticsConsent(granted: boolean) {
  if (typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export function reopenConsentBanner() {
  try {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    /* ignore */
  }
  applyAnalyticsConsent(false);
  window.dispatchEvent(new Event(CONSENT_REOPEN_EVENT));
}

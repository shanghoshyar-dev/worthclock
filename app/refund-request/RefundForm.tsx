"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const fieldClass =
  "mt-2 w-full rounded-md border border-line bg-cream px-3.5 py-3 text-ink outline-none transition-shadow focus:ring-2 focus:ring-copper/30";

const notifyEmail =
  process.env.NEXT_PUBLIC_REFUND_NOTIFY_EMAIL ?? site.email;

export function RefundForm() {
  const [pending, setPending] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const implemented = String(data.get("implemented") ?? "").trim();
    const results = String(data.get("results") ?? "").trim();
    const extra = String(data.get("extra") ?? "").trim();

    if (!name || !email || !implemented || !results) {
      setPending(false);
      setError("Please fill in all required fields.");
      return;
    }

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(notifyEmail)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            _replyto: email,
            _subject: `Refund request from ${name}`,
            _template: "table",
            _captcha: "false",
            implemented,
            results,
            notes: extra || "None",
          }),
        },
      );

      const payload = (await res.json().catch(() => null)) as {
        success?: string | boolean;
        message?: string;
      } | null;

      const success =
        payload?.success === true ||
        payload?.success === "true" ||
        (res.ok && payload?.success !== false && payload?.success !== "false");

      if (!success) {
        throw new Error(payload?.message || "Send failed");
      }

      setOk(true);
      form.reset();
    } catch {
      setError(
        `We couldn't send your request automatically. Please email ${notifyEmail} instead, or check that inbox for a FormSubmit activation link if this is the first submission.`,
      );
    } finally {
      setPending(false);
    }
  }

  if (ok) {
    return (
      <div className="rounded-lg border border-line bg-cream px-6 py-10">
        <p className="font-display text-2xl text-ink">Request received</p>
        <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">
          Thanks, we&apos;ve received your request. We&apos;ll review it and get
          back to you within {site.refundResponseDays} business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      {error ? (
        <p
          className="rounded-md border border-copper/30 bg-copper/10 px-4 py-3 text-sm text-copper"
          role="alert"
        >
          {error}
        </p>
      ) : null}

      <label className="block">
        <span className="text-sm font-medium text-ink">Name</span>
        <input name="name" required autoComplete="name" className={fieldClass} />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-ink">
          Email (used for the original booking)
        </span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-ink">
          Which recommendations did you implement?
        </span>
        <textarea name="implemented" required rows={5} className={fieldClass} />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-ink">What results did you see?</span>
        <textarea name="results" required rows={5} className={fieldClass} />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-ink">
          Anything else you&apos;d like us to know?{" "}
          <span className="font-normal text-muted">(optional)</span>
        </span>
        <textarea name="extra" rows={4} className={fieldClass} />
      </label>

      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex items-center justify-center rounded-md bg-copper px-6 py-3.5 text-[0.95rem] font-semibold text-cream transition-colors hover:bg-copper-hover disabled:opacity-60"
      >
        {pending ? "Sending…" : "Submit Refund Request"}
      </button>
    </form>
  );
}

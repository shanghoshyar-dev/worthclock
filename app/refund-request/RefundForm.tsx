"use client";

import { useActionState } from "react";
import { site } from "@/lib/site";
import { submitRefundRequest, type RefundState } from "./actions";

const initial: RefundState = { ok: false };

const fieldClass =
  "mt-2 w-full rounded-md border border-line bg-cream px-3.5 py-3 text-ink outline-none transition-shadow focus:ring-2 focus:ring-copper/30";

export function RefundForm() {
  const [state, action, pending] = useActionState(submitRefundRequest, initial);

  if (state.ok) {
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
    <form action={action} className="flex flex-col gap-5">
      {state.error ? (
        <p className="rounded-md border border-copper/30 bg-copper/10 px-4 py-3 text-sm text-copper" role="alert">
          {state.error}
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

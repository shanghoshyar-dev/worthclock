"use server";

import { site } from "@/lib/site";

export type RefundState = {
  ok: boolean;
  error?: string;
};

function asString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function submitRefundRequest(
  _prev: RefundState,
  formData: FormData,
): Promise<RefundState> {
  const name = asString(formData.get("name"));
  const email = asString(formData.get("email"));
  const implemented = asString(formData.get("implemented"));
  const results = asString(formData.get("results"));
  const extra = asString(formData.get("extra"));

  if (!name || !email || !implemented || !results) {
    return { ok: false, error: "Please fill in all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const to = process.env.REFUND_NOTIFY_EMAIL ?? site.email;
  const subject = `Refund request from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Which recommendations did you implement?",
    implemented,
    "",
    "What results did you see?",
    results,
    "",
    extra ? `Anything else:\n${extra}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Worthclock <${to}>`,
        to: [to],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!res.ok) {
      return {
        ok: false,
        error: `We couldn't send your request. Please email ${to} instead.`,
      };
    }

    return { ok: true };
  }

  // Works without an API key; first submit sends a confirmation link to `to`
  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      _replyto: email,
      _subject: subject,
      implemented,
      results,
      notes: extra || "None",
    }),
  });

  if (!res.ok) {
    return {
      ok: false,
      error: `We couldn't send your request. Please email ${to} instead.`,
    };
  }

  return { ok: true };
}

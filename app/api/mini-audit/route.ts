import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  questionsFor,
  type QuizVersion,
  type ResultCategory,
} from "@/lib/mini-audit";
import { getSupabaseAdmin } from "@/lib/supabase";
import { site } from "@/lib/site";

type Body = {
  email?: string;
  companyName?: string;
  version?: QuizVersion;
  answers?: Record<string, string>;
  resultCategory?: ResultCategory;
};

const validVersions = new Set<QuizVersion>(["law_firm", "general"]);
const validResults = new Set<ResultCategory>([
  "Early Stage",
  "In Progress",
  "Advanced but Exposed",
]);

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = body.email?.trim() ?? "";
  const companyName = body.companyName?.trim() ?? "";
  const version = body.version;
  const answers = body.answers ?? {};
  const resultCategory = body.resultCategory;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 400 },
    );
  }
  if (!companyName) {
    return NextResponse.json(
      { error: "Company name is required." },
      { status: 400 },
    );
  }
  if (!version || !validVersions.has(version)) {
    return NextResponse.json({ error: "Invalid quiz version." }, { status: 400 });
  }
  if (!resultCategory || !validResults.has(resultCategory)) {
    return NextResponse.json(
      { error: "Invalid result category." },
      { status: 400 },
    );
  }

  const expected = questionsFor(version);
  for (const q of expected) {
    if (!answers[q.id] || !q.options.includes(answers[q.id])) {
      return NextResponse.json(
        { error: "Incomplete or invalid quiz answers." },
        { status: 400 },
      );
    }
  }

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("mini_audit_leads").insert({
      email,
      company_name: companyName,
      version,
      answers,
      result_category: resultCategory,
    });

    if (error) {
      console.error("Supabase insert failed:", error);
      return NextResponse.json(
        { error: "Could not save your submission. Please try again." },
        { status: 500 },
      );
    }
  } catch (err) {
    console.error("Supabase error:", err);
    return NextResponse.json(
      {
        error:
          "Lead storage is not configured yet. Please email info@worthclock.com.",
      },
      { status: 500 },
    );
  }

  await sendLeadNotification({
    email,
    companyName,
    version,
    answers,
    resultCategory,
  });

  return NextResponse.json({ ok: true });
}

async function sendLeadNotification({
  email,
  companyName,
  version,
  answers,
  resultCategory,
}: {
  email: string;
  companyName: string;
  version: QuizVersion;
  answers: Record<string, string>;
  resultCategory: ResultCategory;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY missing; skipped mini-audit notification email.");
    return;
  }

  const questions = questionsFor(version);
  const answerLines = questions
    .map((q) => `• ${q.prompt}\n  → ${answers[q.id]}`)
    .join("\n\n");

  const versionLabel =
    version === "law_firm" ? "Law firm (Version A)" : "General business (Version B)";

  try {
    const resend = new Resend(apiKey);
    // Until worthclock.com is verified in Resend, testing mode only delivers
    // to the Resend account email. Prefer explicit notify env, then founder inbox.
    const notifyTo =
      process.env.MINI_AUDIT_NOTIFY_EMAIL ??
      site.refundCcEmail ??
      site.email;

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "WorthClock <onboarding@resend.dev>",
      to: [notifyTo],
      replyTo: email,
      subject: `Mini Audit lead: ${companyName} (${resultCategory})`,
      text: [
        "New Mini Audit submission",
        "",
        `Email: ${email}`,
        `Company: ${companyName}`,
        `Version: ${versionLabel}`,
        `Result: ${resultCategory}`,
        "",
        "Answers:",
        answerLines,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend notification failed:", error);
    }
  } catch (err) {
    // Lead is already stored; don't fail the user flow on email issues
    console.error("Resend notification failed:", err);
  }
}

import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

/**
 * Daily keep-alive for the Supabase free tier, which pauses projects after
 * 7 days without activity. Called by the Vercel Cron job in vercel.json.
 * Vercel sends "Authorization: Bearer <CRON_SECRET>" when CRON_SECRET is set.
 */
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  const auth = request.headers.get("authorization");

  if (secret && auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const supabase = getSupabaseAdmin();
    const { count, error } = await supabase
      .from("mini_audit_leads")
      .select("id", { count: "exact", head: true });

    if (error) {
      console.error("Keep-alive: Supabase query failed", error.message);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true, rows: count ?? 0 });
  } catch (err) {
    console.error("Keep-alive: unexpected error", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

import type { Metadata } from "next";
import { MiniAuditQuiz } from "@/components/MiniAuditQuiz";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = withCanonical("/mini-audit", {
  title: "Mini Audit: AI Readiness Check",
  description:
    "A short self-assessment of your firm's AI readiness. Find out where you stand on tools, policy, and workflow, then see a clear next step.",
});

export default function MiniAuditPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <MiniAuditQuiz />
    </div>
  );
}

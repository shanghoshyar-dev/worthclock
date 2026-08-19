import type { Metadata } from "next";
import Link from "next/link";
import { LegalDraftNotice, LegalLayout, LegalSection } from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the Worthclock AI Tools Assessment.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Worthclock Terms of Service">
      <LegalDraftNotice />

      <LegalSection title="The Service">
        <p>
          Worthclock provides a paid AI Tools Assessment consisting of a
          discovery call, AI-driven analysis, a written report, and a review
          call, for a one-time fee of {site.price}.
        </p>
      </LegalSection>

      <LegalSection title="The Guarantee">
        <p>
          If, after implementing our recommendations, you have not reclaimed at
          least 5 hours per week within 30 days of receiving your report, you
          are eligible for a full refund of the service fee, less any payment
          processing fees incurred on the original transaction, as outlined
          below.
        </p>
      </LegalSection>

      <LegalSection title="Refunds">
        <p>
          Refunds are only offered under the guarantee described above: if you
          have implemented our recommendations in good faith and have not
          reclaimed at least 5 hours per week within 30 days of receiving your
          report, you may request a refund. We do not offer refunds for general
          dissatisfaction with the report itself.
        </p>
        <p>
          To request a refund, visit our{" "}
          <Link href="/refund-request" className="underline underline-offset-4">
            Refund Request
          </Link>{" "}
          page and fill out the short form describing what you implemented and
          your results. Refund requests must be submitted within 30 days of
          receiving your report, along with reasonable evidence that
          recommendations were implemented in good faith. Approved refunds are
          issued to the original payment method.
        </p>
        <p>
          Please note: payment processors charge a non-refundable transaction
          fee on the original payment that is not returned to us when a refund
          is issued. This fee (typically a small percentage of the transaction)
          may be deducted from your refund amount.
        </p>
      </LegalSection>

      <LegalSection title="Recordings and Data Use">
        <p>
          By booking a discovery call, you consent to that call being recorded
          for the purpose of generating your report, as described in our{" "}
          <Link href="/privacy" className="underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <p>
          Worthclock provides recommendations based on the information shared
          during your discovery call. We are not liable for outcomes resulting
          from implementation decisions made independently by the client.
        </p>
      </LegalSection>

      <LegalSection title="Governing Law">
        <p>These terms are governed by the laws of Sweden.</p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Worthclock,{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

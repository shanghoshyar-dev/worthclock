import type { Metadata } from "next";
import { LegalDraftNotice, LegalLayout, LegalSection } from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Worthclock collects, uses, and retains your data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Worthclock Privacy Policy">
      <LegalDraftNotice />

      <LegalSection title="What we collect">
        <ul className="list-disc space-y-2 pl-5">
          <li>Contact information you provide when booking (name, email, company)</li>
          <li>Audio/video recordings of your discovery call</li>
          <li>
            Payment information (processed by Stripe, we do not store card details)
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="How we use it">
        <ul className="list-disc space-y-2 pl-5">
          <li>To conduct your AI Tools Assessment and generate your report</li>
          <li>To communicate with you about your booking and results</li>
          <li>We do not sell your data to third parties</li>
        </ul>
      </LegalSection>

      <LegalSection title="Data retention">
        <p>
          Call recordings are retained for {site.dataRetentionMonths} months and
          then deleted.
        </p>
        <p>
          You may request deletion of your data at any time by contacting{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Your rights (GDPR)">
        <ul className="list-disc space-y-2 pl-5">
          <li>You have the right to access, correct, or delete your personal data</li>
          <li>
            You have the right to withdraw consent to call recording before your
            session
          </li>
          <li>
            Contact us at{" "}
            <a href={`mailto:${site.email}`} className="underline underline-offset-4">
              {site.email}
            </a>{" "}
            to exercise these rights
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Third-party processors">
        <ul className="list-disc space-y-2 pl-5">
          <li>Stripe (payment processing)</li>
        </ul>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Worthclock, {site.companyRegistration},{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

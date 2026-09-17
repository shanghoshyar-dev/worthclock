import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How WorthClock collects, uses, and retains your data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="WorthClock Privacy Policy">
      <LegalSection title="What we collect">
        <ul className="list-disc space-y-2 pl-5">
          <li>Contact information you provide when booking (name, email, company)</li>
          <li>Audio/video recordings of your discovery call</li>
          <li>
            Payment information (processed by Stripe, we do not store card details)
          </li>
          <li>
            Website usage data via Google Analytics if you accept analytics
            cookies (pages viewed, approximate location, device/browser type)
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Cookies and analytics">
        <p>
          We use Google Analytics only after you accept analytics cookies. Ads
          and ad personalization storage stay denied. You can Accept or Reject in
          the banner, or change your choice later via Cookie settings in the
          footer.
        </p>
        <p>
          If you reject, we do not enable analytics storage for Google Analytics
          on your browser.
        </p>
      </LegalSection>

      <LegalSection title="How we use it">
        <ul className="list-disc space-y-2 pl-5">
          <li>To conduct your AI Tools Assessment and generate your report</li>
          <li>To communicate with you about your booking and results</li>
          <li>
            To understand how the website is used (only if you accept analytics
            cookies)
          </li>
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
            You can withdraw analytics cookie consent anytime via Cookie
            settings in the footer
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
          <li>Google Analytics (website analytics, only with your consent)</li>
        </ul>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          WorthClock,{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>
          ,{" "}
          <a href={`tel:${site.phone}`} className="underline underline-offset-4">
            {site.phoneDisplay}
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

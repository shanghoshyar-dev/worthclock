import Link from "next/link";
import type { CaseStudyFaq } from "@/lib/case-studies";
import {
  ArticleCta,
  ArticleFaq,
  ArticleSection,
  QuickAnswer,
  RelatedReading,
} from "@/components/blog/ArticleLayout";

export const polandCaseStudyFaqs: CaseStudyFaq[] = [
  {
    q: "How long did it take to see results?",
    a: "The new setup was running within a couple of days of starting implementation.",
  },
  {
    q: "How was the 6 hours measured?",
    a: "It is the firm's own estimate of time spent on emails and case reviews before and after the changes, not a figure from time tracking software.",
  },
  {
    q: "Did the firm need help setting it up?",
    a: "The firm set it up on its own. It found implementation the hardest part and said it wishes it had taken implementation support too.",
  },
  {
    q: "Does this only work for firms of this size?",
    a: "No. Emails and document review are time sinks in firms of every size. The specific tools differ, but the approach is the same.",
  },
  {
    q: "Is the firm named?",
    a: "The firm asked to stay anonymous, which is common in legal work. The details in this case are shared with their approval.",
  },
];

export function PolandCaseStudy() {
  return (
    <>
      <QuickAnswer>
        <p>
          A 17 person law firm in Poland saves an average of 6 hours per week
          after a Worthclock AI Tools Assessment. The firm made two changes. It
          automated routine email handling, and it started using an AI tool that
          reads through case files, highlights the important parts and summarises
          them. A lawyer still reviews every summary before relying on it.
        </p>
      </QuickAnswer>

      <ArticleSection title="The Situation">
        <p>
          Two tasks took up most of the firm&apos;s week, emails and case
          reviews. Both were necessary and both were slow, and they kept the
          lawyers away from the work that actually needed them.
        </p>
        <p>
          This is a common pattern. Most firms do not lose time on the legal
          work itself. They lose it on everything around it.
        </p>
      </ArticleSection>

      <ArticleSection title="What We Found">
        <p>
          In a 45 minute assessment we mapped where the hours actually went. Two
          areas stood out.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          Incoming emails
        </h3>
        <p>
          A large share of the firm&apos;s emails were routine inquiries and
          follow ups that followed the same pattern every time, yet each one was
          handled manually.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          Case reviews
        </h3>
        <p>
          Lawyers were reading through full case files to find the parts that
          mattered before they could start the actual analysis.
        </p>
      </ArticleSection>

      <ArticleSection title="What Changed">
        <p>
          The firm made two focused changes instead of rolling out a long list
          of tools.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          Automated email handling
        </h3>
        <p>
          Routine emails are now handled through an automated setup, so standard
          inquiries and follow ups no longer need manual attention. The lawyers
          only step in when an email needs their judgement.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          AI assisted case review
        </h3>
        <p>
          Case reviews now start with an AI tool that reads through the case,
          highlights the important parts and summarises everything. A lawyer
          reviews the summary before relying on it, so nothing leaves the firm
          unchecked.
        </p>
      </ArticleSection>

      <ArticleSection title="How Long Did It Take?">
        <p>
          The new setup was up and running within a couple of days. The firm
          said the implementation itself was the hardest part, and that in
          hindsight it wishes it had taken Worthclock&apos;s implementation
          support as well, rather than setting everything up on its own. Once in
          place, the setup has worked without further changes.
        </p>
      </ArticleSection>

      <ArticleSection title="The Result">
        <p>
          The firm now saves around <strong>6 hours per week</strong>, mainly on
          email handling and case reviews.
        </p>
      </ArticleSection>

      <ArticleSection title="How Was the Time Saving Measured?">
        <p>
          The figure of around 6 hours per week is the firm&apos;s own estimate,
          based on the time its people spent on emails and case reviews before
          and after the changes. It was not measured with time tracking
          software. We share it as the firm reported it.
        </p>
        <blockquote className="mt-2 border-l-2 border-copper pl-5 text-[1.05rem] leading-relaxed text-ink-soft">
          <p>
            &ldquo;Emails and case reviews were taking up most of our week. Now
            our emails are handled automatically and the case review tool pulls
            out what matters and summarises it for us. We save around six hours
            a week.&rdquo;
          </p>
          <footer className="mt-3 text-sm text-muted">
            Managing partner, 17 person law firm in Poland
          </footer>
        </blockquote>
      </ArticleSection>

      <ArticleSection title="What Other Firms Can Take From This">
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Start with where the time goes, not with the tool.</strong>{" "}
            The firm did not need more software. It needed to know which two
            tasks were costing the most.
          </li>
          <li>
            <strong>Two changes can be enough.</strong> Focusing on the biggest
            time sinks gave a measurable result without disrupting the rest of
            the firm.
          </li>
          <li>
            <strong>Keep a review step.</strong> AI handles the first pass. A
            lawyer still checks the output before it is used.
          </li>
          <li>
            <strong>Plan for implementation.</strong> Choosing the right tools
            is half the job. Setting them up properly is the part firms most
            often underestimate.
          </li>
        </ul>
      </ArticleSection>

      <ArticleFaq faqs={polandCaseStudyFaqs} />

      <RelatedReading
        slugs={[
          "how-to-measure-whether-ai-is-actually-saving-your-law-firm-time",
          "how-many-hours-per-week-does-ai-really-save-a-lawyer",
          "does-your-law-firm-have-an-ai-strategy",
        ]}
      />

      <ArticleCta>
        <p>
          The firm did not save time by adopting more AI. It saved time by
          finding the two tasks that cost the most and fixing those first.
        </p>
        <p>
          Want to know which tasks are costing your firm the most hours? Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          maps that in a single call, and we guarantee at least 5 hours saved
          per week.
        </p>
      </ArticleCta>
    </>
  );
}

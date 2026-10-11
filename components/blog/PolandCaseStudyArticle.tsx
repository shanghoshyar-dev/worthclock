import Link from "next/link";
import type { BlogFaq } from "@/lib/blog";
import { relatedBySlug } from "@/lib/blog";
import {
  ArticleCta,
  ArticleFaq,
  ArticleSection,
  QuickAnswer,
  RelatedReading,
  blogInlineLinkClass,
} from "@/components/blog/ArticleLayout";

export const polandCaseStudyFaqs: BlogFaq[] = [
  {
    q: "How long did it take to see results?",
    a: "The changes were introduced right after the assessment, and the time savings were measured over the following weeks.",
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

export function PolandCaseStudyArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          A 17 person law firm in Poland saves an average of 6 hours per week
          after a WorthClock AI Tools Assessment. The firm made two changes. It
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
          This is a common pattern. Most firms do not lose time on the legal work
          itself. They lose it on everything around it, the same kind of{" "}
          <Link
            href="/blog/how-many-hours-per-week-does-ai-really-save-a-lawyer"
            className={blogInlineLinkClass}
          >
            individual time sinks
          </Link>{" "}
          that rarely show up as a firm level result until someone maps them.
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
          The firm made two focused changes instead of rolling out a long list of
          tools, which is the opposite of buying first and measuring later, see{" "}
          <Link
            href="/blog/how-to-measure-whether-ai-is-actually-saving-your-law-firm-time"
            className={blogInlineLinkClass}
          >
            how to measure whether AI is actually saving time
          </Link>
          .
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
          unchecked. The same first pass, human review pattern that shows up in{" "}
          <Link
            href="/blog/ai-contract-review-how-much-time-can-it-actually-save"
            className={blogInlineLinkClass}
          >
            AI contract review
          </Link>
          .
        </p>
      </ArticleSection>

      <ArticleSection title="The Result">
        <p>
          The firm now saves an average of 6 hours per week, mainly on email
          handling and case reviews.
        </p>
        <blockquote className="mt-2 border-l-2 border-copper pl-5 text-[1.05rem] leading-relaxed text-ink-soft">
          <p>
            &ldquo;Emails and case reviews were taking up most of our week. Now
            our emails are handled automatically and the case review tool pulls
            out what matters and summarises it for us. We save around six hours a
            week.&rdquo;
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
            tasks were costing the most, the core of a real{" "}
            <Link
              href="/blog/does-your-law-firm-have-an-ai-strategy"
              className={blogInlineLinkClass}
            >
              AI strategy
            </Link>
            .
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
        </ul>
      </ArticleSection>

      <ArticleFaq faqs={polandCaseStudyFaqs} />

      <RelatedReading
        slugs={
          relatedBySlug[
            "how-a-17-person-law-firm-in-poland-saved-6-hours-a-week-with-ai"
          ]
        }
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
          maps that in a single call, and we guarantee at least 5 hours saved per
          week.
        </p>
      </ArticleCta>
    </>
  );
}

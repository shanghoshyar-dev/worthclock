import Link from "next/link";
import type { CaseStudyFaq } from "@/lib/case-studies";
import {
  ArticleCta,
  ArticleFaq,
  ArticleSection,
  QuickAnswer,
  RelatedReading,
} from "@/components/blog/ArticleLayout";

export const denmarkCaseStudyFaqs: CaseStudyFaq[] = [
  {
    q: "How long did it take to get fully up and running?",
    a: "About 45 days. The firm introduced the changes step by step around its client work, because the team was busy.",
  },
  {
    q: "How was the 6 to 7 hours measured?",
    a: "It is the firm's own estimate of around 45 minutes saved per employee per week across its 9 people, not a figure from time tracking software.",
  },
  {
    q: "Which tasks saved the most time?",
    a: "Email, case reviews, and creating and sending invoices.",
  },
  {
    q: "Did the firm need to learn about GDPR?",
    a: "Yes. Understanding how AI tools handle data under GDPR was a key part of the work and what made the team comfortable using the tools.",
  },
  {
    q: "Did the firm need help setting it up?",
    a: "No. The firm implemented the plan on its own, without Worthclock's implementation support.",
  },
  {
    q: "Is the firm named?",
    a: "The firm asked to stay anonymous, which is common in legal work. The details in this case are shared with their approval.",
  },
];

const h3 = "font-display text-xl tracking-tight text-ink";

export function DenmarkCaseStudy() {
  return (
    <>
      <QuickAnswer>
        <p>
          A 9 person law firm in Denmark saves 6 to 7 hours per week after a
          Worthclock AI Tools Assessment. The firm brought AI into four time
          consuming tasks: email, case reviews, creating invoices and sending
          invoices. Just as important, its people learned how AI and GDPR fit
          together, so they can use the tools with confidence. The firm was
          fully up and running in about 45 days.
        </p>
      </QuickAnswer>

      <ArticleSection title="The Situation">
        <p>The firm was losing time in two ways.</p>
        <p>
          The first was routine work. Emails, case reviews and invoicing took up
          hours every week. All of it was necessary, but much of it did not need
          a lawyer&apos;s judgement.
        </p>
        <p>
          The second was uncertainty. The team knew AI could help, but did not
          feel it knew enough about it, especially about GDPR and what client
          information can safely go where. Without that knowledge, holding back
          felt safer than getting started.
        </p>
      </ArticleSection>

      <ArticleSection title="What We Found">
        <p>
          In the assessment we mapped where the hours actually went. Four tasks
          stood out.
        </p>
        <h3 className={h3}>Email</h3>
        <p>A large share of incoming email followed the same patterns.</p>
        <h3 className={h3}>Case reviews</h3>
        <p>
          Every case was reviewed before it moved on to the next stage, and
          reading through the material to find what mattered took longer than it
          needed to.
        </p>
        <h3 className={h3}>Creating and sending invoices</h3>
        <p>
          Invoices were put together by hand, then sent and followed up
          manually.
        </p>
        <h3 className={h3}>A knowledge gap</h3>
        <p>
          The firm needed a clear understanding of how AI tools handle data,
          what GDPR requires and where the real risks are, before it would feel
          comfortable relying on any tool.
        </p>
      </ArticleSection>

      <ArticleSection title="What Changed">
        <p>The firm made changes in two areas.</p>
        <h3 className={h3}>AI in everyday tasks</h3>
        <p>
          Email, case reviews and invoicing are now supported by tools chosen
          for this firm&apos;s workflows and checked for data protection and
          confidentiality. Case reviews start with an AI first pass, and a
          lawyer still checks every case before it moves on.
        </p>
        <h3 className={h3}>Knowledge</h3>
        <p>
          The team learned how AI tools process data, what GDPR means for their
          use of AI and how to avoid common mistakes. That knowledge is what
          makes the tools usable in practice.
        </p>
      </ArticleSection>

      <ArticleSection title="How Long Did It Take?">
        <p>
          The firm was fully up and running in about 45 days. It implemented the
          plan on its own, without implementation support. The setup itself was
          not the hard part. Like most law firms, the team was busy with client
          work, so the changes were introduced step by step around it.
        </p>
      </ArticleSection>

      <ArticleSection title="The Result">
        <p>
          The firm now saves around <strong>6 to 7 hours per week</strong>,
          mainly on email, case reviews and invoicing. Its people also
          understand AI and GDPR well enough to make their own decisions about
          new tools.
        </p>
      </ArticleSection>

      <ArticleSection title="How Was the Time Saving Measured?">
        <p>
          The figure is the firm&apos;s own estimate. It reckons each of its 9
          employees saves around 45 minutes per week, which adds up to roughly 6
          to 7 hours across the firm. It was not measured with time tracking
          software. We share it as the firm reported it.
        </p>
        <blockquote className="mt-2 border-l-2 border-copper pl-5 text-[1.05rem] leading-relaxed text-ink-soft">
          <p>
            &ldquo;It&apos;s better to be prepared and know AI properly, so you
            don&apos;t make a misstep.&rdquo;
          </p>
          <footer className="mt-3 text-sm text-muted">
            9 person law firm in Denmark
          </footer>
        </blockquote>
      </ArticleSection>

      <ArticleSection title="What Other Firms Can Take From This">
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Knowledge comes first.</strong> A tool nobody trusts will
            not be used. Understanding AI and GDPR is what made this firm
            comfortable relying on it.
          </li>
          <li>
            <strong>Admin is often the biggest win.</strong> Invoicing and email
            are not legal work, but they take real hours.
          </li>
          <li>
            <strong>Small savings per person add up.</strong> 45 minutes a week
            each sounds modest, but across 9 people it is almost a full working
            day.
          </li>
          <li>
            <strong>Busy firms can still do it.</strong> Introducing changes
            step by step made it work around client deadlines.
          </li>
        </ul>
      </ArticleSection>

      <ArticleFaq faqs={denmarkCaseStudyFaqs} />

      <RelatedReading
        slugs={[
          "gdpr-legal-ai-when-is-a-dpia-required",
          "ai-policy-small-law-firm",
          "how-to-measure-whether-ai-is-actually-saving-your-law-firm-time",
        ]}
      />

      <ArticleCta>
        <p>
          The firm did not just save time. It built the knowledge to use AI
          safely, and that is what turned a few new tools into 6 to 7 hours
          saved every week.
        </p>
        <p>
          Want to know where your firm is losing time, and how to use AI without
          risking a misstep? Our{" "}
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

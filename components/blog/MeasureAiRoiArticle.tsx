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

export const measureAiRoiFaqs: BlogFaq[] = [
  {
    q: "Can a small firm realistically measure AI ROI?",
    a: "Yes. Small firms are often better placed than large ones, because there are fewer people and fewer workflows to track. A baseline estimate and a follow up check a few weeks later is enough to see whether time is coming back.",
  },
  {
    q: "What if we bill by the hour and AI reduces billable time?",
    a: "That is a pricing question, not a reason to avoid measuring. Knowing exactly how much time a task now takes is what makes it possible to move that work to fixed fees or reinvest the hours elsewhere.",
  },
  {
    q: "How long before results should show up?",
    a: "For focused workflows like intake or first pass review, a difference is usually visible within a few weeks. If nothing has changed after a month, the tool, the workflow or the way it is being used needs another look.",
  },
];

export function MeasureAiRoiArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          Most legal organizations that use AI do not measure whether it pays
          off. Only 18% of respondents in Thomson Reuters&apos; 2026 AI in
          Professional Services Report said their organization collects ROI
          metrics around AI. Among in-house legal teams, Axiom&apos;s 2026
          research found that just 17% track AI ROI regularly with established
          metrics, while 51% track it inconsistently. A firm does not need a
          complex framework to fix this. It needs a baseline of how long key
          tasks take today, a short list of workflows to track, and a check after
          a few weeks to see whether the hours actually came back.
        </p>
      </QuickAnswer>

      <ArticleSection title="The Measurement Gap in Numbers">
        <p>
          Adoption has moved quickly. Measurement has not kept up.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          Few organizations collect ROI data at all
        </h3>
        <p>
          Thomson Reuters&apos; 2026 AI in Professional Services Report found
          that 18% of respondents said their organization collects ROI metrics
          around AI. A larger share said they do not, or did not know.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          Most tracking is informal
        </h3>
        <p>
          Axiom&apos;s 2026 In-House Legal AI Report, which surveyed corporate
          legal teams, found that 17% have established metrics and track AI ROI
          regularly. Another 51% track it, but inconsistently and without a
          formal framework. 29% are still developing an approach.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          Teams regret not starting earlier
        </h3>
        <p>
          In the same Axiom research, 39% named difficulty measuring and
          demonstrating ROI as one of the main barriers to getting more value
          from AI, and 37% said better measurement from the start is what they
          would do differently.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          Savings rarely change how firms price
        </h3>
        <p>
          Clio&apos;s 2026 Legal Trends Report for Solo and Small Law Firms found
          that 86% of solo firms and 78% of small firms have not changed their
          pricing to reflect AI use. Around a third (32% of solo firms, 31% of
          small firms) report a revenue increase tied to AI. That sits next to
          the question of{" "}
          <Link
            href="/blog/why-ai-wont-reduce-your-firms-billable-hours"
            className={blogInlineLinkClass}
          >
            what happens to billable hours
          </Link>{" "}
          when tasks get faster.
        </p>
      </ArticleSection>

      <ArticleSection title="Why Measuring Matters More Than Buying">
        <p>Without measurement, three things tend to happen.</p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          Budgets grow on faith.
        </h3>
        <p>
          Axiom reports that every in-house team already using AI expects its AI
          budget to grow next cycle. If nobody can show what the current tools
          deliver, the next purchase is a guess too.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          Savings stay invisible.
        </h3>
        <p>
          A lawyer who saves four hours a week on review rarely writes that
          down. The firm sees the license cost every month and never sees the
          benefit, which is why{" "}
          <Link
            href="/blog/how-many-hours-per-week-does-ai-really-save-a-lawyer"
            className={blogInlineLinkClass}
          >
            individual time savings
          </Link>{" "}
          often never show up as a firm result.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          Bad tools survive.
        </h3>
        <p>
          A tool that nobody uses, or that creates rework, can stay on the
          invoice for years if no one checks. That is exactly what a deliberate{" "}
          <Link
            href="/blog/does-your-law-firm-have-an-ai-strategy"
            className={blogInlineLinkClass}
          >
            AI strategy
          </Link>{" "}
          is meant to prevent.
        </p>
      </ArticleSection>

      <ArticleSection title="What Is Worth Measuring">
        <p>
          The most useful metrics for a law firm are simple and close to the
          work:
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Time per task</strong> for the specific workflows where AI is
            used, such as first pass{" "}
            <Link
              href="/blog/ai-contract-review-how-much-time-can-it-actually-save"
              className={blogInlineLinkClass}
            >
              contract review
            </Link>
            ,{" "}
            <Link
              href="/blog/ai-legal-research-how-much-time-are-firms-actually-saving"
              className={blogInlineLinkClass}
            >
              research
            </Link>{" "}
            memos, intake responses or standard correspondence
          </li>
          <li>
            <strong>Rework</strong> caused by AI output, meaning how often a
            draft or research result has to be corrected or redone
          </li>
          <li>
            <strong>Adoption</strong>, meaning how many people actually use the
            approved tools each week
          </li>
          <li>
            <strong>Response time</strong> to new client inquiries, if intake is
            part of the setup
          </li>
          <li>
            <strong>Cost of tools</strong> against the hours they return
          </li>
        </ul>
        <p>
          Axiom&apos;s data shows that legal teams most often track quality and
          error reduction (58%), while user adoption (23%) is among the least
          tracked. That is a blind spot. A tool nobody opens saves nothing,
          however good it is.
        </p>
      </ArticleSection>

      <ArticleSection title="A Simple Way to Start">
        <p>
          You do not need a dashboard or a consultant&apos;s framework. A small
          firm can get a reliable picture in a few weeks.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          1. Pick two or three workflows
        </h3>
        <p>
          Choose the tasks where the firm loses the most time. Clio&apos;s
          research on UK and Australian lawyers found that 50% and 60%
          respectively lose six or more hours a week to inefficient systems, so
          the candidates are usually obvious once someone asks.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          2. Record a baseline
        </h3>
        <p>
          Before changing anything, note roughly how long each task takes today.
          An estimate from the people doing the work is enough.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          3. Introduce one change per workflow
        </h3>
        <p>
          Add the tool or process change, with a clear rule for reviewing the
          output before it leaves the firm. The same{" "}
          <Link
            href="/blog/5-questions-to-ask-before-adopting-any-legal-ai-tool"
            className={blogInlineLinkClass}
          >
            diligence questions before adopting a tool
          </Link>{" "}
          apply here.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          4. Check again after two to four weeks
        </h3>
        <p>
          Compare time per task, count the rework, and ask who is actually using
          it. Keep what works. Drop what does not.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          5. Decide what to do with the hours
        </h3>
        <p>
          Saved time only becomes value if it goes somewhere: more matters,
          faster turnaround, or less overtime. Make that decision on purpose.
        </p>
      </ArticleSection>

      <ArticleFaq faqs={measureAiRoiFaqs} />

      <RelatedReading
        slugs={
          relatedBySlug[
            "how-to-measure-whether-ai-is-actually-saving-your-law-firm-time"
          ]
        }
      />

      <ArticleCta>
        <p>
          Most legal organizations are using AI without knowing whether it
          works. The firms that get real value are not the ones with the most
          tools. They are the ones that decided which workflows to target, wrote
          down how long those tasks took, and checked whether the time actually
          came back.
        </p>
        <p>
          Want to know which workflows in your firm would return the most hours,
          and how to track it from day one? Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          maps that in a single call.
        </p>
      </ArticleCta>

      <ArticleSection title="Sources">
        <ul className="list-disc space-y-3 pl-5">
          <li>
            Thomson Reuters, 2026 AI in Professional Services Report, as
            summarized by the{" "}
            <a
              href="https://www.ncbar.org/nc-lawyer/2026-05/by-the-numbers-what-surveys-show-about-law-firm-ai-adoption/"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              North Carolina Bar Association
            </a>
          </li>
          <li>
            Clio, 2026 Legal Trends Report for Solo and Small Law Firms, as
            summarized by the{" "}
            <a
              href="https://www.ncbar.org/nc-lawyer/2026-05/by-the-numbers-what-surveys-show-about-law-firm-ai-adoption/"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              North Carolina Bar Association
            </a>
          </li>
          <li>
            Clio, The State of Legal Tech Report: UK and Australia, as summarized
            in the same article
          </li>
          <li>
            Axiom, 2026 In-House Legal AI Report, via{" "}
            <a
              href="https://www.axiomlaw.com/blog/legal-ai-roi-mirage"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              Legal AI&apos;s ROI Mirage
            </a>
          </li>
          <li>
            Legal 500,{" "}
            <a
              href="https://www.legal500.com/intelligence/united-kingdom/strategy/how-the-top-seven-percent-of-legal-teams-prove-ai-roi"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              How The Top Seven Percent Of Legal Teams Prove AI ROI
            </a>
          </li>
        </ul>
      </ArticleSection>
    </>
  );
}

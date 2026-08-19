import Link from "next/link";
import type { BlogFaq } from "@/lib/blog";
import {
  ArticleCta,
  ArticleFaq,
  ArticleSection,
  QuickAnswer,
} from "@/components/blog/ArticleLayout";

export const billableHoursFaqs: BlogFaq[] = [
  {
    q: "Will junior lawyers be affected the most?",
    a: "Entry level roles are likely to shift in nature rather than disappear entirely in the near term, with more emphasis on review and judgment even early in a career, and less on pure drafting volume.",
  },
  {
    q: "Should firms lower their rates because AI makes tasks faster?",
    a: "Not necessarily. The stronger position is reallocating the time saved toward higher value work for the same engagement, rather than simply discounting the same work.",
  },
  {
    q: "How soon will clients notice if a firm hasn't adapted?",
    a: "Sophisticated clients are already starting to notice and reward firms that use AI to improve consistency and quality, which means firms that haven't adapted are likely to feel the gap sooner rather than later.",
  },
];

export function BillableHoursArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          AI is unlikely to reduce total attorney hours in the way many fear.
          Similar shifts in other professions, like online symptom checkers not
          reducing demand for doctors, suggest the same pattern will hold in
          law. What actually changes is the type of work those hours go toward:
          less time on routine drafting and research, more time on judgment,
          strategy, and higher value work. Firms that plan around that shift
          come out ahead. Firms that don&apos;t risk compressing their margins
          while doing the same work faster for the same price.
        </p>
      </QuickAnswer>

      <ArticleSection title="The Fear Versus the Likely Reality">
        <p>
          The common worry is straightforward: if AI can draft a document or
          summarize a case in minutes instead of hours, won&apos;t firms simply
          need fewer billable hours, and therefore make less money?
        </p>
        <p>
          The more likely outcome, based on how similar shifts have played out
          in other fields, is different. Increased AI adoption in the legal
          space is expected to shift focus toward quality professionals
          producing high value work, rather than simply reducing total hours
          worked. The comparison often used: search engines didn&apos;t
          eliminate the need for doctors after patients started researching
          symptoms online, they changed what patients came in already knowing,
          and what the doctor&apos;s time was actually spent on.
        </p>
      </ArticleSection>

      <ArticleSection title="What Actually Shifts">
        <p>
          <strong className="font-semibold text-ink">
            From drafting to reviewing.
          </strong>{" "}
          Attorneys using AI for first drafts increasingly describe their own
          role shifting from initial drafting to reviewing and refining, often
          while billing at a higher rate for that higher level work.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            From routine tasks to judgment calls.
          </strong>{" "}
          Legal revenue still overwhelmingly comes from hourly billing today,
          even as AI reduces time needed for individual tasks. The tasks that
          remain, and grow in relative importance, are the ones requiring
          actual legal judgment rather than production of documents.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            From volume to differentiation.
          </strong>{" "}
          As AI makes routine output faster and cheaper across the industry, the
          firms that stand out won&apos;t be the ones simply producing more,
          they&apos;ll be the ones using the time savings to deliver more
          thorough, higher quality work on the things that matter most to a
          client&apos;s outcome.
        </p>
      </ArticleSection>

      <ArticleSection title="The Real Risk for Firms That Ignore This">
        <p>
          The genuine risk isn&apos;t fewer billable hours, it&apos;s continuing
          to bill the old way for work that now takes a fraction of the time.
          Nearly 60% of in house counsel report no noticeable savings yet from
          their outside counsel&apos;s AI use, largely because firms are
          compressing task time without adjusting pricing or reallocating that
          time to higher value work. That&apos;s a firm absorbing the
          productivity gain without passing any benefit to the client or
          capturing new value for itself.
        </p>
      </ArticleSection>

      <ArticleSection title="What This Means Practically">
        <ul className="list-disc space-y-3 pl-5">
          <li>
            Track where AI is actually saving time within specific workflows, not
            just whether a tool is being used
          </li>
          <li>
            Reallocate saved time deliberately toward higher value work, rather
            than letting it disappear into the same routine
          </li>
          <li>
            Be prepared to have a real conversation with clients about how AI
            adoption affects pricing and value, rather than avoiding the topic
          </li>
          <li>
            Treat AI literacy as a growing expectation from sophisticated
            clients, not an optional extra
          </li>
        </ul>
      </ArticleSection>

      <ArticleFaq faqs={billableHoursFaqs} />

      <ArticleCta>
        <p>
          AI isn&apos;t likely to shrink the legal profession&apos;s hours.
          It&apos;s likely to reshape what those hours are spent on. Firms that
          plan for that shift, rather than just adopting tools reactively, are
          the ones positioned to benefit from it.
        </p>
        <p>
          Not sure where your firm&apos;s time is really going, or where AI could
          free up hours for higher value work? Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          maps that out clearly.
        </p>
      </ArticleCta>
    </>
  );
}

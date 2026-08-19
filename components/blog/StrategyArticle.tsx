import Link from "next/link";
import type { BlogFaq } from "@/lib/blog";
import {
  ArticleCta,
  ArticleFaq,
  ArticleSection,
  QuickAnswer,
} from "@/components/blog/ArticleLayout";

export const strategyFaqs: BlogFaq[] = [
  {
    q: "Do we need a dedicated AI or innovation officer to have a strategy?",
    a: "No, that's useful at scale but not required to start. A clear, written set of answers to the questions above is a real strategy even without a dedicated role behind it.",
  },
  {
    q: "We already use a few AI tools, does that count as a strategy?",
    a: "Using tools isn't the same as having a strategy. A strategy means those tools were chosen deliberately, based on where they actually help, with a plan for data handling and measuring results. Ad hoc usage, even widespread, isn't the same thing.",
  },
  {
    q: "Where should a small or mid sized firm start?",
    a: "Start with an honest look at where time actually goes each week, not where you assume it goes. That's usually where the clearest first wins are.",
  },
];

export function StrategyArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          41% of law firms now report active use of generative AI, up sharply
          from the year before. But only 22% have a visible AI strategy in
          place. That gap, using AI without a plan, is where firms lose ground:
          inconsistent adoption, wasted tool spending, and unmanaged
          confidentiality risk. Closing it doesn&apos;t require a big
          transformation project, it starts with a clear assessment of where AI
          actually fits your firm&apos;s workflows.
        </p>
      </QuickAnswer>

      <ArticleSection title="Why This Gap Exists">
        <p>
          Most firms didn&apos;t set out to adopt AI without a strategy. It
          happened gradually. A few lawyers started using a chatbot for
          drafting. Someone tried a research tool. A partner heard about a
          contract review platform at a conference. None of it was coordinated,
          and none of it was evaluated against the firm&apos;s actual needs.
        </p>
        <p>
          The result is common across the industry: firms with real AI usage but
          no framework for deciding what to adopt next, how to measure whether
          it&apos;s working, or how to keep it safe.
        </p>
      </ArticleSection>

      <ArticleSection title='What "No Strategy" Actually Costs'>
        <p>
          <strong className="font-semibold text-ink">
            Inconsistent results across the firm.
          </strong>{" "}
          When adoption is left to individual initiative, some lawyers save real
          time while others get no benefit at all, often from the exact same
          tools used differently.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            Wasted subscription spend.
          </strong>{" "}
          Firms end up paying for multiple overlapping tools that were each
          adopted independently, rather than one well chosen stack.
        </p>
        <p>
          <strong className="font-semibold text-ink">Unmanaged risk.</strong>{" "}
          Without a strategy, there&apos;s usually no consistent policy on what
          data can go into which tools, which is exactly how confidentiality
          incidents happen.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            Missed competitive ground.
          </strong>{" "}
          Firms that have moved from ad hoc usage to a real strategy are already
          compressing the time routine work takes and reallocating that time to
          higher value work. Firms without a strategy are standing still while
          that gap widens.
        </p>
      </ArticleSection>

      <ArticleSection title="What a Basic AI Strategy Actually Includes">
        <p>
          It doesn&apos;t need to be a large transformation initiative. At
          minimum, a working strategy answers:
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            Which specific workflows in the firm actually benefit from AI, based
            on where time is really going, not assumption
          </li>
          <li>
            Which tools are approved for use, and which categories of data can
            never go into them
          </li>
          <li>
            Who owns the decision to adopt a new tool, rather than leaving it to
            whoever tries something first
          </li>
          <li>
            How results get measured, so the firm knows if a tool is actually
            saving time or just adding noise
          </li>
          <li>
            A basic review habit for AI generated work before it reaches a client
            or a filing
          </li>
        </ul>
      </ArticleSection>

      <ArticleFaq faqs={strategyFaqs} />

      <ArticleCta>
        <p>
          Most firms aren&apos;t behind on AI adoption anymore, they&apos;re
          behind on AI strategy. Closing that gap is what separates firms getting
          real time savings from firms paying for tools that never quite deliver.
        </p>
        <p>
          Not sure where your firm&apos;s biggest AI opportunities actually are?
          Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          maps your workflows and gives you a concrete, prioritized plan instead
          of a guess.
        </p>
      </ArticleCta>
    </>
  );
}

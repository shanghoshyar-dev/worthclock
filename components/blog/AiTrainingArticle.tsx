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

export const aiTrainingFaqs: BlogFaq[] = [
  {
    q: "Is this only relevant for large firms with resources for formal training programs?",
    a: "No, the training gap is documented across firms of all sizes, and a short, focused session covering the essentials is achievable without a large program or dedicated budget.",
  },
  {
    q: "If our lawyers are already using AI carefully on their own, do we still need formal training?",
    a: "Individual carefulness varies, and without any firm standard, there's no way to know how consistent that carefulness actually is across the team. Training closes that consistency gap, even for lawyers already being cautious.",
  },
  {
    q: "Does training reduce the productivity gains from AI, by slowing adoption down?",
    a: "The opposite tends to be true. Firms report that inadequate training is itself a barrier to realizing AI's productivity benefits, uncertainty about proper use often makes lawyers more hesitant to use tools effectively, not less.",
  },
];

export function AiTrainingArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          69% of legal professionals now use generative AI for work, more than
          double the 31% reported the year before. Yet 54% of firms provide no
          training on responsible AI use and have no plans to start. The result
          is a firm where AI adoption is running well ahead of any actual
          guidance on how to use it safely, which is a training gap, not a
          technology gap, and it&apos;s fixable without a large program.
        </p>
      </QuickAnswer>

      <ArticleSection title="The Numbers Tell Two Different Stories">
        <p>
          Individual lawyers have embraced AI faster than almost anyone
          predicted. Adoption more than doubled in a single year, and the tools
          have moved well beyond novelty use. Lawyers now regularly use
          generative AI for drafting correspondence, general research,
          brainstorming, and summarizing documents, tasks that make up a
          meaningful share of daily legal work.
        </p>
        <p>
          At the firm level, the picture looks completely different. More than
          half of firms haven&apos;t provided any training on responsible AI
          use, and have no plans to. That&apos;s not a small oversight. It means
          a majority of firms have lawyers actively using AI on client matters
          with no firm-level guidance on what&apos;s safe, what&apos;s not, or
          what good practice even looks like, the same{" "}
          <Link
            href="/blog/does-your-law-firm-have-an-ai-strategy"
            className={blogInlineLinkClass}
          >
            strategy gap between usage and governance
          </Link>{" "}
          showing up as a training gap too.
        </p>
      </ArticleSection>

      <ArticleSection title="Why This Gap Is the Actual Risk">
        <p>
          It&apos;s tempting to think the risk here is AI itself,{" "}
          <Link
            href="/blog/ai-hallucinations-in-legal-filings"
            className={blogInlineLinkClass}
          >
            hallucinated citations
          </Link>
          ,{" "}
          <Link
            href="/blog/is-it-safe-to-use-ai-with-privileged-client-information"
            className={blogInlineLinkClass}
          >
            data exposure
          </Link>
          , inaccurate output. Those are real risks, covered elsewhere. But the
          deeper issue is that individual adoption without training means every
          lawyer is independently deciding what&apos;s acceptable, with no
          consistency across the firm.
        </p>
        <p>
          Professional obligations around competence, confidentiality, and
          supervision don&apos;t pause because the technology is new. When
          lawyers experiment with AI tools on their own, without firm-wide
          standards, the risk isn&apos;t just that one person makes a mistake,
          it&apos;s that the firm has no way of knowing how many people are doing
          what, with which tools, on which types of matters.
        </p>
      </ArticleSection>

      <ArticleSection title="What's Driving the Reluctance to Train">
        <p>
          Firms aren&apos;t avoiding this without reason. Concerns about data
          security, ethical compliance, privilege protection, and trust in
          AI-generated output are legitimate barriers, not excuses. The instinct
          to be cautious is reasonable.
        </p>
        <p>
          The problem is that caution without action doesn&apos;t actually reduce
          risk, it just delays addressing it while individual usage keeps
          climbing anyway. Waiting for AI to feel fully settled before training
          anyone means training arrives after the exposure has already built up,
          not before, including the kind of{" "}
          <Link
            href="/blog/law-firms-are-the-perfect-target-for-ai-driven-cyberattacks"
            className={blogInlineLinkClass}
          >
            ungoverned AI usage that raises cyber risk
          </Link>
          .
        </p>
      </ArticleSection>

      <ArticleSection title="What This Costs Beyond Compliance Risk">
        <p>
          The training gap isn&apos;t just an ethics or malpractice exposure
          question, it&apos;s increasingly a talent and competitiveness issue
          too. A meaningful share of legal professionals report considering
          leaving their firm within two years specifically due to a perceived
          gap between what they need to do their job well and what the firm
          actually provides. Separately, inadequate training is now identified
          as one of the most persistent barriers to firms actually realizing
          value from their AI investment, not lack of tools, lack of guidance on
          using them.
        </p>
        <p>
          Firms spending on AI tools while skipping training on how to use them
          are, in effect, paying for adoption without paying for the part that
          makes adoption safe and effective.
        </p>
      </ArticleSection>

      <ArticleSection title="What Closing the Gap Actually Requires">
        <p>
          This doesn&apos;t need to be an elaborate curriculum. A workable
          starting point typically includes:
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            A short, mandatory session covering which tools are approved, what
            data can and can&apos;t go into them, and why
          </li>
          <li>
            Clear examples of what good AI-assisted work looks like versus what
            creates risk, using real scenarios relevant to the firm&apos;s
            practice areas
          </li>
          <li>
            A named point of contact for AI-related questions, so uncertainty
            doesn&apos;t just get resolved by individual guesswork
          </li>
          <li>
            A plan to revisit and update training as tools and firm usage
            evolve, rather than treating it as a one-time event
          </li>
        </ul>
      </ArticleSection>

      <ArticleFaq faqs={aiTrainingFaqs} />

      <RelatedReading
        slugs={
          relatedBySlug["your-lawyers-are-already-using-ai-almost-nobody-trained-them"]
        }
      />

      <ArticleCta>
        <p>
          The defining risk in legal AI right now isn&apos;t the technology
          outpacing what firms can handle, it&apos;s firms letting adoption
          outpace guidance. Closing that gap is one of the most actionable,
          lowest cost improvements a firm can make, and it directly addresses
          the training barrier that&apos;s already holding back the value firms
          are trying to get from AI in the first place.
        </p>
        <p>
          Not sure where your firm&apos;s current AI usage stands, or what
          training gaps exist across your team? Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          reviews your workflows and flags exactly where guidance is missing.
        </p>
      </ArticleCta>
    </>
  );
}

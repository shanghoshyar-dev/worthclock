import Link from "next/link";
import type { BlogFaq } from "@/lib/blog";
import {
  ArticleCta,
  ArticleFaq,
  ArticleSection,
  QuickAnswer,
} from "@/components/blog/ArticleLayout";

export const insuranceFaqs: BlogFaq[] = [
  {
    q: "Does this apply to small firms, or just large ones?",
    a: "It applies broadly. Underwriter questions at renewal aren't typically scaled down for smaller firms, and smaller firms without dedicated risk or compliance staff often have the least documentation in place.",
  },
  {
    q: "What if our firm barely uses AI?",
    a: 'Even minimal or informal AI use is worth documenting. Underwriters are asking the question regardless of how much a firm uses AI, and "we don\'t really use it" without evidence is a weaker answer than a firm expects.',
  },
  {
    q: "How urgent is this?",
    a: "Given how quickly this shifted through 2025 and into 2026, firms without documentation in place should treat this as a near term priority rather than something to address eventually.",
  },
];

export function InsuranceArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          Yes, and for many firms it&apos;s already happening. Underwriters are
          now asking firms directly whether they use AI, whether they police it,
          and whether they have protocols in place. Coverage increasingly depends
          on documented governance practices and a clear AI risk assessment.
          Firms without an answer to these questions risk facing higher premiums,
          coverage exclusions, or difficult renewal conversations.
        </p>
      </QuickAnswer>

      <ArticleSection title="Why Underwriters Started Asking">
        <p>
          For a couple of years, most firms operated under what&apos;s often
          called silent AI cover, meaning professional liability policies simply
          didn&apos;t mention AI use one way or another. That silence has started
          disappearing from renewal documentation as the market shifts. The
          market has been described as going through a structural break
          specifically around how AI use is underwritten.
        </p>
        <p>
          The reason is straightforward from an insurer&apos;s perspective. AI
          introduces new categories of risk, like fabricated citations reaching a
          filing or a confidentiality breach through a poorly vetted tool, and
          insurers want to know whether a firm has controls in place before they
          price that risk.
        </p>
      </ArticleSection>

      <ArticleSection title="What Underwriters Are Actually Asking">
        <p>
          The standard set of questions at renewal now commonly includes some
          version of: Do you use AI? Do you police it? Do you have protocols in
          place? This has become close to standard at most professional liability
          renewal cycles, not a rare or unusual line of questioning.
        </p>
        <p>
          Affirmative coverage for AI related risk typically now depends on:
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            Documented governance practices, not just informal habits
          </li>
          <li>A completed AI risk assessment for the firm</li>
          <li>
            Evidence of a review process for AI generated work product
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="What Happens If a Firm Doesn't Have Answers">
        <p>
          Cyber underwriters have moved further and faster on this than
          professional liability underwriters, but the gap is closing. Firms
          without clear governance documentation risk manuscript exclusions,
          meaning specific carve outs removing AI related incidents from
          coverage, higher premiums, or a more difficult renewal process overall.
        </p>
        <p>
          For a small or mid sized firm, this isn&apos;t a distant concern.
          It&apos;s increasingly a practical, near term renewal issue.
        </p>
      </ArticleSection>

      <ArticleSection title='What "Documented Governance" Actually Looks Like'>
        <p>
          It doesn&apos;t need to be an elaborate compliance program. At minimum,
          it typically means:
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            A written policy on which AI tools are approved for use and which
            categories of client data can go into them
          </li>
          <li>
            A record of how AI generated output is reviewed before reaching a
            client or a filing
          </li>
          <li>
            Some form of documented risk assessment showing the firm has actually
            evaluated its AI usage, not just adopted tools ad hoc
          </li>
          <li>
            A named person or role responsible for AI governance, even at a small
            firm
          </li>
        </ul>
      </ArticleSection>

      <ArticleFaq faqs={insuranceFaqs} />

      <ArticleCta>
        <p>
          AI governance has moved from a nice to have to a factor directly
          affecting a firm&apos;s insurance coverage and cost. Firms that can
          show a clear, documented approach to AI use are in a stronger position
          at renewal than firms relying on informal habits alone.
        </p>
        <p>
          Not sure whether your firm&apos;s current AI usage would hold up to an
          underwriter&apos;s questions? Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          gives you a clear picture of your current tools and workflows as a
          starting point for that documentation.
        </p>
      </ArticleCta>
    </>
  );
}

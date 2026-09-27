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

export const maDueDiligenceFaqs: BlogFaq[] = [
  {
    q: "Is this only relevant for firms doing large, complex M&A deals?",
    a: "The time savings scale with document volume, so the benefit is largest on bigger deals, but even mid-market transactions with thousands of documents see meaningful reductions in review time.",
  },
  {
    q: "Does using AI for due diligence increase malpractice risk if something gets missed?",
    a: "The risk profile shifts rather than simply increasing. A firm still needs a human review layer on flagged exceptions, the tools are built to surface issues for lawyer judgment, not to remove that judgment from the process entirely.",
  },
  {
    q: "What should a firm check before using an AI tool on deal documents?",
    a: "The same confidentiality questions that apply to any legal AI use, where data is stored, whether the vendor trains on it, and whether the tool is actually built for the sensitivity of deal materials rather than general-purpose use.",
  },
];

export function MaDueDiligenceArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          Manual review of 500 contracts at roughly 30 minutes each is about 250
          hours of lawyer time. AI-assisted review of the same set can take under
          an hour to produce a structured summary with flagged exceptions, and
          industry data consistently shows 60 to 80% time reductions across M&amp;A
          due diligence document review. The gains are real and well documented
          across multiple independent sources. The catch is confidentiality, not
          accuracy, feeding deal documents into the wrong tool is a bigger risk
          than the AI missing something.
        </p>
      </QuickAnswer>

      <ArticleSection title="Why Due Diligence Is Where AI Adds the Most Value">
        <p>
          M&amp;A is one of the most document-intensive areas of legal work. A
          mid-market acquisition routinely produces 5,000 to 50,000 documents
          during due diligence alone, contracts, leases, HR agreements, IP
          filings, compliance records, and litigation files, all needing review
          under real time pressure, since deal timelines don&apos;t pause for
          thoroughness.
        </p>
        <p>
          This is close to the ideal use case for AI-assisted review: high
          volume, relatively structured documents, and a task built around
          extracting terms and flagging deviations rather than exercising deep
          strategic judgment on every page. That combination is exactly where
          current AI tools perform strongest, the same pattern that shows up in{" "}
          <Link
            href="/blog/ai-contract-review-how-much-time-can-it-actually-save"
            className={blogInlineLinkClass}
          >
            AI contract review time savings
          </Link>{" "}
          more broadly.
        </p>
      </ArticleSection>

      <ArticleSection title="What the Time Savings Actually Look Like">
        <p>
          The data across independent sources is consistent rather than a single
          vendor&apos;s marketing claim:
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          Contract-level speed
        </h3>
        <p>
          One benchmark study timed lawyers reviewing standard commercial
          contracts with and without AI assistance. Manual review averaged 92
          minutes per contract, AI-assisted review of the same contracts averaged
          22 minutes, a reduction of about 76%.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          Document-set level speed
        </h3>
        <p>
          Reviewing 500 contracts manually at roughly 30 minutes each totals
          around 250 hours of lawyer time. The same set with AI assistance can
          take under an hour to produce a structured summary with flagged
          exceptions for human review.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          Broader industry benchmarks
        </h3>
        <p>
          Independent estimates converge in a similar range, 60 to 80% time
          reduction on due diligence document review across M&amp;A transactions,
          and AI may reduce document review time by up to 70% on average while
          surfacing critical provisions across thousands of documents in minutes.
        </p>
      </ArticleSection>

      <ArticleSection title="Adoption Is Already Mainstream, Not Experimental">
        <p>
          This isn&apos;t an emerging trend anymore. 86% of surveyed corporate and
          private equity organizations report having integrated generative AI into
          their M&amp;A workflows, and more than 60% of surveyed private equity
          firms already use a generative AI diligence tool specifically. Among
          adopters applying AI to diligence specifically, early users report that
          summarizing a dataset which used to take a week can now take about a
          day.
        </p>
        <p>
          For firms still treating this as optional or experimental, the more
          accurate read is that competitors are likely already using it, and the
          gap in speed is becoming a gap in deal competitiveness, not just
          internal efficiency, another reason an actual{" "}
          <Link
            href="/blog/does-your-law-firm-have-an-ai-strategy"
            className={blogInlineLinkClass}
          >
            AI strategy
          </Link>{" "}
          matters more than ad hoc tool experiments.
        </p>
      </ArticleSection>

      <ArticleSection title={`The Real Risk Isn't Accuracy, It's Confidentiality`}>
        <p>
          It&apos;s tempting to assume the main concern with AI due diligence is
          the tool missing something important. That risk exists and matters, but
          the more consistently cited concern across current industry analysis is
          different: confidentiality, not accuracy, is the biggest risk in
          AI-assisted diligence.
        </p>
        <p>
          Due diligence documents are often the most sensitive material a firm
          handles, financials, IP, litigation exposure, employee data, all
          concentrated in one data room during a live transaction. Feeding that
          material into a general-purpose consumer AI tool without understanding
          its data handling policy creates exposure that has nothing to do with
          whether the AI&apos;s analysis was accurate. That&apos;s the same{" "}
          <Link
            href="/blog/is-it-safe-to-use-ai-with-privileged-client-information"
            className={blogInlineLinkClass}
          >
            privilege and confidentiality risk
          </Link>{" "}
          firms face whenever client data leaves a governed environment.
        </p>
        <p>
          The practical guidance from experienced deal teams is consistent: keep
          diligence AI inside a governed environment, meaning tools with clear
          data handling terms, ideally purpose-built for legal or deal work,
          rather than pasting data-room contents into whatever chatbot happens to
          be open. The{" "}
          <Link
            href="/blog/5-questions-to-ask-before-adopting-any-legal-ai-tool"
            className={blogInlineLinkClass}
          >
            questions worth asking before adopting any legal AI tool
          </Link>{" "}
          apply here with particular force.
        </p>
      </ArticleSection>

      <ArticleSection title="Where Human Judgment Still Decides the Deal">
        <p>
          AI due diligence tools are not a substitute for experienced judgment,
          and the firms getting the most value from them aren&apos;t just plugging
          in a tool and expecting it to run unsupervised. The pattern among firms
          doing this well is using AI to expand coverage of the more quantitative,
          repetitive workstreams, freeing up lawyer time for the qualitative
          assessments that still depend entirely on human expertise, deal
          strategy, risk tolerance, negotiation judgment.
        </p>
        <p>
          That distinction matters for expectations. AI compresses the mechanical
          review layer. It doesn&apos;t replace the judgment layer sitting on top
          of it.
        </p>
      </ArticleSection>

      <ArticleFaq faqs={maDueDiligenceFaqs} />

      <RelatedReading
        slugs={
          relatedBySlug[
            "ai-in-ma-due-diligence-how-much-faster-is-it-really"
          ]
        }
      />

      <ArticleCta>
        <p>
          The time savings from AI in M&amp;A due diligence are no longer a
          projection, they&apos;re a documented, adopted-at-scale reality across
          corporate and private equity deal teams. The risk that actually matters
          isn&apos;t the AI getting something wrong, it&apos;s which tool the firm
          trusts with the data in the first place.
        </p>
        <p>
          Not sure whether your firm&apos;s current approach to deal document
          review, and the tools involved, actually holds up on the
          confidentiality side? Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          reviews your workflows and flags where the real exposure sits.
        </p>
      </ArticleCta>
    </>
  );
}

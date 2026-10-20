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

export const euAiActArticle4Faqs: BlogFaq[] = [
  {
    q: "Does Article 4 apply to a small law firm?",
    a: "Yes. It applies to all deployers of AI systems, regardless of size or the risk level of the tools used. What is proportionate for a small firm is simply smaller.",
  },
  {
    q: "Did the Digital Omnibus remove the AI literacy obligation?",
    a: "No. It softened it from ensuring a sufficient level of AI literacy to taking measures to support it. Firms using AI still have to act.",
  },
  {
    q: "Do we need an external course or certificate?",
    a: "No. The obligation does not require a specific format. Internal training that fits the tools you use, with a record of who took part, is a reasonable way to meet it.",
  },
  {
    q: "Who enforces it?",
    a: "National market surveillance authorities in each Member State. Penalties for breaches of Article 4 are set nationally, so the details depend on where your firm is based.",
  },
];

export function EuAiActArticle4Article() {
  return (
    <>
      <QuickAnswer>
        <p>
          Yes. Article 4 of the EU AI Act applies to every organisation that uses
          AI systems in its work, including law firms, and it has applied since 2
          February 2025. The Digital Omnibus (Regulation (EU) 2026/1744), in force
          since 27 July 2026, softened the wording. Instead of having to ensure a
          sufficient level of AI literacy, firms must now take measures to support
          it. The duty still covers staff and others who use AI on the firm&apos;s
          behalf, and national authorities can enforce it. In practice, a short,
          documented training effort matched to the tools your firm actually uses
          is enough to show you have taken it seriously.
        </p>
      </QuickAnswer>

      <ArticleSection title="What Article 4 Says">
        <p>
          Article 4 is one of the first parts of the AI Act to apply. Unlike most
          of the regulation, it does not depend on how risky an AI system is. If
          your firm uses AI, whether that is a general chatbot, an AI feature in
          your email client or a legal research tool, the obligation applies.
        </p>
        <p>
          The original text required providers and deployers of AI systems to take
          measures to ensure, to their best extent, a sufficient level of AI
          literacy among their staff and others operating AI on their behalf. A
          law firm using AI tools in its work is a deployer. That sits alongside
          the rest of what{" "}
          <Link
            href="/blog/the-eu-ai-act-deadline-got-pushed-back-heres-what-still-applies-right-now"
            className={blogInlineLinkClass}
          >
            still applies under the AI Act right now
          </Link>
          , even where high-risk deadlines moved.
        </p>
      </ArticleSection>

      <ArticleSection title="What Changed With the Digital Omnibus">
        <p>
          The Digital Omnibus on AI was adopted on 8 July 2026, published in the
          Official Journal on 24 July and entered into force on 27 July 2026. Among
          other changes, it amended Article 4.
        </p>
        <p>
          According to commentary on the final text, the obligation moved from an
          outcome to an effort. Firms no longer have to ensure a sufficient level
          of AI literacy. They must take measures to support its development, and
          the amended text does not require any specific level of literacy for an
          individual employee.
        </p>
        <p>Three things did not change:</p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>The duty still applies to deployers.</strong> Law firms using
            AI are still covered.
          </li>
          <li>
            <strong>
              It still covers the people using AI on the firm&apos;s behalf.
            </strong>{" "}
            That includes staff and, in practice, contractors.
          </li>
          <li>
            <strong>It can be enforced.</strong> National market surveillance
            authorities have been able to enforce Article 4 since 2 August 2026.
            Penalties for breaching it are set by each Member State rather than by
            the AI Act&apos;s own fine tiers.
          </li>
        </ul>
        <p>
          A softer standard is still a standard. A firm that has done nothing will
          find it hard to argue that it has taken measures to support anything.
        </p>
      </ArticleSection>

      <ArticleSection title="Why This Matters for Law Firms Specifically">
        <p>
          Most firms are further behind on this than they think. The 8am 2026 Legal
          Industry Report found that 54% of legal professionals said their firm
          provides no responsible AI training and has no plans to. Only 11%
          reported mandatory training for all staff. That is the same{" "}
          <Link
            href="/blog/your-lawyers-are-already-using-ai-almost-nobody-trained-them"
            className={blogInlineLinkClass}
          >
            training gap
          </Link>{" "}
          showing up across the industry.
        </p>
        <p>
          At the same time, 69% of respondents said they use generative AI in their
          work. That combination is the problem Article 4 is aimed at: widespread
          use, with little shared understanding of what the tools can and cannot be
          trusted with.
        </p>
        <p>
          For lawyers, AI literacy is also closely tied to professional duties that
          already exist. The CCBE&apos;s guide on generative AI, published in
          October 2025, says lawyers should understand the capabilities and limits
          of the tools they use, verify output where the task requires it, and
          protect client confidentiality. Training is how a firm makes that happen
          consistently rather than leaving it to each individual, and it belongs in
          any real{" "}
          <Link
            href="/blog/does-your-law-firm-have-an-ai-strategy"
            className={blogInlineLinkClass}
          >
            AI strategy
          </Link>
          .
        </p>
      </ArticleSection>

      <ArticleSection title={`What "Taking Measures" Can Look Like`}>
        <p>
          There is no required format, no certificate and no minimum number of
          hours. A proportionate approach for a small or midsize firm could be:
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          1. List the AI tools in use
        </h3>
        <p>
          You cannot support literacy around tools you do not know about. Ask
          everyone, including support staff, which AI tools and features they use.
          The same inventory work that helps with{" "}
          <Link
            href="/blog/5-questions-to-ask-before-adopting-any-legal-ai-tool"
            className={blogInlineLinkClass}
          >
            tool diligence
          </Link>{" "}
          applies here.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          2. Run one short, practical session
        </h3>
        <p>
          Thirty to sixty minutes is enough to cover the basics: how the firm&apos;s
          tools work, where they make mistakes, what client information may and
          may not go into them, and why every AI assisted citation must be
          checked, including the{" "}
          <Link
            href="/blog/ai-hallucinations-in-legal-filings"
            className={blogInlineLinkClass}
          >
            hallucination risk in filings
          </Link>
          .
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          3. Match it to roles
        </h3>
        <p>
          Lawyers using AI for research need different guidance from staff using it
          for intake or scheduling. A few role specific points are more useful than
          one generic presentation.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          4. Write down what you did
        </h3>
        <p>
          Keep a simple record of who was trained, when and on what. According to
          commentary on the Commission&apos;s guidance, an internal record is
          acceptable and no external certificate is needed.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          5. Repeat when tools change
        </h3>
        <p>
          New tools, new features or new staff are natural moments to refresh the
          training.
        </p>
      </ArticleSection>

      <ArticleFaq faqs={euAiActArticle4Faqs} />

      <RelatedReading
        slugs={
          relatedBySlug[
            "does-the-eu-ai-act-require-ai-training-for-law-firms-what-article-4-means-in-2026"
          ]
        }
      />

      <ArticleCta>
        <p>
          The Digital Omnibus made Article 4 easier to meet, not optional. For most
          law firms, meeting it means knowing which AI tools are in use, giving
          people a short practical session on how to use them safely, and keeping a
          record. Firms that do this also get something more valuable than
          compliance: lawyers who use AI well instead of carefully avoiding it or
          using it carelessly.
        </p>
        <p>
          Not sure which AI tools your firm is actually using, or which ones are
          worth keeping? Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          maps that in a single call and gives you a clear starting point for both
          training and adoption.
        </p>
      </ArticleCta>

      <ArticleSection title="Sources">
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <a
              href="https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              Regulation (EU) 2026/1744 (Digital Omnibus on AI), EUR-Lex
            </a>
          </li>
          <li>
            <a
              href="https://www.actuia.com/en/news/ai-act-obligations-in-force-and-delays-under-omnibus-2026-1744/"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              ActuIA: AI Act obligations in force and delays under omnibus
              2026/1744
            </a>
          </li>
          <li>
            <a
              href="https://getactready.com/blog/eu-ai-act-ai-literacy-rule-softened-omnibus"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              Act Ready: The EU is softening the AI literacy rule
            </a>
          </li>
          <li>
            8am, 2026 Legal Industry Report, via{" "}
            <a
              href="https://www.lawnext.com/2026/03/ai-adoption-among-legal-professionals-has-more-than-doubled-in-a-year-new-8am-report-finds-but-firms-lag-far-behind-individual-practitioners.html"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              LawSites
            </a>
          </li>
          <li>
            <a
              href="https://www.advokatforeningen.no/contentassets/185dd73ac1e14031ac016b1567e4b7a6/ccbe-guide-on-the-use-of-the-use-of-generative-ai-for-lawyers.pdf"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              CCBE Guide on the use of generative AI by lawyers
            </a>
          </li>
        </ul>
      </ArticleSection>
    </>
  );
}

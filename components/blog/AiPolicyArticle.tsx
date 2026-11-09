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

export const aiPolicyFaqs: BlogFaq[] = [
  {
    q: "How long should an AI policy be?",
    a: "For a small firm, one or two pages is usually enough. The test is whether a new trainee could follow it without asking questions.",
  },
  {
    q: "Do we need a lawyer to write our AI policy?",
    a: "Not necessarily. The policy is mainly operational. But the parts on confidentiality, data protection and client consent should reflect the professional and legal rules in your jurisdiction.",
  },
  {
    q: "Should the policy name specific tools?",
    a: "Yes. A list of approved tools by name is far easier to follow than general principles.",
  },
  {
    q: "How often should we update it?",
    a: "At least every quarter, and whenever the firm adopts a new tool or a provider changes its terms.",
  },
];

export function AiPolicyArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          A small law firm&apos;s AI policy should answer eight questions in
          plain language: which AI tools are approved, what information may go
          into each one, how output is checked before it leaves the firm, when
          clients are told, who can approve new tools, how staff are trained,
          what to do if something goes wrong and who owns the policy. It does
          not need to be long. Two pages that everyone actually follows are
          worth more than twenty that nobody reads.
        </p>
      </QuickAnswer>

      <ArticleSection title="What Is an AI Policy?">
        <p>
          An AI policy is a short internal document that sets out which AI tools
          a firm&apos;s people may use, for what purposes and under what rules.
          For a law firm, its main job is to protect client confidentiality and
          the quality of legal work while still letting lawyers benefit from the
          time AI can save.
        </p>
      </ArticleSection>

      <ArticleSection title="Why Does a Small Firm Need One?">
        <p>
          A small firm needs an AI policy because its people are almost
          certainly using AI already, and without a policy each person is making
          their own decisions about client information. Regulators now expect
          firms to have controls in place, whatever their size. Most firms still
          do not have a written{" "}
          <Link
            href="/blog/does-your-law-firm-have-an-ai-strategy"
            className={blogInlineLinkClass}
          >
            AI strategy
          </Link>
          .
        </p>
        <p>
          The numbers show how wide the gap is. The{" "}
          <a
            href="https://www.lawnext.com/2026/03/ai-adoption-among-legal-professionals-has-more-than-doubled-in-a-year-new-8am-report-finds-but-firms-lag-far-behind-individual-practitioners.html"
            className={blogInlineLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            8am 2026 Legal Industry Report
          </a>{" "}
          found that 69% of legal professionals use generative AI for work, but
          only 9% say their firm has a written AI policy that is actively
          enforced. 43% said their firm has no policy and no plans for one.
        </p>
        <p>
          Regulators are moving the other way. The SRA&apos;s{" "}
          <a
            href="https://www.sra.org.uk/solicitors/guidance/misuse-ai/"
            className={blogInlineLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            warning notice on the misuse of AI
          </a>
          , published in August 2026, reminds firms that they need effective
          governance structures, systems and controls to manage AI risks. In the
          EU, Article 4 of the AI Act requires organisations that use AI to take
          measures to support AI literacy among their staff. See{" "}
          <Link
            href="/blog/does-the-eu-ai-act-require-ai-training-for-law-firms-what-article-4-means-in-2026"
            className={blogInlineLinkClass}
          >
            what Article 4 means for law firms
          </Link>
          .
        </p>
      </ArticleSection>

      <ArticleSection title="What Should the Policy Say?">
        <p>
          The policy should cover eight areas, each answered in a few sentences.
          Write it for the person who will read it on a busy afternoon, not for
          a regulator.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          1. Which tools are approved?
        </h3>
        <p>
          List approved tools by name, including AI features inside software the
          firm already uses, such as email, document and meeting tools. State
          clearly that anything not on the list needs approval before it is used
          for work.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          2. What information may go into each tool?
        </h3>
        <p>Sort information into simple categories, for example:</p>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            <strong>Public information</strong>, such as published judgments or
            legislation
          </li>
          <li>
            <strong>Internal firm information</strong>, such as templates and
            know-how
          </li>
          <li>
            <strong>Confidential client information</strong>
          </li>
        </ol>
        <p>
          Then say which categories each approved tool may handle. Most firms
          allow only tools under a proper business contract to handle client
          information, and never consumer chatbots used with personal accounts.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          3. How is output checked?
        </h3>
        <p>
          State that a lawyer must review all AI assisted work before it leaves
          the firm, and that every citation, quotation and factual claim must be
          checked against the original source. Courts have taken a hard line on
          fake citations, including the High Court in London in{" "}
          <em>Ayinde v London Borough of Haringey</em> [2025] EWHC 1383 (Admin).
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          4. When are clients told?
        </h3>
        <p>
          Explain when the firm will tell clients about AI use and when it will
          ask for consent. A simple rule is to be open with clients whenever
          confidential information goes into an AI tool, and to ask for consent
          where the firm does not fully control the tool.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          5. Who can approve a new tool?
        </h3>
        <p>
          Name the person or role who decides. Set out the minimum checks before
          approval: the contract and data processing terms, whether inputs are
          used for training, how long data is kept, where it is processed and
          who can access it. The same checks sit behind the{" "}
          <Link
            href="/blog/5-questions-to-ask-before-adopting-any-legal-ai-tool"
            className={blogInlineLinkClass}
          >
            questions to ask before adopting any legal AI tool
          </Link>
          .
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          6. How are people trained?
        </h3>
        <p>
          Commit to a short practical session for everyone, repeated when tools
          change, and keep a record of who attended. This also supports the AI
          literacy expectation under the EU AI Act.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          7. What happens if something goes wrong?
        </h3>
        <p>
          Tell staff exactly what to do if client information goes into the
          wrong tool or an AI error reaches a client: report it to a named
          person straight away, so the firm can assess any confidentiality, data
          protection or reporting obligations. Make clear that early reporting
          is expected and supported.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          8. Who owns the policy?
        </h3>
        <p>
          Name an owner and a review date. A quarterly review is sensible,
          because AI tools and their terms change often.
        </p>
      </ArticleSection>

      <ArticleSection title="What Should the Policy Not Do?">
        <p>
          The policy should not ban AI outright, copy a large firm&apos;s
          template or read like a legal treatise. Each of these makes it less
          likely that people will follow it.
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Outright bans</strong> tend to push people towards tools on
            their personal phones, which is worse than a controlled approval
            process.
          </li>
          <li>
            <strong>Large firm templates</strong> assume a compliance team and
            IT department that a small firm does not have.
          </li>
          <li>
            <strong>Legalistic language</strong> means staff skim it and miss
            the parts that matter.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="How Do You Write and Roll Out the Policy?">
        <p>
          Start by finding out what people actually use, write the first version
          in an afternoon, walk everyone through it and review it after three
          months. A short, real policy beats a perfect one that never gets
          finished.
        </p>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            <strong>
              Ask everyone which AI tools and features they use
            </strong>
            , including support staff.
          </li>
          <li>
            <strong>Check the terms of the tools in use</strong> and decide
            which to approve, restrict or stop.
          </li>
          <li>
            <strong>Draft the eight sections above</strong> in plain language,
            ideally on two pages.
          </li>
          <li>
            <strong>Walk through it in a 30 minute meeting</strong> using real
            examples from your own work.
          </li>
          <li>
            <strong>Make the approved tool list easy to find</strong>, for
            example pinned in your shared drive.
          </li>
          <li>
            <strong>Record who has read it</strong> and when.
          </li>
          <li>
            <strong>Review it every quarter</strong> or when a key tool
            changes.
          </li>
        </ol>
      </ArticleSection>

      <ArticleFaq faqs={aiPolicyFaqs} />

      <RelatedReading slugs={relatedBySlug["ai-policy-small-law-firm"]} />

      <ArticleCta>
        <p>
          An AI policy for a small law firm does not need to be long or
          complicated. It needs to answer eight practical questions so that
          every person in the firm knows which tools they may use, what may go
          into them and who checks the output. Most firms can write a solid
          first version in an afternoon.
        </p>
        <p>
          Want a clear starting point for your firm&apos;s AI policy based on
          the tools your people actually use? Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          maps your tools and workflows and gives you a practical plan.
        </p>
      </ArticleCta>

      <ArticleSection title="Sources">
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <a
              href="https://www.lawnext.com/2026/03/ai-adoption-among-legal-professionals-has-more-than-doubled-in-a-year-new-8am-report-finds-but-firms-lag-far-behind-individual-practitioners.html"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              8am 2026 Legal Industry Report, via LawSites
            </a>
          </li>
          <li>
            <a
              href="https://www.sra.org.uk/solicitors/guidance/misuse-ai/"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              SRA warning notice: Misuse of AI (17 August 2026)
            </a>
          </li>
          <li>
            <a
              href="https://caselaw.nationalarchives.gov.uk/ewhc/admin/2025/1383"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ayinde v London Borough of Haringey [2025] EWHC 1383 (Admin)
            </a>
          </li>
          <li>
            <a
              href="https://www.actuia.com/en/news/ai-act-obligations-in-force-under-omnibus-2026-1744/"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              ActuIA: AI Act obligations in force under Omnibus 2026/1744
              (Article 4)
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

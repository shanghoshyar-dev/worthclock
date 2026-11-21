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

export const dpiaFaqs: BlogFaq[] = [
  {
    q: "Do we need a DPIA for every AI tool?",
    a: "No. You need one where the processing is likely to result in a high risk. For tools that handle client personal data, that is often the case, so assess each tool and record your conclusion.",
  },
  {
    q: "Who should carry out the DPIA?",
    a: "The firm, as controller, is responsible. If the firm has a data protection officer, the GDPR requires their advice to be sought. The AI provider should help by supplying information about its processing.",
  },
  {
    q: "Can we reuse the vendor's DPIA?",
    a: "You can use the vendor's documentation as input, but the DPIA must reflect how your firm uses the tool and the data you put into it.",
  },
  {
    q: "When should the DPIA be done?",
    a: "Before the processing starts, and it should be reviewed when the tool, the workflow or the provider's terms change.",
  },
];

export function DpiaArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          A data protection impact assessment (DPIA) is required under the GDPR
          and UK GDPR when processing is likely to result in a high risk to
          people&apos;s rights and freedoms. For law firms using AI, that
          threshold is often met, because AI is treated as innovative
          technology and legal matters frequently involve sensitive personal
          data. The UK regulator, the ICO, lists AI as innovative technology
          and says a DPIA is required when that is combined with another high
          risk factor. If a firm decides a DPIA is not needed, it should
          document why.
        </p>
      </QuickAnswer>

      <ArticleSection title="What Is a DPIA?">
        <p>
          A DPIA is a structured assessment of how a planned use of personal
          data could affect the people whose data it is, and what the
          organisation will do to reduce those risks. It is required by Article
          35 of the GDPR and the UK GDPR before certain high risk processing
          begins. For law firms, the &quot;people&quot; are usually clients,
          opposing parties, witnesses and employees whose details appear in
          matter files.
        </p>
      </ArticleSection>

      <ArticleSection title="When Is a DPIA Legally Required?">
        <p>
          A DPIA is required when processing is likely to result in a high risk
          to individuals, and always in three specific situations listed in
          Article 35(3). National regulators also publish lists of processing
          types that need one.
        </p>
        <p>The three situations named in Article 35(3) are:</p>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            <strong>Systematic and extensive profiling</strong> with
            significant effects on individuals
          </li>
          <li>
            <strong>Large scale processing of special category data</strong>{" "}
            or criminal offence data
          </li>
          <li>
            <strong>Large scale systematic monitoring</strong> of publicly
            accessible areas
          </li>
        </ol>
        <p>
          Outside those, the test is whether the processing is likely to result
          in a high risk. European guidance from the former Article 29 Working
          Party, endorsed by the European Data Protection Board, sets out
          criteria for this and suggests that processing meeting two of them
          will usually need a DPIA.
        </p>
      </ArticleSection>

      <ArticleSection title="Does Using AI Trigger a DPIA?">
        <p>
          Using AI does not automatically trigger a DPIA, but it often tips the
          balance, because regulators treat AI as innovative technology that
          can raise risk. Combined with the kind of data law firms hold, a DPIA
          is frequently the right answer.
        </p>
        <p>
          The ICO&apos;s guidance on{" "}
          <a
            href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/when-do-we-need-to-do-a-dpia"
            className={blogInlineLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            when a DPIA is needed
          </a>{" "}
          lists &quot;innovative technology&quot; as a type of processing
          likely to result in high risk, describing it as processing involving
          innovative technologies or the novel application of existing
          technologies, including AI. It says a DPIA is required where this is
          combined with another of the relevant criteria. It also says that if
          an organisation decides not to carry out a DPIA, it should document
          its reasons.
        </p>
      </ArticleSection>

      <ArticleSection title="Why Are Law Firms More Likely to Need One?">
        <p>
          Law firms are more likely to need a DPIA because their files often
          contain sensitive information about people who are not the client,
          and the consequences of a breach can be severe. That combination is
          exactly what the high risk test is designed to catch.
        </p>
        <p>Typical factors in legal work include:</p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Special category and criminal offence data</strong>, such
            as health information in personal injury or employment matters, or
            criminal records in regulatory work
          </li>
          <li>
            <strong>Data about vulnerable people</strong>, such as children in
            family matters or people in immigration cases
          </li>
          <li>
            <strong>Data about third parties</strong>, such as opposing parties
            and witnesses, who have no relationship with the firm
          </li>
          <li>
            <strong>Confidential and privileged material</strong>, where loss
            of control can cause serious harm. See{" "}
            <Link
              href="/blog/is-it-safe-to-use-ai-with-privileged-client-information"
              className={blogInlineLinkClass}
            >
              whether it is safe to use AI with privileged client information
            </Link>
            .
          </li>
        </ul>
        <p>
          Combine one or more of these with an AI tool that summarises case
          files, drafts correspondence or transcribes meetings, and a DPIA is
          usually prudent even where it is arguably not mandatory.
        </p>
      </ArticleSection>

      <ArticleSection title="When Might a DPIA Not Be Needed?">
        <p>
          A DPIA may not be needed where an AI tool processes little or no
          personal data, or only low risk data in a well understood way.
          Examples include using AI to draft a generic template or summarise a
          published judgment. The firm should still record the reasoning, as
          the ICO recommends.
        </p>
      </ArticleSection>

      <ArticleSection title="What Should a Legal AI DPIA Cover?">
        <p>
          A legal AI DPIA should describe the processing, assess whether it is
          necessary and proportionate, identify the risks to individuals and
          set out the measures to reduce them. These elements come from Article
          35(7) of the GDPR.
        </p>
        <p>For a law firm adopting an AI tool, that usually means:</p>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            <strong>Describe the processing.</strong> Which tool, which
            workflows, what personal data, whose data and where it goes.
          </li>
          <li>
            <strong>Explain the purpose and necessity.</strong> Why AI is used
            for this task and whether a less intrusive approach would work.
          </li>
          <li>
            <strong>Check the provider relationship.</strong> Whether the
            provider acts as a processor under a proper contract, whether
            inputs are used for training, how long data is kept and where it is
            processed. The{" "}
            <a
              href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/guide-to-accountability-and-governance/contracts/"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              ICO says
            </a>{" "}
            controllers must only use processors that can give sufficient
            guarantees.
          </li>
          <li>
            <strong>Identify the risks.</strong> Including loss of
            confidentiality, waiver of privilege, inaccurate outputs, data
            leaving the jurisdiction and internal oversharing.
          </li>
          <li>
            <strong>Set out the safeguards.</strong> Approved tools only,
            access controls, human review, retention limits, staff training and
            incident reporting. Most of these belong in your{" "}
            <Link
              href="/blog/ai-policy-small-law-firm"
              className={blogInlineLinkClass}
            >
              AI policy
            </Link>
            .
          </li>
          <li>
            <strong>Record the outcome.</strong> The decision, who made it and
            when it will be reviewed.
          </li>
          <li>
            <strong>Consult the regulator if needed.</strong> If a high risk
            remains after safeguards, the GDPR requires prior consultation with
            the supervisory authority before processing starts.
          </li>
        </ol>
      </ArticleSection>

      <ArticleSection title="How Does a DPIA Fit With Professional Rules?">
        <p>
          A DPIA covers data protection risk, but law firms should use it to
          address professional risks too, especially confidentiality and
          privilege. Regulators increasingly expect both.
        </p>
        <p>
          The SRA&apos;s{" "}
          <a
            href="https://www.sra.org.uk/solicitors/guidance/misuse-ai/"
            className={blogInlineLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            warning notice on the misuse of AI
          </a>
          , published in August 2026, says client information should only go
          into AI systems where appropriate contractual, technical and
          organisational safeguards are in place, and warns of risks to
          confidentiality, privilege and compliance with data protection law. A
          well written DPIA is a natural place to show how those safeguards
          were assessed.
        </p>
      </ArticleSection>

      <ArticleFaq faqs={dpiaFaqs} />

      <RelatedReading
        slugs={relatedBySlug["gdpr-legal-ai-when-is-a-dpia-required"]}
      />

      <ArticleCta>
        <p>
          For law firms, the question is less &quot;is a DPIA legally
          required?&quot; and more &quot;can we show we thought this
          through?&quot; AI is treated as innovative technology, legal files
          are full of sensitive data, and regulators expect firms to assess the
          risk before client information goes into a new tool. A focused DPIA
          does exactly that.
        </p>
        <p>
          Not sure which of your firm&apos;s AI tools need a DPIA? Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          maps the tools in use and highlights where an assessment, better
          safeguards or a different tool is needed.
        </p>
      </ArticleCta>

      <ArticleSection title="Sources">
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <a
              href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/when-do-we-need-to-do-a-dpia"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              ICO: When do we need to do a DPIA?
            </a>
          </li>
          <li>
            <a
              href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/guide-to-accountability-and-governance/contracts/"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              ICO: Contracts between controllers and processors
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
            GDPR and UK GDPR, Article 35 (data protection impact assessment)
            and Article 36 (prior consultation)
          </li>
          <li>
            Article 29 Working Party, Guidelines on Data Protection Impact
            Assessment (WP248 rev.01), endorsed by the European Data Protection
            Board
          </li>
        </ul>
        <p className="text-sm text-muted">
          This article is general information, not legal advice.
        </p>
      </ArticleSection>
    </>
  );
}

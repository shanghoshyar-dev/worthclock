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

export const aiLiabilityFaqs: BlogFaq[] = [
  {
    q: "Can a lawyer blame the AI tool for a mistake?",
    a: "No. Regulators and courts treat AI as a tool. The lawyer remains responsible for checking the output and for the advice given.",
  },
  {
    q: "Will professional indemnity insurance cover AI errors?",
    a: "Often, because the claim is about the quality of the legal work. But policies differ, so firms should confirm with their insurer how AI assisted work is treated.",
  },
  {
    q: "Can we sue the AI vendor if its tool gives a wrong answer?",
    a: "In most cases the contract will limit or exclude that. The new EU Product Liability Directive is aimed at harm such as personal injury and property damage, not wrong professional advice.",
  },
  {
    q: "Are trainees personally liable if they use AI badly?",
    a: "Trainees have their own professional obligations, but supervisors and the firm remain accountable for work carried out through them.",
  },
];

export function AiLiabilityArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          In almost every case, responsibility stays with the lawyer and the
          firm, not the AI vendor. Regulators and courts treat AI as a tool,
          and the professional who relies on it remains accountable for the
          advice and the work. The SRA has said individuals remain responsible
          for the work they produce whether or not AI is used, and courts have
          sanctioned lawyers for filing AI generated fake citations. Vendors
          usually limit their liability in their contracts. The practical
          protection is a review process, clear supervision and insurance that
          covers AI assisted work.
        </p>
      </QuickAnswer>

      <ArticleSection title={'What Does "AI Liability" Mean for a Law Firm?'}>
        <p>
          For a law firm, AI liability means who has to answer for the
          consequences when AI assisted work turns out to be wrong. That can
          include regulatory action, court sanctions, a negligence claim from a
          client or a dispute with the AI provider. Each has a different
          answer, but they mostly lead back to the same place.
        </p>
      </ArticleSection>

      <ArticleSection title="Is the Lawyer Responsible?">
        <p>
          Yes. The lawyer who relies on AI output remains professionally
          responsible for it, exactly as if they had produced it themselves.
          Using AI does not lower the standard of care or move the duty onto
          the tool.
        </p>
        <p>
          The SRA put this plainly when it published its{" "}
          <a
            href="https://www.sra.org.uk/news/news/releases/responsible-use-ai/"
            className={blogInlineLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            warning notice on the misuse of AI
          </a>{" "}
          in August 2026: individuals remain responsible for the work they
          produce and the advice they provide, regardless of whether AI is
          used, and the use of AI does not change the professional standards
          expected of solicitors and law firms.
        </p>
        <p>
          Courts take the same view. In <em>Mata v. Avianca</em> (S.D.N.Y.
          2023), a New York federal court fined two lawyers and their firm
          $5,000 after they filed a brief citing cases invented by ChatGPT. In{" "}
          <em>Ayinde v London Borough of Haringey</em> [2025] EWHC 1383
          (Admin), the High Court in London warned that lawyers who put false
          citations before a court may face referral to their regulator,
          contempt proceedings and, in the most serious cases, criminal
          investigation. The same pattern is covered in{" "}
          <Link
            href="/blog/ai-hallucinations-in-legal-filings"
            className={blogInlineLinkClass}
          >
            AI hallucinations in legal filings
          </Link>
          .
        </p>
        <p>
          The consequences have grown since. In 2026,{" "}
          <a
            href="https://valawyersweekly.com/2026/11/09/its-no-hallucination-ai-generated-errors-persist-in-court-filings/"
            className={blogInlineLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            two attorneys in Oregon were assessed $110,000 in fines and fees
          </a>{" "}
          over hallucinated citations, and the Nebraska Supreme Court
          indefinitely suspended a lawyer after 57 of the 63 citations in his
          brief turned out to be faulty or nonexistent.
        </p>
      </ArticleSection>

      <ArticleSection title="Is the Firm Responsible?">
        <p>
          Yes. The firm is responsible for supervision, systems and controls,
          and it will usually be the defendant in a client&apos;s claim. A firm
          cannot avoid responsibility by pointing to an individual&apos;s
          choice of tool.
        </p>
        <p>
          The SRA&apos;s warning notice reminds firms that supervisors remain
          accountable for work carried out through others, and that firms need
          effective governance structures, systems and controls to manage AI
          risks. The court in <em>Ayinde</em> also stressed that people with
          leadership responsibilities must take practical steps to make sure
          everyone in their organisation understands and follows their
          professional obligations when using AI.
        </p>
        <p>
          In the US,{" "}
          <a
            href="https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-october/aba-ethics-opinion-generative-ai-offers-useful-framework/"
            className={blogInlineLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            ABA Formal Opinion 512
          </a>{" "}
          makes a similar point: partners and managers should set clear
          policies on permitted AI use, and supervisors must make sure lawyers
          and staff are trained to follow them.
        </p>
        <p>
          In practice, a client who receives wrong advice will usually bring a
          claim against the firm, and the firm&apos;s professional indemnity
          insurance is where that claim ends up.
        </p>
      </ArticleSection>

      <ArticleSection title="Is the AI Vendor Responsible?">
        <p>
          Rarely, at least in a way that helps the firm. Most AI providers
          limit their liability in their contracts, disclaim the accuracy of
          outputs and make the customer responsible for reviewing results.
        </p>
        <p>
          Firms sometimes assume new EU rules will change this. They are
          unlikely to help in the typical case:
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>The AI Liability Directive will not happen for now.</strong>{" "}
            The European Commission announced in February 2025 that it was
            withdrawing the proposal, saying no foreseeable agreement had been
            reached.
          </li>
          <li>
            <strong>
              The new Product Liability Directive is aimed at defective
              products.
            </strong>{" "}
            <a
              href="https://heydata.eu/en/magazine/eu-product-liability-directive-2024-2853-digital-software-ai"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              Directive (EU) 2024/2853
            </a>{" "}
            brings software, including AI, within strict product liability for
            products placed on the market from 9 December 2026. But it focuses
            on harm such as personal injury, damage to property and loss of
            data not used for professional purposes. It is not designed to
            compensate a firm for a wrong legal answer that a lawyer relied on.
          </li>
        </ul>
        <p>
          That leaves the contract. Before approving a tool, firms should read
          what the provider actually promises about accuracy, security and
          liability, and should assume the answer on accuracy will be &quot;not
          much&quot;.
        </p>
      </ArticleSection>

      <ArticleSection title="Does a Client's Consent Shift Responsibility?">
        <p>
          No. A client agreeing that the firm may use AI does not move
          responsibility for the quality of the work. Consent addresses
          confidentiality and transparency. It is not a waiver of the duty to
          give competent advice.
        </p>
      </ArticleSection>

      <ArticleSection title="How Can a Firm Protect Itself?">
        <p>
          A firm protects itself with a review process, clear supervision,
          careful tool selection, honest records and the right insurance. None
          of these are expensive, and together they make AI errors much less
          likely to reach a client or a court.
        </p>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            <strong>Require human review of all AI assisted work</strong>{" "}
            before it leaves the firm.
          </li>
          <li>
            <strong>Check every citation and quotation</strong> against the
            original source, without exception.
          </li>
          <li>
            <strong>Approve tools deliberately</strong>, reading the
            provider&apos;s terms on accuracy, data and liability.
          </li>
          <li>
            <strong>Supervise how work is produced</strong>, not just the final
            result, especially for trainees and junior staff.
          </li>
          <li>
            <strong>Train everyone</strong> on where AI tools make mistakes and
            how to spot them.
          </li>
          <li>
            <strong>Keep records</strong> of the firm&apos;s{" "}
            <Link
              href="/blog/ai-policy-small-law-firm"
              className={blogInlineLinkClass}
            >
              AI policy
            </Link>
            , approved tools and training, so it can show reasonable steps were
            taken.
          </li>
          <li>
            <strong>Talk to your insurer</strong> about how your professional
            indemnity cover treats AI assisted work, and tell them about your
            controls. See also{" "}
            <Link
              href="/blog/will-ai-insurance-underwriters-ask-about-your-firms-ai-use"
              className={blogInlineLinkClass}
            >
              whether underwriters will ask about your firm&apos;s AI use
            </Link>
            .
          </li>
        </ol>
      </ArticleSection>

      <ArticleFaq faqs={aiLiabilityFaqs} />

      <RelatedReading slugs={relatedBySlug["who-is-liable-ai-legal-error"]} />

      <ArticleCta>
        <p>
          When AI gets a legal answer wrong, the responsibility almost always
          stays with the lawyer and the firm. Vendors protect themselves in
          their contracts, and new EU liability rules do not change that for
          everyday legal work. The firms that are protected are the ones that
          review every output, supervise properly and can show the steps they
          took.
        </p>
        <p>
          Want to know where AI errors could slip through in your firm&apos;s
          workflows? Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          maps how AI is used and where review steps are missing.
        </p>
      </ArticleCta>

      <ArticleSection title="Sources">
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <a
              href="https://www.sra.org.uk/news/news/releases/responsible-use-ai/"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              SRA news release on the AI warning notice (17 August 2026)
            </a>
          </li>
          <li>
            <a
              href="https://www.sra.org.uk/solicitors/guidance/misuse-ai/"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              SRA warning notice: Misuse of AI
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
              href="https://news.bloomberglaw.com/antitrust/chatgpt-phony-legal-filing-case-gets-lawyers-a-5-000-fine"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              Mata v. Avianca, sanctions coverage, Bloomberg Law
            </a>
          </li>
          <li>
            <a
              href="https://valawyersweekly.com/2026/11/09/its-no-hallucination-ai-generated-errors-persist-in-court-filings/"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              Virginia Lawyers Weekly: AI-generated errors persist in court
              filings (9 November 2026)
            </a>
          </li>
          <li>
            <a
              href="https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-october/aba-ethics-opinion-generative-ai-offers-useful-framework/"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              ABA Formal Opinion 512, via Business Law Today
            </a>
          </li>
          <li>
            <a
              href="https://www.tcilaw.de/en/ai-liability-eu-commission-withdraws-proposal-for-directive/"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              TCI Rechtsanwälte: Commission withdraws AI Liability Directive
              proposal
            </a>
          </li>
          <li>
            <a
              href="https://heydata.eu/en/magazine/eu-product-liability-directive-2024-2853-digital-software-ai"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              heyData: EU Product Liability Directive 2024/2853 and software
            </a>
          </li>
        </ul>
        <p className="text-sm text-muted">
          This article is general information, not legal advice.
        </p>
      </ArticleSection>
    </>
  );
}

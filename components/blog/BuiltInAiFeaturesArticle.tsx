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

export const builtInAiFeaturesFaqs: BlogFaq[] = [
  {
    q: "Is built-in AI safer than a standalone chatbot?",
    a: "Not automatically. It depends on the terms of your plan and how the feature handles data. Some business plans offer strong data protections. Others do not. The SRA notes that paid tools may also pose risks.",
  },
  {
    q: "Should we just switch all AI features off?",
    a: "Usually not. Many of these features save real time, especially on email and meeting notes. The goal is to know which ones are running and make a deliberate decision about each, rather than banning everything.",
  },
  {
    q: "Who should own this check?",
    a: "Someone with authority over both IT and compliance. In a small firm that is often a managing partner. In England and Wales it fits naturally with the COLP's role.",
  },
  {
    q: "Does this apply to firms outside the UK?",
    a: "Yes. The SRA notice applies to England and Wales, but the CCBE guidance applies across Europe, and confidentiality and data protection duties apply to law firms everywhere in the EU.",
  },
];

export function BuiltInAiFeaturesArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          Many law firms already use AI without ever choosing a tool. AI
          drafting, summarising and transcription features now come built into
          email clients, document editors, meeting software and browser
          extensions, and some are switched on by default or enabled by
          individual users. Because nobody installs anything, these features
          rarely go through any review. For a law firm, that matters: European
          and UK guidance says client information should only go into AI systems
          with proper safeguards in place. The fix is a short inventory of which
          AI features are active in the software you already pay for, followed by
          a decision on which ones may handle client data.
        </p>
      </QuickAnswer>

      <ArticleSection title="What Are Built-In AI Features in Law Firm Software?">
        <p>
          When firms talk about AI risk, they usually picture a lawyer pasting a
          document into a public chatbot. That risk is real. But a growing share
          of AI use in firms looks different. It arrives inside tools the firm
          already uses:
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Email</strong>, where AI can draft replies, summarise long
            threads or suggest responses
          </li>
          <li>
            <strong>Document editors</strong>, where AI can rewrite, summarise or
            extract key points
          </li>
          <li>
            <strong>Meeting software</strong>, where AI can record, transcribe and
            summarise client calls
          </li>
          <li>
            <strong>Browser extensions</strong>, where AI assistants can read
            whatever page or document is open
          </li>
        </ul>
        <p>
          None of these requires a purchasing decision. Someone clicks
          &quot;try it&quot;, or the feature appears in an update. The firm never
          asks the questions it would ask about a new vendor, the same{" "}
          <Link
            href="/blog/5-questions-to-ask-before-adopting-any-legal-ai-tool"
            className={blogInlineLinkClass}
          >
            diligence questions before adopting any legal AI tool
          </Link>
          .
        </p>
      </ArticleSection>

      <ArticleSection title="Can Built-In AI Breach Client Confidentiality?">
        <p>
          The rules do not distinguish between a tool the firm bought on purpose
          and a feature that appeared in an update.
        </p>
        <p>
          The CCBE, which represents bars and law societies across Europe,
          published a guide on generative AI in October 2025. It says lawyers
          should not enter client related data into generative AI tools unless
          safeguards are in place, such as contractual confidentiality terms,
          zero data retention or a data protection agreement, and that lawyers
          should understand how the provider uses what they enter.
        </p>
        <p>
          In England and Wales, the SRA&apos;s warning notice of 17 August 2026
          goes further. It says client information should only be entered into AI
          systems where appropriate contractual, technical and organisational
          safeguards are in place, that both free and paid AI systems may pose
          risks to confidentiality, and that legal professional privilege may be
          permanently waived.
        </p>
        <p>
          The Upper Tribunal&apos;s decision in{" "}
          <em>
            UK v Secretary of State for the Home Department
          </em>{" "}
          [2026] UKUT 81 (IAC) shows how ordinary the trigger can be. It
          concerned client emails and Home Office decision letters put into
          ChatGPT to improve and summarise them. The Tribunal said that putting
          such material into an open AI tool places it in the public domain,
          breaching confidentiality and waiving privilege.
        </p>
        <p>
          Email threads, call recordings and draft documents are exactly the kind
          of material built-in AI features process.
        </p>
      </ArticleSection>

      <ArticleSection title="Why Do Law Firms Miss Built-In AI?">
        <p>
          The 8am 2026 Legal Industry Report found that only 9% of legal
          professionals say their firm has a written AI policy that is actively
          enforced, and 43% say there is no policy and no plan for one. If most
          firms have not written rules for the AI tools they know about, very few
          have looked at the AI features they do not know about. (See also:{" "}
          <Link
            href="/blog/does-your-law-firm-have-an-ai-strategy"
            className={blogInlineLinkClass}
          >
            Does Your Law Firm Have an AI Strategy? Most Don&apos;t
          </Link>
          .)
        </p>
        <p>There are also practical reasons:</p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Features are enabled per user.</strong> One person turning on
            a meeting summariser can mean every client call they host is
            processed by it.
          </li>
          <li>
            <strong>Updates change defaults.</strong> A tool that had no AI
            features last year may have several today.
          </li>
          <li>
            <strong>Terms differ by plan.</strong> The same feature can come with
            different data terms depending on whether the firm has a consumer,
            business or enterprise plan.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="How Can a Law Firm Check Which AI Features Are Switched On?">
        <p>
          This does not need an IT project. A small firm can do it in an
          afternoon.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          1. List the software you already use
        </h3>
        <p>
          Email, calendar, document storage, word processing, video calls,
          practice management and any browser extensions staff have installed.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          2. Check each one for AI features
        </h3>
        <p>
          Look in the admin settings and recent release notes for anything
          described as AI, copilot, assistant, summary, transcription or smart
          reply. Note whether each feature is on for everyone, on for some users
          or off.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          3. Ask the people who use them
        </h3>
        <p>
          Admin settings do not show everything. Ask staff directly which AI
          features they use, including browser extensions and meeting note tools.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          4. Read the data terms for each active feature
        </h3>
        <p>
          For each one, find out whether your inputs are used to train models,
          how long data is kept, where it is processed and whether a data
          processing agreement covers it. If you cannot find clear answers, treat
          the feature as unsuitable for client information. Our guide on{" "}
          <Link
            href="/blog/is-it-safe-to-use-ai-with-privileged-client-information"
            className={blogInlineLinkClass}
          >
            using AI with privileged client information
          </Link>{" "}
          covers what good data terms look like.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          5. Decide and write it down
        </h3>
        <p>
          For each feature, decide whether it is allowed for client data, allowed
          only for non-client work, or switched off. Record the decision and the
          date, and tell staff.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          6. Repeat after major updates
        </h3>
        <p>
          Put a short review in the calendar every quarter, or whenever a key
          tool announces new AI features.
        </p>
      </ArticleSection>

      <ArticleFaq faqs={builtInAiFeaturesFaqs} />

      <RelatedReading
        slugs={
          relatedBySlug[
            "the-ai-your-law-firm-never-chose-how-to-check-built-in-ai-features"
          ]
        }
      />

      <ArticleCta>
        <p>
          The AI most likely to put client information at risk is often not the
          tool a firm chose. It is the feature nobody noticed being switched on.
          A one afternoon inventory of the software you already use, followed by
          a written decision for each AI feature, closes most of that gap.
        </p>
        <p>
          Not sure which AI features are already running in your firm, or which
          ones are worth keeping? Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          maps the tools and features you use and gives you a clear, safe plan
          for each.
        </p>
      </ArticleCta>

      <ArticleSection title="Sources">
        <ul className="list-disc space-y-3 pl-5">
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
              href="https://caselaw.nationalarchives.gov.uk/ukut/iac/2026/81"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              UK v Secretary of State for the Home Department [2026] UKUT 81
              (IAC), National Archives
            </a>
          </li>
          <li>
            <a
              href="https://www.advokatforeningen.no/contentassets/185dd73ac1e14031ac016b1567e4b7a6/ccbe-guide-on-the-use-of-the-use-of-generative-ai-for-lawyers.pdf"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              CCBE Guide on the use of generative AI by lawyers (October 2025)
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
        </ul>
      </ArticleSection>
    </>
  );
}

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

export const aiEmailFaqs: BlogFaq[] = [
  {
    q: "Can AI answer client emails on its own?",
    a: "It can draft them, but a person should review anything that goes to a client or contains advice. Fully automatic replies are best limited to simple, standard messages such as confirming receipt or sharing office hours.",
  },
  {
    q: "Is it safe to use Copilot or Gemini on law firm email?",
    a: "It can be, under a business licence with proper data protection terms, the right permissions and settings that match your policy. Check whether data is used for training, where it is processed and who can see what before switching features on.",
  },
  {
    q: "Which email tasks should a firm automate first?",
    a: "Start with sorting and prioritising incoming email, summarising long threads and drafting replies to routine questions. These save time quickly and are easy to check.",
  },
  {
    q: "How much time can AI save on email?",
    a: "It depends on volume and how routine the emails are. In our case studies, email was one of the main areas behind savings of 6 to 7 hours per week across a firm.",
  },
  {
    q: "Does AI reduce the risk of sending email to the wrong person?",
    a: "It can help if the tool flags unusual recipients or attachments, but it can also add risk if it auto completes addresses or drafts replies to the wrong thread. A final human check before sending still matters.",
  },
];

export function AiEmailArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          A law firm can use AI to sort and prioritise incoming email, summarise
          long threads, draft replies to routine questions and pull out
          deadlines and tasks. To do it safely, use tools under a business
          contract with proper data protection terms, keep a person in charge of
          anything sent to a client, set clear rules on what AI may do on its
          own and check that settings and permissions match the firm&apos;s
          policy.
        </p>
      </QuickAnswer>

      <ArticleSection title="Why Is Email Such a Time Drain for Law Firms?">
        <p>
          Email is where most legal work is requested, discussed and agreed, so
          it never stops. A{" "}
          <a
            href="https://pro.bloomberglaw.com/insights/business-of-law/roi-of-project-management-tools-for-attorneys/"
            className={blogInlineLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            Bloomberg Law survey of over 2,500 attorneys
          </a>{" "}
          found that 84% rely on email for task management, and a{" "}
          <a
            href="https://www.nonbillable.co.uk/news/lawyers-lose-three-hours-a-day-ai-thinks-it-can-get-them-back"
            className={blogInlineLinkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            2025 report on legal and accounting professionals
          </a>{" "}
          put the average at 110 email interactions per day.
        </p>
        <p>
          Much of that is routine: confirming receipt, answering the same
          questions, chasing documents, forwarding to the right person. It
          needs attention, but rarely a lawyer&apos;s judgement.
        </p>
      </ArticleSection>

      <ArticleSection title="What Can AI Actually Do With Law Firm Email?">
        <p>
          AI is most useful for the first pass on email: reading, sorting,
          summarising and drafting. The lawyer keeps the decisions. Most firms
          can get value from five tasks.
        </p>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            <strong>Sort and prioritise.</strong> Flag urgent messages, group
            email by client or matter and separate routine inquiries from work
            that needs a lawyer.
          </li>
          <li>
            <strong>Summarise long threads.</strong> Turn a 30 message chain
            into a short overview of what was agreed and what is still open.
          </li>
          <li>
            <strong>Draft routine replies.</strong> Prepare answers to standard
            questions, document requests and scheduling, ready for a person to
            check and send.
          </li>
          <li>
            <strong>Pull out deadlines and tasks.</strong> Spot dates, requests
            and action points so they do not get lost in the inbox.
          </li>
          <li>
            <strong>Handle simple standard messages.</strong> Confirmations of
            receipt, office hours or next steps can often be automated
            completely.
          </li>
        </ol>
      </ArticleSection>

      <ArticleSection title="What Should AI Not Do With Law Firm Email?">
        <p>
          AI should not send advice, make decisions about privilege or reply to
          clients on substantive matters without a person checking first. These
          are the areas where a mistake causes real harm and where professional
          responsibility stays with the lawyer.
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>No unreviewed advice.</strong> Anything that could be read
            as legal advice needs a lawyer&apos;s review. See{" "}
            <Link
              href="/blog/who-is-liable-ai-legal-error"
              className={blogInlineLinkClass}
            >
              who is liable when AI gets a legal answer wrong
            </Link>
            .
          </li>
          <li>
            <strong>No automatic forwarding of client material</strong> to new
            recipients or outside systems.
          </li>
          <li>
            <strong>No decisions on privilege or confidentiality.</strong> The
            tool can flag, but a person decides.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="What Are the Risks of Using AI on Email?">
        <p>
          The main risks are where client data goes, mistakes in drafts, email
          sent to the wrong person and instructions hidden in incoming
          messages. All of them can be managed, but only if the firm knows
          about them before switching features on.
        </p>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            <strong>Where the data goes.</strong> An email assistant reads
            client information. The tool needs a business contract, clear terms
            on training and retention and data processing in a location the
            firm accepts. Many of these assistants are{" "}
            <Link
              href="/blog/the-ai-your-law-firm-never-chose-how-to-check-built-in-ai-features"
              className={blogInlineLinkClass}
            >
              built into software the firm already uses
            </Link>
            , so check those too, including{" "}
            <Link
              href="/blog/can-law-firms-put-client-data-into-microsoft-copilot-outlook-and-teams"
              className={blogInlineLinkClass}
            >
              Copilot in Outlook and Teams
            </Link>
            .
          </li>
          <li>
            <strong>Mistakes in drafts.</strong> AI can state facts, dates or
            amounts that are wrong but sound right. A quick read before sending
            catches most of them.
          </li>
          <li>
            <strong>Email to the wrong person.</strong> This is already the most
            common incident type. In 2023, data emailed to the wrong recipient
            was the most reported incident to the UK regulator, the ICO,
            accounting for 16% of all reports,{" "}
            <a
              href="https://beyondencryption.com/blog/data-security-an-analysis-of-the-latest-ico-findings"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              according to an analysis of ICO data
            </a>
            . AI that auto completes addresses or replies in the wrong thread
            can make this worse if nobody checks.
          </li>
          <li>
            <strong>Hidden instructions in incoming email.</strong> An AI
            assistant that reads email can be manipulated by text written to
            trick it, known as{" "}
            <a
              href="https://genai.owasp.org/llmrisk/llm01-prompt-injection/"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              prompt injection
            </a>
            . This is another reason not to let AI send or forward email on its
            own.
          </li>
        </ol>
      </ArticleSection>

      <ArticleSection title="How Do You Introduce AI Email Tools Safely?">
        <p>
          Start small, choose the tool carefully, write down the rules and
          measure the result. Most firms can do this in a few weeks without a
          technical team.
        </p>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            <strong>Find where email time goes.</strong> Ask the team which
            types of email take the most time and which are the same every
            time.
          </li>
          <li>
            <strong>Pick one or two tasks first</strong>, such as sorting and
            summarising, rather than everything at once.
          </li>
          <li>
            <strong>Check the tool&apos;s terms</strong> on data processing,
            training, retention and location before any client email goes in.
            Our{" "}
            <Link
              href="/blog/5-questions-to-ask-before-adopting-any-legal-ai-tool"
              className={blogInlineLinkClass}
            >
              five questions to ask before adopting any legal AI tool
            </Link>{" "}
            cover this.
          </li>
          <li>
            <strong>Set the rules.</strong> What AI may do on its own, what
            needs review and what it must never do. Add them to your{" "}
            <Link
              href="/blog/ai-policy-small-law-firm"
              className={blogInlineLinkClass}
            >
              AI policy
            </Link>
            .
          </li>
          <li>
            <strong>Check permissions and settings</strong> so the assistant
            only sees what each person is allowed to see.
          </li>
          <li>
            <strong>Train the team</strong> on reviewing drafts, spotting
            mistakes and checking recipients before sending.
          </li>
          <li>
            <strong>Measure the time saved</strong> after a few weeks and adjust
            from there.
          </li>
        </ol>
      </ArticleSection>

      <ArticleSection title="What Does This Look Like in Practice?">
        <p>
          In both of our published case studies, email was one of the main
          sources of saved time. A{" "}
          <Link
            href="/case-studies/poland-law-firm-6-hours"
            className={blogInlineLinkClass}
          >
            17 person law firm in Poland
          </Link>{" "}
          automated routine email handling, so lawyers only step in when a
          message needs their judgement. A{" "}
          <Link
            href="/case-studies/denmark-law-firm-6-7-hours"
            className={blogInlineLinkClass}
          >
            9 person law firm in Denmark
          </Link>{" "}
          brought AI into email alongside case reviews and invoicing, and
          learned how to use it safely under GDPR. The firms save around 6 and
          6 to 7 hours per week respectively.
        </p>
      </ArticleSection>

      <ArticleFaq faqs={aiEmailFaqs} />

      <RelatedReading
        slugs={relatedBySlug["how-can-a-law-firm-use-ai-to-manage-email-safely"]}
      />

      <ArticleCta>
        <p>
          Email is one of the fastest places for a law firm to save time with
          AI, as long as client data stays protected and a person stays in
          charge of what goes out. Start with sorting, summaries and routine
          drafts, set clear rules and check the tool before client email goes
          in.
        </p>
        <p>
          Want to know how much time your firm could save on email, and which
          tools are safe for your client data? Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          maps it in a single call, and we guarantee at least 5 hours saved per
          week.
        </p>
      </ArticleCta>

      <ArticleSection title="Sources">
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <a
              href="https://pro.bloomberglaw.com/insights/business-of-law/roi-of-project-management-tools-for-attorneys/"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              Bloomberg Law: ROI of project management tools for attorneys
            </a>
          </li>
          <li>
            <a
              href="https://www.nonbillable.co.uk/news/lawyers-lose-three-hours-a-day-ai-thinks-it-can-get-them-back"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              Nonbillable: Laurel State of Work 2025 report
            </a>
          </li>
          <li>
            <a
              href="https://beyondencryption.com/blog/data-security-an-analysis-of-the-latest-ico-findings"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              Beyond Encryption: Analysis of ICO data security incident trends
              2023
            </a>
          </li>
          <li>
            <a
              href="https://ico.org.uk/action-weve-taken/data-security-incident-trends/"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              ICO: Data security incident trends
            </a>
          </li>
          <li>
            <a
              href="https://genai.owasp.org/llmrisk/llm01-prompt-injection/"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              OWASP: LLM01 Prompt injection
            </a>
          </li>
        </ul>
      </ArticleSection>
    </>
  );
}

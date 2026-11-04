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

export const aiLabsConsultantsFaqs: BlogFaq[] = [
  {
    q: "Should a law firm avoid consultancies linked to AI labs?",
    a: "Not necessarily. They may be a good fit for larger technical projects. The key is to know about any commercial ties and weigh the advice accordingly.",
  },
  {
    q: "Are AI models becoming interchangeable?",
    a: "For many everyday legal tasks, several leading models perform well. Differences in data terms, security, integration and price often matter more to a law firm than small differences in model quality.",
  },
  {
    q: "Does independence matter for a firm that only uses Microsoft 365 Copilot?",
    a: "Yes. Even then, decisions about settings, permissions, web search and which other tools to add benefit from advice that is not tied to a particular vendor.",
  },
  {
    q: "What should independent AI advice include for a law firm?",
    a: "A review of where time is lost, tool recommendations matched to those workflows, a check of each tool's data protection and confidentiality terms, and a clear plan the firm owns.",
  },
];

export function AiLabsConsultantsArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          The companies that build AI models are moving into consulting. In
          2026, OpenAI launched its Deployment Company, Anthropic launched an
          enterprise services firm called Ode with private equity partners, and
          the Financial Times reported plans for an Anthropic consultancy in
          Europe. For most small and midsize law firms, these ventures will not
          be the direct provider. But they change one question every firm should
          ask: does the person advising us benefit from which AI tool we choose?
        </p>
      </QuickAnswer>

      <ArticleSection title="What Is Happening?">
        <p>
          AI model makers are building their own services businesses that send
          engineers into client organisations to design and deploy AI. Until
          recently, they mostly sold access to their models and left
          implementation to consultants and software companies.
        </p>
        <p>Three moves in 2026 show the shift:</p>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            <strong>OpenAI Deployment Company (May 2026).</strong> OpenAI{" "}
            <a
              href="https://openai.com/index/openai-launches-the-deployment-company"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              announced
            </a>{" "}
            a new company with more than $4 billion in initial investment, whose
            engineers embed with customers to redesign workflows and build AI
            systems. It also agreed to acquire the consulting firm Tomoro,
            adding about 150 engineers and deployment specialists.
          </li>
          <li>
            <strong>Ode with Anthropic (July 2026).</strong> Anthropic,
            Blackstone and Hellman &amp; Friedman{" "}
            <a
              href="https://www.businesswire.com/news/home/20260715205134/en/"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              introduced Ode
            </a>
            , an AI services firm aimed at helping mid-sized companies adopt AI.
          </li>
          <li>
            <strong>A planned European consultancy (reported October 2026).</strong>{" "}
            The Financial Times reported that Anthropic and the private equity
            firm Hg plan a consultancy with hubs in London and Berlin, focused
            on software companies and other white collar sectors. Both companies
            declined to comment, so this remains a report rather than a
            confirmed launch,{" "}
            <a
              href="https://thenextweb.com/news/anthropic-hg-european-ai-consultancy"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              according to The Next Web
            </a>
            .
          </li>
        </ol>
      </ArticleSection>

      <ArticleSection title="Why Are AI Labs Doing This?">
        <p>
          AI labs are moving into services because the model is rarely what
          holds companies back. The hard part is redesigning workflows,
          preparing data, training people and keeping systems running after
          launch. By offering that work themselves, the labs can speed up
          adoption of their own models.
        </p>
        <p>
          For law firms, this is a useful signal. If even the companies that
          build the most advanced models say the real work lies in processes and
          people, then choosing a tool is only the start. How it is set up,
          governed and checked matters more.
        </p>
      </ArticleSection>

      <ArticleSection title="Will Small Law Firms Use These Services?">
        <p>
          Most small and midsize law firms are unlikely to work directly with
          these new ventures, which are aimed at larger and mid-sized companies
          and software businesses. A firm of 10 or 20 people will usually adopt
          AI through tools it buys, such as features in Microsoft 365 or
          dedicated legal AI products. That is the same territory as{" "}
          <Link
            href="/blog/can-law-firms-put-client-data-into-microsoft-copilot-outlook-and-teams"
            className={blogInlineLinkClass}
          >
            putting client data into Microsoft Copilot
          </Link>
          .
        </p>
        <p>
          That does not make the trend irrelevant. It shapes the market small
          firms buy from, and it makes one question more important than before.
        </p>
      </ArticleSection>

      <ArticleSection title="Why Does Independent Advice Matter More Now?">
        <p>
          Independent advice matters more because more of the people offering AI
          advice now have a financial interest in which model or tool a firm
          chooses. A consultancy owned or backed by a model maker will naturally
          build on that company&apos;s technology. That is not wrong, but the
          client should know it. For how to choose a provider with that in mind,
          see{" "}
          <Link
            href="/blog/how-to-choose-an-ai-consultant-for-your-law-firm"
            className={blogInlineLinkClass}
          >
            how to choose an AI consultant for your law firm
          </Link>
          .
        </p>
        <p>
          For law firms, the stakes are higher than for most businesses:
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Confidentiality.</strong> The choice of tool decides where
            client information goes and under which terms.
          </li>
          <li>
            <strong>Privilege.</strong> Some tools keep information in a
            controlled environment and others do not, which can affect whether
            privilege is preserved.
          </li>
          <li>
            <strong>Lock-in.</strong> A firm that builds its processes around
            one vendor may find it hard and costly to change later.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="How Can a Law Firm Check Whether Advice Is Independent?">
        <p>
          A firm can check independence by asking direct questions about
          commercial ties before taking advice. A trustworthy adviser will
          answer them openly.
        </p>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            <strong>
              Do you earn commission or referral fees from any AI vendor?
            </strong>
          </li>
          <li>
            <strong>
              Are you a certified partner or reseller of any AI provider?
            </strong>
          </li>
          <li>
            <strong>
              Is your company owned by, or funded by, an AI vendor?
            </strong>
          </li>
          <li>
            <strong>
              When did you last recommend a tool from a provider you have no
              relationship with?
            </strong>
          </li>
          <li>
            <strong>
              Would you tell us if we don&apos;t need AI for this task?
            </strong>
          </li>
          <li>
            <strong>
              Who owns the setup, documents and processes once the work is done?
            </strong>
          </li>
        </ol>
        <p>
          Ties to a vendor do not automatically make advice bad. But a firm
          should know about them before it relies on the recommendation.
        </p>
      </ArticleSection>

      <ArticleSection title="How Can a Small Firm Avoid Lock-In?">
        <p>
          A small firm avoids lock-in by keeping its documents and know-how in
          systems it controls and by choosing tools on terms it can leave. It
          does not need to build complex technical setups to do this.
        </p>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            <strong>
              Keep client documents, templates and precedents
            </strong>{" "}
            in the firm&apos;s own document management system, not only inside
            an AI tool.
          </li>
          <li>
            <strong>Write down your processes</strong>, so the way your firm
            works does not live only inside one vendor&apos;s product.
          </li>
          <li>
            <strong>Check exit terms</strong> before signing: how data is
            returned or deleted and how much notice is needed.
          </li>
          <li>
            <strong>Prefer fewer vendors handling client data.</strong> Every
            additional provider is another contract, another set of terms and
            another risk to manage.
          </li>
          <li>
            <strong>Review tools once a year</strong> to confirm they still fit,
            rather than letting them become permanent by default.
          </li>
        </ol>
      </ArticleSection>

      <ArticleFaq faqs={aiLabsConsultantsFaqs} />

      <RelatedReading
        slugs={
          relatedBySlug[
            "ai-labs-are-becoming-consultants-what-does-that-mean-for-law-firms"
          ]
        }
      />

      <ArticleCta>
        <p>
          AI labs moving into consulting is a sign that the real work of AI lies
          in processes, people and governance, not in the model itself. For
          small and midsize law firms, the practical takeaway is simple: before
          taking AI advice, ask who benefits from the tool you choose, keep your
          know-how in systems you control, and choose tools on terms you can
          walk away from.
        </p>
        <p>
          Worthclock is independent. We don&apos;t sell AI software or take
          commission from vendors, so our recommendations are based only on what
          fits your firm. Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          maps your workflows and gives you a clear, safe plan.
        </p>
      </ArticleCta>

      <ArticleSection title="Sources">
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <a
              href="https://openai.com/index/openai-launches-the-deployment-company"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenAI: OpenAI launches the Deployment Company (11 May 2026)
            </a>
          </li>
          <li>
            <a
              href="https://www.businesswire.com/news/home/20260715205134/en/"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              Business Wire: Anthropic, Blackstone and Hellman &amp; Friedman
              introduce Ode with Anthropic (15 July 2026)
            </a>
          </li>
          <li>
            <a
              href="https://techinformed.com/anthropic-targets-midsize-companies-with-blackstone-and-goldman-sachs/"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              TechInformed: Anthropic targets midsize companies
            </a>
          </li>
          <li>
            <a
              href="https://thenextweb.com/news/anthropic-hg-european-ai-consultancy"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              The Next Web: Anthropic and Hg reportedly plan AI consultancy for
              European firms (23 October 2026)
            </a>
          </li>
        </ul>
      </ArticleSection>
    </>
  );
}

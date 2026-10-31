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

export const microsoftCopilotClientDataFaqs: BlogFaq[] = [
  {
    q: "Is Microsoft 365 Copilot safe for privileged documents?",
    a: "It can be used safely when the firm's business terms apply, personal accounts are excluded and permissions are tight. The contract alone does not make it safe if documents are overshared internally.",
  },
  {
    q: "Does Microsoft train its AI on our client data?",
    a: "Microsoft says prompts, responses and data accessed through Microsoft Graph are not used to train foundation models when Copilot is used by organisations under its business terms.",
  },
  {
    q: "Did the Upper Tribunal approve Microsoft Copilot?",
    a: "No. In UK v Secretary of State for the Home Department, it named Microsoft Copilot as an example of a closed tool that does not place information in the public domain. That is a useful contrast with open tools, not a blanket approval of every setup.",
  },
  {
    q: "Is the free Copilot app the same as Microsoft 365 Copilot?",
    a: "No. The consumer Copilot app used with a personal account is not covered by the firm's business agreement with Microsoft.",
  },
  {
    q: "Do we need to tell clients we use Copilot?",
    a: "It depends on your jurisdiction's rules and your engagement terms. The CCBE's guidance suggests being open with clients where an informed client would reasonably have reservations about how AI is used.",
  },
];

export function MicrosoftCopilotClientDataArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          Often yes, but only under the right conditions. When a firm uses
          Microsoft 365 Copilot or Copilot Chat through its business Microsoft
          365 account, Microsoft acts as a data processor under its Data
          Protection Addendum, and prompts, responses and data accessed through
          Microsoft Graph are not used to train foundation models. The real
          risks lie elsewhere: staff using personal accounts, web search running
          under different terms, data processed outside the EU in some cases,
          and Copilot surfacing files that were shared too widely. Firms should
          check settings and permissions before client data goes in.
        </p>
      </QuickAnswer>

      <ArticleSection title="What Is Microsoft Copilot?">
        <p>
          Microsoft Copilot is the name for several different AI assistants, and
          the data protection depends on which one is used. Microsoft 365
          Copilot is built into Word, Outlook, Teams and other work apps.
          Copilot Chat is a chat assistant available to work accounts. The
          consumer Copilot app is used with a personal Microsoft account. They
          are not covered by the same terms.
        </p>
        <p>
          This distinction matters more than anything else in this article. A
          lawyer who opens Copilot on a personal phone, signed in with a
          personal account, is not using the version covered by the firm&apos;s
          contract with Microsoft. For the wider pattern of AI features that
          arrive inside software firms already pay for, see{" "}
          <Link
            href="/blog/the-ai-your-law-firm-never-chose-how-to-check-built-in-ai-features"
            className={blogInlineLinkClass}
          >
            how to check built-in AI features
          </Link>
          .
        </p>
      </ArticleSection>

      <ArticleSection title="What Does Microsoft Promise About Client Data?">
        <p>
          For organisations, Microsoft says Copilot is covered by its Data
          Protection Addendum and Product Terms, with Microsoft acting as a data
          processor, and that prompts and responses are not used to train
          foundation models. Microsoft calls these commitments enterprise data
          protection.
        </p>
        <p>
          According to Microsoft&apos;s documentation on enterprise data
          protection:
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            Use of Copilot by organisations is covered by the Microsoft Products
            and Services Data Protection Addendum and the Microsoft Product
            Terms, with Microsoft acting as a data processor.
          </li>
          <li>
            Prompts and responses get the same contractual commitments that
            apply to emails in Exchange and files in SharePoint.
          </li>
          <li>
            Prompts, responses and data accessed through Microsoft Graph are not
            used to train foundation models.
          </li>
        </ul>
        <p>
          Microsoft&apos;s privacy documentation for Microsoft 365 Copilot adds
          that prompts and responses are stored in line with the
          organisation&apos;s other Microsoft 365 content, encrypted at rest,
          and can be managed with retention policies in Microsoft Purview.
        </p>
        <p>
          That is a stronger starting point than most consumer AI tools offer.
          It is also exactly the kind of distinction the Upper Tribunal drew in{" "}
          <em>UK v Secretary of State for the Home Department</em> [2026] UKUT
          81 (IAC), where it contrasted open AI tools with closed tools that do
          not place information in the public domain, naming Microsoft Copilot
          as an example. But that remark does not approve every Copilot setup,
          and the SRA&apos;s August 2026 warning notice reminds firms that paid
          AI tools can also pose risks to confidentiality. Our guide on{" "}
          <Link
            href="/blog/is-it-safe-to-use-ai-with-privileged-client-information"
            className={blogInlineLinkClass}
          >
            using AI with privileged client information
          </Link>{" "}
          covers the broader confidentiality question.
        </p>
      </ArticleSection>

      <ArticleSection title="Where Are the Gaps?">
        <p>
          The main gaps are personal accounts, web search, processing location
          and oversharing inside the firm&apos;s own systems. None of these are
          failures of the contract. They are configuration and governance issues
          the firm controls.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          1. Personal accounts
        </h3>
        <p>
          Microsoft&apos;s support pages say Copilot Chat provides enterprise
          data protection when the user is signed in with a work or school
          account. If staff use Copilot with a personal account, the firm cannot
          rely on its business terms.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          2. Web search
        </h3>
        <p>
          When Copilot searches the web, Microsoft generates a query and sends
          it to Bing. Microsoft&apos;s enterprise data protection page says web
          queries are handled under the Microsoft Services Agreement and Privacy
          Statement, with Microsoft acting as an independent data controller for
          Bing search. If a prompt includes client details, part of it may end
          up in a web query handled under different terms.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          3. Where data is processed
        </h3>
        <p>
          For EU customers, Microsoft says Microsoft 365 Copilot is an EU Data
          Boundary service. But its documentation also notes that the EU Data
          Boundary does not apply to web search queries, and that models
          provided by Anthropic are currently excluded from it. Commentators
          also describe a &quot;flex routing&quot; setting that can allow
          processing outside the EU during periods of high demand. Firms with EU
          data residency requirements should check how this is set in their own
          admin centre.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          4. Oversharing
        </h3>
        <p>
          This is the gap most firms underestimate. Microsoft says Copilot only
          surfaces data a user already has at least view permission for. Its
          SharePoint guidance for Copilot also warns that Copilot uses all data
          a user has access to, which may include broadly shared files the user
          is unaware of, so it can appear to expose content that was overshared.
        </p>
        <p>
          In a law firm, that could mean a trainee asking Copilot a general
          question and getting an answer built from a matter they should never
          have seen, because a folder was shared with &quot;everyone&quot; years
          ago.
        </p>
      </ArticleSection>

      <ArticleSection title="What About Outlook and Teams?">
        <p>
          Copilot in Outlook and Teams works under the same enterprise terms,
          but it touches some of the most sensitive material a firm holds:
          client email threads and recorded meetings. That makes permissions,
          retention and client expectations especially important.
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Outlook.</strong> Copilot can summarise threads and draft
            replies. Email threads often contain privileged advice, so the firm
            should be confident about who can access shared mailboxes before
            Copilot is switched on for them.
          </li>
          <li>
            <strong>Teams.</strong> Meeting recordings, transcripts and AI
            summaries become new records of client conversations. Decide whether
            client meetings may be recorded and transcribed at all, how clients
            are told, and how long those records are kept.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="How Should a Firm Check Copilot Before Using It With Client Data?">
        <p>
          A firm should confirm its licence and terms, lock down personal
          account use, review web search and data location settings, fix
          oversharing and record its decision. These steps can usually be done
          by a managing partner working with the firm&apos;s IT provider. They
          sit alongside the same{" "}
          <Link
            href="/blog/5-questions-to-ask-before-adopting-any-legal-ai-tool"
            className={blogInlineLinkClass}
          >
            diligence questions before adopting any legal AI tool
          </Link>
          .
        </p>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            <strong>Confirm the licence and terms.</strong> Check which Copilot
            products the firm is licensed for and that they are covered by
            Microsoft&apos;s Data Protection Addendum and Product Terms.
          </li>
          <li>
            <strong>Require work accounts.</strong> Tell staff that client
            information may only be used with Copilot when signed in with a firm
            account, never a personal one.
          </li>
          <li>
            <strong>Review web search.</strong> Decide whether web search should
            be available in Copilot for client work, and tell staff not to
            include client details in prompts that may trigger it.
          </li>
          <li>
            <strong>Check data location settings.</strong> If the firm needs EU
            processing, ask the IT provider to check the EU Data Boundary
            position and any routing settings in the admin centre.
          </li>
          <li>
            <strong>Fix oversharing first.</strong> Run SharePoint and OneDrive
            access reviews and remove &quot;everyone&quot; style sharing from
            client matter folders before rolling Copilot out widely.
          </li>
          <li>
            <strong>Set rules for Teams recordings.</strong> Decide when client
            meetings may be recorded or transcribed and how clients will be
            informed.
          </li>
          <li>
            <strong>Set retention.</strong> Use retention policies for Copilot
            interactions and meeting records in line with the firm&apos;s file
            retention rules.
          </li>
          <li>
            <strong>Assess and record the decision.</strong> Consider whether a
            data protection impact assessment is needed and keep a dated record
            of what was checked and decided.
          </li>
        </ol>
      </ArticleSection>

      <ArticleFaq faqs={microsoftCopilotClientDataFaqs} />

      <RelatedReading
        slugs={
          relatedBySlug[
            "can-law-firms-put-client-data-into-microsoft-copilot-outlook-and-teams"
          ]
        }
      />

      <ArticleCta>
        <p>
          Microsoft 365 Copilot comes with much stronger commitments than most
          AI tools a lawyer might pick up on their own. But the contract only
          protects client data if the firm uses the right accounts, understands
          where web search and processing happen, and fixes oversharing before
          Copilot starts drawing on its files. Those are decisions to make
          before rollout, not after.
        </p>
        <p>
          Not sure whether your firm&apos;s Microsoft 365 setup is ready for
          Copilot, or which other tools your people are using? Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          maps what is in use and gives you a clear, safe plan for each tool.
        </p>
      </ArticleCta>

      <ArticleSection title="Sources">
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <a
              href="https://learn.microsoft.com/en-us/copilot/microsoft-365/enterprise-data-protection"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft: Enterprise data protection in Microsoft Copilot and
              Copilot Chat
            </a>
          </li>
          <li>
            <a
              href="https://learn.microsoft.com/DeployOffice/privacy/microsoft-365-copilot"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft: Data, privacy and security for Microsoft 365 Copilot
            </a>
          </li>
          <li>
            <a
              href="https://learn.microsoft.com/en-us/sharepoint/sharepoint-copilot-best-practices"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft: Copilot for Microsoft 365 best practices with SharePoint
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/en-US/Privacy/data-protection-when-using-microsoft-365-copilot-chat-for-work-or-school"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Support: Data protection when using Microsoft 365
              Copilot Chat for work or school
            </a>
          </li>
          <li>
            <a
              href="https://nordflux.de/en/insights/copilot-eu-data-boundary-flex-routing"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              Nordflux: Microsoft Copilot and the EU Data Boundary, Flex Routing
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
              href="https://www.advokatforeningen.no/contentassets/185dd73ac1e14031ac016b1567e4b7a6/ccbe-guide-on-the-use-of-the-use-of-generative-ai-for-lawyers.pdf"
              className={blogInlineLinkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              CCBE Guide on the use of generative AI by lawyers
            </a>
          </li>
        </ul>
        <p className="text-sm text-muted">
          Microsoft&apos;s products, settings and terms change often. This
          article reflects Microsoft&apos;s published documentation as of
          October 2026. Check the current terms for your own licence before
          relying on them.
        </p>
      </ArticleSection>
    </>
  );
}

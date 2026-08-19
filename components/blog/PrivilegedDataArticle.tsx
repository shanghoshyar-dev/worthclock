import Link from "next/link";
import type { BlogFaq } from "@/lib/blog";
import {
  ArticleCta,
  ArticleFaq,
  ArticleSection,
  QuickAnswer,
} from "@/components/blog/ArticleLayout";

export const privilegedFaqs: BlogFaq[] = [
  {
    q: "Is ChatGPT safe to use for legal work?",
    a: "It depends on the plan and settings. Free consumer versions are riskier for privileged content than enterprise versions with data controls, and neither is purpose-built for legal confidentiality requirements the way dedicated legal AI platforms are.",
  },
  {
    q: "Do I need a specific \"legal AI\" tool, or can I use general AI assistants?",
    a: "General assistants can be safe for non-sensitive tasks, drafting a generic email, summarizing public information. For anything touching privileged client content, tools built specifically for legal use with clear data handling terms are the safer choice.",
  },
  {
    q: "Who's responsible if an AI tool exposes client data?",
    a: "Ultimately, the firm and the attorney remain responsible for protecting client confidentiality, regardless of which tool was used. This is exactly why tool selection matters as much as tool adoption.",
  },
];

export function PrivilegedDataArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          No AI tool is automatically safe with privileged client data, safety
          depends entirely on how the tool handles data, not on the tool itself.
          The risk isn&apos;t AI in general, it&apos;s specific practices:
          feeding case content into consumer-grade tools, unclear data retention
          policies, and platforms without EU data residency or GDPR-compliant
          infrastructure. Purpose-built legal AI platforms with clear data
          handling terms are generally safe. Free consumer chatbots used
          carelessly are not.
        </p>
      </QuickAnswer>

      <ArticleSection title="Why This Is the #1 Concern Holding Firms Back">
        <p>
          Confidentiality risk is consistently one of the top reasons law firms
          hesitate to adopt AI. It&apos;s a reasonable concern, not resistance
          to technology. Attorneys have a professional obligation to protect
          privileged information, and that obligation doesn&apos;t pause because
          a tool is convenient.
        </p>
        <p>
          The mistake most firms make isn&apos;t using AI, it&apos;s using the
          wrong AI the wrong way.
        </p>
      </ArticleSection>

      <ArticleSection title="Where the Real Risk Comes From">
        <p>
          <strong className="font-semibold text-ink">
            1. Pasting case content into consumer tools.
          </strong>{" "}
          Typing client details into a free, general-purpose chatbot without
          checking its data policy is the single riskiest habit in legal AI
          adoption. Many consumer tools use input data to further train their
          models unless you&apos;ve specifically opted out or are on an
          enterprise plan with different terms.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            2. Unclear data retention.
          </strong>{" "}
          Some platforms retain uploaded documents indefinitely, others delete
          them immediately after processing. If a vendor can&apos;t clearly
          explain their retention policy, that&apos;s a signal to look elsewhere.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            3. No EU data residency.
          </strong>{" "}
          For firms operating under GDPR, where client data is physically stored
          and processed matters. Some legal AI platforms now specifically offer
          EU data residency for exactly this reason, it&apos;s become a genuine
          differentiator in vendor selection.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            4. Overtrust in AI-generated output.
          </strong>{" "}
          Separate from data exposure, there&apos;s a growing pattern of
          AI-generated content containing fabricated case citations or details
          making it into real filings. That&apos;s a different risk (accuracy,
          not confidentiality), but it stems from the same root cause: treating
          AI output as final rather than a draft that needs review.
        </p>
      </ArticleSection>

      <ArticleSection title='What "Safe" Actually Looks Like'>
        <p>
          A defensible approach to AI and privileged information generally
          includes:
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            Using tools with a written, specific data handling and retention
            policy, not a vague privacy page
          </li>
          <li>
            Confirming whether the vendor trains its models on your input data,
            and opting out if so
          </li>
          <li>
            Prioritizing tools with EU data residency if your firm operates under
            GDPR
          </li>
          <li>
            Keeping a human review step before any AI-assisted output leaves the
            firm
          </li>
          <li>
            Avoiding pasting full case files into general-purpose tools not built
            for legal use
          </li>
        </ul>
      </ArticleSection>

      <ArticleFaq faqs={privilegedFaqs} />

      <ArticleCta>
        <p>
          The question isn&apos;t &quot;is AI safe&quot;, it&apos;s &quot;is this
          specific tool, used this specific way, safe for this specific type of
          data.&quot; That&apos;s a workflow-by-workflow judgment, not a blanket
          yes or no, and it&apos;s exactly the kind of assessment most firms
          haven&apos;t had time to make tool by tool.
        </p>
        <p>
          Not sure which of your current or planned AI tools meet that bar? Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          reviews your firm&apos;s workflows and flags exactly where
          confidentiality risk exists, and which tools are actually safe to use.
        </p>
      </ArticleCta>
    </>
  );
}

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

export const chooseAiConsultantFaqs: BlogFaq[] = [
  {
    q: "Do we need an AI consultant at all?",
    a: "Not always. Some firms can make good progress with a clear internal policy and careful tool selection. A consultant helps when the firm lacks the time or expertise to assess tools and workflows itself.",
  },
  {
    q: "Should an AI consultant be a lawyer?",
    a: "Not necessarily. Practical AI adoption is mostly about workflows, tools and data handling. For formal legal advice on AI regulation, use a lawyer.",
  },
  {
    q: "How long does an AI assessment take?",
    a: "It depends on the provider. Some offer assessments in a single session followed by a written plan. Others run discovery over several weeks.",
  },
  {
    q: "Can a small firm afford an AI consultant?",
    a: "Yes, if it chooses a provider whose scope and price match its size. Fixed scope assessments are designed for exactly this.",
  },
];

const fitRows = [
  {
    situation: "We don't know where AI would help us",
    fit: "Legal focused consultancy, starting with an assessment",
  },
  {
    situation: "We know which tools we want but need help setting them up",
    fit: "Legal focused consultancy with implementation support",
  },
  {
    situation: "We need a custom system built",
    fit: "AI engineering firm",
  },
  {
    situation: "We need legal advice on AI regulation",
    fit: "Law firm with a technology practice",
  },
  {
    situation: "We're a large group running a firm wide programme",
    fit: "Large professional services firm",
  },
] as const;

export function ChooseAiConsultantArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          The right AI consultant depends on what your firm needs. Legal focused
          AI consultancies help firms choose and introduce tools. AI engineering
          firms build custom systems. Law firms with technology practices give
          formal legal and regulatory advice. Large professional services firms
          run enterprise transformation programmes. A small or midsize firm that
          wants to start using AI safely usually needs a legal focused consultant
          with a clear scope and price, not a large transformation project.
        </p>
      </QuickAnswer>

      <ArticleSection title="What Does an AI Consultant for Law Firms Do?">
        <p>
          An AI consultant for law firms helps a legal practice decide where AI
          can save time, which tools are suitable for confidential client
          information and how to introduce them safely. Depending on the
          provider, that can range from a short assessment and plan, to hands-on
          implementation, to building custom software or giving formal legal
          advice on AI regulation. See also{" "}
          <Link
            href="/ai-consulting-for-law-firms"
            className={blogInlineLinkClass}
          >
            AI consulting for law firms
          </Link>
          .
        </p>
      </ArticleSection>

      <ArticleSection title="What Are the Main Types of AI Consultant?">
        <p>
          There are four main types of provider, and each is built for a
          different need. Choosing the wrong type is the most common mistake
          firms make, because it leads either to a project far bigger than
          needed or to advice that does not cover the real question.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          1. Legal focused AI consultancies
        </h3>
        <p>
          These firms specialise in AI adoption for law firms and legal
          departments. They typically assess workflows, recommend tools, help
          with implementation and train staff. Some offer short fixed scope
          assessments, others run implementation programmes over several weeks,
          and some focus on broader strategy and change.
        </p>
        <p>
          <strong>Best for:</strong> firms that want to start using AI or get
          more value from tools they already have.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          2. AI engineering and data firms
        </h3>
        <p>
          These firms build custom AI systems, such as document processing
          pipelines, internal search tools or bespoke assistants. Many work
          across industries rather than only with law firms.
        </p>
        <p>
          <strong>Best for:</strong> larger firms with a specific technical
          project that off-the-shelf tools cannot handle, and the budget and
          internal resources to support it.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          3. Law firms with technology practices
        </h3>
        <p>
          Large and specialist law firms advise on AI regulation, data
          protection, contracts with AI vendors and regulatory investigations.
        </p>
        <p>
          <strong>Best for:</strong> formal legal advice, such as how the EU AI
          Act or GDPR applies to a specific use, or negotiating terms with a
          major vendor.
        </p>
        <h3 className="font-display text-xl tracking-tight text-ink">
          4. Large professional services firms
        </h3>
        <p>
          The big consulting and accounting firms run enterprise wide
          transformation programmes, often combining strategy, technology and
          risk assurance.
        </p>
        <p>
          <strong>Best for:</strong> large organisations with complex,
          multi-country programmes and significant budgets.
        </p>
      </ArticleSection>

      <ArticleSection title="Which Type Is Right for a Small or Midsize Law Firm?">
        <p>
          For most small and midsize law firms, a legal focused AI consultancy is
          the right starting point. These firms usually need practical help
          choosing safe tools and saving time on everyday work like email, client
          intake and document review, not custom software or enterprise
          transformation. That is also the gap behind most firms that still lack
          a real{" "}
          <Link
            href="/blog/does-your-law-firm-have-an-ai-strategy"
            className={blogInlineLinkClass}
          >
            AI strategy
          </Link>
          .
        </p>
        <p>A useful way to decide:</p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[28rem] border-collapse text-left text-[0.98rem] leading-relaxed text-ink-soft">
            <thead>
              <tr className="border-b border-line">
                <th className="py-3 pr-4 font-display text-base font-normal tracking-tight text-ink">
                  Your situation
                </th>
                <th className="py-3 font-display text-base font-normal tracking-tight text-ink">
                  Best fit
                </th>
              </tr>
            </thead>
            <tbody>
              {fitRows.map((row) => (
                <tr key={row.situation} className="border-b border-line">
                  <td className="py-3 pr-4 align-top">
                    &ldquo;{row.situation}&rdquo;
                  </td>
                  <td className="py-3 align-top">{row.fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ArticleSection>

      <ArticleSection title="What Should You Ask Before Hiring an AI Consultant?">
        <p>
          Ask about scope, price, independence, data protection, proof and what
          happens after the advice. The answers tell you quickly whether a
          provider fits your firm. These questions sit alongside the same{" "}
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
            <strong>What exactly do we get?</strong> A written plan,
            implementation, training or all three.
          </li>
          <li>
            <strong>What does it cost, and is the price fixed?</strong> Open
            ended hourly work is harder to budget for a small firm.
          </li>
          <li>
            <strong>Are you independent?</strong> Ask whether the consultant
            earns commission from any tool vendors or sells their own software.
          </li>
          <li>
            <strong>How do you handle client confidentiality and GDPR?</strong>{" "}
            A good consultant checks every tool for data processing terms,
            training on your data, retention and where data is processed.
          </li>
          <li>
            <strong>Can you show results?</strong> Ask for case studies, even
            anonymised ones, and how results were measured.
          </li>
          <li>
            <strong>Who does the implementation?</strong> Find out whether the
            consultant helps set tools up or leaves that to you.
          </li>
          <li>
            <strong>How will we know it worked?</strong> Agree in advance how
            time saved or other results will be measured.
          </li>
          <li>
            <strong>Are you giving legal advice?</strong> Most AI consultants are
            not law firms. For formal regulatory advice, you may also need a
            lawyer.
          </li>
        </ol>
      </ArticleSection>

      <ArticleSection title="How Much Does an AI Consultant Cost?">
        <p>
          Costs vary widely, from a few hundred or a few thousand euros for a
          fixed scope assessment to tens of thousands or more for multi-week
          programmes and custom builds. The type of provider is the biggest
          factor, followed by scope and firm size.
        </p>
        <p>As a rough guide:</p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong>Fixed scope assessments</strong> from legal focused
            consultancies are usually the lowest cost entry point.
          </li>
          <li>
            <strong>Implementation support</strong> is often priced per workflow
            or quoted after an assessment.
          </li>
          <li>
            <strong>Multi-week programmes</strong>, custom development and
            enterprise transformation cost significantly more and are usually
            quoted individually.
          </li>
        </ul>
        <p>
          Whatever the price, ask what is included and whether software licences
          are extra.
        </p>
      </ArticleSection>

      <ArticleSection title="What Are the Warning Signs?">
        <p>
          Be cautious with consultants who promise vague transformation, cannot
          explain how they handle client data or push a single tool for every
          problem. These are signs the advice may not fit a law firm&apos;s real
          needs.
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>No clear scope or deliverable</li>
          <li>No answer on confidentiality, GDPR or privilege</li>
          <li>Recommending tools before understanding your workflows</li>
          <li>
            Commission arrangements with vendors that are not disclosed
          </li>
          <li>
            Claims of guaranteed compliance with the EU AI Act or other laws
          </li>
        </ul>
      </ArticleSection>

      <ArticleFaq faqs={chooseAiConsultantFaqs} />

      <RelatedReading
        slugs={
          relatedBySlug["how-to-choose-an-ai-consultant-for-your-law-firm"]
        }
      />

      <ArticleCta>
        <p>
          The best AI consultant for your law firm is the one built for your
          actual need. Small and midsize firms usually get the most value from a
          legal focused consultant with a clear scope, a fixed price and a
          careful approach to client data. Larger firms with custom technical
          projects or regulatory questions may need a different type of
          provider.
        </p>
        <p>
          Worthclock offers a fixed price{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          for small and midsize European law firms, with optional implementation
          support and a guarantee of at least 5 hours saved per week. If that
          sounds like the right starting point for your firm, you can book an
          assessment below.
        </p>
      </ArticleCta>
    </>
  );
}

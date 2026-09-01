import Link from "next/link";
import type { BlogFaq } from "@/lib/blog";
import {
  ArticleCta,
  ArticleFaq,
  ArticleSection,
  QuickAnswer,
} from "@/components/blog/ArticleLayout";

export const aiDisclosureFaqs: BlogFaq[] = [
  {
    q: "Does disclosing AI use make clients trust a firm less?",
    a: "The data suggests the opposite risk is larger, staying silent and having a client find out later, especially after an incident, does more damage than routine disclosure ever would. Clients broadly want clarity, not concealment.",
  },
  {
    q: "What if a client says they don't want any AI used on their matter?",
    a: "Given that a meaningful share of clients feel this way, it's worth having a real answer ready, whether that means adjusting workflow for that specific matter or explaining clearly where AI is and isn't involved. Avoiding the question isn't a sustainable long term answer.",
  },
  {
    q: "Is this only relevant after a security incident?",
    a: "No, waiting until after an incident is exactly the failure mode the data points to. Proactive, routine disclosure before anything goes wrong is what actually builds trust, not damage control after the fact.",
  },
];

export function AiDisclosureArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          Yes. 85% of clients say law firms should disclose when AI is used on
          their matters, yet most firms currently say nothing at all. This
          isn&apos;t a small preference gap, it&apos;s becoming a factor in
          client trust and retention. Firms that stay quiet about AI use,
          especially after a security incident, are seen as indifferent rather
          than careful. A short, proactive disclosure policy costs almost
          nothing to implement and directly addresses what clients are already
          asking for.
        </p>
      </QuickAnswer>

      <ArticleSection title="Why This Matters More Than It Seems">
        <p>
          It&apos;s tempting to treat AI disclosure as a minor operational
          detail. The data suggests otherwise. Client trust in law firm
          technology is becoming a real factor in retention and revenue growth,
          not just a background consideration, and one in three clients say they
          want zero AI involved in their legal communications at all. Whether or
          not a firm agrees with that preference, it reflects genuine client
          sentiment that firms are largely not addressing.
        </p>
        <p>
          At the same time, AI use itself is accelerating. Active generative AI
          use in legal organizations nearly doubled in a single year, and 60% of
          law firms are already deploying AI across practice areas. So the gap
          isn&apos;t shrinking. Firms are using more AI while saying less about
          it.
        </p>
      </ArticleSection>

      <ArticleSection title="The Trust Gap in the Data">
        <p>
          <strong className="font-semibold text-ink">
            Clients want transparency, not necessarily less AI.
          </strong>{" "}
          The most consistent finding across recent industry research isn&apos;t
          that clients reject AI outright, it&apos;s that they want to know
          where it&apos;s being used, how it&apos;s managed, and where human
          judgment stays central. Clients are asking for clarity and confidence,
          not reinvention.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            Most firms currently offer neither.
          </strong>{" "}
          More than half of clients say their firm has never proactively
          communicated about cybersecurity, and by extension, about AI use
          generally. This silence isn&apos;t neutral. In a relationship driven
          industry where client data is the core asset being managed, saying
          nothing tends to read as indifference rather than discretion.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            The stakes are rising alongside adoption.
          </strong>{" "}
          63% of firms experienced a significant email based security breach in
          the past year. Combined with rising AI use and low disclosure rates,
          this creates exactly the kind of situation where a client discovers AI
          involvement after something goes wrong, rather than being told
          upfront, which is far more damaging to trust than routine disclosure
          would have been.
        </p>
      </ArticleSection>

      <ArticleSection title="What Proactive Disclosure Actually Looks Like">
        <p>
          This doesn&apos;t require an elaborate client facing AI policy
          document, though larger firms may eventually want one. At minimum,
          effective disclosure usually includes:
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            A brief, standard line in engagement letters noting that AI tools
            may be used to support research, drafting, or administrative tasks,
            with human review before anything reaches the client
          </li>
          <li>
            A short answer ready for any client who asks directly, rather than
            an uncomfortable pause
          </li>
          <li>
            Clarity that AI supports the work rather than replaces attorney
            judgment, since that&apos;s the specific reassurance clients seem to
            want most
          </li>
          <li>
            Consistency across the firm, so the answer doesn&apos;t depend on
            which lawyer a client happens to ask
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="What This Means for Smaller Firms">
        <p>
          This trend has largely been discussed in the context of large firms
          and formal governance programs, but the underlying client expectation
          doesn&apos;t scale down. A client at a two person firm wants the same
          clarity as a client at a 200 person firm, arguably more, since smaller
          firms often have less formal process to point to when asked. A simple,
          honest disclosure practice is one of the lowest cost, highest trust
          building moves available to any size firm.
        </p>
      </ArticleSection>

      <ArticleFaq faqs={aiDisclosureFaqs} />

      <ArticleCta>
        <p>
          The firms most exposed here aren&apos;t the ones using AI, most firms
          already are. They&apos;re the ones staying quiet about it while client
          expectations for transparency keep rising. A short, honest disclosure
          practice closes most of that gap for very little effort.
        </p>
        <p>
          Not sure how your firm&apos;s current AI usage and client communication
          would hold up to this expectation? Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          looks at your workflows and helps you build a clear, honest answer
          before a client has to ask for one.
        </p>
      </ArticleCta>
    </>
  );
}

import Link from "next/link";
import type { BlogFaq } from "@/lib/blog";
import {
  ArticleCta,
  ArticleFaq,
  ArticleSection,
  QuickAnswer,
} from "@/components/blog/ArticleLayout";

export const clientsUsingAiFaqs: BlogFaq[] = [
  {
    q: "Does this mean firms are losing clients to AI?",
    a: "Not exactly. Most of what's happening is clients answering their own simple questions rather than actively choosing AI over a lawyer for complex matters. The risk is losing the inquiries that would have led to real engagements, not losing clients who were already committed.",
  },
  {
    q: "Is this only relevant to consumer facing practice areas?",
    a: "No, though it's most visible there. Business clients are increasingly comfortable using AI for preliminary research too, including on matters that eventually do require outside counsel.",
  },
  {
    q: "How would a firm even know if this is affecting them?",
    a: "Often the clearest signal is a gradual, hard to explain decline in simple inquiry volume, without any obvious competitive cause. Asking current clients directly what they tried before calling is usually more revealing than any analytics.",
  },
];

export function ClientsUsingAiArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          Clients are increasingly using AI assistants to answer legal questions
          themselves before, or instead of, contacting a law firm. Firms often
          don&apos;t realize this is happening, because a call that never comes
          in doesn&apos;t show up anywhere. The response isn&apos;t to fight this
          trend, it&apos;s to understand what clients are now asking AI instead
          of asking a lawyer, and reposition the firm&apos;s value around the
          higher value work AI genuinely can&apos;t handle.
        </p>
      </QuickAnswer>

      <ArticleSection title="The Shift Firms Aren't Seeing">
        <p>
          The most significant shift underway isn&apos;t what firms are doing
          with AI, it&apos;s what clients are doing with AI that firms never see
          directly. Some firms are already experiencing a quiet drop in inquiries
          without realizing the cause, because the phone simply doesn&apos;t ring
          for questions a client was able to resolve on their own.
        </p>
        <p>
          This is a meaningfully different problem than typical competition.
          It&apos;s not a rival firm taking a client. It&apos;s a client never
          becoming a lead in the first place.
        </p>
      </ArticleSection>

      <ArticleSection title="Where This Is Happening Most">
        <p>
          A growing share of people now go directly to AI assistants for guidance
          on legal questions and even for recommendations on which type of legal
          help to seek, not only traditional search engines. This spans a wide
          range of legal needs, from straightforward procedural questions to more
          complex situations where someone is trying to understand their options
          before deciding whether to involve a lawyer at all.
        </p>
        <p>
          Importantly, most people using AI this way are still also using
          traditional search as part of their research. This isn&apos;t a full
          replacement of how clients find legal help, it&apos;s an additional
          step happening earlier in the process, often before a firm ever enters
          the picture.
        </p>
      </ArticleSection>

      <ArticleSection title="What This Means for Firms">
        <p>
          <strong className="font-semibold text-ink">
            Simple, informational questions are the most exposed.
          </strong>{" "}
          The kinds of questions with fairly standard answers, procedural steps,
          general rights, what typically happens next in a common situation, are
          exactly what AI assistants answer confidently and often well. If
          that&apos;s the bulk of a firm&apos;s inbound inquiries, that pipeline
          is the most at risk of quietly shrinking.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            Complex, judgment heavy situations remain a firm&apos;s strength.
          </strong>{" "}
          Clients researching a situation with real nuance, competing
          considerations, or high stakes are the ones still most likely to seek
          an actual lawyer, especially once they realize their situation
          isn&apos;t as simple as a generic answer suggested.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            Visibility in AI answers is becoming its own channel.
          </strong>{" "}
          If AI assistants are already shaping which firms clients even consider,
          firms that aren&apos;t part of those answers are effectively invisible
          to that portion of the market, regardless of how strong their
          traditional website or reputation is.
        </p>
      </ArticleSection>

      <ArticleSection title="What Firms Can Do About It">
        <ul className="list-disc space-y-3 pl-5">
          <li>
            Talk directly with existing clients about what they asked AI before
            contacting the firm, this is often the fastest way to see the pattern
            clearly
          </li>
          <li>
            Identify which parts of the firm&apos;s current inquiry volume are
            simple, informational questions versus complex matters, and treat
            them differently
          </li>
          <li>
            Make sure the firm&apos;s expertise and authority are clearly and
            specifically represented online, in a way that&apos;s easy for AI
            systems to reference accurately
          </li>
          <li>
            Reposition marketing and content around the judgment heavy work AI
            can&apos;t replace, rather than competing on basic informational
            questions AI already answers well
          </li>
        </ul>
      </ArticleSection>

      <ArticleFaq faqs={clientsUsingAiFaqs} />

      <ArticleCta>
        <p>
          The firms most affected by this shift won&apos;t be the ones that
          ignored AI, they&apos;ll be the ones that didn&apos;t notice their own
          inquiry pipeline quietly changing shape. Understanding what clients are
          already asking AI is the first step to knowing where a firm&apos;s real
          value now sits.
        </p>
        <p>
          Not sure how your firm&apos;s current tools and online presence hold up
          in this shift? Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          looks at your workflows and positioning together, not just your
          software stack.
        </p>
      </ArticleCta>
    </>
  );
}

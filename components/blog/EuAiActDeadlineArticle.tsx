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

export const euAiActDeadlineFaqs: BlogFaq[] = [
  {
    q: "Does the delay mean law firms can ignore the AI Act until 2027?",
    a: "No. Transparency obligations and the penalty regime are already active, and the classification and inventory work needed for eventual high-risk compliance doesn't get easier by waiting.",
  },
  {
    q: "Is this delay final, or could it change again?",
    a: "It's now enacted law, not a proposal, so it's more settled than the earlier speculation was. That said, regulatory timelines have shifted before, and firms serious about compliance shouldn't treat any single date as the only one that matters.",
  },
  {
    q: "What about firms that already started preparing for the original August 2026 deadline?",
    a: "That work isn't wasted. Tool inventories, risk classification, and documentation processes built now are exactly what's needed for the 2027 deadline too, the extension changes the timeline, not the underlying requirements.",
  },
];

export function EuAiActDeadlineArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          The EU AI Act&apos;s high-risk compliance deadline for standalone
          systems like legal AI tools, originally August 2, 2026, was pushed back
          to December 2, 2027 after the Digital Omnibus became law in June 2026.
          That&apos;s real breathing room. But it&apos;s not a free pass,
          transparency obligations under Article 50, covering things like AI
          content disclosure and chatbot labeling, took effect on schedule on
          August 2, 2026 and already apply. The penalty regime and enforcement
          powers are also already active. Firms treating the whole Act as
          postponed are wrong on the part that matters most right now.
        </p>
      </QuickAnswer>

      <ArticleSection title="What Actually Changed">
        <p>
          For most of 2026, the working assumption among law firms and their
          advisors was to treat August 2, 2026 as a hard, binding deadline for
          high-risk AI obligations, since the proposed delay hadn&apos;t yet
          passed. That changed. The European Parliament voted on the Digital
          Omnibus on June 16, and it became law on June 29, 2026, resetting the
          clock specifically for high-risk systems.
        </p>
        <p>
          Under the revised timeline, standalone high-risk systems under Annex
          III, the category that covers AI used in the administration of
          justice, now have until December 2, 2027 to comply. That&apos;s a
          genuine 16-month extension from where things stood earlier in the
          year.
        </p>
      </ArticleSection>

      <ArticleSection title="What Didn't Move">
        <p>
          This is the part worth being precise about, because getting it wrong
          either way creates a problem. The delay applies specifically to the
          high-risk obligations in Chapter III. Several other parts of the Act
          took effect exactly on schedule on August 2, 2026:
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            Article 50 transparency requirements, covering AI-generated content
            marking, chatbot disclosure, and deepfake labeling, including the
            kind of{" "}
            <Link
              href="/blog/should-your-firm-tell-clients-when-youre-using-ai-on-their-matter"
              className={blogInlineLinkClass}
            >
              client-facing AI disclosure
            </Link>{" "}
            questions firms already face
          </li>
          <li>
            GPAI provider obligations for general-purpose AI models
          </li>
          <li>
            The penalty regime and AI Office enforcement powers, meaning the
            legal machinery for enforcement is now live, even though the biggest
            substantive obligations for high-risk systems have more runway
          </li>
        </ul>
        <p>
          Separately, prohibitions on certain AI practices have applied since
          February 2025 and were never part of the delay conversation at all.
        </p>
      </ArticleSection>

      <ArticleSection title={`Why the Extension Doesn't Mean "Wait and See"`}>
        <p>
          It&apos;s tempting to read a 16-month delay as permission to
          deprioritize this entirely. That would be a mistake for a few concrete
          reasons.
        </p>
        <p>
          First, the extension is a backstop, not a target. Firms that use the
          added time to actually build compliance capacity, tool inventories,
          risk classification, documentation processes, are in a fundamentally
          different position by late 2027 than firms that simply forgot about it
          for a year and a half. That work is the same foundation as having a
          real{" "}
          <Link
            href="/blog/does-your-law-firm-have-an-ai-strategy"
            className={blogInlineLinkClass}
          >
            AI strategy
          </Link>
          , not a stack of unused tools.
        </p>
        <p>
          Second, the technical standards required to fully implement compliance
          may not be finalized until closer to the new deadline, which means
          firms that start early get more time to adjust as guidance solidifies,
          rather than scrambling once standards are locked in.
        </p>
        <p>
          Third, and most practically, the classification question hasn&apos;t
          gone away. Whether a firm&apos;s AI tools count as high-risk under
          Annex III still depends on what they&apos;re actually used for, legal
          interpretation, case outcome prediction, document analysis feeding into
          decisions, and firms still need to work that out regardless of when the
          compliance deadline lands. The same{" "}
          <Link
            href="/blog/5-questions-to-ask-before-adopting-any-legal-ai-tool"
            className={blogInlineLinkClass}
          >
            diligence questions before adopting tools
          </Link>{" "}
          still apply.
        </p>
      </ArticleSection>

      <ArticleSection title="What Still Deserves Attention Right Now">
        <p>
          Given where things actually stand as of today, a reasonable priority
          list looks like this:
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            Check whether Article 50 applies to anything client-facing your firm
            uses, since that&apos;s already enforceable, not deferred
          </li>
          <li>
            Build an honest inventory of every AI tool in use, including ones
            embedded in case management, CRM, or research platforms, since this
            is the foundation for every later step regardless of deadline
          </li>
          <li>
            Do a preliminary risk classification pass, so the firm knows roughly
            where it stands rather than assuming
          </li>
          <li>
            Treat December 2027 as real, not distant, sixteen months disappears
            faster than it sounds, especially for firms that haven&apos;t started
            anything yet
          </li>
        </ul>
      </ArticleSection>

      <ArticleFaq faqs={euAiActDeadlineFaqs} />

      <RelatedReading
        slugs={
          relatedBySlug[
            "the-eu-ai-act-deadline-got-pushed-back-heres-what-still-applies-right-now"
          ]
        }
      />

      <ArticleCta>
        <p>
          The headline deadline moved, but the underlying obligation didn&apos;t
          disappear, and part of the Act is already enforceable today. Firms that
          use this extension to actually build compliance capacity are in a
          different position by 2027 than firms that mistake a delay for a
          dismissal.
        </p>
        <p>
          Not sure which of your firm&apos;s AI tools would count as high-risk,
          or what&apos;s already enforceable today versus what&apos;s been pushed
          back? Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          maps exactly what you&apos;re using and where you actually stand.
        </p>
      </ArticleCta>
    </>
  );
}

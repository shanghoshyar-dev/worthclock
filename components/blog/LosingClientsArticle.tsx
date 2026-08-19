import Link from "next/link";
import type { BlogFaq } from "@/lib/blog";
import {
  ArticleCta,
  ArticleFaq,
  ArticleSection,
  QuickAnswer,
} from "@/components/blog/ArticleLayout";

export const losingClientsFaqs: BlogFaq[] = [
  {
    q: "Is this only relevant for high volume practice areas like personal injury?",
    a: "It's most visible there because the numbers are largest, but any firm relying on new client inquiries, not just recurring corporate clients, is exposed to the same speed problem.",
  },
  {
    q: "Do we need to overhaul our entire intake process to benefit?",
    a: "No. Even a narrow fix, like ensuring every inquiry gets an instant acknowledgment while a human follows up soon after, closes a large part of the gap without a full system overhaul.",
  },
  {
    q: "How do we know if this is actually costing our firm business?",
    a: "Track how long it currently takes to respond to a new inquiry, and how many go unanswered entirely. Most firms are surprised by the answer once they actually measure it.",
  },
];

export function LosingClientsArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          Response speed decides far more new business than most firms realize.
          Firms responding to a lead within five minutes convert at dramatically
          higher rates than firms that take even thirty minutes, yet the typical
          firm still takes well over ten minutes to respond, and a meaningful
          share never respond at all. AI powered intake tools close this gap by
          qualifying and responding to leads the moment they arrive, without
          adding staff.
        </p>
      </QuickAnswer>

      <ArticleSection title="The Problem Most Firms Don't Realize They Have">
        <p>
          A law firm can be excellent at the actual legal work and still lose a
          steady stream of business simply by responding too slowly. Many firms
          don&apos;t respond to a web inquiry within five minutes, and a real
          share of leads never get a response at all. Since most prospective
          clients contact more than one firm before deciding, the firm that
          answers first often wins the client regardless of which firm would
          have done better work.
        </p>
        <p>
          This is a different kind of loss than losing a case or losing to a
          stronger competitor. It&apos;s losing a client the firm never even had
          a chance to meet.
        </p>
      </ArticleSection>

      <ArticleSection title="What the Data Actually Shows">
        <p>
          Firms that respond to online leads within five minutes convert at a
          rate dramatically higher than those that take thirty minutes or more, a
          gap wide enough that response speed alone can outweigh almost every
          other factor in whether a lead becomes a client. Despite this, many
          firms still take well over ten minutes on average to respond, and a
          meaningful share of web leads never receive any response at all.
        </p>
        <p>
          The financial impact compounds quickly. Missed and unanswered calls
          alone are estimated to cost the legal industry an enormous sum in lost
          revenue every year, and the average firm is estimated to lose a
          significant amount annually just from calls that go unanswered.
        </p>
      </ArticleSection>

      <ArticleSection title="Why This Happens">
        <p>
          It&apos;s rarely about firms not caring. It&apos;s about capacity. A
          receptionist or paralegal handling intake alongside a dozen other
          responsibilities simply can&apos;t respond instantly to every inquiry,
          especially outside business hours, when a large share of leads never
          leave a voicemail and simply move on to the next firm on their list.
        </p>
      </ArticleSection>

      <ArticleSection title="Where AI Actually Helps Here">
        <p>
          <strong className="font-semibold text-ink">
            Instant first response, any time of day.
          </strong>{" "}
          AI powered intake tools can respond to a new inquiry within moments of
          it arriving, day or night, closing the exact gap that costs firms the
          most business.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            Qualification without a form.
          </strong>{" "}
          Rather than handing a prospect a long form and hoping they finish it,
          conversational AI tools can ask the right questions naturally, the same
          way a good intake specialist would, and produce a structured summary
          for the attorney to review.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            Fewer leads falling through the cracks.
          </strong>{" "}
          Automating follow up on incomplete inquiries means fewer prospects are
          simply lost because nobody had time to chase them down.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            Freeing staff for higher value work.
          </strong>{" "}
          When AI handles the repetitive first pass of intake, staff time shifts
          toward the judgment heavy parts of onboarding a new client, not away
          from people entirely.
        </p>
      </ArticleSection>

      <ArticleSection title="What This Doesn't Mean">
        <p>
          Faster intake doesn&apos;t mean lower quality intake, and it
          doesn&apos;t mean removing people from the process. The goal of a well
          built AI intake workflow is to remove the wait, not the judgment. A
          prospect should still reach a human quickly for anything requiring real
          legal judgment, the AI simply makes sure that handoff happens fast
          instead of after a multi day delay.
        </p>
      </ArticleSection>

      <ArticleFaq faqs={losingClientsFaqs} />

      <ArticleCta>
        <p>
          The firms losing the most potential clients aren&apos;t losing them on
          the quality of their legal work. They&apos;re losing them on the clock,
          before a lawyer ever gets involved. Closing that response gap is one of
          the highest leverage, lowest effort changes a firm can make.
        </p>
        <p>
          Not sure how your firm&apos;s current intake process compares, or which
          tools would actually close the gap without adding headcount? Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          looks at exactly this.
        </p>
      </ArticleCta>
    </>
  );
}

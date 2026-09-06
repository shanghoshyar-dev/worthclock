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

export const cyberattacksFaqs: BlogFaq[] = [
  {
    q: "Is this only a risk for large firms with valuable, high-profile clients?",
    a: "No, attackers increasingly target smaller firms precisely because they tend to have weaker defenses relative to the sensitivity of the data they hold, making them a more efficient target, not a less attractive one.",
  },
  {
    q: "Does having cyber insurance cover this risk adequately?",
    a: "Insurance can offset some financial cost, but underwriters increasingly ask about AI governance and security controls specifically, and gaps there can affect both premiums and coverage terms, not just what happens after an incident.",
  },
  {
    q: "Is this really connected to AI adoption, or just general cybersecurity hygiene?",
    a: "Both, but the AI connection is specific and growing, AI is making attacks more convincing, and ungoverned AI usage inside the firm creates additional exposure. Treating them as two separate problems misses how closely linked they've become.",
  },
];

export function CyberattacksArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          AI-generated cyberattacks against law firms are accelerating sharply,
          phishing now accounts for the majority of social engineering
          incidents, and firms using AI without proper controls are far more
          likely to suffer a breach. At the same time, over half of law firms
          still have no generative AI policy at all, and only a small fraction
          have one that&apos;s actually enforced. The combination, rising
          AI-driven attacks and almost no internal AI governance, is exactly the
          gap attackers are positioned to exploit.
        </p>
      </QuickAnswer>

      <ArticleSection title="Why Law Firms Specifically Are Exposed">
        <p>
          Law firms sit on exactly the kind of data attackers want most:{" "}
          <Link
            href="/blog/is-it-safe-to-use-ai-with-privileged-client-information"
            className={blogInlineLinkClass}
          >
            privileged client information
          </Link>
          , financial details, merger and litigation intelligence, all
          concentrated in one place with historically modest security budgets
          compared to the value of what they hold. That&apos;s not new.
          What&apos;s changed is how attacks are now generated.
        </p>
        <p>
          AI has made spear-phishing dramatically more convincing. Attackers now
          personalize messages using data pulled from LinkedIn, a firm&apos;s own
          website, and prior breach data, producing emails that look authentic
          enough to fool experienced staff. Cyberattacks overall increased
          sharply in the past year, with the majority now AI-driven, and a
          meaningful share of U.S. law firms have already been hacked.
        </p>
      </ArticleSection>

      <ArticleSection title="The Real Cost When It Goes Wrong">
        <p>
          The financial impact of a phishing-related breach has climbed to an
          average approaching five million dollars per incident, and successful
          attacks now take well over eight months on average to detect and
          contain. For a mid-sized firm, that&apos;s not a manageable operational
          hiccup, it&apos;s the kind of event that threatens the firm&apos;s
          ability to continue operating normally.
        </p>
        <p>
          The legal exposure compounds the financial cost. Under professional
          conduct rules covering competence and confidentiality, attorneys are
          expected to take reasonable steps to protect client information and
          understand the technology risks involved. Firms that fail to do so are
          increasingly facing not just breach costs, but separate claims for
          negligence tied specifically to inadequate security measures.
        </p>
      </ArticleSection>

      <ArticleSection title="The Governance Gap That Makes This Worse">
        <p>
          Here&apos;s the part most firms don&apos;t realize connects directly to
          the cyber risk: AI governance and cybersecurity are no longer separate
          problems.
        </p>
        <p>
          More than half of law firms report having no generative AI policy at
          all, and among firms that do have one, only a small fraction say
          it&apos;s actually enforced. Meanwhile, individual lawyer AI usage is
          far ahead of firm-level policy, most lawyers are using AI tools
          personally, but formal firm adoption and oversight lags well behind.
          That{" "}
          <Link
            href="/blog/does-your-law-firm-have-an-ai-strategy"
            className={blogInlineLinkClass}
          >
            strategy gap between usage and governance
          </Link>
          , real usage with no real governance, is precisely the condition under
          which AI-related security incidents happen. Organizations that suffered
          an AI-related breach overwhelmingly lacked proper AI controls
          beforehand.
        </p>
        <p>
          Put simply: a firm with ungoverned AI usage isn&apos;t just missing out
          on structure, it&apos;s carrying meaningfully higher breach risk without
          realizing it.
        </p>
      </ArticleSection>

      <ArticleSection title="Where the False Confidence Comes From">
        <p>
          The recurring theme across current industry reporting is that law firm
          security is often assumed rather than tested. Firms believe their
          existing IT setup is adequate because nothing has gone visibly wrong
          yet, without ever actually testing that assumption. Given that
          successful breaches now take months to detect, &quot;nothing has
          happened yet&quot; is a weak signal of actual security.
        </p>
      </ArticleSection>

      <ArticleSection title="What Actually Reduces This Risk">
        <p>
          A firm doesn&apos;t need an enterprise security overhaul to meaningfully
          improve its position. The highest leverage steps tend to be:
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            Multi-factor authentication enforced firm-wide, not just recommended
          </li>
          <li>
            A written AI usage policy that&apos;s actually communicated and
            followed, not just drafted and filed away
          </li>
          <li>
            Basic staff awareness training on AI-generated phishing specifically,
            since it looks meaningfully different from older, more obviously fake
            phishing attempts
          </li>
          <li>
            Regular review of which AI tools have access to which systems and
            data, rather than ad hoc individual adoption
          </li>
          <li>
            A tested incident response plan, so months don&apos;t pass before a
            breach is even noticed
          </li>
        </ul>
        <p>
          Those same governance habits are also what{" "}
          <Link
            href="/blog/will-ai-insurance-underwriters-ask-about-your-firms-ai-use"
            className={blogInlineLinkClass}
          >
            professional liability underwriters increasingly ask about
          </Link>{" "}
          at renewal, so closing this gap helps on both the security and
          insurance side.
        </p>
      </ArticleSection>

      <ArticleFaq faqs={cyberattacksFaqs} />

      <RelatedReading
        slugs={
          relatedBySlug[
            "law-firms-are-the-perfect-target-for-ai-driven-cyberattacks"
          ]
        }
      />

      <ArticleCta>
        <p>
          The firms most at risk aren&apos;t necessarily the ones using the least
          AI, they&apos;re the ones using it the most with the least structure
          around it, while assuming their existing security setup already covers
          the gap. Closing that gap doesn&apos;t require a massive investment, but
          it does require actually looking at where AI usage and security
          controls currently stand, rather than assuming they&apos;re fine.
        </p>
        <p>
          Not sure how exposed your firm&apos;s current AI usage actually is? Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          reviews your workflows and flags where governance gaps create real
          risk, not just theoretical ones.
        </p>
      </ArticleCta>
    </>
  );
}

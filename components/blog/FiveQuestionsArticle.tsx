import Link from "next/link";
import type { BlogFaq } from "@/lib/blog";
import {
  ArticleCta,
  ArticleFaq,
  ArticleSection,
  QuickAnswer,
} from "@/components/blog/ArticleLayout";

export const fiveQuestionsFaqs: BlogFaq[] = [
  {
    q: "Should I ask these questions even for tools my firm already uses?",
    a: "Yes. It's common for firms to have adopted a tool early without fully vetting it. A quick review now can catch a gap before it becomes a real problem.",
  },
  {
    q: "Are these questions relevant for free or trial versions of tools?",
    a: "Especially so. Free and trial tiers often have different, sometimes weaker, data handling terms than paid enterprise versions of the same product.",
  },
  {
    q: "Who should be responsible for asking these questions at a firm?",
    a: "Ideally someone specific, whether that's a partner, an office manager, or an outside advisor, rather than leaving it to whoever happens to sign up for a tool first.",
  },
];

export function FiveQuestionsArticle() {
  return (
    <>
      <QuickAnswer>
        <p>
          Before adopting any legal AI tool, ask about its data handling and
          retention policy, whether it trains on your input data, how it handles
          confidentiality and privilege, how outputs are validated for accuracy,
          and whether it actually adapts to your firm&apos;s specific practice
          needs. Tools that can&apos;t answer these clearly aren&apos;t ready for
          privileged legal work, regardless of how polished the marketing looks.
        </p>
      </QuickAnswer>

      <ArticleSection title="Why This Matters More Than It Used To">
        <p>
          The legal AI market has grown fast, and marketing has grown faster than
          actual differentiation between products. Many tools now claim to be
          &quot;built for legal,&quot; but that phrase alone tells you very
          little about whether a tool is actually safe or effective for your
          firm. The most trustworthy legal AI tools share a specific set of
          traits, and they&apos;re worth checking for directly rather than taking
          on faith.
        </p>
      </ArticleSection>

      <ArticleSection title="The 5 Questions">
        <p>
          <strong className="font-semibold text-ink">
            1. What happens to the data I put into this tool?
          </strong>{" "}
          Ask specifically whether documents or prompts are retained, for how
          long, and whether they&apos;re used to train the vendor&apos;s models.
          A vague privacy policy page is not an adequate answer, you want a
          direct, specific one.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            2. Where is my data processed and stored?
          </strong>{" "}
          For EU firms operating under GDPR, this isn&apos;t a minor detail. Some
          legal AI vendors now offer EU data residency specifically because firms
          ask for it. If a vendor can&apos;t answer clearly, that&apos;s worth
          noting.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            3. How does the tool handle confidentiality and privilege?
          </strong>{" "}
          This goes beyond storage location. Ask whether the vendor has
          experience specifically with legal confidentiality requirements, or
          whether legal is just one of many industries they serve without
          specific safeguards.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            4. How accurate is the output, and how is that measured?
          </strong>{" "}
          Ask for real numbers, not just a claim of accuracy. Independent
          research has found meaningful differences in hallucination rates even
          among purpose built legal research platforms. A vendor confident in
          their accuracy should be able to point to some form of validation.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            5. Does it actually adapt to how my firm works, or is it one size
            fits all?
          </strong>{" "}
          Generic tools can be useful for generic tasks. But firms seeing the
          biggest gains are usually the ones using tools that adapt to their
          specific practice area and workflow, litigation heavy firms need
          different tools than transactional ones.
        </p>
      </ArticleSection>

      <ArticleSection title="What to Do If a Vendor Can't Answer These">
        <p>
          Treat it as useful information, not an automatic disqualifier. Some
          genuinely good tools are simply better suited to non sensitive tasks
          than to privileged client work. The goal isn&apos;t to eliminate every
          tool that doesn&apos;t score perfectly, it&apos;s to match each tool to
          the right use case rather than trusting all of them equally.
        </p>
      </ArticleSection>

      <ArticleFaq faqs={fiveQuestionsFaqs} />

      <ArticleCta>
        <p>
          Legal AI marketing rarely tells you what you actually need to know.
          Five direct questions, asked consistently before adopting anything new,
          catch most of the real risk before it becomes a problem.
        </p>
        <p>
          Not sure how the tools your firm already uses, or is considering, hold
          up against these questions? Our{" "}
          <Link href="/" className="underline underline-offset-4">
            AI Tools Assessment
          </Link>{" "}
          reviews your current and planned tools against exactly this kind of
          criteria.
        </p>
      </ArticleCta>
    </>
  );
}

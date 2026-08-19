import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Shang, founder of Worthclock. AI tools assessment for EU law firms, built by someone who implements systems, not just recommends them.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
      <p className="eyebrow text-brass">{site.entity}</p>
      <h1 className="font-display mt-4 text-4xl leading-tight tracking-tight sm:text-5xl">
        Built by someone who actually implements this stuff.
      </h1>
      <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink-soft">
        <p>
          I&apos;m Shang, the founder behind Worthclock. Before this, I ran a
          taxi company and a digital marketing agency, so I know what it
          actually takes to adopt a new tool or system, not just recommend one
          from the sidelines.
        </p>
        <p>
          Worthclock exists because most AI advice for law firms is either too
          generic to act on, or locked behind consulting fees built for AmLaw
          100 and Legal 500/Chambers-sized budgets. We do the opposite: real
          time understanding your firm&apos;s workflows, a clear answer on
          what&apos;s worth adopting, and what to avoid, with GDPR and client
          confidentiality built in from the start.
        </p>
        <p>Based in Sweden, working with law firms across the EU.</p>
      </div>
      <ButtonLink href="/book" className="mt-12">
        Book Your Assessment
      </ButtonLink>
    </article>
  );
}

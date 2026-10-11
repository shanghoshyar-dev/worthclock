import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from WorthClock AI Tools Assessments for EU law firms: where the hours went, what changed, and what was saved.",
};

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="eyebrow text-brass">WorthClock Case Studies</p>
      <h1 className="font-display mt-4 text-4xl leading-tight tracking-tight sm:text-5xl">
        Real results from real firms
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        How law firms used an AI Tools Assessment to find where time was going,
        make focused changes, and get measurable hours back.
      </p>

      <ul className="mt-12 divide-y divide-line border-y border-line">
        {caseStudies.map((study) => (
          <li key={study.slug} className="py-8">
            <p className="text-sm text-muted">
              {study.dateLabel} · {study.readingMinutes} min read
            </p>
            <h2 className="font-display mt-2 text-2xl tracking-tight sm:text-3xl">
              <Link
                href={`/case-studies/${study.slug}`}
                className="transition-colors hover:text-copper"
              >
                {study.title}
              </Link>
            </h2>
            <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
              {study.description}
            </p>
            <Link
              href={`/case-studies/${study.slug}`}
              className="mt-4 inline-block text-sm font-semibold text-copper hover:text-copper-hover"
            >
              Read case study
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

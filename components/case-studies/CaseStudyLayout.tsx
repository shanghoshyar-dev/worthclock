import Link from "next/link";
import type { ReactNode } from "react";
import type { CaseStudy, CaseStudyFaq } from "@/lib/case-studies";
import { site } from "@/lib/site";

export function CaseStudyShell({
  study,
  faqs,
  children,
}: {
  study: CaseStudy;
  faqs: readonly CaseStudyFaq[];
  children: ReactNode;
}) {
  const articleUrl = `${site.url}/case-studies/${study.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: study.title,
        description: study.description,
        datePublished: study.date,
        dateModified: study.date,
        author: { "@id": `${site.url}/#founder` },
        publisher: { "@id": `${site.url}/#organization` },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": articleUrl,
        },
        url: articleUrl,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <p className="text-sm text-muted">
        <Link href="/case-studies" className="hover:text-ink">
          Case Studies
        </Link>
        {" / "}
        {study.dateLabel} · {study.readingMinutes} min read
      </p>

      <h1 className="font-display mt-4 text-4xl leading-tight tracking-tight sm:text-[2.75rem]">
        {study.title}
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-ink-soft">
        {study.description}
      </p>

      <div className="mt-12">{children}</div>
    </article>
  );
}

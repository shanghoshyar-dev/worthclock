import type { Metadata } from "next";
import { featuredArticles } from "@/lib/featured";

export const metadata: Metadata = {
  title: "Featured articles",
  description:
    "Articles I've written for legal industry publications on how law firms can use AI safely.",
};

export default function FeaturedPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="eyebrow text-brass">Featured</p>
      <h1 className="font-display mt-4 text-4xl leading-tight tracking-tight sm:text-5xl">
        Featured articles
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Articles I&apos;ve written for legal industry publications on how law
        firms can use AI safely.
      </p>

      <ul className="mt-12 divide-y divide-line border-y border-line">
        {featuredArticles.map((article) => (
          <li key={article.id} className="py-8">
            <p className="font-display text-lg tracking-tight text-ink">
              {article.publication}
            </p>
            <p className="mt-1 text-sm text-muted">{article.dateLabel}</p>
            <h2 className="font-display mt-3 text-2xl tracking-tight sm:text-3xl">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-copper"
              >
                {article.title}
              </a>
            </h2>
            <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
              {article.summary}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-copper hover:text-copper-hover"
            >
              {article.readLabel}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

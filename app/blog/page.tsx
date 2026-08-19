import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical notes on AI tools for EU law firms: hallucinations, GDPR, workflows, and what is actually worth adopting.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="eyebrow text-brass">Worthclock Blog</p>
      <h1 className="font-display mt-4 text-4xl leading-tight tracking-tight sm:text-5xl">
        Notes on AI for EU law firms
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        Practical writing on AI tool risk, safe adoption, and what actually
        saves time inside a firm.
      </p>

      <ul className="mt-12 divide-y divide-line border-y border-line">
        {posts.map((post) => (
          <li key={post.slug} className="py-8">
            <p className="text-sm text-muted">
              {post.dateLabel} · {post.readingMinutes} min read
            </p>
            <h2 className="font-display mt-2 text-2xl tracking-tight sm:text-3xl">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-copper transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
              {post.description}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-sm font-semibold text-copper hover:text-copper-hover"
            >
              Read article
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

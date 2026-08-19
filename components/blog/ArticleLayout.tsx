import Link from "next/link";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/Button";
import type { BlogFaq, BlogPost } from "@/lib/blog";
import { site } from "@/lib/site";

export function BlogArticleShell({
  post,
  faqs,
  children,
}: {
  post: BlogPost;
  faqs: readonly BlogFaq[];
  children: ReactNode;
}) {
  const articleUrl = `${site.url}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        author: {
          "@type": "Person",
          name: "Shang",
        },
        publisher: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        mainEntityOfPage: articleUrl,
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
        <Link href="/blog" className="hover:text-ink">
          Blog
        </Link>
        {" / "}
        {post.dateLabel} · {post.readingMinutes} min read
      </p>

      <h1 className="font-display mt-4 text-4xl leading-tight tracking-tight sm:text-[2.75rem]">
        {post.title}
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-ink-soft">
        {post.description}
      </p>

      <div className="mt-12">{children}</div>
    </article>
  );
}

export function QuickAnswer({ children }: { children: ReactNode }) {
  return (
    <section className="rounded-lg border border-line bg-cream px-6 py-6 sm:px-8">
      <h2 className="font-display text-2xl tracking-tight">Quick Answer</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">{children}</div>
    </section>
  );
}

export function ArticleSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-14">
      <h2 className="font-display text-3xl tracking-tight">{title}</h2>
      <div className="mt-5 space-y-4 text-[1.05rem] leading-relaxed text-ink-soft">
        {children}
      </div>
    </section>
  );
}

export function ArticleFaq({ faqs }: { faqs: readonly BlogFaq[] }) {
  return (
    <section className="mt-14">
      <h2 className="font-display text-3xl tracking-tight">FAQ</h2>
      <div className="mt-6 divide-y divide-line border-y border-line">
        {faqs.map((item) => (
          <div key={item.q} className="py-6">
            <h3 className="font-display text-xl tracking-tight">{item.q}</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ArticleCta({ children }: { children: ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="font-display text-3xl tracking-tight">The Bottom Line</h2>
      <div className="mt-5 space-y-4 text-[1.05rem] leading-relaxed text-ink-soft">
        {children}
      </div>
      <ButtonLink href="/book" className="mt-8">
        Book Your Assessment
      </ButtonLink>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { featuredArticles } from "@/lib/featured";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "AI Consulting for Law Firms in Europe | Worthclock",
  },
  description:
    "Practical AI consulting for small and midsize European law firms. Fixed price assessment, GDPR conscious, at least 5 hours saved per week or your money back.",
};

const faqs = [
  {
    q: "Do you work with law firms outside Sweden?",
    a: "Yes. Worthclock is based in Sweden and works with law firms across the EU. Calls are held online in English.",
  },
  {
    q: "How big does our firm need to be?",
    a: "The assessment is designed for firms with roughly 5 to 50 people, but smaller and larger firms can also benefit.",
  },
  {
    q: "Do you implement the tools for us?",
    a: "Yes. After the assessment we can set up the recommended tools for you, configure them safely for client data and train your team. Implementation starts from €1,490 per workflow, and you'll get a fixed quote right after your assessment. Software licences are not included.",
  },
  {
    q: "What if we don't save 5 hours a week?",
    a: "If your firm does not save at least 5 hours per week within 30 days of following the plan, you get your money back.",
  },
  {
    q: "Is this legal advice?",
    a: "No. Worthclock gives practical advice on AI tools and workflows. Your firm remains responsible for its own legal and regulatory decisions.",
  },
  {
    q: "Do you sell AI software?",
    a: "No. Worthclock is independent and does not take commissions from tool vendors.",
  },
] as const;

const reasons = [
  {
    title: "Independent",
    body: "no vendor commissions",
  },
  {
    title: "Fixed price",
    body: "€999, nothing hidden",
  },
  {
    title: "Legal focus",
    body: "confidentiality, privilege and GDPR built into every recommendation",
  },
  {
    title: "Guaranteed",
    body: "at least 5 hours saved per week or your money back",
  },
] as const;

const situations = [
  "Lawyers using AI on their own, without shared rules",
  "Hours lost to email, client intake and document review",
  "Uncertainty about GDPR, confidentiality and privilege",
  "Paying for tools that nobody is sure are saving time",
] as const;

const steps = [
  {
    title: "Book a call.",
    body: "Choose a time that suits you.",
  },
  {
    title: "Map your workflows.",
    body: "We go through intake, email, document review, research and admin to find where time is lost.",
  },
  {
    title: "Get your plan.",
    body: "You receive a prioritised list of tools and process changes, with notes on data protection and confidentiality for each.",
  },
  {
    title: "Measure the result.",
    body: "We agree how to measure time saved so you can see whether it works.",
  },
] as const;

export default function AiConsultingForLawFirmsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "AI Tools Assessment for Law Firms",
        provider: { "@id": `${site.url}/#organization` },
        areaServed: "European Union",
        serviceType: "AI consulting for law firms",
        offers: [
          {
            "@type": "Offer",
            price: "999",
            priceCurrency: "EUR",
          },
          {
            "@type": "Offer",
            name: "AI Implementation for Law Firms",
            price: "1490",
            priceCurrency: "EUR",
            description:
              "Implementation of recommended AI tools, from €1,490 per workflow",
          },
        ],
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

      <h1 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
        AI Consulting for Law Firms in Europe
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-ink-soft">
        Worthclock helps small and midsize European law firms find where AI can
        save real time, choose tools that are safe for client data, and put them
        to work. One fixed price assessment, a clear plan, and at least 5 hours
        saved per week or your money back.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <ButtonLink href="/book">Book Your Assessment</ButtonLink>
        <ButtonLink href="/ai-readiness-check" variant="secondary">
          Take the free Mini Audit
        </ButtonLink>
      </div>

      <section className="mt-14">
        <h2 className="font-display text-3xl tracking-tight">
          What is AI consulting for law firms?
        </h2>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
          AI consulting for law firms is independent advice on where artificial
          intelligence can save time in a legal practice, which tools are
          suitable for confidential client information, and how to introduce
          them safely. Worthclock does this through a fixed price AI Tools
          Assessment designed for firms with roughly 5 to 50 people.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl tracking-tight">
          Who is Worthclock for?
        </h2>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
          Worthclock is for managing partners and practice managers at small and
          midsize law firms in the EU who know their people already use AI, but
          have not decided which tools are safe, what client data may go into
          them, or where the real time savings are. No technical team is needed
          on your side.
        </p>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
          Typical situations we help with:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-[1.05rem] leading-relaxed text-ink-soft">
          {situations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl tracking-tight">
          How does the AI Tools Assessment work?
        </h2>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
          The assessment is a 45 minute call that maps where your firm&apos;s
          hours actually go, followed by a written plan matching your biggest
          time drains to specific, safe AI tools. You get clear recommendations
          you can act on straight away, not a long transformation project.
        </p>
        <ol className="mt-6 list-decimal space-y-4 pl-5 text-[1.05rem] leading-relaxed text-ink-soft">
          {steps.map((step) => (
            <li key={step.title}>
              <strong className="text-ink">{step.title}</strong> {step.body}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl tracking-tight">
          What does it cost?
        </h2>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
          The AI Tools Assessment costs a fixed €999. If your firm does not save
          at least 5 hours per week within 30 days of following the plan, you
          get your money back. There are no hourly rates, retainers or surprise
          invoices.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl tracking-tight">
          Can you help us implement the tools?
        </h2>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
          Yes. Many firms find implementation the hardest part. We set up the
          recommended tools, configure them safely for client data, train your
          team and follow up after 30 days to measure the time saved.
          Implementation starts from €1,490 per workflow, with a fixed quote
          after your assessment.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl tracking-tight">
          What results have firms seen?
        </h2>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
          A 17 person law firm in Poland was losing most of its week to emails
          and case reviews. After the assessment, the firm automated routine
          email handling and introduced an AI tool that summarises case files
          and highlights what matters, with a lawyer reviewing every summary.
          The firm now saves around 6 hours per week.
        </p>
        <blockquote className="mt-8 border-l-2 border-brass pl-5 text-[1.05rem] leading-relaxed text-ink-soft">
          <p>
            &quot;Emails and case reviews were taking up most of our week. Now
            our emails are handled automatically and the case review tool pulls
            out what matters and summarises it for us. We save around six hours
            a week.&quot;
          </p>
          <footer className="mt-3 text-sm text-muted">
            Managing partner, 17 person law firm in Poland
          </footer>
        </blockquote>
        <Link
          href="/case-studies/poland-law-firm-6-hours"
          className="mt-6 inline-block text-sm font-semibold text-copper hover:text-copper-hover"
        >
          Read the full case
        </Link>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl tracking-tight">
          How do you handle client confidentiality and GDPR?
        </h2>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
          Every recommendation is assessed for confidentiality and data
          protection before it reaches you. We look at whether a tool&apos;s
          provider acts as a data processor, whether your data is used for
          training, how long it is kept and where it is processed, in line with
          GDPR and guidance from bodies such as the CCBE and the SRA.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl tracking-tight">
          Why choose Worthclock?
        </h2>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
          Worthclock is independent, fixed price and focused only on practical
          results for law firms. We do not sell software or earn commission from
          tool vendors, so recommendations are based on what fits your firm, not
          on what we are paid to promote.
        </p>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-[1.05rem] leading-relaxed text-ink-soft">
          {reasons.map((reason) => (
            <li key={reason.title}>
              <strong className="text-ink">{reason.title}:</strong>{" "}
              {reason.body}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl tracking-tight">Featured in</h2>
        <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
          Shang Ahmed, founder of Worthclock, writes about AI, confidentiality
          and privilege for legal publications.
        </p>
        <ul className="mt-6 space-y-3 text-[1.05rem] leading-relaxed text-ink-soft">
          {featuredArticles.map((article) => (
            <li key={article.id}>
              {article.publication}:{" "}
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-ink"
              >
                &quot;{article.title}&quot;
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl tracking-tight">
          Frequently asked questions
        </h2>
        <div className="mt-6 divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <div key={item.q} className="py-6">
              <h3 className="font-display text-xl tracking-tight">{item.q}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl tracking-tight">
          Ready to find your firm&apos;s lost hours?
        </h2>
        <div className="mt-8">
          <ButtonLink href="/book">Book Your Assessment</ButtonLink>
        </div>
        <p className="mt-6 text-[1.05rem] leading-relaxed text-ink-soft">
          Not ready yet?{" "}
          <Link
            href="/ai-readiness-check"
            className="font-semibold text-copper underline underline-offset-4 hover:text-copper-hover"
          >
            Take the free 3 minute Mini Audit
          </Link>{" "}
          and see where your firm stands.
        </p>
      </section>
    </article>
  );
}

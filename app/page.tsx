import { ButtonLink } from "@/components/Button";
import { Faq } from "@/components/Faq";
import { HashScroll } from "@/components/HashScroll";
import { HomeJsonLd } from "@/components/HomeJsonLd";
import { pricingIncludes, site, steps } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <HashScroll />
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:22px_22px]" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
          <p className="eyebrow text-brass">{site.entity}</p>
          <h1 className="font-display mt-6 max-w-4xl text-[2.55rem] leading-[1.12] tracking-tight sm:text-5xl lg:text-[4.15rem]">
            Know Exactly Which AI Tools Are Worth Your Firm&apos;s Time
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/78 sm:text-xl">
            In one 45-minute call, we map your firm&apos;s workflows, contract
            review, client intake, document management, and hand you a clear plan
            for the AI tools that will save real hours, real money, or improve
            accuracy. Built for law firms across the EU, with GDPR and client
            confidentiality in mind. Guaranteed at least 5 hours back every week,
            or your money back.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4">
            <ButtonLink href="/book" variant="on-dark">
              Book Your Assessment
            </ButtonLink>
            <p className="text-sm text-cream/55">
              Based in Sweden. Working with EU law firms. GDPR-first.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="eyebrow text-brass">The problem</p>
            <h2 className="font-display mt-4 max-w-xl text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
              There&apos;s an AI tool for everything. That&apos;s the problem.
            </h2>
          </div>
          <p className="self-end text-lg leading-relaxed text-ink-soft">
            New AI tools launch every week. Half your team is using something
            different, none of it is connected, and nobody has time to figure
            out what&apos;s actually worth adopting. You don&apos;t need more
            tools. You need someone to tell you which three actually matter for
            your business, and how to put them to work without breaking anything.
          </p>
        </div>
      </section>

      <section
        id="how-it-works"
        className="scroll-mt-20 border-y border-line bg-cream/60"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="eyebrow text-brass">How it works</p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl leading-tight tracking-tight sm:text-4xl">
            From confusion to a clear plan in one week.
          </h2>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step) => (
              <li key={step.n} className="flex flex-col">
                <span className="font-display text-sm text-brass">{step.n}</span>
                <h3 className="font-display mt-3 text-2xl tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-forest-2 text-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="eyebrow text-brass">The guarantee</p>
          <h2 className="font-display mt-4 max-w-3xl text-3xl leading-tight tracking-tight sm:text-5xl">
            5 hours back every week, or your money back.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">
            If you implement our recommendations and don&apos;t reclaim at least
            5 hours a week within 30 days, we refund you. No fine print, no
            runaround.
          </p>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="eyebrow text-brass">Pricing</p>
          <h2 className="font-display mt-4 text-3xl leading-tight tracking-tight sm:text-4xl">
            One flat price. No subscriptions.
          </h2>
          <div className="mt-12 max-w-xl rounded-lg border border-line bg-cream p-8 sm:p-10">
            <p className="font-display text-6xl tracking-tight text-ink sm:text-7xl">
              {site.price}
            </p>
            <p className="mt-2 text-muted">One-time assessment fee</p>
            <ul className="mt-8 flex flex-col gap-3 border-t border-line pt-8">
              {pricingIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                  {item}
                </li>
              ))}
            </ul>
            <ButtonLink href="/book" className="mt-10 w-full sm:w-auto">
              Book Your Assessment
            </ButtonLink>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="eyebrow text-brass">FAQ</p>
          <h2 className="font-display mt-4 mb-10 text-3xl tracking-tight sm:text-4xl">
            Common questions
          </h2>
          <Faq />
        </div>
      </section>

      <section className="border-t border-line bg-cream/40">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-xl tracking-tight text-ink-soft sm:text-2xl">
            Not a law firm? We can still help.
          </h2>
          <p className="mt-3 max-w-2xl text-[1.02rem] leading-relaxed text-muted">
            While we specialize in helping EU law firms, our AI Tools Assessment
            works for businesses in any industry. If you&apos;re not a law firm,
            book your assessment and we&apos;ll tailor it to your workflows.
          </p>
          <ButtonLink href="/book" className="mt-6 text-sm px-5 py-2.5">
            Book an assessment
          </ButtonLink>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <h2 className="font-display max-w-3xl text-3xl leading-tight tracking-tight sm:text-5xl">
            Stop guessing which AI tools are worth it for your firm.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/72">
            Book your assessment today and get a clear, GDPR-minded plan for
            your EU law firm within a week.
          </p>
          <ButtonLink href="/book" variant="on-dark" className="mt-10">
            Book Your Assessment
          </ButtonLink>
        </div>
      </section>
    </>
  );
}

export const site = {
  name: "Worthclock",
  entity: "Worthclock: AI Tools Assessment for EU Law Firms",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://worthclock.com",
  email: "info@worthclock.com",
  refundCcEmail: "shanghoshyar@gmail.com",
  location: "Sweden",
  price: "$999",
  priceAmount: 999,
  currency: "USD",
  // Fill these before launch
  companyRegistration: "[Company registration number]",
  lastUpdated: "15 August 2026",
  refundResponseDays: 5,
  dataRetentionMonths: 12,
  calEmbedUrl: process.env.NEXT_PUBLIC_CAL_EMBED_URL ?? "",
} as const;

export const nav = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
] as const;

export const faq = [
  {
    q: "How is this different from just asking ChatGPT what tools I should use?",
    a: "Generic AI answers don't know your firm, and following them can steer you toward tools that aren't safe or GDPR-compliant for client work. We spend real time understanding your actual workflows, then match that against what's genuinely worth adopting for a law firm, not what's trending.",
  },
  {
    q: "How do you handle client confidentiality and GDPR compliance?",
    a: "All calls and data are handled under strict GDPR compliance. We never require access to privileged client files, our assessment is based on your workflows and tool usage, not case content.",
    privacyLink: true,
  },
  {
    q: "What kind of tasks can AI actually help with at my firm?",
    a: "The biggest time savings we typically find are in document review and case summaries, contract review and redlining, legal research, correspondence drafting, and reducing billing errors. Your report will show exactly which of these apply to your firm.",
  },
  {
    q: "Is it safe to use AI tools with privileged client information?",
    a: "This is exactly the kind of risk we help you avoid. Our recommendations account for confidentiality and privilege protection, we won't point you toward a tool that puts client data at risk.",
  },
  {
    q: "My firm hasn't done any AI training, is that a problem?",
    a: "No, most firms we work with haven't. That's the point of the assessment, it gives your firm a clear, safe starting point instead of guessing.",
  },
  {
    q: "What AI tools should a law firm actually be using?",
    a: "It depends entirely on your practice area and workload, litigation teams often benefit most from research and document analysis tools, while transactional teams see the biggest gains from contract review and drafting tools. That's exactly what your assessment identifies, instead of guessing from a generic list.",
  },
  {
    q: "How much time can AI actually save on contract review?",
    a: "Legal teams typically spend around 3 hours reviewing a single contract. With the right AI tool in place, that can often be cut significantly, some firms report reducing contract review time by more than half.",
  },
  {
    q: "Are there AI tools built specifically for EU law firms?",
    a: "Yes, and this matters, some legal AI platforms are built specifically with GDPR compliance and EU data residency in mind. Your assessment will flag whether a recommended tool meets that bar, not just whether it's popular in the US.",
  },
  {
    q: "When do I pay?",
    a: "Payment ($999) is collected when you confirm your time slot on the booking page. This secures your spot for the discovery call.",
  },
  {
    q: "How long does the whole process take?",
    a: "The discovery call is 45 minutes. You'll have your report within a few business days, followed by a review call.",
  },
  {
    q: "Is my data safe? You're recording our call.",
    a: "Yes. Your call is used only to generate your report and is handled under our privacy policy. See our Privacy Policy for full details.",
    privacyLink: true,
  },
  {
    q: "What happens after the assessment?",
    a: "Most firms either implement the recommendations themselves using the report, or continue with us for hands-on implementation support (available separately).",
  },
  {
    q: "Do you only work with law firms?",
    a: "Law firms in the EU are our focus, but the assessment works for any company in any industry. If you're not a law firm, book anyway and we'll tailor it to your workflows.",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Discovery Call",
    body: "We spend 45 minutes learning how your business actually runs: your workflows, your bottlenecks, where time and money quietly leak out.",
  },
  {
    n: "02",
    title: "AI Analysis",
    body: "We personally analyze the conversation, your current tools, and how they hold up against your specific goals. No generic checklist, just a clear picture of what you have, what's missing, and what fits.",
  },
  {
    n: "03",
    title: "Your Report",
    body: "You get a clear, straightforward report: an effort vs impact map of opportunities, your quick wins, a 4-day quick-start plan, and the expected return.",
  },
  {
    n: "04",
    title: "Review Call",
    body: "We walk through the report together, answer questions, and map out next steps, whether that's you implementing it yourself or us helping.",
  },
] as const;

export const pricingIncludes = [
  "Discovery call",
  "Full AI analysis",
  "Custom report",
  "Review call",
  "5-hour guarantee",
] as const;

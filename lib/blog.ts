export type BlogFaq = {
  q: string;
  a: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateLabel: string;
  readingMinutes: number;
};

export const posts: BlogPost[] = [
  {
    slug: "ai-contract-review-how-much-time-can-it-actually-save",
    title: "AI Contract Review: How Much Time Can It Actually Save?",
    description:
      "Contract review eats up a huge share of billable hours. Here's what AI actually delivers in time savings, based on real firm results, not marketing claims.",
    date: "2026-08-17",
    dateLabel: "17 August 2026",
    readingMinutes: 5,
  },
  {
    slug: "how-clients-are-already-using-ai-instead-of-calling-your-firm",
    title: "How Clients Are Already Using AI Instead of Calling Your Firm",
    description:
      "Some clients are turning to AI before they turn to a law firm, and it often happens without the firm ever knowing. Here's what that shift means and how firms can respond.",
    date: "2026-08-13",
    dateLabel: "13 August 2026",
    readingMinutes: 5,
  },
  {
    slug: "will-ai-insurance-underwriters-ask-about-your-firms-ai-use",
    title: "Will AI Insurance Underwriters Start Asking About Your Firm's AI Use?",
    description:
      "Professional liability underwriters are already asking law firms about their AI governance. Here's what that means and how to prepare.",
    date: "2026-08-09",
    dateLabel: "9 August 2026",
    readingMinutes: 5,
  },
  {
    slug: "why-ai-wont-reduce-your-firms-billable-hours",
    title:
      "Why AI Won't Reduce Your Firm's Billable Hours (And What Actually Will Change)",
    description:
      "Lawyers often worry AI will shrink billable hours. The real shift is different, and understanding it changes how firms should actually use AI.",
    date: "2026-08-05",
    dateLabel: "5 August 2026",
    readingMinutes: 5,
  },
  {
    slug: "5-questions-to-ask-before-adopting-any-legal-ai-tool",
    title: "5 Questions to Ask Before Adopting Any Legal AI Tool",
    description:
      "Not every AI tool marketed to law firms deserves your trust. Here are five questions worth asking before you adopt one.",
    date: "2026-08-01",
    dateLabel: "1 August 2026",
    readingMinutes: 5,
  },
  {
    slug: "is-it-safe-to-use-ai-with-privileged-client-information",
    title: "Is It Safe to Use AI With Privileged Client Information?",
    description:
      "Law firms are right to be cautious about AI and privileged data. Here's what the confidentiality risk actually looks like, and how to use AI without exposing client information.",
    date: "2026-07-28",
    dateLabel: "28 July 2026",
    readingMinutes: 5,
  },
  {
    slug: "does-your-law-firm-have-an-ai-strategy",
    title: "Does Your Law Firm Have an AI Strategy? Most Don't",
    description:
      "More law firms are using AI than ever, but very few have an actual strategy behind it. Here's why that gap matters and how to close it.",
    date: "2026-07-24",
    dateLabel: "24 July 2026",
    readingMinutes: 5,
  },
  {
    slug: "ai-hallucinations-in-legal-filings",
    title: "AI Hallucinations in Legal Filings: What EU Firms Need to Know",
    description:
      "AI hallucinations have already reached real courtrooms. Here's what's actually happening, who's most at risk, and how EU law firms can avoid it.",
    date: "2026-07-20",
    dateLabel: "20 July 2026",
    readingMinutes: 6,
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export type BlogFaq = {
  q: string;
  a: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** ISO date (YYYY-MM-DD). Use the real publish day going forward. */
  date: string;
  /** ISO date when the post was last updated; used for sitemap lastmod. */
  dateModified?: string;
  dateLabel: string;
  readingMinutes: number;
  /** Document title when it should differ from the on-page headline. */
  metaTitle?: string;
  /** When true, the post is omitted from the sitemap and public listings. */
  draft?: boolean;
};

export const posts: BlogPost[] = [
  {
    slug: "how-can-a-law-firm-use-ai-to-manage-email-safely",
    title: "How Can a Law Firm Use AI to Manage Email Safely?",
    metaTitle: "AI for Law Firm Email: How to Use It Safely | Worthclock",
    description:
      "How law firms can use AI to sort, summarise and draft email, what it should never do, the main risks and how to introduce it safely.",
    date: "2026-11-28",
    dateModified: "2026-11-28",
    dateLabel: "28 November 2026",
    readingMinutes: 6,
  },
  {
    slug: "gdpr-legal-ai-when-is-a-dpia-required",
    title: "GDPR and Legal AI: When Is a DPIA Required?",
    metaTitle: "GDPR and Legal AI: When Is a DPIA Required? | Worthclock",
    description:
      "When does a law firm need a DPIA before using AI? How the GDPR test works, what regulators say about AI and what a DPIA should cover.",
    date: "2026-11-21",
    dateModified: "2026-11-21",
    dateLabel: "21 November 2026",
    readingMinutes: 7,
  },
  {
    slug: "who-is-liable-ai-legal-error",
    title:
      "Who Is Liable When AI Gets a Legal Answer Wrong: the Lawyer, the Firm or the Vendor?",
    metaTitle: "Who Is Liable When AI Gets Legal Advice Wrong? | Worthclock",
    description:
      "When AI gives a wrong legal answer, who is responsible? Why liability usually stays with the lawyer and firm, and how to protect yourself.",
    date: "2026-11-15",
    dateModified: "2026-11-15",
    dateLabel: "15 November 2026",
    readingMinutes: 8,
  },
  {
    slug: "ai-policy-small-law-firm",
    title: "What Should an AI Policy for a Small Law Firm Actually Say?",
    metaTitle: "What Should a Small Law Firm's AI Policy Say? | Worthclock",
    description:
      "What a small law firm's AI policy needs to cover, in plain terms: approved tools, client data, review, consent, training and ownership.",
    date: "2026-11-09",
    dateModified: "2026-11-09",
    dateLabel: "9 November 2026",
    readingMinutes: 8,
  },
  {
    slug: "ai-labs-are-becoming-consultants-what-does-that-mean-for-law-firms",
    title:
      "AI Labs Are Becoming Consultants. What Does That Mean for Law Firms?",
    description:
      "OpenAI and Anthropic now sell AI services directly. What that means for law firms choosing AI advice, and why independence matters.",
    date: "2026-11-04",
    dateLabel: "4 November 2026",
    readingMinutes: 7,
  },
  {
    slug: "how-to-choose-an-ai-consultant-for-your-law-firm",
    title: "How to Choose an AI Consultant for Your Law Firm",
    description:
      "How to choose the right AI consultant for your law firm: the four types of provider, when each fits, what to ask and what it should cost.",
    date: "2026-10-31",
    dateLabel: "31 October 2026",
    readingMinutes: 8,
  },
  {
    slug: "can-law-firms-put-client-data-into-microsoft-copilot-outlook-and-teams",
    title:
      "Can Law Firms Put Client Data Into Microsoft Copilot, Outlook and Teams?",
    description:
      "Can a law firm use Microsoft 365 Copilot with client data? What Microsoft's terms cover, where the gaps are and what to check first.",
    date: "2026-10-29",
    dateLabel: "29 October 2026",
    readingMinutes: 8,
  },
  {
    slug: "the-ai-your-law-firm-never-chose-how-to-check-built-in-ai-features",
    title:
      "The AI Your Law Firm Never Chose: How to Check Built-In AI Features",
    description:
      "Built-in AI in email, documents and meeting tools can expose client data. How law firms can check which AI features are switched on.",
    date: "2026-10-26",
    dateLabel: "26 October 2026",
    readingMinutes: 6,
  },
  {
    slug: "does-the-eu-ai-act-require-ai-training-for-law-firms-what-article-4-means-in-2026",
    title:
      "Does the EU AI Act Require AI Training for Law Firms? What Article 4 Means in 2026",
    description:
      "EU AI Act Article 4 training for law firms: what the AI literacy duty means in 2026, and how a small firm can meet it without a large programme.",
    date: "2026-10-20",
    dateLabel: "20 October 2026",
    readingMinutes: 6,
  },
  {
    slug: "how-to-measure-whether-ai-is-actually-saving-your-law-firm-time",
    title: "How to Measure Whether AI Is Actually Saving Your Law Firm Time",
    description:
      "Measure whether AI is saving your law firm time. Most teams cannot tell if it works. Here is a simple way to track the hours saved each week.",
    date: "2026-10-08",
    dateLabel: "8 October 2026",
    readingMinutes: 6,
  },
  {
    slug: "how-many-hours-per-week-does-ai-really-save-a-lawyer",
    title: "How Many Hours Per Week Does AI Really Save a Lawyer?",
    description:
      "Surveys show lawyers saving anywhere from one to five hours a week with AI, yet most firms see little of it. Here is what the data says and why the gap exists.",
    date: "2026-10-03",
    dateLabel: "3 October 2026",
    readingMinutes: 6,
  },
  {
    slug: "ai-in-ma-due-diligence-how-much-faster-is-it-really",
    title: "AI in M&A Due Diligence: How Much Faster Is It, Really?",
    description:
      "A mid-market acquisition can produce tens of thousands of documents. Here's what AI-assisted due diligence actually saves, and where the real risk still sits.",
    date: "2026-09-27",
    dateLabel: "27 September 2026",
    readingMinutes: 6,
  },
  {
    slug: "the-eu-ai-act-deadline-got-pushed-back-heres-what-still-applies-right-now",
    title:
      "The EU AI Act Deadline Got Pushed Back. Here's What Still Applies Right Now.",
    description:
      "The EU AI Act deadline for law firms moved to December 2027. Here is what still applies now, and which duties were not delayed.",
    date: "2026-09-21",
    dateLabel: "21 September 2026",
    readingMinutes: 6,
  },
  {
    slug: "your-lawyers-are-already-using-ai-almost-nobody-trained-them",
    title: "Your Lawyers Are Already Using AI. Almost Nobody Trained Them.",
    description:
      "Lawyers are already using AI, and most firms never trained them. Here is why that gap is the real confidentiality risk, and how to close it.",
    date: "2026-09-13",
    dateLabel: "13 September 2026",
    readingMinutes: 5,
  },
  {
    slug: "law-firms-are-the-perfect-target-for-ai-driven-cyberattacks",
    title:
      "Law Firms Are the Perfect Target for AI-Driven Cyberattacks. Most Don't Know It Yet.",
    description:
      "AI-driven cyberattacks target law firms because client files are valuable. Here is what is rising, and why most firms are less prepared than they think.",
    date: "2026-09-06",
    dateLabel: "6 September 2026",
    readingMinutes: 6,
  },
  {
    slug: "should-your-firm-tell-clients-when-youre-using-ai-on-their-matter",
    title: "Should Your Firm Tell Clients When You're Using AI on Their Matter?",
    description:
      "Should your law firm tell clients when AI is used on their matter? Most clients want to know, and most firms stay quiet. Here is how to close that gap.",
    date: "2026-09-01",
    dateLabel: "1 September 2026",
    readingMinutes: 5,
  },
  {
    slug: "why-law-firm-invoices-are-getting-rejected-more-than-ever",
    title: "Why Law Firm Invoices Are Getting Rejected More Than Ever",
    description:
      "Client-side AI billing review is quietly raising invoice rejection rates across the legal industry. Here's what's driving it and how firms are closing the gap.",
    date: "2026-08-29",
    dateLabel: "29 August 2026",
    readingMinutes: 5,
  },
  {
    slug: "ai-legal-research-how-much-time-are-firms-actually-saving",
    title: "AI Legal Research: How Much Time Are Firms Actually Saving?",
    description:
      "AI legal research time savings for law firms: what the 2026 data shows about hours saved, and where the accuracy risk still sits.",
    date: "2026-08-24",
    dateLabel: "24 August 2026",
    readingMinutes: 5,
  },
  {
    slug: "your-law-firm-is-losing-clients-before-they-ever-book-a-call",
    title: "Your Law Firm Is Losing Clients Before They Ever Book a Call",
    description:
      "Slow response times are quietly costing law firms new clients every week. Here's what the data shows about intake speed, and how AI closes the gap.",
    date: "2026-08-17",
    dateLabel: "17 August 2026",
    readingMinutes: 5,
  },
  {
    slug: "ai-contract-review-how-much-time-can-it-actually-save",
    title: "AI Contract Review: How Much Time Can It Actually Save?",
    description:
      "Contract review eats up a huge share of billable hours. Here's what AI actually delivers in time savings, based on real firm results, not marketing claims.",
    date: "2026-08-13",
    dateLabel: "13 August 2026",
    readingMinutes: 5,
  },
  {
    slug: "how-clients-are-already-using-ai-instead-of-calling-your-firm",
    title: "How Clients Are Already Using AI Instead of Calling Your Firm",
    description:
      "Clients are already using AI instead of calling your law firm. Here is what that shift means, and how firms can respond before the work goes elsewhere.",
    date: "2026-08-09",
    dateLabel: "9 August 2026",
    readingMinutes: 5,
  },
  {
    slug: "will-ai-insurance-underwriters-ask-about-your-firms-ai-use",
    title: "Will AI Insurance Underwriters Start Asking About Your Firm's AI Use?",
    description:
      "Professional liability underwriters are already asking law firms about their AI governance. Here's what that means and how to prepare.",
    date: "2026-08-05",
    dateLabel: "5 August 2026",
    readingMinutes: 5,
  },
  {
    slug: "why-ai-wont-reduce-your-firms-billable-hours",
    title:
      "Why AI Won't Reduce Your Firm's Billable Hours (And What Actually Will Change)",
    description:
      "Lawyers often worry AI will shrink billable hours. The real shift is different, and understanding it changes how firms should actually use AI.",
    date: "2026-08-01",
    dateLabel: "1 August 2026",
    readingMinutes: 5,
  },
  {
    slug: "5-questions-to-ask-before-adopting-any-legal-ai-tool",
    title: "5 Questions to Ask Before Adopting Any Legal AI Tool",
    description:
      "Not every AI tool marketed to law firms deserves your trust. Here are five questions worth asking before you adopt one.",
    date: "2026-07-28",
    dateLabel: "28 July 2026",
    readingMinutes: 5,
  },
  {
    slug: "is-it-safe-to-use-ai-with-privileged-client-information",
    title: "Is It Safe to Use AI With Privileged Client Information?",
    description:
      "Is it safe to use AI with privileged client information? Here is the confidentiality risk for law firms, and how to use AI without exposing client data.",
    date: "2026-07-24",
    dateLabel: "24 July 2026",
    readingMinutes: 5,
  },
  {
    slug: "does-your-law-firm-have-an-ai-strategy",
    title: "Does Your Law Firm Have an AI Strategy? Most Don't",
    description:
      "More law firms are using AI than ever, but very few have an actual strategy behind it. Here's why that gap matters and how to close it.",
    date: "2026-07-20",
    dateLabel: "20 July 2026",
    readingMinutes: 5,
  },
  {
    slug: "ai-hallucinations-in-legal-filings",
    title: "AI Hallucinations in Legal Filings: What EU Firms Need to Know",
    description:
      "AI hallucinations have already reached real courtrooms. Here's what's actually happening, who's most at risk, and how EU law firms can avoid it.",
    date: "2026-07-16",
    dateLabel: "16 July 2026",
    readingMinutes: 6,
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

/** Related posts for end-of-article reading lists (by current slug). */
export const relatedBySlug: Record<string, readonly string[]> = {
  "how-can-a-law-firm-use-ai-to-manage-email-safely": [
    "can-law-firms-put-client-data-into-microsoft-copilot-outlook-and-teams",
    "the-ai-your-law-firm-never-chose-how-to-check-built-in-ai-features",
    "how-many-hours-per-week-does-ai-really-save-a-lawyer",
  ],
  "gdpr-legal-ai-when-is-a-dpia-required": [
    "is-it-safe-to-use-ai-with-privileged-client-information",
    "can-law-firms-put-client-data-into-microsoft-copilot-outlook-and-teams",
    "ai-policy-small-law-firm",
  ],
  "who-is-liable-ai-legal-error": [
    "ai-hallucinations-in-legal-filings",
    "ai-policy-small-law-firm",
    "will-ai-insurance-underwriters-ask-about-your-firms-ai-use",
  ],
  "ai-policy-small-law-firm": [
    "does-your-law-firm-have-an-ai-strategy",
    "does-the-eu-ai-act-require-ai-training-for-law-firms-what-article-4-means-in-2026",
    "5-questions-to-ask-before-adopting-any-legal-ai-tool",
  ],
  "ai-labs-are-becoming-consultants-what-does-that-mean-for-law-firms": [
    "how-to-choose-an-ai-consultant-for-your-law-firm",
    "5-questions-to-ask-before-adopting-any-legal-ai-tool",
    "can-law-firms-put-client-data-into-microsoft-copilot-outlook-and-teams",
  ],
  "how-to-choose-an-ai-consultant-for-your-law-firm": [
    "ai-labs-are-becoming-consultants-what-does-that-mean-for-law-firms",
    "does-your-law-firm-have-an-ai-strategy",
    "5-questions-to-ask-before-adopting-any-legal-ai-tool",
  ],
  "can-law-firms-put-client-data-into-microsoft-copilot-outlook-and-teams": [
    "the-ai-your-law-firm-never-chose-how-to-check-built-in-ai-features",
    "is-it-safe-to-use-ai-with-privileged-client-information",
    "5-questions-to-ask-before-adopting-any-legal-ai-tool",
  ],
  "the-ai-your-law-firm-never-chose-how-to-check-built-in-ai-features": [
    "can-law-firms-put-client-data-into-microsoft-copilot-outlook-and-teams",
    "is-it-safe-to-use-ai-with-privileged-client-information",
    "5-questions-to-ask-before-adopting-any-legal-ai-tool",
  ],
  "does-the-eu-ai-act-require-ai-training-for-law-firms-what-article-4-means-in-2026":
    [
      "the-eu-ai-act-deadline-got-pushed-back-heres-what-still-applies-right-now",
      "your-lawyers-are-already-using-ai-almost-nobody-trained-them",
      "does-your-law-firm-have-an-ai-strategy",
    ],
  "how-to-measure-whether-ai-is-actually-saving-your-law-firm-time": [
    "how-many-hours-per-week-does-ai-really-save-a-lawyer",
    "why-ai-wont-reduce-your-firms-billable-hours",
    "does-your-law-firm-have-an-ai-strategy",
  ],
  "how-many-hours-per-week-does-ai-really-save-a-lawyer": [
    "how-to-measure-whether-ai-is-actually-saving-your-law-firm-time",
    "why-ai-wont-reduce-your-firms-billable-hours",
    "does-your-law-firm-have-an-ai-strategy",
  ],
  "ai-in-ma-due-diligence-how-much-faster-is-it-really": [
    "ai-contract-review-how-much-time-can-it-actually-save",
    "is-it-safe-to-use-ai-with-privileged-client-information",
    "5-questions-to-ask-before-adopting-any-legal-ai-tool",
  ],
  "the-eu-ai-act-deadline-got-pushed-back-heres-what-still-applies-right-now": [
    "does-the-eu-ai-act-require-ai-training-for-law-firms-what-article-4-means-in-2026",
    "does-your-law-firm-have-an-ai-strategy",
    "should-your-firm-tell-clients-when-youre-using-ai-on-their-matter",
  ],
  "your-lawyers-are-already-using-ai-almost-nobody-trained-them": [
    "does-the-eu-ai-act-require-ai-training-for-law-firms-what-article-4-means-in-2026",
    "how-many-hours-per-week-does-ai-really-save-a-lawyer",
    "does-your-law-firm-have-an-ai-strategy",
  ],
  "law-firms-are-the-perfect-target-for-ai-driven-cyberattacks": [
    "does-your-law-firm-have-an-ai-strategy",
    "will-ai-insurance-underwriters-ask-about-your-firms-ai-use",
    "is-it-safe-to-use-ai-with-privileged-client-information",
  ],
  "should-your-firm-tell-clients-when-youre-using-ai-on-their-matter": [
    "the-eu-ai-act-deadline-got-pushed-back-heres-what-still-applies-right-now",
    "is-it-safe-to-use-ai-with-privileged-client-information",
    "does-your-law-firm-have-an-ai-strategy",
  ],
  "why-law-firm-invoices-are-getting-rejected-more-than-ever": [
    "why-ai-wont-reduce-your-firms-billable-hours",
    "how-clients-are-already-using-ai-instead-of-calling-your-firm",
    "5-questions-to-ask-before-adopting-any-legal-ai-tool",
  ],
  "ai-legal-research-how-much-time-are-firms-actually-saving": [
    "ai-hallucinations-in-legal-filings",
    "ai-contract-review-how-much-time-can-it-actually-save",
    "why-ai-wont-reduce-your-firms-billable-hours",
  ],
  "your-law-firm-is-losing-clients-before-they-ever-book-a-call": [
    "how-clients-are-already-using-ai-instead-of-calling-your-firm",
    "should-your-firm-tell-clients-when-youre-using-ai-on-their-matter",
    "does-your-law-firm-have-an-ai-strategy",
  ],
  "ai-contract-review-how-much-time-can-it-actually-save": [
    "ai-in-ma-due-diligence-how-much-faster-is-it-really",
    "ai-legal-research-how-much-time-are-firms-actually-saving",
    "5-questions-to-ask-before-adopting-any-legal-ai-tool",
  ],
  "how-clients-are-already-using-ai-instead-of-calling-your-firm": [
    "your-law-firm-is-losing-clients-before-they-ever-book-a-call",
    "should-your-firm-tell-clients-when-youre-using-ai-on-their-matter",
    "why-ai-wont-reduce-your-firms-billable-hours",
  ],
  "will-ai-insurance-underwriters-ask-about-your-firms-ai-use": [
    "does-your-law-firm-have-an-ai-strategy",
    "is-it-safe-to-use-ai-with-privileged-client-information",
    "law-firms-are-the-perfect-target-for-ai-driven-cyberattacks",
  ],
  "why-ai-wont-reduce-your-firms-billable-hours": [
    "how-to-measure-whether-ai-is-actually-saving-your-law-firm-time",
    "how-many-hours-per-week-does-ai-really-save-a-lawyer",
    "ai-legal-research-how-much-time-are-firms-actually-saving",
  ],
  "5-questions-to-ask-before-adopting-any-legal-ai-tool": [
    "is-it-safe-to-use-ai-with-privileged-client-information",
    "ai-hallucinations-in-legal-filings",
    "will-ai-insurance-underwriters-ask-about-your-firms-ai-use",
  ],
  "is-it-safe-to-use-ai-with-privileged-client-information": [
    "can-law-firms-put-client-data-into-microsoft-copilot-outlook-and-teams",
    "the-ai-your-law-firm-never-chose-how-to-check-built-in-ai-features",
    "5-questions-to-ask-before-adopting-any-legal-ai-tool",
  ],
  "does-your-law-firm-have-an-ai-strategy": [
    "how-to-choose-an-ai-consultant-for-your-law-firm",
    "can-law-firms-put-client-data-into-microsoft-copilot-outlook-and-teams",
    "5-questions-to-ask-before-adopting-any-legal-ai-tool",
  ],
  "ai-hallucinations-in-legal-filings": [
    "ai-legal-research-how-much-time-are-firms-actually-saving",
    "5-questions-to-ask-before-adopting-any-legal-ai-tool",
    "does-your-law-firm-have-an-ai-strategy",
  ],
};

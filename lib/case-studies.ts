export type CaseStudyFaq = {
  q: string;
  a: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  /** SEO meta description; falls back to description when omitted. */
  metaDescription?: string;
  date: string;
  dateModified?: string;
  dateLabel: string;
  readingMinutes: number;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "denmark-law-firm-6-7-hours",
    title: "How a 9 Person Law Firm in Denmark Saves 6 to 7 Hours a Week With AI",
    description:
      "A 9 person law firm in Denmark was losing hours to email, case reviews and invoicing, and was unsure about AI and GDPR. After one AI Tools Assessment, it saves 6 to 7 hours per week.",
    metaDescription:
      "How a 9 person Danish law firm saves 6 to 7 hours a week on email, case reviews and invoicing, and learned to use AI safely under GDPR.",
    date: "2026-11-23",
    dateModified: "2026-11-23",
    dateLabel: "23 November 2026",
    readingMinutes: 5,
  },
  {
    slug: "poland-law-firm-6-hours",
    title: "How a 17 Person Law Firm in Poland Saved 6 Hours a Week With AI",
    description:
      "A 17 person law firm in Poland was losing most of its week to emails and case reviews. After one AI Tools Assessment, it saves an average of 6 hours per week.",
    metaDescription:
      "How a 17 person law firm in Poland saved around 6 hours a week on emails and case reviews after one AI Tools Assessment.",
    date: "2026-10-11",
    dateModified: "2026-10-31",
    dateLabel: "11 October 2026",
    readingMinutes: 5,
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

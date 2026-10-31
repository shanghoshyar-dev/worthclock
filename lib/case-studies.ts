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

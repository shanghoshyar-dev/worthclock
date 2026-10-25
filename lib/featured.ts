export type FeaturedArticle = {
  id: string;
  publication: string;
  title: string;
  url: string;
  date: string;
  dateLabel: string;
  summary: string;
  readLabel: string;
};

export const featuredArticles: FeaturedArticle[] = [
  {
    id: "solicitor-news-confidentiality",
    publication: "Solicitor News",
    title:
      "Can AI use breach client confidentiality? It can, and privilege too.",
    url: "https://solicitornews.co.uk/ai-client-confidentiality-privilege-sra/",
    date: "2026-10-23",
    dateLabel: "23 October 2026",
    summary:
      "How AI tools can put client confidentiality and legal privilege at risk, and what UK and EU firms need to check before adopting them.",
    readLabel: "Read on Solicitor News",
  },
];

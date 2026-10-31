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
    id: "solicitor-news-due-diligence",
    publication: "Solicitor News",
    title: "AI due diligence: what to check before client data goes in",
    url: "https://solicitornews.co.uk/ai-due-diligence/",
    date: "2026-10-30",
    dateLabel: "30 October 2026",
    summary:
      "An eight question due diligence checklist for approving AI tools for client work, based on the SRA's August 2026 warning notice and ICO guidance.",
    readLabel: "Read on Solicitor News",
  },
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

/** Group articles by publication, preserving newest-first order within each group. */
export function featuredByPublication() {
  const groups: { publication: string; articles: FeaturedArticle[] }[] = [];
  for (const article of featuredArticles) {
    const existing = groups.find((g) => g.publication === article.publication);
    if (existing) {
      existing.articles.push(article);
    } else {
      groups.push({ publication: article.publication, articles: [article] });
    }
  }
  return groups;
}

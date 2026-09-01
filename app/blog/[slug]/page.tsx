import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { BlogArticleShell } from "@/components/blog/ArticleLayout";
import {
  AiDisclosureArticle,
  aiDisclosureFaqs,
} from "@/components/blog/AiDisclosureArticle";
import {
  BillableHoursArticle,
  billableHoursFaqs,
} from "@/components/blog/BillableHoursArticle";
import {
  ClientsUsingAiArticle,
  clientsUsingAiFaqs,
} from "@/components/blog/ClientsUsingAiArticle";
import {
  ContractReviewArticle,
  contractReviewFaqs,
} from "@/components/blog/ContractReviewArticle";
import {
  FiveQuestionsArticle,
  fiveQuestionsFaqs,
} from "@/components/blog/FiveQuestionsArticle";
import {
  HallucinationsArticle,
  hallucinationFaqs,
} from "@/components/blog/HallucinationsArticle";
import {
  InsuranceArticle,
  insuranceFaqs,
} from "@/components/blog/InsuranceArticle";
import {
  InvoiceRejectionArticle,
  invoiceRejectionFaqs,
} from "@/components/blog/InvoiceRejectionArticle";
import {
  LegalResearchArticle,
  legalResearchFaqs,
} from "@/components/blog/LegalResearchArticle";
import {
  LosingClientsArticle,
  losingClientsFaqs,
} from "@/components/blog/LosingClientsArticle";
import {
  PrivilegedDataArticle,
  privilegedFaqs,
} from "@/components/blog/PrivilegedDataArticle";
import {
  StrategyArticle,
  strategyFaqs,
} from "@/components/blog/StrategyArticle";
import { getPost, posts, type BlogFaq } from "@/lib/blog";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

const articles: Record<
  string,
  { faqs: BlogFaq[]; Content: () => ReactNode }
> = {
  "should-your-firm-tell-clients-when-youre-using-ai-on-their-matter": {
    faqs: aiDisclosureFaqs,
    Content: AiDisclosureArticle,
  },
  "why-law-firm-invoices-are-getting-rejected-more-than-ever": {
    faqs: invoiceRejectionFaqs,
    Content: InvoiceRejectionArticle,
  },
  "ai-legal-research-how-much-time-are-firms-actually-saving": {
    faqs: legalResearchFaqs,
    Content: LegalResearchArticle,
  },
  "your-law-firm-is-losing-clients-before-they-ever-book-a-call": {
    faqs: losingClientsFaqs,
    Content: LosingClientsArticle,
  },
  "ai-contract-review-how-much-time-can-it-actually-save": {
    faqs: contractReviewFaqs,
    Content: ContractReviewArticle,
  },
  "how-clients-are-already-using-ai-instead-of-calling-your-firm": {
    faqs: clientsUsingAiFaqs,
    Content: ClientsUsingAiArticle,
  },
  "will-ai-insurance-underwriters-ask-about-your-firms-ai-use": {
    faqs: insuranceFaqs,
    Content: InsuranceArticle,
  },
  "why-ai-wont-reduce-your-firms-billable-hours": {
    faqs: billableHoursFaqs,
    Content: BillableHoursArticle,
  },
  "5-questions-to-ask-before-adopting-any-legal-ai-tool": {
    faqs: fiveQuestionsFaqs,
    Content: FiveQuestionsArticle,
  },
  "is-it-safe-to-use-ai-with-privileged-client-information": {
    faqs: privilegedFaqs,
    Content: PrivilegedDataArticle,
  },
  "ai-hallucinations-in-legal-filings": {
    faqs: hallucinationFaqs,
    Content: HallucinationsArticle,
  },
  "does-your-law-firm-have-an-ai-strategy": {
    faqs: strategyFaqs,
    Content: StrategyArticle,
  },
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${site.url}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  const article = articles[slug];
  if (!post || !article) notFound();

  const { Content, faqs } = article;

  return (
    <BlogArticleShell post={post} faqs={faqs}>
      <Content />
    </BlogArticleShell>
  );
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { CaseStudyShell } from "@/components/case-studies/CaseStudyLayout";
import {
  PolandCaseStudy,
  polandCaseStudyFaqs,
} from "@/components/case-studies/PolandCaseStudy";
import {
  caseStudies,
  getCaseStudy,
  type CaseStudyFaq,
} from "@/lib/case-studies";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

const studies: Record<
  string,
  { faqs: CaseStudyFaq[]; Content: () => ReactNode }
> = {
  "how-a-17-person-law-firm-in-poland-saved-6-hours-a-week-with-ai": {
    faqs: polandCaseStudyFaqs,
    Content: PolandCaseStudy,
  },
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.description,
    openGraph: {
      title: study.title,
      description: study.description,
      type: "article",
      publishedTime: study.date,
      url: `${site.url}/case-studies/${study.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const article = studies[slug];
  if (!study || !article) notFound();

  const { Content, faqs } = article;

  return (
    <CaseStudyShell study={study} faqs={faqs}>
      <Content />
    </CaseStudyShell>
  );
}

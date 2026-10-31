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
  "poland-law-firm-6-hours": {
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

  const description = study.metaDescription ?? study.description;

  return {
    title: study.title,
    description,
    openGraph: {
      title: study.title,
      description,
      type: "article",
      publishedTime: study.date,
      modifiedTime: study.dateModified ?? study.date,
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

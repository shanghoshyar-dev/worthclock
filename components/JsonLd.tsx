import { site } from "@/lib/site";

const organizationId = `${site.url}/#organization`;
const founderId = `${site.url}/#founder`;

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": organizationId,
        name: site.name,
        url: site.url,
        logo: `${site.url}/logo.png`,
        description:
          "AI Tools Assessment for law firms in the EU. We map where AI can save time and how to use it safely with client data.",
        areaServed: "European Union",
        knowsAbout: [
          "Artificial intelligence in law firms",
          "Legal technology",
          "Client confidentiality",
          "GDPR",
          "EU AI Act",
          "AI tools assessment",
        ],
        founder: { "@id": founderId },
        sameAs: ["https://www.linkedin.com/in/shang-hoshyar-ahmed-1a08b73b5/"],
      },
      {
        "@type": "Service",
        "@id": `${site.url}/#assessment`,
        name: "AI Tools Assessment for Law Firms",
        serviceType: "AI consulting for law firms",
        provider: { "@id": organizationId },
        areaServed: "European Union",
        description:
          "A 45 minute assessment that maps where a law firm loses time and matches it to AI tools that are safe for client data, followed by a written plan.",
        offers: {
          "@type": "Offer",
          price: "999",
          priceCurrency: "EUR",
          url: `${site.url}/book`,
        },
      },
      {
        "@type": "Person",
        "@id": founderId,
        name: "Shang Ahmed",
        jobTitle: "Founder",
        worksFor: { "@id": organizationId },
        url: `${site.url}/about`,
        sameAs: [
          "https://www.linkedin.com/in/shang-hoshyar-ahmed-1a08b73b5/",
          "https://solicitornews.co.uk/ai-due-diligence/",
          "https://solicitornews.co.uk/ai-client-confidentiality-privilege-sra/",
        ],
        knowsAbout: [
          "AI adoption in law firms",
          "Legal technology",
          "AI and client confidentiality",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

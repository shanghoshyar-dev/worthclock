import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        email: site.email,
        description: site.entity,
        address: {
          "@type": "PostalAddress",
          addressCountry: "SE",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#service`,
        name: site.entity,
        provider: { "@id": `${site.url}/#organization` },
        areaServed: "Worldwide",
        priceRange: site.price,
        offers: {
          "@type": "Offer",
          name: "AI Tools Assessment",
          price: String(site.priceAmount),
          priceCurrency: site.currency,
          url: `${site.url}/book`,
        },
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

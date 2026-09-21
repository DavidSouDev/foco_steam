import { plans } from "@/data/plans";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

// "R$ 1.234,56" -> "1234.56"
function toPrice(value: string): string {
  return value.replace(/[^\d,]/g, "").replace(",", ".");
}

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/img/logo.jpg`,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "pt-BR",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Product",
        "@id": `${SITE_URL}/#product`,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        image: `${SITE_URL}/img/hero-bg.png`,
        brand: { "@type": "Brand", name: SITE_NAME },
        offers: plans.map((plan) => ({
          "@type": "Offer",
          name: `Plano ${plan.name}`,
          price: toPrice(plan.totalPrice),
          priceCurrency: "BRL",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/#planos`,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

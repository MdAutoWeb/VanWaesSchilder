import { BUSINESS, SITE_URL, SOCIAL } from "../lib/site";

interface LocalBusinessSchemaProps {
  areaServed: string | string[];
  pageUrl: string;
  description: string;
}

function toAreaServed(areas: string | string[]) {
  const list = Array.isArray(areas) ? areas : [areas];
  return list.map((name) => ({ "@type": "City" as const, name }));
}

export default function LocalBusinessSchema({
  areaServed,
  pageUrl,
  description,
}: LocalBusinessSchemaProps) {
  const areas = toAreaServed(areaServed);

  const schema = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    name: BUSINESS.name,
    description,
    url: `${SITE_URL}${pageUrl}`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.addressStreet,
      postalCode: BUSINESS.addressPostalCode,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    vatID: BUSINESS.vat,
    areaServed: areas.length === 1 ? areas[0] : areas,
    sameAs: [SOCIAL.facebook, SOCIAL.instagram],
    priceRange: "€€",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

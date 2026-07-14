import {
  BUSINESS,
  SERVICE_AREAS,
  SITE_DESCRIPTION,
  SITE_URL,
  SOCIAL,
  businessLogoUrl,
} from "./site";

type LocalBusinessSchemaInput = {
  description?: string;
  areaServed?: string | string[];
};

function normalizeAreaServed(areas?: string | string[]): string[] {
  if (!areas) return [...SERVICE_AREAS];
  return Array.isArray(areas) ? areas : [areas];
}

export function buildLocalBusinessSchema({
  description = SITE_DESCRIPTION,
  areaServed,
}: LocalBusinessSchemaInput = {}) {

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    image: businessLogoUrl(),
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    description,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.addressStreet,
      addressLocality: BUSINESS.addressLocality,
      postalCode: BUSINESS.addressPostalCode,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    areaServed: normalizeAreaServed(areaServed),
    url: SITE_URL,
    priceRange: "€€",
    vatID: BUSINESS.vat,
    sameAs: [SOCIAL.facebook, SOCIAL.instagram],
  };
}

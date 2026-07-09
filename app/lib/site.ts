export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.swvanwaes.be";

export const SITE_DESCRIPTION =
  "Van Waes Schilderwerken: strak en duurzaam binnen- en buitenschilderwerk aan de Belgische kust en omstreken. Vakmanschap dat blijft.";

export const BUSINESS = {
  name: "Van Waes Schilderwerken",
  phone: "+32473694723",
  phoneDisplay: "0473 69 47 23",
  whatsapp: "https://wa.me/32473694723",
  email: "info@swvanwaes.be",
  vat: "BE1026.897.527",
  vatDisplay: "BE 1026.897.527",
  addressStreet: "Bauwensplein 5",
  addressPostalCode: "8400",
  addressLocality: "Oostende",
  addressRegion: "West-Vlaanderen",
  addressCountry: "BE",
  addressDisplay: "Bauwensplein 5, 8400 Oostende",
};

export const WEBAMO_URL = "https://webamo.be";

export const SOCIAL = {
  facebook:
    "https://www.facebook.com/profile.php?id=61587671488461&locale=nl_BE",
  instagram: "https://www.instagram.com/schilderwerkenvanwaes/",
} as const;


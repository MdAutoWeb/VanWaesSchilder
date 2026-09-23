export const SERVICE_CATEGORIES = [
  {
    slug: "binnenschilderwerk",
    title: "Binnenschilderwerk",
    num: "01",
    desc: "Muren, plafonds, houtwerk en trappen, vlot en stofarm geschilderd in een bewoonde woning.",
    tags: ["Muren", "Plafonds", "Houtwerk"],
    src: "/images/binnenschilderwerk/image8.jpeg",
  },
  {
    slug: "buitenschilderwerk",
    title: "Buitenschilderwerk",
    num: "02",
    desc: "Gevels, ramen en deuren bestand tegen de zeelucht. Inclusief herstel van houtrot en grondig voorbereiden.",
    tags: ["Gevels", "Ramen", "Houtrot"],
    src: "/images/buitenschilderwerk/buiten-1.jpeg",
  },
  {
    slug: "decoratieve-technieken",
    title: "Decoratieve technieken",
    num: "03",
    desc: "Betonciré, kalkverf, structuurverf en behang. Voor wie net dat tikkeltje extra karakter zoekt.",
    tags: ["Betonciré", "Kalkverf", "Behang"],
    src: "/images/decoratieve-technieken/deco-living.jpeg",
  },
] as const;

export type ServiceCategorySlug = (typeof SERVICE_CATEGORIES)[number]["slug"];

export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];

export const SERVICE_CATEGORY_SLUGS = SERVICE_CATEGORIES.map(
  (service) => service.slug,
) as ServiceCategorySlug[];

export function isServiceCategorySlug(
  value: string | null | undefined,
): value is ServiceCategorySlug {
  return (
    typeof value === "string" &&
    SERVICE_CATEGORY_SLUGS.includes(value as ServiceCategorySlug)
  );
}

export function getServiceBySlug(
  slug: string | null | undefined,
): ServiceCategory | undefined {
  if (!isServiceCategorySlug(slug)) return undefined;
  return SERVICE_CATEGORIES.find((service) => service.slug === slug);
}

export function realisatiesHref(slug?: ServiceCategorySlug): string {
  return slug ? `/realisaties?cat=${slug}` : "/realisaties";
}

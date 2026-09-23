import type { ServiceCategorySlug } from "./services";

export type RealisatieImageTile = {
  id: string;
  size: string;
  src: string;
  alt: string;
  category: ServiceCategorySlug;
  /** object-position for cover crop (e.g. "center 30%") */
  position?: string;
};

export type RealisatieBeforeAfterTile = {
  id: string;
  size: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  category: ServiceCategorySlug;
};

export type RealisatieTile = RealisatieImageTile | RealisatieBeforeAfterTile;

export function isBeforeAfterTile(
  tile: RealisatieTile,
): tile is RealisatieBeforeAfterTile {
  return "beforeSrc" in tile;
}

/**
 * Paths match folders under public/images/{category}/.
 * Move files between folders + update category here when correcting.
 */
export const realisatieTiles: RealisatieTile[] = [
  {
    id: "real-ba-gevel",
    beforeSrc: "/images/buitenschilderwerk/gevel-voor.jpeg",
    afterSrc: "/images/buitenschilderwerk/gevel-na.jpeg",
    beforeAlt: "Gevel voor het schilderwerk",
    afterAlt: "Gevel na het schilderwerk",
    size: "w2 h2",
    category: "buitenschilderwerk",
  },
  {
    id: "real-8",
    src: "/images/binnenschilderwerk/image8.jpeg",
    alt: "Binnenschilderwerk Van Waes",
    size: "w2 h2",
    category: "binnenschilderwerk",
  },
  {
    id: "real-ba-zijgevel",
    beforeSrc: "/images/buitenschilderwerk/zijgevel-voor.jpeg",
    afterSrc: "/images/buitenschilderwerk/zijgevel-na.jpeg",
    beforeAlt: "Zijgevel voor het schilderwerk",
    afterAlt: "Zijgevel na het schilderwerk",
    size: "w2 h2",
    category: "buitenschilderwerk",
  },
  {
    id: "real-deco-living",
    src: "/images/decoratieve-technieken/deco-living.jpeg",
    alt: "Decoratieve afwerking living",
    size: "w2 h2",
    category: "decoratieve-technieken",
  },
  {
    id: "real-buitenpoort",
    src: "/images/buitenschilderwerk/buitenpoort.jpeg",
    alt: "Buitenschilderwerk poort Van Waes",
    size: "w2 h2",
    position: "center 40%",
    category: "buitenschilderwerk",
  },
  {
    id: "real-deco-keuken",
    src: "/images/decoratieve-technieken/deco-keuken.jpeg",
    alt: "Decoratieve afwerking keuken",
    size: "w2 h2",
    category: "decoratieve-technieken",
  },
  {
    id: "real-deco-hall",
    src: "/images/decoratieve-technieken/deco-hall.jpeg",
    alt: "Decoratieve afwerking hal",
    size: "w2 h2",
    category: "decoratieve-technieken",
  },
  {
    id: "real-deco-hall-2",
    src: "/images/decoratieve-technieken/deco-hall-2.jpeg",
    alt: "Decoratieve afwerking hal",
    size: "w2 h2",
    category: "decoratieve-technieken",
  },
  {
    id: "real-deco-1",
    src: "/images/decoratieve-technieken/deco-1.jpeg",
    alt: "Decoratieve techniek Van Waes",
    size: "w2 h2",
    category: "decoratieve-technieken",
  },
  {
    id: "real-deco-2",
    src: "/images/decoratieve-technieken/deco-2.jpeg",
    alt: "Decoratieve techniek Van Waes",
    size: "w2 h2",
    category: "decoratieve-technieken",
  },
  {
    id: "real-buiten-1",
    src: "/images/buitenschilderwerk/buiten-1.jpeg",
    alt: "Buitenschilderwerk veranda Van Waes",
    size: "w2",
    category: "buitenschilderwerk",
  },
  {
    id: "real-ba-02",
    beforeSrc: "/images/binnenschilderwerk/woonkamer-voor.jpeg",
    afterSrc: "/images/binnenschilderwerk/woonkamer-na.jpeg",
    beforeAlt: "Woonkamer voor het schilderwerk",
    afterAlt: "Woonkamer na het schilderwerk",
    size: "w2 h2",
    category: "binnenschilderwerk",
  },
  {
    id: "real-ba-01",
    beforeSrc: "/images/buitenschilderwerk/buitenwerk-voor-1.jpeg",
    afterSrc: "/images/buitenschilderwerk/buitenwerk-na-1.jpeg",
    beforeAlt: "Buitenwerk voor het schilderen",
    afterAlt: "Buitenwerk na het schilderen",
    size: "w2 h2",
    category: "buitenschilderwerk",
  },
  {
    id: "real-11",
    src: "/images/decoratieve-technieken/image11.jpeg",
    alt: "Decoratief behang Van Waes",
    size: "w2 h2",
    category: "decoratieve-technieken",
  },
  {
    id: "real-buiten-2",
    src: "/images/buitenschilderwerk/buiten-2.jpeg",
    alt: "Buitenschilderwerk Van Waes",
    size: "w1",
    category: "buitenschilderwerk",
  },
  {
    id: "real-buiten-3",
    src: "/images/buitenschilderwerk/buiten-3.jpeg",
    alt: "Buitenschilderwerk Van Waes",
    size: "w1",
    category: "buitenschilderwerk",
  },
  {
    id: "real-10",
    src: "/images/binnenschilderwerk/image10.jpeg",
    alt: "Binnenschilderwerk Van Waes",
    size: "w1",
    category: "binnenschilderwerk",
  },
  {
    id: "real-05",
    src: "/images/binnenschilderwerk/image05.jpeg",
    alt: "Binnenschilderwerk Van Waes",
    size: "w1",
    category: "binnenschilderwerk",
  },
  {
    id: "real-9",
    src: "/images/binnenschilderwerk/image9.jpeg",
    alt: "Binnenschilderwerk Van Waes",
    size: "w2",
    category: "binnenschilderwerk",
  },
  {
    id: "real-12",
    src: "/images/binnenschilderwerk/image12.jpeg",
    alt: "Binnenschilderwerk Van Waes",
    size: "w2",
    category: "binnenschilderwerk",
  },
  {
    id: "real-6",
    src: "/images/decoratieve-technieken/image6.jpeg",
    alt: "Decoratieve afwerking Van Waes",
    size: "w2",
    category: "decoratieve-technieken",
  },
  {
    id: "real-04",
    src: "/images/binnenschilderwerk/image04.jpeg",
    alt: "Binnenschilderwerk Van Waes",
    size: "w2",
    category: "binnenschilderwerk",
  },
  {
    id: "real-3",
    src: "/images/decoratieve-technieken/image3.jpeg",
    alt: "Decoratieve accentmuur Van Waes",
    size: "w1",
    category: "decoratieve-technieken",
  },
  {
    id: "real-4",
    src: "/images/binnenschilderwerk/image4.jpeg",
    alt: "Binnenschilderwerk Van Waes",
    size: "w1",
    category: "binnenschilderwerk",
  },
  {
    id: "real-1",
    src: "/images/binnenschilderwerk/image1.jpeg",
    alt: "Binnenschilderwerk Van Waes",
    size: "w1",
    category: "binnenschilderwerk",
  },
  {
    id: "real-7",
    src: "/images/decoratieve-technieken/image7.jpeg",
    alt: "Decoratieve afwerking Van Waes",
    size: "w1",
    category: "decoratieve-technieken",
  },
  {
    id: "real-02",
    src: "/images/binnenschilderwerk/image02.jpeg",
    alt: "Binnenschilderwerk Van Waes",
    size: "w2",
    category: "binnenschilderwerk",
  },
  {
    id: "real-ba-03",
    beforeSrc: "/images/buitenschilderwerk/paal-voor.jpeg",
    afterSrc: "/images/buitenschilderwerk/paal-na.jpeg",
    beforeAlt: "Detail voor het schilderwerk",
    afterAlt: "Detail na het schilderwerk",
    size: "w2",
    category: "buitenschilderwerk",
  },
];

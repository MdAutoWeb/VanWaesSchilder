export type RealisatieImageTile = {
  id: string;
  size: string;
  src: string;
  alt: string;
};

export type RealisatieBeforeAfterTile = {
  id: string;
  size: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

export type RealisatieTile = RealisatieImageTile | RealisatieBeforeAfterTile;

export function isBeforeAfterTile(
  tile: RealisatieTile,
): tile is RealisatieBeforeAfterTile {
  return "beforeSrc" in tile;
}

export const realisatieTiles: RealisatieTile[] = [
  {
    id: "real-8",
    src: "/images/image8.jpeg",
    alt: "Schilderrealisatie Van Waes",
    size: "w2 h2",
  },
  {
    id: "real-ba-01",
    beforeSrc: "/images/buitenwerk-na-1.jfif",
    afterSrc: "/images/buitenwerk-voor-1.jfif",
    beforeAlt: "Buitenwerk voor het schilderen",
    afterAlt: "Buitenwerk na het schilderen",
    size: "w2 h2",
  },
  {
    id: "real-6",
    src: "/images/image6.jpeg",
    alt: "Schilderrealisatie Van Waes",
    size: "w2",
  },
  {
    id: "real-12",
    src: "/images/image12.jpeg",
    alt: "Schilderrealisatie Van Waes",
    size: "w2",
  },
  {
    id: "real-11",
    src: "/images/image11.jpeg",
    alt: "Schilderrealisatie Van Waes",
    size: "w2 h2",
  },
  {
    id: "real-ba-02",
    beforeSrc: "/images/woonkamer-voor.jfif",
    afterSrc: "/images/woonkamer-na.jfif",
    beforeAlt: "Woonkamer voor het schilderwerk",
    afterAlt: "Woonkamer na het schilderwerk",
    size: "w2 h2",
  },
  {
    id: "real-10",
    src: "/images/image10.jpeg",
    alt: "Schilderrealisatie Van Waes",
    size: "w1",
  },
  {
    id: "real-010",
    src: "/images/image010.jpeg",
    alt: "Schilderrealisatie Van Waes",
    size: "w1",
  },
  {
    id: "real-08",
    src: "/images/image08.jpeg",
    alt: "Schilderrealisatie Van Waes",
    size: "w1",
  },
  {
    id: "real-05",
    src: "/images/image05.jpeg",
    alt: "Schilderrealisatie Van Waes",
    size: "w1",
  },
  {
    id: "real-9",
    src: "/images/image9.jpeg",
    alt: "Schilderrealisatie Van Waes",
    size: "w2",
  },
  {
    id: "real-09",
    src: "/images/image09.jpeg",
    alt: "Schilderrealisatie Van Waes",
    size: "w2",
  },
  {
    id: "real-2",
    src: "/images/image2.jpeg",
    alt: "Schilderrealisatie Van Waes",
    size: "w2",
  },
  {
    id: "real-04",
    src: "/images/image04.jpeg",
    alt: "Schilderrealisatie Van Waes",
    size: "w2",
  },
  {
    id: "real-3",
    src: "/images/image3.jpeg",
    alt: "Schilderrealisatie Van Waes",
    size: "w1",
  },
  {
    id: "real-4",
    src: "/images/image4.jpeg",
    alt: "Schilderrealisatie Van Waes",
    size: "w1",
  },
  {
    id: "real-1",
    src: "/images/image1.jpeg",
    alt: "Schilderrealisatie Van Waes",
    size: "w1",
  },
  {
    id: "real-7",
    src: "/images/image7.jpeg",
    alt: "Schilderrealisatie Van Waes",
    size: "w1",
  },
  {
    id: "real-02",
    src: "/images/image02.jpeg",
    alt: "Schilderrealisatie Van Waes",
    size: "w2",
  },
  {
    id: "real-06",
    src: "/images/image06.jpeg",
    alt: "Schilderrealisatie Van Waes",
    size: "w2",
  },
  {
    id: "real-07",
    src: "/images/image07.jpeg",
    alt: "Schilderrealisatie Van Waes",
    size: "w4",
  },
  {
    id: "real-ba-03",
    beforeSrc: "/images/paal-voor.jfif",
    afterSrc: "/images/paal-na.jfif",
    beforeAlt: "Detail voor het schilderwerk",
    afterAlt: "Detail na het schilderwerk",
    size: "w2",
  },
  {
    id: "real-new-5816",
    src: "/images/buitenschilderwerk-nieuw.jfif",
    alt: "Buitenschilderwerk Van Waes",
    size: "w2",
  },
];

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
    beforeSrc: "/images/new%20images%209/954d5581-ace9-4525-a74c-817f976327f5.jfif",
    afterSrc: "/images/new%20images%209/00e20dbe-9e0d-4809-8fc8-a320236d849d.jfif",
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
    beforeSrc: "/images/new%20images%209/25e4b3d7-a54e-46df-8a14-4a645b3f1f1a.jfif",
    afterSrc: "/images/new%20images%209/704b30c2-6ebe-42cb-8718-688903f9d01a.jfif",
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
    beforeSrc: "/images/new%20images%209/732868f7-e6ec-40f8-8050-3e7174e4b16f.jfif",
    afterSrc: "/images/new%20images%209/db42d05a-f4f6-44c1-8931-e46c6784f486.jfif",
    beforeAlt: "Detail voor het schilderwerk",
    afterAlt: "Detail na het schilderwerk",
    size: "w2",
  },
  {
    id: "real-new-5816",
    src: "/images/new%20images%209/581655f4-80c5-4cd3-aa57-4ab0773b8ea0.jfif",
    alt: "Buitenschilderwerk Van Waes",
    size: "w2",
  },
];

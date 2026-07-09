import type { FaqItem } from "./faq-home";

export type LocalPageData = {
  slug: string;
  place: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  lead: string;
  sections: { heading?: string; paragraphs: string[] }[];
  images: { src: string; alt: string }[];
  faq: FaqItem[];
  areaServed: string[];
};

export const featuredReview = {
  text: "Werkt professioneel en correct. Zeer stipt en komt afspraken volledig na. Goede kwaliteit met aandacht voor orde en netheid. Beslist aan te bevelen!",
  date: "12/02/26",
  name: "Steve V.",
};

export const bredenePage: LocalPageData = {
  slug: "schilder-bredene",
  place: "Bredene",
  metaTitle: "Schilder Bredene | Van Waes Schilderwerken",
  metaDescription:
    "Schilder in Bredene voor rijwoningen en appartementen. Schilderwerken in Bredene, Oudenburg en omgeving. Snel ter plaatse vanuit Oostende.",
  kicker: "Schilderwerken · Bredene",
  h1: "Schilder in Bredene",
  lead:
    "Ik ben je schilder in Bredene, op een kwartiertje vanuit Oostende. Schilderwerken in Bredene doe ik vaak in rijwoningen en appartementen, en meestal kan ik binnen enkele dagen langskomen.",
  sections: [
    {
      paragraphs: [
        "Bredene ligt vlak bij mijn thuisbasis. Geen grote ploeg, geen tussenpersoon: je belt mij, ik kom langs en ik volg het werk persoonlijk op. Voor een trap, een slaapkamer of een volledige woning. De lijnen zijn kort.",
        "Ik rij dagelijks door de gemeente, van de dorpskern tot de woonwijken richting de duinen. Een plaatsbezoek plan ik meestal binnen de week. Voor kleinere klussen vind ik vaak sneller een gaatje dan een bedrijf van verder weg.",
      ],
    },
    {
      heading: "Schilderwerken in rijwoningen",
      paragraphs: [
        "In Bredene staan veel rijwoningen met smalle trappenhuizen. Ik werk kamer per kamer, stofarm en ruim elke avond op. Je hoeft de woning niet te verlaten.",
        "In appartementen let ik op de lift, de gemeenschappelijke delen en de buren. Alles gaat afgedekt voordat ik begin. Zo blijft het gebouw netjes en heb je geen gedoe achteraf.",
      ],
    },
    {
      heading: "Ook in Oudenburg en de dorpen eromheen",
      paragraphs: [
        "Naast Bredene kom ik ook in Oudenburg, Ettelgem, Westkerke en Zuienkerke. Bakstenen woningen, landelijke huizen en recente nieuwbouw vragen elk hun eigen aanpak. Ik pas de verf aan op de ondergrond.",
        "Oudenburg ligt vlakbij. Ook Ettelgem, Westkerke en Zuienkerke zijn makkelijk bereikbaar. Je hoeft dus geen aparte schilder per dorp te zoeken.",
      ],
    },
    {
      heading: "Binnen en buiten",
      paragraphs: [
        "Binnenschilderwerk, buitenschilderwerk, ramen, deuren en voorgevels. Aan de kust gebruik ik verf die tegen zeelucht kan. Houtrot herstel ik eerst. Anders heeft schilderen weinig zin.",
        "Ik kom gratis langs voor een offerte. Je weet vooraf wat het kost en wanneer ik start. Bel of mail gerust.",
      ],
    },
  ],
  images: [
    {
      src: "/images/image1.jpeg",
      alt: "Binnenschilderwerk in een rijwoning",
    },
    {
      src: "/images/new%20images%209/581655f4-80c5-4cd3-aa57-4ab0773b8ea0.jfif",
      alt: "Buitenschilderwerk aan een voorgevel",
    },
    {
      src: "/images/image5.jpeg",
      alt: "Strak geschilderd houtwerk",
    },
  ],
  faq: [
    {
      question: "Hoe snel kun je in Bredene langskomen?",
      answer:
        "Meestal binnen enkele dagen. Ook in Oudenburg, Ettelgem of Westkerke is dat haalbaar. Ik werk vanuit Oostende.",
    },
    {
      question: "Schilder je ook appartementen in Bredene?",
      answer:
        "Ja. Ik werk stofarm, bescherm de gemeenschappelijke delen en plan per kamer.",
    },
    {
      question: "Wat kost schilderwerk in een rijwoning in Bredene?",
      answer:
        "Dat hangt af van de oppervlakte en de staat van de muren. Ik kom gratis langs en geef je een vaste prijs.",
    },
    {
      question: "Neem je ook kleine klussen aan in Zuienkerke?",
      answer:
        "Ja. Een trap, een slaapkamer of een keuken kan perfect. Door de korte afstand kan dat vaak snel.",
    },
  ],
  areaServed: ["Bredene", "Oudenburg", "Ettelgem", "Westkerke", "Zuienkerke"],
};

export const middelkerkePage: LocalPageData = {
  slug: "schilder-middelkerke",
  place: "Middelkerke",
  metaTitle: "Schilder Middelkerke | Van Waes Schilderwerken",
  metaDescription:
    "Schilder in Middelkerke voor appartementen en tweede verblijven. Schilderwerken in Middelkerke, Lombardsijde, Wilskerke en Westende.",
  kicker: "Schilderwerken · Middelkerke",
  h1: "Schilder in Middelkerke",
  lead:
    "Veel appartementen en tweede verblijven in Middelkerke, van eigenaars die hier niet permanent wonen. Als schilder in Middelkerke regel ik schilderwerken ook als je er zelf niet bent, in Lombardsijde, Wilskerke en verder langs de kust.",
  sections: [
    {
      paragraphs: [
        "Middelkerke telt veel vakantie- en verhuurwoningen. Mensen wonen in het binnenland en hebben hier een pand dat er verzorgd moet uitzien. Dat begrijp ik. Daarom communiceer ik helder, ook op afstand.",
        "Ik begin met een plaatsbezoek: houtwerk, vocht, oude verf, jouw planning. Daarna een offerte. Kan je er niet bij zijn? Ik stuur foto's van de voortgang en bel je op over kleur en timing. Zo weet je wat er gebeurt zonder zelf ter plaatse te moeten zijn.",
      ],
    },
    {
      heading: "Schilderwerken tegen zeelucht",
      paragraphs: [
        "Buitenwerk aan de kust is bescherming, geen luxe. Zout en wind vragen de juiste verf en primer. Ik herstel houtrot, schuur grondig en schilder ramen, deuren en gevelbekleding met systemen die voor dit klimaat gemaakt zijn.",
        "Een voorgevel die het hele jaar aan zeewind ligt, vraagt onderhoud. Liever elke paar jaar goed schilderen dan later veel zwaarder herstelwerk te moeten doen.",
      ],
    },
    {
      heading: "Lombardsijde, Wilskerke en Westende",
      paragraphs: [
        "Lombardsijde en Wilskerke horen bij Middelkerke, met veel gebouwen dicht bij zee. In Lombardsijde doe ik regelmatig buitenwerk; in Wilskerke binnen- en buitenschilderwerk in woningen en vakantieverblijven.",
        "Westende ligt net verder richting De Panne, Leffinge is het landelijke deel van de gemeente. Zelfde aanpak: plaatsbezoek, offerte, netjes opleveren. Je hoeft er niet altijd zelf bij te zijn.",
      ],
    },
    {
      heading: "Onderhoud op afstand",
      paragraphs: [
        "Appartement of vakantiewoning maar je woont elders? Ik dek af, schilder, ruim op en lever netjes op. Na afloop stuur ik foto's of kom ik nog eens langs.",
        "Binnen doe ik volledige appartementen of per kamer. Lakwerk, plafonds en deuren: hetzelfde niveau als bij een gezinswoning. Vraag gerust naar terugkerend onderhoud.",
      ],
    },
  ],
  images: [
    {
      src: "/images/image6.jpeg",
      alt: "Buitenschilderwerk aan een appartementsgebouw",
    },
    {
      src: "/images/image08.jpeg",
      alt: "Geschilderde voorgevel bestand tegen zeelucht",
    },
    {
      src: "/images/image7.jpeg",
      alt: "Binnenschilderwerk in een tweede verblijf",
    },
  ],
  faq: [
    {
      question: "Kun je mijn tweede verblijf in Middelkerke onderhouden als ik zelden ter plaatse ben?",
      answer:
        "Ja. We spreken vooraf de werken en toegang af. Ik werk zelfstandig en houd je op de hoogte.",
    },
    {
      question: "Welke verf gebruik je tegen zeelucht?",
      answer:
        "Kwaliteitsverf voor kustklimaat, na grondig voorbereidend werk. Houtrot herstel ik altijd vóór het schilderen.",
    },
    {
      question: "Werk je ook tijdens het toeristenseizoen?",
      answer:
        "In overleg. Ik plan zo dat hinder minimaal blijft en werk waar mogelijk kamer per kamer.",
    },
    {
      question: "Hoe kies ik kleur als ik niet in Middelkerke ben?",
      answer:
        "Tijdens het plaatsbezoek bespreken we stalen. Ik stuur foto's en geef advies, ook voor een pand in Leffinge of Westende.",
    },
  ],
  areaServed: ["Middelkerke", "Lombardsijde", "Wilskerke", "Westende", "Leffinge"],
};

export const deHaanPage: LocalPageData = {
  slug: "schilder-de-haan",
  place: "De Haan",
  metaTitle: "Schilder De Haan | Van Waes Schilderwerken",
  metaDescription:
    "Schilder in De Haan voor villa's en totaalprojecten. Schilderwerken in De Haan, Wenduine, Blankenberge en omgeving, ook decoratieve technieken.",
  kicker: "Schilderwerken · De Haan",
  h1: "Schilder in De Haan",
  lead:
    "Villa's en grote woningen in De Haan vragen tijd en precisie. Ik doe schilderwerken in De Haan van voorgevel tot interieur, ook in Wenduine, Klemskerke en de omliggende gemeenten.",
  sections: [
    {
      paragraphs: [
        "De Haan heeft woningen met karakter: brede voorgevels, veel houtwerk en interieurs waar afwerking telt. Ik pak zulke projecten aan, binnen en buiten, met veel aandacht voor voorbereiding en planning.",
        "Eerst kijk ik wat er nodig is: ondergronden, houtwerk, oude verflagen en jouw planning. Vaak werk ik in fases: buiten in drogere periodes, daarna binnen. Zo hoef je niet alles tegelijk uit huis.",
      ],
    },
    {
      heading: "Schilderwerken met decoratieve afwerking",
      paragraphs: [
        "Naast gewoon schilderwerk doe ik kalkverf, betonciré, structuurverf en behang. In villa's combineer ik dat wel eens: een accentmuur in de living, gelakt houtwerk op de deuren, rustige tinten op de slaapkamers.",
        "Lakwerk op kasten en trappen, strak en stofarm afgewerkt. Geen strepen, geen haastwerk.",
      ],
    },
    {
      heading: "Wenduine, Klemskerke en Vlissegem",
      paragraphs: [
        "Wenduine ligt op een steenworp, Klemskerke en Vlissegem horen bij de gemeente. Vergelijkbare woningen: veel houtwerk, grote ramen en invloed van zeelucht.",
        "Oude villa in het centrum of nieuwbouw in Vlissegem: ik kies verf en primer die passen bij de voorgevel en de ruimte.",
      ],
    },
    {
      heading: "Ook Blankenberge en Uitkerke",
      paragraphs: [
        "Richting Brugge kom ik in Blankenberge en Uitkerke voor grotere projecten: buitenschilderwerk, veel ramen en complex houtwerk. Ik plan het in logische stappen en hou je op de hoogte.",
        "Eén offerte, één planning, alles onder mijn persoonlijke leiding. Bel voor een gratis plaatsbezoek. Dan bekijken we samen wat je woning nodig heeft.",
      ],
    },
  ],
  images: [
    {
      src: "/images/image3.jpeg",
      alt: "Decoratieve afwerking in een villa",
    },
    {
      src: "/images/image11.jpeg",
      alt: "Totaalproject binnen- en buitenschilderwerk",
    },
    {
      src: "/images/image4.jpeg",
      alt: "Strak lakwerk op binnendeuren",
    },
  ],
  faq: [
    {
      question: "Doe je totaalprojecten voor villa's in De Haan?",
      answer:
        "Ja. Binnen en buiten in één planning. Ook in Wenduine, Klemskerke of Vlissegem.",
    },
    {
      question: "Welke decoratieve technieken doe je?",
      answer:
        "Kalkverf, betonciré, structuurverf en behang. Tijdens het plaatsbezoek bekijken we wat past.",
    },
    {
      question: "Kom je ook in Blankenberge?",
      answer:
        "Ja. Buitenschilderwerk, lakwerk, binnen en buiten. Ik kom graag langs voor een offerte.",
    },
    {
      question: "Hoe verloopt een volledige renovatie?",
      answer:
        "Plaatsbezoek, offerte, voorbereiding en herstel, dan schilderen in de afgesproken volgorde. Je weet vooraf wat wanneer gebeurt.",
    },
  ],
  areaServed: [
    "De Haan",
    "Wenduine",
    "Klemskerke",
    "Vlissegem",
    "Blankenberge",
    "Uitkerke",
  ],
};

export const oostendePage: LocalPageData = {
  slug: "schilder-oostende",
  place: "Oostende",
  metaTitle: "Schilder Oostende | Van Waes Schilderwerken",
  metaDescription:
    "Schilder in Oostende voor woningen, appartementen en tweede verblijven. Schilderwerken in Oostende en de kuststreek, ook decoratieve technieken.",
  kicker: "Schilderwerken · Oostende",
  h1: "Schilder in Oostende",
  lead:
    "Oostende vraagt als kuststad een aanpak op maat. Ik doe schilderwerken in Oostende voor woningen, appartementen en tweede verblijven, met aandacht voor zeelucht, gebruiksgemak en een verzorgde afwerking.",
  sections: [
    {
      paragraphs: [
        "In Oostende kom je veel verschillende panden tegen: rijwoningen, appartementen, tweede verblijven en renovaties waar planning en nette uitvoering belangrijk zijn. Daarom start ik altijd met een plaatsbezoek en een duidelijke offerte.",
        "Ik bekijk per project de ondergrond, het houtwerk, de staat van de muren en de invloed van vocht of zeelucht. Zo kiezen we samen de juiste voorbereiding, materialen en afwerking.",
      ],
    },
    {
      heading: "Wat vraagt schilderwerk in Oostende?",
      paragraphs: [
        "In appartementen let ik extra op gemeenschappelijke delen, liften en een stille, propere werkwijze. In rijwoningen werk ik vaak kamer per kamer, zodat de woning bruikbaar blijft tijdens de werken.",
        "Voor tweede verblijven en vakantiewoningen is een praktische planning belangrijk. Ik stem de werken af op beschikbaarheid, toegang en een nette oplevering zonder gedoe.",
      ],
    },
    {
      heading: "Decoratieve technieken en afwerking",
      paragraphs: [
        "Naast klassiek schilderwerk doe ik ook kalkverf, betonciré, structuurverf en behang. Daarmee geef je een ruimte meer karakter zonder aan rust of eenheid in te boeten.",
        "Ook lakwerk op deuren, kasten en houtwerk werk ik strak af. Zo klopt niet alleen de kleur, maar de volledige uitstraling van de woning.",
      ],
    },
    {
      heading: "Binnen en buiten",
      paragraphs: [
        "Binnenschilderwerk, buitenschilderwerk, ramen, deuren en voorgevels: ik kies telkens een systeem dat past bij de ondergrond en de omstandigheden aan de kust.",
        "Ik werk netjes, plan helder en houd de opvolging persoonlijk. Zo weet je vooraf waar je aan toe bent en krijg je een resultaat dat verzorgd oogt en lang meegaat.",
      ],
    },
  ],
  images: [
    {
      src: "/images/image8.jpeg",
      alt: "Binnenschilderwerk in Oostende",
    },
    {
      src: "/images/new%20images%209/581655f4-80c5-4cd3-aa57-4ab0773b8ea0.jfif",
      alt: "Buitenschilderwerk aan een voorgevel in Oostende",
    },
    {
      src: "/images/image6.jpeg",
      alt: "Decoratieve afwerking in Oostende",
    },
  ],
  faq: [
    {
      question: "Schilder je ook appartementen in Oostende?",
      answer:
        "Ja. Ik werk stofarm, bescherm gemeenschappelijke delen en plan de werken zo dat alles netjes en praktisch verloopt.",
    },
    {
      question: "Doe je ook schilderwerk voor tweede verblijven in Oostende?",
      answer:
        "Ja. Ik stem de planning af op beschikbaarheid en zorg voor duidelijke opvolging, ook als je niet altijd zelf aanwezig bent.",
    },
    {
      question: "Welke verf gebruik je voor buitenwerk aan de kust?",
      answer:
        "Ik kies kwaliteitsverf die past bij zeelucht, vocht en de ondergrond. Vooraf kijk ik altijd naar voorbereiding, houtwerk en bestaande lagen.",
    },
    {
      question: "Doe je ook decoratieve technieken in Oostende?",
      answer:
        "Ja. Kalkverf, betonciré, structuurverf en behang behoren mee tot het aanbod. Tijdens het plaatsbezoek bekijken we wat het best past.",
    },
  ],
  areaServed: ["Oostende", "Mariakerke", "Raversijde", "Stene", "Zandvoorde"],
};

export const allLocalPages = [
  bredenePage,
  middelkerkePage,
  deHaanPage,
  oostendePage,
];

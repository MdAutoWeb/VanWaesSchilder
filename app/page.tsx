import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroFan from "./_components/HeroFan";
import SectionDivider from "./_components/SectionDivider";
import HorizontalGallery from "./_components/HorizontalGallery";
import RevealObserver from "./_components/RevealObserver";
import LocalBusinessSchema from "./_components/LocalBusinessSchema";

export const metadata: Metadata = {
  title: "Van Waes Schilderwerken | Schilderwerken aan de kust",
  description:
    "Van Waes Schilderwerken voor binnen- en buitenschilderwerk aan de kust en in het polderland. Gratis offerte, persoonlijk contact.",
};

const services = [
  {
    num: "01",
    title: "Binnenschilderwerk",
    desc: "Muren, plafonds, houtwerk en trappen. Vlot en stofarm geschilderd in een bewoonde woning.",
    tags: ["Muren", "Plafonds", "Houtwerk"],
    src: "/images/image8.jpeg",
  },
  {
    num: "02",
    title: "Buitenschilderwerk",
    desc: "Gevels, ramen en deuren bestand tegen de zeelucht. Inclusief herstel van houtrot en grondig voorbereiden.",
    tags: ["Gevels", "Ramen", "Houtrot"],
    // TODO: vervang exterieur-afbeelding door klantfoto van lopend buitenwerk (tijdelijk), later te vervangen door afgewerkte-resultaat foto's zodra klant deze aanlevert.
    src: "/images/buitenschilderwerk-nieuw.jfif",
  },
  {
    num: "03",
    title: "Decoratieve technieken",
    desc: "Betonciré, kalkverf, structuurverf en behang. Voor wie net dat tikkeltje extra karakter zoekt.",
    tags: ["Betonciré", "Kalkverf", "Behang"],
    src: "/images/image6.jpeg",
  },
];

const featuredReview = {
  text: "Werkt professioneel en correct. Zeer stipt en komt afspraken volledig na. Goede kwaliteit met aandacht voor orde en netheid. Beslist aan te bevelen!",
  date: "12/02/26",
  name: "Steve V.",
};

export default function HomePage() {
  const areaServed = ["De kust", "Het polderland", "Uw regio"];

  return (
    <main id="top">
      <RevealObserver />
      <LocalBusinessSchema
        areaServed={areaServed}
        pageUrl="/"
        description={metadata.description as string}
      />

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            {/* Left: copy */}
            <div className="hero-left">
              <span className="kicker reveal">Schilderwerken aan de kust</span>
              <h1 className="display reveal" data-d="1">
                Vakmanschap<br />dat blijft
              </h1>
              <p className="lead reveal" data-d="2">
                Ik schilder in uw regio. Oostende, de kust, het polderland: men vindt er een waaier aan woningtypes, van tweede verblijven tot fermettes, van rijhuizen tot villa&apos;s, van appartementen tot AirB&amp;B&apos;s, elk met hun eigen specifieke vereisten en materialen. Wij kiezen altijd in overleg met de klant voor de meest optimale oplossingen.
              </p>
              <div className="hero-cta reveal" data-d="3">
                <Link className="btn btn-primary btn-lg" href="/contact">
                  Gratis offerte
                  <svg className="ico" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
                <Link className="btn btn-outline btn-lg" href="/realisaties">
                  Bekijk realisaties
                </Link>
              </div>
              <div className="hero-trust reveal" data-d="4">
                <span><span className="stars">★</span> <b>4,9</b> klantbeoordeling</span>
                <span className="dot" />
                <span><b>Persoonlijke</b> opvolging</span>
                <span className="dot" />
                <span><b>Gratis</b> offerte</span>
              </div>
            </div>

            {/* Right: signature card fan */}
            <div className="hero-right">
              <HeroFan />
            </div>
          </div>
        </div>

      </section>
      <SectionDivider topColor="#ffffff" bottomColor="#ffffff" id="hero-svc" thickBand />

      {/* ===== DIENSTEN ===== */}
      <section className="sec" id="diensten">
        <div className="container">
          <div className="sec-head center reveal">
            <span className="kicker center">Wat ik doe</span>
            <h2 className="h2">Eén vakman voor élk schilderwerk</h2>
            <p className="lead">Van een klassieke rijwoning tot een villa met karakter: elk type woning vraagt een eigen aanpak. Ik bekijk per project welke voorbereiding, materialen en afwerking het best passen, in overleg met u.</p>
          </div>

          <div className="svc-grid">
            {services.map((svc, i) => (
              <article key={svc.num} className="svc reveal" data-d={String(i + 1)}>
                <div className="svc-img">
                  <span className="svc-num">{svc.num}</span>
                  <Image
                    src={svc.src}
                    alt={svc.title}
                    fill
                    sizes="(max-width:720px) 100vw, (max-width:1080px) 50vw, 25vw"
                    className="svc-photo"
                  />
                </div>
                <div className="svc-body">
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <div className="svc-tags">
                    {svc.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REALISATIES — horizontal gallery ===== */}
      <section className="sec soft gallery-sec" id="realisaties">
        <div className="container">
          <div className="sec-head center reveal">
            <span className="kicker center">Recent werk</span>
            <h2 className="h2">Afwerking in detail</h2>
            <p className="lead">Totaalshots en close-ups van strakke lijnen, lakwerk en decoratieve afwerkingen. Swipe doorheen de galerij, klik voor volledig scherm.</p>
          </div>
        </div>
        <HorizontalGallery />
        <div className="container gallery-link-wrap">
          <Link href="/realisaties" className="btn btn-ghost btn-lg">
            Alle realisaties bekijken
            <svg className="ico" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>

      <SectionDivider topColor="#f6f7f9" bottomColor="#243556" id="gal-quote" flip />

      {/* ===== QUOTE ===== */}
      <section className="sec quote-sec quote-sec--dark" id="reviews">
        <div className="container">
          <blockquote className="pull-quote reveal">
            <div className="stars" aria-label="5 van 5 sterren">★★★★★</div>
            <p>&ldquo;{featuredReview.text}&rdquo;</p>
            <footer className="pull-quote-by">
              <cite>{featuredReview.name}</cite>
              <span>{featuredReview.date}</span>
            </footer>
          </blockquote>
        </div>
      </section>

      <SectionDivider topColor="#2a3f62" bottomColor="#ffffff" id="quote-cta" />

      {/* ===== CTA FINAL — dark navy ===== */}
      <section className="cta-final-sec cta-final-sec--light">
        <div className="container">
          <div className="cta-final reveal">
            <span className="kicker center">Neem contact op</span>
            <h2 className="h2">Klaar voor vakmanschap<br />dat blijft?</h2>
            <p className="lead cta-final-lead">Bel of mail vrijblijvend. Ik kom langs voor een gratis offerte, voor binnen en buiten.</p>
            <a href="tel:+32473694723" className="cta-big-phone">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6.5 4h-3a1 1 0 00-1 1.2A16 16 0 0018.8 21.5a1 1 0 001.2-1v-3a1 1 0 00-.8-1l-3.2-.6a1 1 0 00-1 .4l-1 1.3a12.5 12.5 0 01-5-5l1.3-1a1 1 0 00.4-1L9.5 4.8a1 1 0 00-1-.8z" />
              </svg>
              0473 69 47 23
            </a>
            <div className="cta-final-btns">
              <Link href="/contact" className="btn btn-yellow btn-lg">
                Gratis offerte aanvragen
                <svg className="ico" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link href="/over-ons" className="btn btn-ghost btn-lg">Over Van Waes</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

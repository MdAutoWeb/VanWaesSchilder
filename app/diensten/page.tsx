import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RevealObserver from "../_components/RevealObserver";
import FaqAccordion from "../_components/FaqAccordion";
import FaqSchema from "../_components/FaqSchema";
import { homeFaq } from "../_data/faq-home";

export const metadata: Metadata = {
  title: "Diensten | Van Waes Schilderwerken",
  description: "Binnenschilderwerk, buitenschilderwerk en decoratieve technieken. Ontdek het volledige aanbod.",
};

const diensten = [
  { num: "01", title: "Binnenschilderwerk", desc: "Muren, plafonds, houtwerk en trappen, vlot en stofarm geschilderd in een bewoonde woning.", tags: ["Muren", "Plafonds", "Houtwerk"], src: "/images/image8.jpeg" },
  { num: "02", title: "Buitenschilderwerk", desc: "Gevels, ramen en deuren bestand tegen de zeelucht. Inclusief herstel van houtrot en grondig voorbereiden.", tags: ["Gevels", "Ramen", "Houtrot"], src: "/images/buitenschilderwerk-nieuw.jpeg" },
  { num: "03", title: "Decoratieve technieken", desc: "Betonciré, kalkverf, structuurverf en behang. Voor wie net dat tikkeltje extra karakter zoekt.", tags: ["Betonciré", "Kalkverf", "Behang"], src: "/images/image6.jpeg" },
];

export default function DienstenPage() {
  return (
    <main>
      <RevealObserver />

      {/* Page hero */}
      <div className="page-hero">
        <div className="container">
          <span className="kicker reveal">Wat ik doe</span>
          <h1 className="reveal" data-d="1">Mijn diensten.</h1>
          <p className="lead reveal" data-d="2">Van een frisse living tot een verzorgde voorgevel schilderen, met de juiste verf voor de juiste plek.</p>
        </div>
      </div>

      {/* Diensten */}
      <section className="sec">
        <div className="container">
          <div className="svc-grid">
            {diensten.map((svc, i) => (
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

      {/* FAQ */}
      <section className="sec soft" id="faq">
        <FaqSchema items={homeFaq} />
        <div className="container">
          <div className="sec-head center reveal">
            <span className="kicker center">Veelgestelde vragen</span>
            <h2 className="h2">Alles wat u wilt weten</h2>
            <p className="lead">
              Duidelijke antwoorden over prijs, planning en werkwijze, zonder jargon.
            </p>
          </div>
          <FaqAccordion items={homeFaq} idPrefix="diensten-faq" />
        </div>
      </section>

      {/* Werkwijze */}
      <section className="sec soft">
        <div className="container">
          <div className="sec-head center reveal">
            <span className="kicker center">Zo werk ik</span>
            <h2 className="h2">Van offerte tot oplevering</h2>
            <p className="lead">Geen verrassingen, wel een vast aanspreekpunt en een duidelijke planning.</p>
          </div>
          <div className="steps">
            {[
              { num: "01", title: "Kennismaking & offerte", desc: "Ik kom langs, luister naar je wensen en bezorg een heldere, gratis offerte." },
              { num: "02", title: "Voorbereiding", desc: "Afplakken, beschermen en grondig voorbereiden. De basis van een strak resultaat." },
              { num: "03", title: "Vakkundig schilderen", desc: "Met de juiste verf en techniek, netjes en stipt zelf uitgevoerd." },
              { num: "04", title: "Nette oplevering", desc: "Ik ruim alles op en we overlopen samen het resultaat. Pas tevreden als jij dat bent." },
            ].map((step, i) => (
              <div key={step.num} className="step reveal" data-d={String(i + 1)}>
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="reveal">
            <h2 className="h2" style={{ marginBottom: "24px" }}>Klaar om te starten?</h2>
            <Link className="btn btn-primary btn-lg" href="/contact">
              Gratis offerte aanvragen
              <svg className="ico" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

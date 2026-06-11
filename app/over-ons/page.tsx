import type { Metadata } from "next";
import Link from "next/link";
import ImageSlot from "../_components/ImageSlot";
import RevealObserver from "../_components/RevealObserver";
import { featuredReview } from "../_data/local-pages";

export const metadata: Metadata = {
  title: "Over Ons | Van Waes Schilderwerken",
  description: "Een familiale schilder met oog voor detail. Meer dan 20 jaar vakmanschap in Oostende en omgeving.",
};

export default function OverOnsPage() {
  return (
    <main>
      <RevealObserver />

      {/* Page hero */}
      <div className="page-hero">
        <div className="container">
          <span className="kicker reveal">Het bedrijf</span>
          <h1 className="reveal" data-d="1">Over ons.</h1>
          <p className="lead reveal" data-d="2">Een familiale schilder met oog voor detail. Al meer dan 20 jaar actief aan de Belgische kust.</p>
        </div>
      </div>

      {/* About */}
      <section className="sec">
        <div className="container">
          <div className="about">
            <div className="about-media reveal">
              <div style={{ width: "100%", aspectRatio: "4/5", borderRadius: "14px", overflow: "hidden" }}>
                <ImageSlot placeholder="Foto zaakvoerder" />
              </div>
              <div className="about-badge">
                <div className="b">Oostende</div>
                <div className="s">&amp; omgeving aan zee</div>
              </div>
            </div>
            <div className="about-copy reveal" data-d="1">
              <span className="kicker">Over Van Waes</span>
              <h2 className="h2" style={{ marginBottom: "22px" }}>Een familiale schilder<br />met oog voor detail</h2>
              <p>Schilderwerken Van Waes staat voor eerlijk vakmanschap. Als zelfstandig schilder voer ik elk project persoonlijk uit, zonder onderaannemers. Zo blijft de kwaliteit op elke werf gegarandeerd.</p>
              <p>Van een enkele kamer tot een volledige woning: ik denk mee, adviseer over kleur en materiaal en lever werk dat jaren meegaat aan de Belgische kust.</p>
              <div className="values">
                <div className="value">
                  <span className="ic">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <div><h4>Zelf uitgevoerd, vaste kwaliteit</h4><p>Van offerte tot oplevering door dezelfde vakman.</p></div>
                </div>
                <div className="value">
                  <span className="ic">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7z" /></svg>
                  </span>
                  <div><h4>Heldere afspraken</h4><p>Duidelijke offerte, stipte planning, nette werf.</p></div>
                </div>
                <div className="value">
                  <span className="ic">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.6-6.3 4.6L8 13.9 2 9.4h7.6z" /></svg>
                  </span>
                  <div><h4>Afwerking die blijft</h4><p>Kwaliteitsverf en techniek voor een lang resultaat.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="sec soft">
        <div className="container">
          <div className="sec-head center reveal">
            <span className="kicker center">Wat klanten zeggen</span>
          </div>
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

      {/* CTA */}
      <section className="sec">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="reveal">
            <h2 className="h2" style={{ marginBottom: "24px" }}>Maak kennis in het echt.</h2>
            <Link className="btn btn-primary btn-lg" href="/contact">
              Neem contact op
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

import type { Metadata } from "next";
import ContactFormVW from "../_components/ContactFormVW";
import RevealObserver from "../_components/RevealObserver";
import { BUSINESS } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact | Van Waes Schilderwerken",
  description: "Gratis offerte aanvragen bij Van Waes Schilderwerken. Ik reageer binnen één werkdag.",
};

export default function ContactPage() {
  return (
    <main>
      <RevealObserver />

      {/* Page hero */}
      <div className="page-hero">
        <div className="container">
          <span className="kicker reveal">Neem contact op</span>
          <h1 className="reveal" data-d="1">Contact.</h1>
          <p className="lead reveal" data-d="2">Vraag vrijblijvend je offerte aan. Ik reageer binnen één werkdag.</p>
        </div>
      </div>

      {/* CTA band with form */}
      <section className="sec soft">
        <div className="container">
          <div className="cta-band reveal">
            <div className="cta-inner">
              <div className="cta-info">
                <h2>Klaar voor een<br />strak resultaat?</h2>
                <p className="lead">Vraag vrijblijvend je offerte aan. Ik kom langs in Oostende en omgeving, bekijk het werk en bezorg je een heldere prijs.</p>
                <div className="cta-points">
                  <div className="cta-point">
                    <span className="ic">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6.5 4h-3a1 1 0 00-1 1.2A16 16 0 0018.8 21.5a1 1 0 001.2-1v-3a1 1 0 00-.8-1l-3.2-.6a1 1 0 00-1 .4l-1 1.3a12.5 12.5 0 01-5-5l1.3-1a1 1 0 00.4-1L9.5 4.8a1 1 0 00-1-.8z" />
                      </svg>
                    </span>
                    <div><b>{BUSINESS.phoneDisplay}</b> · ma tot za, 8u tot 18u</div>
                  </div>
                  <div className="cta-point">
                    <span className="ic">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 7l9 6 9-6" />
                      </svg>
                    </span>
                    <div><b>{BUSINESS.email}</b></div>
                  </div>
                  <div className="cta-point">
                    <span className="ic">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                    </span>
                    <div><b>{BUSINESS.addressDisplay}</b></div>
                  </div>
                </div>
              </div>

              <div style={{ position: "relative" }}>
                <ContactFormVW />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

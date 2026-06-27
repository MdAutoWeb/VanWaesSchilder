"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import BrandLogo from "./BrandLogo";
import SectionDivider from "./SectionDivider";
import { BUSINESS, SOCIAL, WEBAMO_URL } from "../lib/site";

function FooterCol({
  id,
  title,
  isMobile,
  expanded,
  onToggle,
  children,
}: {
  id: string;
  title: string;
  isMobile: boolean;
  expanded: string | null;
  onToggle: (id: string) => void;
  children: ReactNode;
}) {
  const open = !isMobile || expanded === id;

  return (
    <div className={`footer-col${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="footer-col-trigger"
        onClick={() => onToggle(id)}
        aria-expanded={open}
        aria-controls={`footer-panel-${id}`}
      >
        <h4>{title}</h4>
        <svg
          className="footer-chevron"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className="footer-col-panel" id={`footer-panel-${id}`}>
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 720px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const toggle = (id: string) => {
    if (!isMobile) return;
    setExpanded((current) => (current === id ? null : id));
  };

  return (
    <>
      <SectionDivider topColor="#ffffff" bottomColor="#1a2744" id="cta-footer" />
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-about">
              <BrandLogo variant="footer" />
              <p>
                Strak en duurzaam schilderwerk binnen én buiten, persoonlijk
                uitgevoerd door één vakman. Vakmanschap dat blijft aan de kust en
                in het binnenland.
              </p>
            </div>

            <FooterCol
              id="diensten"
              title="Diensten"
              isMobile={isMobile}
              expanded={expanded}
              onToggle={toggle}
            >
              <ul>
                <li>
                  <Link href="/diensten">Binnenschilderwerk</Link>
                </li>
                <li>
                  <Link href="/diensten">Buitenschilderwerk</Link>
                </li>
                <li>
                  <Link href="/diensten">Decoratieve technieken</Link>
                </li>
              </ul>
            </FooterCol>

            <FooterCol
              id="bedrijf"
              title="Bedrijf"
              isMobile={isMobile}
              expanded={expanded}
              onToggle={toggle}
            >
              <ul>
                <li>
                  <Link href="/realisaties">Realisaties</Link>
                </li>
                <li>
                  <Link href="/over-ons">Over ons</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </FooterCol>

            <FooterCol
              id="werkgebied"
              title="Werkgebied"
              isMobile={isMobile}
              expanded={expanded}
              onToggle={toggle}
            >
              <ul>
                <li>
                  <Link href="/schilder-bredene">Schilder Bredene</Link>
                </li>
                <li>
                  <Link href="/schilder-middelkerke">Schilder Middelkerke</Link>
                </li>
                <li>
                  <Link href="/schilder-de-haan">Schilder De Haan</Link>
                </li>
                <li>
                  <Link href="/contact">Oostende &amp; omgeving</Link>
                </li>
              </ul>
            </FooterCol>

            <FooterCol
              id="contact"
              title="Contact"
              isMobile={isMobile}
              expanded={expanded}
              onToggle={toggle}
            >
              <ul>
                <li>
                  <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phoneDisplay}</a>
                </li>
                <li>
                  <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
                </li>
                <li>{BUSINESS.addressDisplay}</li>
                <li>
                  <Link href="/contact">Gratis offerte</Link>
                </li>
              </ul>
            </FooterCol>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-info">
              <p className="footer-legal">
                <span>© {new Date().getFullYear()} Van Waes Schilderwerken</span>
                <span className="footer-sep" aria-hidden="true" />
                <span>{BUSINESS.vatDisplay}</span>
              </p>
              <p className="footer-address">{BUSINESS.addressDisplay}</p>
            </div>
            <p className="footer-credit">
              Website door{" "}
              <a href={WEBAMO_URL} target="_blank" rel="noopener noreferrer">
                webamo
              </a>
            </p>
            <div className="socials">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V9.8c0-.5.3-.8.8-.8z" />
                </svg>
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.09.6 4.03 1.64 5.67L2 22l4.55-1.73a9.86 9.86 0 005.49 1.66h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.08h-.01a8.1 8.1 0 01-4.13-1.13l-.3-.18-2.7 1.03 1.02-2.63-.2-.31a8.15 8.15 0 01-1.26-4.38c0-4.5 3.66-8.16 8.17-8.16 2.19 0 4.24.85 5.78 2.39a8.13 8.13 0 012.39 5.79c0 4.5-3.66 8.16-8.16 8.16zm4.52-6.11c-.25-.12-1.47-.73-1.7-.81-.23-.08-.4-.12-.57.12-.17.25-.66.81-.81.97-.15.17-.3.19-.55.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.43-.06-.12-.57-1.38-.78-1.89-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

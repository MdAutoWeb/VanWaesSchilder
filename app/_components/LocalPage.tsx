import Image from "next/image";
import Link from "next/link";
import type { LocalPageData } from "../_data/local-pages";
import { featuredReview } from "../_data/local-pages";
import FaqAccordion from "./FaqAccordion";
import FaqSchema from "./FaqSchema";
import LocalBusinessSchema from "./LocalBusinessSchema";
import RevealObserver from "./RevealObserver";
import SectionDivider from "./SectionDivider";

interface LocalPageProps {
  data: LocalPageData;
}

export default function LocalPage({ data }: LocalPageProps) {
  return (
    <main>
      <RevealObserver />
      <LocalBusinessSchema
        areaServed={data.areaServed}
        description={data.metaDescription}
      />
      <FaqSchema items={data.faq} />

      <section className="local-hero">
        <div className="container">
          <span className="kicker reveal">{data.kicker}</span>
          <h1 className="reveal" data-d="1">
            {data.h1}
          </h1>
          <p className="lead reveal" data-d="2">
            {data.lead}
          </p>
          <div className="local-hero-cta reveal" data-d="3">
            <Link className="btn btn-yellow btn-lg" href="/contact">
              Gratis offerte
            </Link>
            <a className="btn btn-ghost-light btn-lg" href="tel:+32473694723">
              0473 69 47 23
            </a>
          </div>
        </div>
      </section>

      <SectionDivider
        topColor="#1a2744"
        bottomColor="#ffffff"
        id={`${data.slug}-body`}
      />

      <section className="sec">
        <div className="container local-content">
          {data.sections.map((section, i) => (
            <div key={i} className="local-block reveal" data-d={String(i + 1)}>
              {section.heading && (
                <h2 className="h3 local-heading">{section.heading}</h2>
              )}
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="local-text">
                  {p}
                </p>
              ))}
            </div>
          ))}

          <div className="local-gallery reveal" data-d="4">
            {data.images.map((img) => (
              <figure key={img.src} className="local-gallery-item">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 720px) 100vw, 33vw"
                  className="local-gallery-img"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider
        topColor="#ffffff"
        bottomColor="#243556"
        id={`${data.slug}-quote`}
        flip
      />

      <section className="sec quote-sec quote-sec--dark">
        <div className="container">
          <blockquote className="pull-quote reveal">
            <div className="stars" aria-label="5 van 5 sterren">
              ★★★★★
            </div>
            <p>&ldquo;{featuredReview.text}&rdquo;</p>
            <footer className="pull-quote-by">
              <cite>{featuredReview.name}</cite>
              <span>{featuredReview.date}</span>
            </footer>
          </blockquote>
        </div>
      </section>

      <SectionDivider
        topColor="#2a3f62"
        bottomColor="#f6f7f9"
        id={`${data.slug}-faq`}
      />

      <section className="sec soft" id="faq">
        <div className="container">
          <div className="sec-head center reveal">
            <span className="kicker center">Veelgestelde vragen</span>
            <h2 className="h2">Schilderwerk in {data.place}</h2>
          </div>
          <FaqAccordion items={data.faq} idPrefix={data.slug} />
        </div>
      </section>

      <SectionDivider
        topColor="#f6f7f9"
        bottomColor="#ffffff"
        id={`${data.slug}-cta`}
      />

      <section className="cta-final-sec cta-final-sec--light">
        <div className="container">
          <div className="cta-final reveal">
            <span className="kicker center">Neem contact op</span>
            <h2 className="h2">
              Schilder nodig in {data.place}?
            </h2>
            <p className="lead cta-final-lead">
              Bel of mail vrijblijvend voor een gratis offerte ter plaatse in {data.place} en omgeving.
            </p>
            <a href="tel:+32473694723" className="cta-big-phone">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6.5 4h-3a1 1 0 00-1 1.2A16 16 0 0018.8 21.5a1 1 0 001.2-1v-3a1 1 0 00-.8-1l-3.2-.6a1 1 0 00-1 .4l-1 1.3a12.5 12.5 0 01-5-5l1.3-1a1 1 0 00.4-1L9.5 4.8a1 1 0 00-1-.8z" />
              </svg>
              0473 69 47 23
            </a>
            <div className="cta-final-btns">
              <Link href="/contact" className="btn btn-yellow btn-lg">
                Gratis offerte aanvragen
              </Link>
              <Link href="/realisaties" className="btn btn-ghost btn-lg">
                Bekijk realisaties
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

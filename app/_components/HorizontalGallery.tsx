"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

const IMAGES = [
  { src: "/images/image04.jpeg", alt: "Spuit- en lakwerk" },
  { src: "/images/image6.jpeg", alt: "Schilderrealisatie Van Waes" },
  { src: "/images/image7.jpeg", alt: "Schilderrealisatie Van Waes" },
  { src: "/images/image8.jpeg", alt: "Binnenschilderwerk" },
  { src: "/images/image9.jpeg", alt: "Schilderrealisatie Van Waes" },
  { src: "/images/image10.jpeg", alt: "Schilderrealisatie Van Waes" },
  { src: "/images/image11.jpeg", alt: "Schilderrealisatie Van Waes" },
  { src: "/images/image12.jpeg", alt: "Schilderrealisatie Van Waes" },
];

export default function HorizontalGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const didDrag = useRef(false);

  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    didDrag.current = false;
    startX.current = e.clientX;
    scrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 4) didDrag.current = true;
    trackRef.current.scrollLeft = scrollLeft.current - dx;
  };

  const stopDrag = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "";
  };

  const openLightbox = useCallback((i: number) => {
    if (!didDrag.current) setLightboxIdx(i);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);

  useEffect(() => {
    document.body.style.overflow = lightboxIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIdx]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") setLightboxIdx(i => i !== null ? Math.max(0, i - 1) : null);
      if (e.key === "ArrowRight") setLightboxIdx(i => i !== null ? Math.min(IMAGES.length - 1, i + 1) : null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx, closeLightbox]);

  return (
    <>
      <div
        className="h-gallery-track"
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {IMAGES.map((img, i) => (
          <button
            key={img.src}
            className="h-gallery-item"
            onClick={() => openLightbox(i)}
            aria-label={`Bekijk foto: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width:720px) 260px, 380px"
              className="h-gallery-img"
              draggable={false}
            />
          </button>
        ))}
      </div>

      {lightboxIdx !== null && (
        <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Foto galerij">
          <button className="lb-close" onClick={closeLightbox} aria-label="Sluiten">✕</button>

          <button
            className="lb-nav lb-prev"
            onClick={(e) => { e.stopPropagation(); setLightboxIdx(i => i !== null ? Math.max(0, i - 1) : null); }}
            aria-label="Vorige foto"
            disabled={lightboxIdx === 0}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
          </button>

          <div className="lb-img-wrap" onClick={(e) => e.stopPropagation()}>
            <Image
              src={IMAGES[lightboxIdx].src}
              alt={IMAGES[lightboxIdx].alt}
              fill
              sizes="100vw"
              className="lb-img"
              priority
            />
          </div>

          <button
            className="lb-nav lb-next"
            onClick={(e) => { e.stopPropagation(); setLightboxIdx(i => i !== null ? Math.min(IMAGES.length - 1, i + 1) : null); }}
            aria-label="Volgende foto"
            disabled={lightboxIdx === IMAGES.length - 1}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>

          <div className="lb-counter">{lightboxIdx + 1} / {IMAGES.length}</div>
        </div>
      )}
    </>
  );
}

"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  embedded?: boolean;
}

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt = "Voor",
  afterAlt = "Na",
  embedded = false,
}: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => setWidth(el.offsetWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    containerRef.current?.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    dragging.current = false;
    containerRef.current?.releasePointerCapture(e.pointerId);
  };

  return (
    <div
      ref={containerRef}
      className={`before-after${embedded ? " before-after--tile" : ""}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="slider"
      aria-label="Voor en na vergelijking"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
    >
      <div className="before-after-after">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes={embedded ? "(max-width: 720px) 50vw, 380px" : "(max-width: 720px) 100vw, 900px"}
          className="before-after-img"
          draggable={false}
          priority={!embedded}
        />
      </div>

      <div className="before-after-before" style={{ width: `${position}%` }}>
        <div className="before-after-before-inner" style={{ width: width || "100%" }}>
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            sizes={embedded ? "(max-width: 720px) 50vw, 380px" : "(max-width: 720px) 100vw, 900px"}
            className="before-after-img"
            draggable={false}
            priority={!embedded}
          />
        </div>
      </div>

      <div className="before-after-handle" style={{ left: `${position}%` }}>
        <span className="before-after-handle-line" />
        <span className="before-after-handle-knob" aria-hidden="true">
          <svg width={embedded ? 14 : 18} height={embedded ? 14 : 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 8l-4 4 4 4M16 8l4 4-4 4" />
          </svg>
        </span>
      </div>

      {!embedded && (
        <>
          <span className="before-after-label before-after-label-before">Voor</span>
          <span className="before-after-label before-after-label-after">Na</span>
        </>
      )}
    </div>
  );
}

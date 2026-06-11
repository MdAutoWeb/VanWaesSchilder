"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";
import {
  BRUSH_BAND_NAV,
  BRUSH_NAV_VIEWBOX,
  BRUSH_WHITE_ABOVE,
} from "./brush-stroke";

const navLinks = [
  { label: "Diensten", href: "/diensten" },
  { label: "Realisaties", href: "/realisaties" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const solidNav = !isHome || scrolled;

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`site-header${solidNav ? " scrolled" : ""}`}>
        <div className="site-header-bar">
        <div className="container nav">
          {/* Logo */}
          <BrandLogo />

          {/* Desktop nav */}
          <nav className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "active" : ""}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="nav-cta">
            <a className="nav-phone" href="tel:+32473694723">
              <svg className="ico" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6.5 4h-3a1 1 0 00-1 1.2A16 16 0 0018.8 21.5a1 1 0 001.2-1v-3a1 1 0 00-.8-1l-3.2-.6a1 1 0 00-1 .4l-1 1.3a12.5 12.5 0 01-5-5l1.3-1a1 1 0 00.4-1L9.5 4.8a1 1 0 00-1-.8z" />
              </svg>
              0473 69 47 23
            </a>
            <Link className="btn btn-primary" href="/contact">Gratis offerte</Link>
          </div>

          {/* Hamburger */}
          <button
            className="burger"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        </div>

        <div className="nav-brush" aria-hidden="true">
          <svg viewBox={BRUSH_NAV_VIEWBOX} preserveAspectRatio="none">
            <defs>
              <linearGradient id="nav-brush-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#FA6400" />
                <stop offset=".5" stopColor="#F5A800" />
                <stop offset="1" stopColor="#F5E000" />
              </linearGradient>
            </defs>
            {solidNav && <path d={BRUSH_WHITE_ABOVE} fill="#fff" />}
            <path d={BRUSH_BAND_NAV} fill="url(#nav-brush-grad)" />
          </svg>
        </div>
      </header>

      {/* Mobile menu */}
      <div className="mobile-menu">
        <BrandLogo className="mobile-menu-logo" />
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link className="btn btn-primary btn-lg" href="/contact" onClick={() => setMenuOpen(false)}>
          Gratis offerte
        </Link>
      </div>
    </>
  );
}

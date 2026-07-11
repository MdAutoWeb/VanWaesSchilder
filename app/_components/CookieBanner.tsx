"use client";

import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  setCookieConsent,
  shouldShowCookieBanner,
  type CookieConsent,
} from "../lib/cookies";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useLayoutEffect(() => {
    function syncBannerState() {
      setShowBanner(shouldShowCookieBanner());
    }

    syncBannerState();
    window.addEventListener(COOKIE_CONSENT_EVENT, syncBannerState);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, syncBannerState);
  }, []);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("cookie-banner-visible", showBanner);
    return () => {
      document.documentElement.classList.remove("cookie-banner-visible");
    };
  }, [showBanner]);

  function handleChoice(consent: CookieConsent) {
    setCookieConsent(consent);
  }

  if (!showBanner) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-modal="false"
    >
      <div className="cookie-banner-card">
        <div className="cookie-banner-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
            <circle cx="14.5" cy="8.5" r="1" fill="currentColor" stroke="none" />
            <circle cx="15" cy="13.5" r="1" fill="currentColor" stroke="none" />
            <circle cx="10.5" cy="14.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </div>

        <div className="cookie-banner-text">
          <p id="cookie-banner-title" className="cookie-banner-title">
            Cookies &amp; privacy
          </p>
          <p className="cookie-banner-desc">
            Enkel essentiële cookies voor een werkende site. Analytics enkel na
            uw toestemming.{" "}
            <Link href="/privacybeleid">Privacybeleid</Link>
          </p>
        </div>

        <div className="cookie-banner-actions">
          <button
            type="button"
            className="cookie-btn cookie-btn-refuse"
            onClick={() => handleChoice("refused")}
          >
            Weigeren
          </button>
          <button
            type="button"
            className="cookie-btn cookie-btn-accept"
            onClick={() => handleChoice("accepted")}
          >
            Accepteren
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { COOKIE_CONSENT_EVENT, hasAnalyticsConsent } from "../lib/cookies";

/**
 * Laadt niet-essentiële tracking-scripts enkel na cookie-toestemming.
 * Voeg hier later bv. Google Analytics toe via NEXT_PUBLIC_GA_ID.
 */
export default function Analytics() {
  useEffect(() => {
    function maybeLoadAnalytics() {
      if (!hasAnalyticsConsent()) return;

      const gaId = process.env.NEXT_PUBLIC_GA_ID;
      if (!gaId) return;

      void gaId;
    }

    maybeLoadAnalytics();

    function onConsentChange() {
      maybeLoadAnalytics();
    }

    window.addEventListener(COOKIE_CONSENT_EVENT, onConsentChange);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onConsentChange);
  }, []);

  return null;
}

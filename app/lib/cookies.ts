export const COOKIE_CONSENT_KEY = "vw-cookie-consent";
export const COOKIE_CONSENT_EVENT = "cookie-consent-updated";

export type CookieConsent = "accepted" | "refused";

function notifyConsentChange(): void {
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT));
}

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;

  const value = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (value === "accepted" || value === "refused") return value;
  return null;
}

export function shouldShowCookieBanner(): boolean {
  return getCookieConsent() === null;
}

export function subscribeCookieConsent(callback: () => void): () => void {
  window.addEventListener(COOKIE_CONSENT_EVENT, callback);
  return () => window.removeEventListener(COOKIE_CONSENT_EVENT, callback);
}

export function setCookieConsent(consent: CookieConsent): void {
  localStorage.setItem(COOKIE_CONSENT_KEY, consent);
  notifyConsentChange();
}

export function openCookieSettings(): void {
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  notifyConsentChange();
}

export function hasAnalyticsConsent(): boolean {
  return getCookieConsent() === "accepted";
}

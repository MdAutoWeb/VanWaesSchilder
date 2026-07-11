"use client";

import { openCookieSettings } from "../lib/cookies";

export default function CookieSettingsLink() {
  return (
    <button
      type="button"
      className="footer-cookie-link"
      onClick={openCookieSettings}
    >
      Cookies
    </button>
  );
}

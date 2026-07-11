import type { Metadata } from "next";
import { Poppins, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import CookieBanner from "./_components/CookieBanner";
import Analytics from "./_components/Analytics";
import { BUSINESS, SITE_DESCRIPTION, SITE_URL } from "./lib/site";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: BUSINESS.name,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "nl_BE",
    siteName: BUSINESS.name,
    title: BUSINESS.name,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: BUSINESS.name,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${poppins.variable} ${fraunces.variable}`} data-scroll-behavior="smooth">
      <body>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}

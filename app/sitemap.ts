import type { MetadataRoute } from "next";
import { allLocalPages } from "./_data/local-pages";
import { SITE_URL } from "./lib/site";

const staticRoutes = [
  "",
  "/diensten",
  "/realisaties",
  "/over-ons",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const local = allLocalPages.map((page) => ({
    url: `${SITE_URL}/${page.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...local];
}

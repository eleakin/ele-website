import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { caseStudies } from "@/lib/content/case-studies";
import { insights } from "@/lib/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.url.replace(/\/$/, "");

  const staticRoutes = ["", "/services", "/work", "/about", "/insights", "/contact"].map(
    (path) => ({
      url: `${base}${path || "/"}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })
  );

  const work = caseStudies.map((c) => ({
    url: `${base}/work/${c.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const articles = insights.map((i) => ({
    url: `${base}/insights/${i.slug}`,
    lastModified: new Date(i.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...work, ...articles];
}

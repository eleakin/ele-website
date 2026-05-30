/**
 * Central site configuration. Swap these values to rebrand the entire site.
 */
export const siteConfig = {
  name: "ELE Consulting",
  shortName: "ELE",
  url: "https://www.example.com", // TODO: replace with production URL
  description:
    "Data & analytics consulting for public-sector health agencies. We help leaders turn complex data into measurable program outcomes.",
  tagline: "Evidence. Leverage. Execution.",
  email: "hello@example.com",
  phone: "+1 (555) 010-0100",
  address: {
    city: "Reno",
    state: "NV",
    country: "United States",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/example",
  },
  nav: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

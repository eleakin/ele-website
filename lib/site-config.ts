/**
 * Central site configuration. Swap these values to rebrand the entire site.
 */
export const siteConfig = {
  name: "ELE Practice Analytics",
  shortName: "ELE",
  url: "https://www.example.com", // TODO: replace with production URL
  description:
    "Revenue-cycle and audit-defense analytics for insurance-billing chiropractic practices. We help clinics recover revenue lost to denials and stay audit-ready — built by a chiropractor who reads the data.",
  tagline: "Evidence. Leverage. Execution.",
  email: "contact@eleconsulting.xyz",
  address: {
    city: "Las Vegas",
    state: "NV",
    country: "United States",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/example",
  },
  nav: [
    { label: "Services", href: "/services" },
    { label: "Approach", href: "/#approach" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

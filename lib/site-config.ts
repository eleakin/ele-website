/**
 * Central site configuration. Swap these values to rebrand the entire site.
 */
export const siteConfig = {
  name: "ELE Lead Generation",
  shortName: "ELE",
  url: "https://www.example.com", // TODO: replace with production URL
  description:
    "Practice growth & new-patient lead generation for Nevada chiropractors and dentists. A done-for-you monthly list of new homeowners in your ZIP codes — families actively choosing new local providers — delivered ready to mail.",
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

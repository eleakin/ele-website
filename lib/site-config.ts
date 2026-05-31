/**
 * Central site configuration. Swap these values to rebrand the entire site.
 */
export const siteConfig = {
  name: "ELE People Analytics",
  shortName: "ELE",
  url: "https://www.example.com", // TODO: replace with production URL
  description:
    "People analytics consulting for HR and total rewards leaders. We help organizations turn workforce data into decisions about hiring, retention, pay equity, and engagement.",
  tagline: "Evidence. Leverage. Execution.",
  email: "contact@eleconsulting.xyz",
  phone: "+1 (555) 010-0100",
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
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

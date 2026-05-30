export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  title: string;
  summary: string;
  problem: string;
  approach: string[];
  outcomes: { metric: string; label: string }[];
  duration: string;
  services: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "state-medicaid-quality-dashboard",
    client: "[State Medicaid Agency]",
    sector: "Public-sector health",
    title: "From quarterly PDF reports to a live quality dashboard used by 400+ staff",
    summary:
      "Consolidated fragmented quality reporting into a single governed platform that program staff actually open before meetings.",
    problem:
      "Quality metrics were assembled by hand each quarter from five different source systems. Reports landed late, definitions drifted between divisions, and leadership had no way to drill into a number without filing a ticket.",
    approach: [
      "Stood up a governed warehouse with documented data contracts for each upstream system.",
      "Co-authored metric definitions with program owners and locked them in version control.",
      "Shipped an executive dashboard plus a self-serve layer for analysts, both 508-compliant.",
      "Embedded with the internal team for three months to transfer ownership.",
    ],
    outcomes: [
      { metric: "92%", label: "reduction in manual report assembly time" },
      { metric: "5 → 1", label: "source systems consolidated under one definition layer" },
      { metric: "400+", label: "staff with role-appropriate access" },
    ],
    duration: "9 months",
    services: ["Data Platform & Engineering", "Dashboards & Reporting", "Team Enablement"],
  },
  {
    slug: "public-health-surveillance-modernization",
    client: "[State Department of Health]",
    sector: "Public health",
    title: "Modernizing disease surveillance without disrupting the 24/7 reporting pipeline",
    summary:
      "Migrated a legacy surveillance feed to a modern, auditable pipeline with zero missed reportable-event windows.",
    problem:
      "A decade-old ETL job processed lab feeds overnight. Failures were caught by a person reading email at 6 a.m. The agency needed modernization without risking statutorily-required reporting windows.",
    approach: [
      "Mapped every downstream consumer before touching the pipeline.",
      "Ran the new and old pipelines in parallel for 90 days with automated reconciliation.",
      "Introduced observability so on-call staff get paged before, not after, a failure matters.",
      "Documented runbooks for every alert.",
    ],
    outcomes: [
      { metric: "0", label: "missed reportable-event windows during migration" },
      { metric: "4h → 12m", label: "median time-to-detect for pipeline failures" },
      { metric: "100%", label: "of alerts have a documented runbook" },
    ],
    duration: "6 months",
    services: ["Data Platform & Engineering", "Privacy & Governance"],
  },
  {
    slug: "waiver-program-evaluation",
    client: "[1115 Waiver Program]",
    sector: "Medicaid policy",
    title: "Independent evaluation of a $200M waiver demonstration",
    summary:
      "Designed and executed a pre-registered evaluation that satisfied federal reviewers on the first submission.",
    problem:
      "A multi-year demonstration project required an independent evaluation meeting CMS guidance. The prior vendor had delivered findings that did not survive peer review.",
    approach: [
      "Pre-registered the analysis plan with named comparison groups and stopping rules.",
      "Used a difference-in-differences design with sensitivity analyses for unobserved confounding.",
      "Wrote two parallel reports: technical appendix and plain-language brief.",
    ],
    outcomes: [
      { metric: "1st-pass", label: "acceptance by federal reviewers" },
      { metric: "2", label: "peer-reviewed publications" },
      { metric: "$200M", label: "demonstration informed by the findings" },
    ],
    duration: "18 months",
    services: ["Program Evaluation", "Analytics Strategy"],
  },
];

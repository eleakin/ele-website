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
    slug: "attrition-early-warning-model",
    client: "[Global Technology Company]",
    sector: "Technology · 12,000 employees",
    title: "From annual engagement surveys to a live attrition early-warning model",
    summary:
      "Replaced a once-a-year survey with a monthly flight-risk model that HR business partners use to act before regretted attrition happens.",
    problem:
      "Engagement was measured once a year and reported months later. By the time leaders saw a problem team, the best people had already resigned. HR had no defensible, ongoing signal of who was at risk.",
    approach: [
      "Unified HRIS, performance, compensation, and survey data into a governed people-data warehouse.",
      "Built and validated a flight-risk model with HR, legal, and works-council review of every feature.",
      "Shipped an HRBP dashboard with risk drivers and recommended actions, not just scores.",
      "Embedded with the people analytics team for three months to transfer ownership.",
    ],
    outcomes: [
      { metric: "31%", label: "reduction in regretted attrition in piloted orgs" },
      { metric: "6 mo", label: "earlier detection of at-risk teams" },
      { metric: "12k", label: "employees scored and refreshed monthly" },
    ],
    duration: "9 months",
    services: ["Workforce Data Platform & Engineering", "Talent & Retention Analytics", "HR Team Enablement"],
  },
  {
    slug: "pay-equity-audit-remediation",
    client: "[Multinational Retailer]",
    sector: "Retail · 40,000 employees",
    title: "A defensible pay equity audit across 40,000 employees and 18 countries",
    summary:
      "Designed and executed a pay equity analysis that satisfied legal counsel and funded a targeted remediation in a single cycle.",
    problem:
      "Leadership knew pay gaps existed but had no methodology that legal would stand behind. Prior spreadsheet analyses produced different numbers every time and could not survive scrutiny.",
    approach: [
      "Built a reproducible, version-controlled pay equity model with documented comparator logic.",
      "Ran adjusted and unadjusted analyses by country, function, and job architecture level.",
      "Wrote two parallel reports: a technical methodology appendix and a plain-language brief for the board.",
    ],
    outcomes: [
      { metric: "4.1% → 0.3%", label: "adjusted pay gap after remediation" },
      { metric: "$4.2M", label: "targeted remediation funded in one cycle" },
      { metric: "100%", label: "of in-scope roles reviewed and documented" },
    ],
    duration: "7 months",
    services: ["Pay Equity & Workforce Compliance", "People Analytics Strategy"],
  },
  {
    slug: "hr-data-platform-consolidation",
    client: "[Healthcare System]",
    sector: "Healthcare · 8,000 employees",
    title: "Consolidating seven HR systems into one trusted source of workforce truth",
    summary:
      "Migrated fragmented HRIS, ATS, and payroll reporting onto one governed platform that every HR team now reports from.",
    problem:
      "Seven systems each told a slightly different headcount story. Every board deck required a week of manual reconciliation, and no two HR teams agreed on what 'turnover' meant.",
    approach: [
      "Mapped every downstream report and consumer before touching the source systems.",
      "Co-authored metric definitions — headcount, turnover, time-to-fill — and locked them in version control.",
      "Stood up a governed warehouse with documented data contracts for each upstream system.",
      "Ran old and new reporting in parallel for 60 days with automated reconciliation.",
    ],
    outcomes: [
      { metric: "7 → 1", label: "HR systems consolidated under one definition layer" },
      { metric: "90%", label: "reduction in manual board-reporting time" },
      { metric: "8,000", label: "employees on one trusted source of truth" },
    ],
    duration: "11 months",
    services: ["Workforce Data Platform & Engineering", "Dashboards & Reporting", "HR Team Enablement"],
  },
];

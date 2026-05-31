import {
  BarChart3,
  Database,
  LineChart,
  ShieldCheck,
  Workflow,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  outcomes: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "people-analytics-strategy",
    title: "People Analytics Strategy",
    summary:
      "A pragmatic roadmap that aligns your workforce data investments with the business outcomes HR is accountable for.",
    outcomes: [
      "Prioritized 12-month people analytics roadmap",
      "Clear ownership across HR, IT, and the business",
      "Decision-grade workforce KPIs tied to board reporting",
    ],
    icon: LineChart,
  },
  {
    slug: "workforce-data-platform",
    title: "Workforce Data Platform & Engineering",
    summary:
      "Modern, governed people-data infrastructure that unifies HRIS, ATS, and payroll — without ripping out what already works.",
    outcomes: [
      "Governed people-data warehouse with lineage and access controls",
      "Reproducible pipelines from Workday, SAP, Greenhouse, and payroll",
      "Documented data contracts between HR and IT teams",
    ],
    icon: Database,
  },
  {
    slug: "dashboards-reporting",
    title: "Dashboards & Reporting",
    summary:
      "Headcount, attrition, and DEI reporting that HR business partners actually open — built around the decisions they make every week.",
    outcomes: [
      "Executive and HRBP-level workforce dashboards",
      "WCAG-accessible, board-ready deliverables",
      "Self-serve exploration for HR analysts",
    ],
    icon: BarChart3,
  },
  {
    slug: "talent-retention-analytics",
    title: "Talent & Retention Analytics",
    summary:
      "Attrition modeling, flight-risk scoring, and hiring-funnel analysis that hold up to scrutiny from finance and legal.",
    outcomes: [
      "Validated attrition and flight-risk models",
      "Hiring-funnel and quality-of-hire diagnostics",
      "Plain-language briefs for non-technical leaders",
    ],
    icon: Workflow,
  },
  {
    slug: "pay-equity-compliance",
    title: "Pay Equity & Workforce Compliance",
    summary:
      "Defensible pay equity audits and EEO/OFCCP-aware analysis, with employee-data privacy baked into the engineering.",
    outcomes: [
      "Audit-ready pay equity analysis with documented methodology",
      "Role-based access aligned to a need-to-know basis",
      "GDPR- and CCPA-aware handling of sensitive employee data",
    ],
    icon: ShieldCheck,
  },
  {
    slug: "hr-team-enablement",
    title: "HR Team Enablement",
    summary:
      "Hands-on coaching so your people team owns the work after we leave — not a deck and a goodbye.",
    outcomes: [
      "Embedded pairing with your HR analysts",
      "Internal documentation and runbooks",
      "Hiring rubrics and structured interview kits for analytics roles",
    ],
    icon: Users,
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Listen",
    body: "We start by sitting with HR leaders, business partners, and the data itself. No slideware until we understand the workforce decision that actually matters.",
  },
  {
    n: "02",
    title: "Frame",
    body: "We co-author a tight problem statement, name the people decisions in scope, and agree on what “good” looks like at the end of the engagement.",
  },
  {
    n: "03",
    title: "Build",
    body: "Small increments, reviewed weekly. Every deliverable is documented, version-controlled, and handed off in a form your HR team can maintain.",
  },
  {
    n: "04",
    title: "Transfer",
    body: "We pair with your people team until they own it. Success means we're not a permanent dependency.",
  },
];

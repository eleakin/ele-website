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
    slug: "analytics-strategy",
    title: "Analytics Strategy",
    summary:
      "A pragmatic roadmap that aligns data investments with the outcomes your agency is accountable for.",
    outcomes: [
      "Prioritized 12-month analytics roadmap",
      "Clear ownership across program, IT, and policy",
      "Decision-grade KPIs tied to legislative reporting",
    ],
    icon: LineChart,
  },
  {
    slug: "data-platform",
    title: "Data Platform & Engineering",
    summary:
      "Modern, auditable data infrastructure built for sensitive program data — without re-platforming what already works.",
    outcomes: [
      "Governed warehouse with lineage and access controls",
      "Reproducible pipelines from claims, eligibility, and surveys",
      "Documented data contracts between teams",
    ],
    icon: Database,
  },
  {
    slug: "dashboards-reporting",
    title: "Dashboards & Reporting",
    summary:
      "Reports that staff actually use — built around the decisions they make every week.",
    outcomes: [
      "Executive and program-level dashboards",
      "Section 508 / WCAG-accessible deliverables",
      "Self-serve exploration for analysts",
    ],
    icon: BarChart3,
  },
  {
    slug: "program-evaluation",
    title: "Program Evaluation",
    summary:
      "Rigorous evaluation designs that hold up to audit, OIG review, and external academic scrutiny.",
    outcomes: [
      "Quasi-experimental designs with documented assumptions",
      "Pre-registered analysis plans",
      "Plain-language briefs for non-technical stakeholders",
    ],
    icon: Workflow,
  },
  {
    slug: "privacy-governance",
    title: "Privacy & Governance",
    summary:
      "HIPAA-aware data handling, DUA workflows, and minimum-necessary practices baked into engineering.",
    outcomes: [
      "Data-use agreements operationalized in code",
      "Role-based access aligned to job function",
      "Audit-ready logging and retention policies",
    ],
    icon: ShieldCheck,
  },
  {
    slug: "team-enablement",
    title: "Team Enablement",
    summary:
      "Hands-on coaching so your team owns the work after we leave — not a deck and a goodbye.",
    outcomes: [
      "Embedded pairing with your analysts",
      "Internal documentation and runbooks",
      "Hiring rubrics and structured interview kits",
    ],
    icon: Users,
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Listen",
    body: "We start by sitting with program staff, leadership, and the data itself. No slideware until we understand the constraint that actually matters.",
  },
  {
    n: "02",
    title: "Frame",
    body: "We co-author a tight problem statement, name the decisions in scope, and agree on what “good” looks like at the end of the engagement.",
  },
  {
    n: "03",
    title: "Build",
    body: "Small increments, reviewed weekly. Every deliverable is documented, version-controlled, and handed off in a form your team can maintain.",
  },
  {
    n: "04",
    title: "Transfer",
    body: "We pair with your staff until they own it. Success means we're not a permanent dependency.",
  },
];

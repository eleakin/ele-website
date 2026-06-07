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
    slug: "denial-diagnostic",
    title: "Denial Diagnostic",
    summary:
      "A fixed-scope review of denials, A/R aging, and audit risk — with a measurable baseline.",
    outcomes: [
      "Root-cause analysis of top denial drivers",
      "Dollar-weighted recovery action list",
      "A baseline you can measure future months against",
    ],
    icon: LineChart,
  },
  {
    slug: "revenue-cycle-analytics",
    title: "Revenue-Cycle Analytics",
    summary:
      "Recurring dashboards and denial-prediction reporting, built in R, on top of the EHR you already run.",
    outcomes: [
      "Monthly denial, A/R, and clean-claim dashboards",
      "Predictive flags before claims are submitted",
      "Plain-language briefs for the front desk",
    ],
    icon: BarChart3,
  },
  {
    slug: "audit-defense-documentation",
    title: "Audit Defense & Documentation",
    summary:
      "Documentation-quality scoring against medical-necessity and active-vs-maintenance rules.",
    outcomes: [
      "Audit-readiness scoring of your notes",
      "Active-treatment vs maintenance documentation review",
      "Defensible records before a payer asks",
    ],
    icon: ShieldCheck,
  },
  {
    slug: "eligibility-automation",
    title: "Eligibility & Front-Desk Automation",
    summary:
      "Pre-visit eligibility, benefit, and prior-auth checks that stop denials before the patient arrives.",
    outcomes: [
      "Automated pre-visit eligibility verification",
      "Visit-limit and prior-auth alerts",
      "Fewer surprises at time of service",
    ],
    icon: Workflow,
  },
  {
    slug: "ai-tool-enablement",
    title: "AI Tool Enablement",
    summary:
      "Configure and actually use the AI features your platform already charges you for — without a migration.",
    outcomes: [
      "Setup of existing AI scribe / coding tools",
      "Workflow templates your staff will adopt",
      "No platform switch required",
    ],
    icon: Database,
  },
  {
    slug: "practice-team-coaching",
    title: "Practice Team Coaching",
    summary:
      "We pair with your billing staff until they own the workflow — not a deck and a goodbye.",
    outcomes: [
      "Embedded coaching with your billing team",
      "Follow-up cadence and runbooks",
      "Success means we are not a permanent line item",
    ],
    icon: Users,
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Export",
    body: "You send a standard billing export from the system you already use. No platform switch, no rip-and-replace.",
  },
  {
    n: "02",
    title: "Diagnose",
    body: "We model denials, A/R aging, and documentation risk down to root cause — what is actually costing you, and why.",
  },
  {
    n: "03",
    title: "Report",
    body: "You get plain-language findings with a ranked, dollar-weighted action list your front desk can act on this week.",
  },
  {
    n: "04",
    title: "Follow through",
    body: "Optional ongoing analytics and coaching until the numbers move. Success means we are not a permanent line item.",
  },
];

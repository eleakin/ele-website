export type Insight = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  readingTime: string;
  author: string;
  tags: string[];
  /**
   * Body is structured for now. To migrate to MDX:
   *   1) Add `@next/mdx` + a page.mdx route under app/insights/<slug>/
   *   2) Delete the `body` field here and load frontmatter via fs/MDX import
   *   3) Render the MDX component in app/insights/[slug]/page.tsx
   */
  body: { type: "h2" | "p" | "ul" | "quote"; children: string | string[] }[];
};

export const insights: Insight[] = [
  {
    slug: "engagement-scores-that-survive-a-reorg",
    title: "Engagement scores that survive a reorg",
    description:
      "Why most people analytics dashboards quietly die within 18 months — and the three habits that keep them alive.",
    date: "2026-04-22",
    readingTime: "6 min read",
    author: "[Founding Partner]",
    tags: ["Strategy", "Engagement"],
    body: [
      { type: "p", children: "Every HR team we work with has a graveyard of dashboards. The pattern is consistent: a major initiative defines a set of workforce metrics, a vendor builds the reports, the org gets restructured, and within eighteen months no one can quite remember what any of the numbers were supposed to mean." },
      { type: "h2", children: "The three habits" },
      { type: "p", children: "Across the engagements where people metrics actually stuck, we see the same three habits — none of them technical." },
      { type: "ul", children: ["Definitions for headcount, turnover, and engagement live in version control, not in slide decks.", "Every metric has a named owner in HR whose job depends on it.", "Reports are reviewed in the room where talent decisions are made, not emailed to HRBPs."] },
      { type: "quote", children: "If a workforce metric is not in the room when the headcount decision is made, it is decoration." },
      { type: "p", children: "None of these are hard. They are just rarely written into the original people analytics charter." },
    ],
  },
  {
    slug: "buying-hr-analytics-without-rebuying-it",
    title: "Buying an HR analytics platform without re-buying it in three years",
    description:
      "A short checklist for HR and procurement teams evaluating people analytics vendors.",
    date: "2026-03-10",
    readingTime: "8 min read",
    author: "[Principal, People Analytics]",
    tags: ["Platform", "Procurement"],
    body: [
      { type: "p", children: "HR technology buying cycles move slowly enough that the platform you buy today will be evaluated against tools that do not yet exist. The good news is the underlying questions don’t change much." },
      { type: "h2", children: "Questions worth writing into the RFP" },
      { type: "ul", children: ["Can we export everything — including the metric logic — in an open format?", "Is access to sensitive employee data expressed as code we can review and audit?", "What is the realistic exit cost in person-months, not license dollars?"] },
      { type: "p", children: "If a vendor cannot answer these clearly, the answer is no — regardless of how good the demo looks." },
    ],
  },
  {
    slug: "what-a-pay-equity-audit-actually-costs",
    title: "What a pay equity audit actually costs",
    description:
      "A frank breakdown of where the budget goes on a defensible, legally-reviewed pay equity analysis.",
    date: "2026-02-04",
    readingTime: "5 min read",
    author: "[Principal, Compensation]",
    tags: ["Pay Equity", "Budget"],
    body: [
      { type: "p", children: "We get asked this on every intake call. Here is the honest breakdown for a typical pay equity audit across a mid-to-large workforce." },
      { type: "h2", children: "Roughly where the budget goes" },
      { type: "ul", children: ["≈ 35% — comparator design, job architecture mapping, and legal alignment", "≈ 30% — data acquisition, cleaning, and linkage across HRIS and payroll", "≈ 20% — modeling and sensitivity testing", "≈ 15% — writing, plain-language translation, and review cycles"] },
      { type: "p", children: "The first bucket is the one most often underfunded, and the one most predictive of whether the final analysis survives legal review." },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}

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
    slug: "metrics-that-survive-leadership-turnover",
    title: "Metrics that survive leadership turnover",
    description:
      "Why most KPI projects quietly die within 18 months — and the three habits that keep them alive.",
    date: "2026-04-22",
    readingTime: "6 min read",
    author: "[Founding Partner]",
    tags: ["Strategy", "Governance"],
    body: [
      { type: "p", children: "Every agency we work with has a graveyard of dashboards. The pattern is consistent: a major initiative defines a set of metrics, a contractor builds the reports, leadership turns over, and within eighteen months no one can quite remember what any of the numbers were supposed to mean." },
      { type: "h2", children: "The three habits" },
      { type: "p", children: "Across the engagements where metrics actually stuck, we see the same three habits — none of them technical." },
      { type: "ul", children: ["Definitions live in version control, not in slide decks.", "Every metric has a named owner whose job depends on it.", "Reports are reviewed in the room where decisions are made, not emailed."] },
      { type: "quote", children: "If a metric is not in the room when the decision is made, it is decoration." },
      { type: "p", children: "None of these are hard. They are just rarely written into the original statement of work." },
    ],
  },
  {
    slug: "buying-modern-data-infrastructure-without-rebuying-it",
    title: "Buying modern data infrastructure without re-buying it in three years",
    description:
      "A short checklist for procurement teams evaluating data platform vendors.",
    date: "2026-03-10",
    readingTime: "8 min read",
    author: "[Principal, Engineering]",
    tags: ["Platform", "Procurement"],
    body: [
      { type: "p", children: "Procurement cycles in government move slowly enough that the platform you buy today will be evaluated against software that does not yet exist. The good news is the underlying questions don’t change much." },
      { type: "h2", children: "Questions worth writing into the RFP" },
      { type: "ul", children: ["Can we export everything — including pipeline logic — in an open format?", "Is access control expressed as code we can review and audit?", "What is the realistic exit cost in person-months, not dollars?"] },
      { type: "p", children: "If a vendor cannot answer these clearly, the answer is no — regardless of feature parity." },
    ],
  },
  {
    slug: "what-evaluation-actually-costs",
    title: "What independent program evaluation actually costs",
    description:
      "A frank breakdown of where the budget goes on a federally-reviewed evaluation.",
    date: "2026-02-04",
    readingTime: "5 min read",
    author: "[Principal, Evaluation]",
    tags: ["Evaluation", "Budget"],
    body: [
      { type: "p", children: "We get asked this on every intake call. Here is the honest breakdown for a typical 18-month, federally-reviewed evaluation." },
      { type: "h2", children: "Roughly where the budget goes" },
      { type: "ul", children: ["≈ 35% — design, pre-registration, and stakeholder alignment", "≈ 30% — data acquisition, linkage, and quality work", "≈ 20% — analysis and sensitivity testing", "≈ 15% — writing, plain-language translation, and review cycles"] },
      { type: "p", children: "The first bucket is the one most often underfunded, and the one most predictive of whether the final report survives external review." },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}

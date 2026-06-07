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
    slug: "why-chiropractic-claims-get-denied",
    title: "Why chiropractic claims get denied — and the four fixes that move the needle",
    description:
      "Most denials in a chiropractic practice trace back to a handful of repeatable causes. Here is where to look first.",
    date: "2026-05-20",
    readingTime: "6 min read",
    author: "Eric L. Eakin, DC",
    tags: ["Denials", "Revenue Cycle"],
    body: [
      { type: "p", children: "When a practice tells me “we get denied a lot,” the instinct is to blame the payer. But in almost every billing export I review, the denials cluster around a small number of fixable causes — not bad luck, and not a hostile insurer." },
      { type: "h2", children: "The four that matter most" },
      { type: "ul", children: ["Eligibility and benefits not verified before the visit, so visit limits and inactive coverage surface only after the claim.", "Documentation that does not establish medical necessity for the date of service billed.", "Coding mismatches — units, modifiers, and region counts that do not match the note.", "No structured follow-up on the first denial, so recoverable dollars quietly age out of A/R."] },
      { type: "quote", children: "A denial is not a verdict. It is a question the payer is asking about your documentation — and most of the time it has a defensible answer." },
      { type: "p", children: "None of these require a new platform. They require knowing which one is costing you the most, in dollars, this month. That is what a denial diagnostic is for." },
    ],
  },
  {
    slug: "active-vs-maintenance-documentation",
    title: "Active treatment vs. maintenance care: documenting medical necessity that survives an audit",
    description:
      "The line between active treatment and maintenance care is where many chiropractic audits are won or lost.",
    date: "2026-04-15",
    readingTime: "7 min read",
    author: "Eric L. Eakin, DC",
    tags: ["Audit Defense", "Documentation"],
    body: [
      { type: "p", children: "Payers reimburse active treatment that is expected to produce improvement. They generally do not reimburse maintenance care. The problem is rarely the care itself — it is that the note does not make the distinction visible." },
      { type: "h2", children: "What a defensible active-treatment note shows" },
      { type: "ul", children: ["A functional baseline and a measurable goal, not just pain scores.", "Objective change over time — or a clear clinical rationale when progress stalls.", "A treatment plan with a defined endpoint, not an open-ended schedule."] },
      { type: "p", children: "When those elements are present and consistent, a records request becomes routine. When they are absent, even appropriate care looks like maintenance on paper." },
      { type: "quote", children: "Audit defense is not about writing more. It is about writing the few things that establish medical necessity — every visit, before anyone asks." },
    ],
  },
  {
    slug: "cmt-coding-mistakes-98940-98943",
    title: "The 98940–98943 coding mistakes draining small practices",
    description:
      "The chiropractic manipulative treatment codes are simple on the surface and easy to get subtly wrong.",
    date: "2026-03-18",
    readingTime: "5 min read",
    author: "Eric L. Eakin, DC",
    tags: ["Coding", "Revenue Cycle"],
    body: [
      { type: "p", children: "The CMT codes — 98940, 98941, 98942, and 98943 — are defined by the number of spinal regions treated. That simplicity is exactly why errors hide in them and repeat across thousands of claims." },
      { type: "h2", children: "Where the dollars leak" },
      { type: "ul", children: ["Region counts in the billed code that the note does not support, inviting downcoding or denial.", "Missing or misapplied modifiers when a separately identifiable service is performed the same day.", "Extraspinal treatment (98943) billed without documentation tying it to a covered, medically necessary problem."] },
      { type: "p", children: "Individually these look like rounding errors. Multiplied across a year of visits, they are often the single largest recoverable line in a practice’s data — and the easiest to fix, because the pattern is consistent." },
    ],
  },
  {
    slug: "payer-ai-adjudication-and-your-ar",
    title: "What payer-side AI adjudication means for your A/R",
    description:
      "Insurers are automating claim review. Here is what that changes for a small chiropractic practice — and what it does not.",
    date: "2026-02-10",
    readingTime: "6 min read",
    author: "Eric L. Eakin, DC",
    tags: ["AI", "Revenue Cycle"],
    body: [
      { type: "p", children: "Payers increasingly run claims through automated review before a human ever looks at them. For a practice, that means edge cases that used to slip through are now flagged consistently — and faster." },
      { type: "h2", children: "What actually changes" },
      { type: "ul", children: ["Consistency cuts both ways: clean, well-documented claims clear quickly; weak ones are denied just as reliably.", "Documentation patterns matter more than any single note, because the system sees patterns across your submissions.", "Speed is now a feature you can use — a denial caught and re-worked in days, not months, rarely ages out of A/R."] },
      { type: "quote", children: "You do not beat automated adjudication by gaming it. You beat it by submitting claims that are simply correct — at scale, every time." },
      { type: "p", children: "The same analytics that flag your denial patterns can flag the claims most likely to trip an automated review before you submit them. That is the point of predictive revenue-cycle reporting." },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}

import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { ArticleCard } from "@/components/site/article-card";
import { insights } from "@/lib/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Field notes on chiropractic revenue cycle, denials, coding, and audit-ready documentation.",
};

export default function InsightsPage() {
  const sorted = [...insights].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <>
      <Section className="border-b border-border bg-surface">
        <SectionHeading
          as="h1"
          eyebrow="Insights"
          title="Field notes from the work."
          description="Short pieces on the denial, coding, and documentation problems we run into most often. Written for the people doing the billing, not for marketing."
        />
      </Section>

      <Section>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((i, idx) => (
            <li key={i.slug}>
              <ArticleCard i={i} index={idx} />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { ArticleCard } from "@/components/site/article-card";
import { insights } from "@/lib/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Field notes on new-patient acquisition, new-homeowner direct mail, welcome offers, and practice growth for chiropractors and dentists.",
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
          description="Short pieces on new-patient acquisition, direct-mail ROI, and making new-homeowner outreach actually work. Written for practice owners, not for marketers."
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

import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { CaseStudyCard } from "@/components/site/case-study-card";
import { CtaBanner } from "@/components/site/cta-banner";
import { caseStudies } from "@/lib/content/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected engagements shown as problem → approach → measurable outcome. People analytics work that shipped and stuck.",
};

export default function WorkPage() {
  return (
    <>
      <Section className="border-b border-border bg-surface">
        <SectionHeading
          as="h1"
          eyebrow="Selected work"
          title="Engagements, told honestly."
          description="Every case study below follows the same structure — the problem we were hired to solve, the approach we actually took, and the outcomes we can defend. Client names are anonymized where required."
        />
      </Section>

      <Section>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c, i) => (
            <li key={c.slug}>
              <CaseStudyCard c={c} index={i} />
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner />
    </>
  );
}

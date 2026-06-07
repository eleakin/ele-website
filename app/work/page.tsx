import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { ProcessSteps } from "@/components/site/process-steps";
import { CtaBanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How we work: export, diagnose, report, and follow through. A fixed-scope path from your existing billing data to a dollar-weighted recovery plan.",
};

export default function ApproachPage() {
  return (
    <>
      <Section className="border-b border-border bg-surface">
        <SectionHeading
          as="h1"
          eyebrow="Our approach"
          title="From your billing export to a plan you can act on."
          description="A deliberately simple, fixed-scope path. No platform switch, no rip-and-replace — we work on top of the system you already run."
        />
      </Section>

      <Section>
        <ProcessSteps />
      </Section>

      <Section className="bg-muted/40">
        <SectionHeading
          eyebrow="On results"
          title="We publish numbers we can stand behind."
          description="We are a new practice and we will not show invented client results. As pilot engagements complete, real and clearly-attributed outcomes will appear here. Until then, the figures on our site are labeled industry benchmarks — not client claims."
        />
      </Section>

      <CtaBanner
        title="Want to see how it would work for your clinic?"
        body="Send us a standard billing export and we'll walk you through what your denials and A/R are really costing you."
        cta="Get a free denial review"
      />
    </>
  );
}

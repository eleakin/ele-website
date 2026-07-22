import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { ProcessSteps } from "@/components/site/process-steps";
import { CtaBanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How we work: pick your ZIP codes, we pull the list, you mail your welcome offer, and we track what comes back. A simple monthly rhythm from ZIP code to new patient.",
};

export default function ApproachPage() {
  return (
    <>
      <Section className="border-b border-border bg-surface">
        <SectionHeading
          as="h1"
          eyebrow="Our approach"
          title="From your ZIP codes to new patients in your schedule."
          description="A deliberately simple monthly rhythm. No new software, no long-term contract — you pick the ZIP codes, we handle the data, your welcome offer does the rest."
        />
      </Section>

      <Section>
        <ProcessSteps />
      </Section>

      <Section className="bg-muted/40">
        <SectionHeading
          eyebrow="On results"
          title="We publish numbers we can stand behind."
          description="We are a new service and we will not show invented client results. The 2006 proof point on this site is the founder's own documented experience, clearly labeled as such. As subscriber practices build measurable track records, real and clearly-attributed outcomes will appear here."
        />
      </Section>

      <CtaBanner
        title="Want to see how it would work for your practice?"
        body="Tell us your ZIP codes and we'll pull a free sample list — 25–50 real new homeowners in your area — so you can see the volume before you spend anything."
        cta="Get a free sample list"
      />
    </>
  );
}

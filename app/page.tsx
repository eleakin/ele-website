import { Hero } from "@/components/site/hero";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { ServicesGrid } from "@/components/site/services-grid";
import { ResultsStrip } from "@/components/site/results-strip";
import { ProcessSteps } from "@/components/site/process-steps";
import { DenialCalculator } from "@/components/site/denial-calculator";
import { CtaBanner } from "@/components/site/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section className="bg-muted/40">
        <SectionHeading
          eyebrow="What we do"
          title="A small set of services, done exceptionally well."
          description="Focused on the work that decides whether your billing pays off — recovery, defensibility, and the team habits that make it last."
        />
        <div className="mt-14">
          <ServicesGrid compact />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="The problem"
          title="The problem, in numbers."
          description="These are industry figures, not client results — a sense of how much revenue insurance-billing practices quietly lose to denials, slow follow-up, and coding errors."
        />
        <div className="mt-12">
          <ResultsStrip />
        </div>
      </Section>

      <Section className="bg-muted/40">
        <SectionHeading
          eyebrow="Try it"
          title="How much is leaking?"
          description="Move the sliders to estimate the revenue your practice could realistically recover in a year. Illustrative only — not a guarantee."
        />
        <div className="mt-12">
          <DenialCalculator />
        </div>
      </Section>

      <Section id="approach">
        <SectionHeading
          eyebrow="Our approach"
          title="From your billing export to a plan you can act on."
          description="A deliberately simple, fixed-scope path. No platform switch — we work on top of the system you already run."
        />
        <div className="mt-12">
          <ProcessSteps />
        </div>
      </Section>

      <CtaBanner
        title="Curious what your denials are really costing you?"
        body="Send a standard billing export and we'll walk you through where the revenue is leaking — no platform switch, no obligation."
        cta="Get a free denial review"
      />
    </>
  );
}

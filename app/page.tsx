import { Hero } from "@/components/site/hero";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { ServicesGrid } from "@/components/site/services-grid";
import { ResultsStrip } from "@/components/site/results-strip";
import { ProcessSteps } from "@/components/site/process-steps";
import { LeadEstimator } from "@/components/site/lead-estimator";
import { CtaBanner } from "@/components/site/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section className="bg-muted/40">
        <SectionHeading
          eyebrow="What we do"
          title="One service, three simple plans."
          description="Every plan delivers the same core thing: a fresh monthly list of new homeowners in your ZIP codes, ready to use. The tiers differ only in how much of the work we take off your plate."
        />
        <div className="mt-14">
          <ServicesGrid compact />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Why it works"
          title="The opportunity, in numbers."
          description="New homeowners are actively forming new provider relationships — no established chiropractor, no established dentist, and more local spending in their first months than settled residents. The practice that reaches them first usually wins them."
        />
        <div className="mt-12">
          <ResultsStrip />
        </div>
      </Section>

      <Section className="bg-muted/40">
        <SectionHeading
          eyebrow="Try it"
          title="How many new households could you reach?"
          description="Move the sliders to estimate the new-homeowner volume in your area and what it could mean for your practice. Illustrative only — not a guarantee."
        />
        <div className="mt-12">
          <LeadEstimator />
        </div>
      </Section>

      <Section id="approach">
        <SectionHeading
          eyebrow="Our approach"
          title="From your ZIP codes to new patients in your schedule."
          description="A deliberately simple monthly rhythm. No new software, no long contract — you pick the ZIP codes, we handle the data."
        />
        <div className="mt-12">
          <ProcessSteps />
        </div>
      </Section>

      <CtaBanner
        title="Want to see the real names in your ZIP code?"
        body="Ask for a free sample list — 25–50 actual new homeowners in a ZIP code you choose. See exactly what you'd be mailing to before you spend a dollar."
        cta="Get a free sample list"
      />
    </>
  );
}

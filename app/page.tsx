import { Hero } from "@/components/site/hero";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { ServicesGrid } from "@/components/site/services-grid";
import { LogoCloud } from "@/components/site/logo-cloud";
import { Testimonials } from "@/components/site/testimonials";
import { ResultsStrip } from "@/components/site/results-strip";
import { CtaBanner } from "@/components/site/cta-banner";
import { CaseStudyCard } from "@/components/site/case-study-card";
import { caseStudies } from "@/lib/content/case-studies";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section className="bg-background">
        <LogoCloud />
      </Section>

      <Section className="bg-muted/40">
        <SectionHeading
          eyebrow="What we do"
          title="A small set of services we do exceptionally well."
          description="We focus on the work that determines whether an analytics investment pays off — strategy, platform, evaluation, and the team enablement that makes it last."
        />
        <div className="mt-14">
          <ServicesGrid compact />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Selected results"
          title="Numbers from the last few engagements."
          description="Every metric below is from a real, named program. We are happy to walk through the methodology on a call."
        />
        <div className="mt-12">
          <ResultsStrip />
        </div>
      </Section>

      <Section className="bg-muted/40">
        <SectionHeading
          eyebrow="Recent work"
          title="Engagements that shipped and stuck."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c, i) => (
            <li key={c.slug}>
              <CaseStudyCard c={c} index={i} />
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What clients say"
          title="Quiet, durable, technically honest."
        />
        <div className="mt-12">
          <Testimonials />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}

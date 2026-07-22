import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { TeamGrid } from "@/components/site/team-grid";
import { CtaBanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founder-led new-patient lead generation for Nevada chiropractors and dentists — built by a chiropractor who has used new-homeowner lists to grow his own practice.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="border-b border-border bg-surface">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <SectionHeading
            as="h1"
            eyebrow="About the practice"
            title="Built by a chiropractor who ran this play himself."
            description="Most lead-gen vendors have never sat in the provider's chair. ELE Practice Leads is founded by a chiropractor who used a new-homeowner list to grow his own practice — and who now brings that experience, plus years of data-analytics work, to practices across Nevada."
          />
          <dl className="grid grid-cols-3 gap-6 border-t border-border pt-8 lg:border-0 lg:pt-0">
            <Stat v="DC + Analyst" k="Founder-led" />
            <Stat v="Nevada" k="Chiros & dentists" />
            <Stat v="Monthly" k="No long contract" />
          </dl>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-ink">Mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              To put growing Nevada practices first in line with the families
              who just moved into their neighborhoods — with clean data,
              honest math, and a service simple enough to actually use every
              month.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-ink">How we’re different</h2>
            <ul className="mt-4 space-y-3 text-base text-ink/85">
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                <span><strong className="text-ink">A provider built it.</strong> The founder is a DC who used this exact approach in his own practice — he knows what a front desk can realistically execute.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                <span><strong className="text-ink">See it before you buy it.</strong> A free 25–50 name sample list for your own ZIP code, before any money changes hands.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                <span><strong className="text-ink">Honest numbers only.</strong> Our proof point is clearly labeled founder experience, not a client result — and we will never promise outcomes we can&rsquo;t guarantee.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/40">
        <SectionHeading eyebrow="Founder" title="Who you'll work with." />
        <div className="mt-12">
          <TeamGrid />
        </div>
      </Section>

      <CtaBanner
        title="Want to talk it through directly?"
        body="Every inquiry is read by the founder. We'll set up a short call within a few business days."
        cta="Get in touch"
      />
    </>
  );
}

function Stat({ v, k }: { v: string; k: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-ink-muted">{k}</dt>
      <dd className="mt-1 font-display text-3xl text-ink">{v}</dd>
    </div>
  );
}

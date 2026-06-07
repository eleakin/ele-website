import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { TeamGrid } from "@/components/site/team-grid";
import { CtaBanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founder-led chiropractic revenue-cycle and audit-defense analytics — clinical fluency and statistical rigor brought to the back office.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="border-b border-border bg-surface">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <SectionHeading
            as="h1"
            eyebrow="About the practice"
            title="Built by a chiropractor who reads the data."
            description="Most chiropractic billing help comes from people who have never written a SOAP note — or from analysts who have never read one. ELE Practice Analytics exists to close that gap: clinical fluency and statistical rigor, applied to the back office."
          />
          <dl className="grid grid-cols-3 gap-6 border-t border-border pt-8 lg:border-0 lg:pt-0">
            <Stat v="DC + Analyst" k="Founder-led" />
            <Stat v="Your EHR" k="No platform switch" />
            <Stat v="BAA" k="On request" />
          </dl>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-ink">Mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              To help insurance-billing chiropractic practices keep the revenue
              they have already earned — by making denials, A/R, and audit risk
              visible, and the fixes obvious.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-ink">How we’re different</h2>
            <ul className="mt-4 space-y-3 text-base text-ink/85">
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                <span><strong className="text-ink">A clinician reads your data.</strong> We understand the note and the claim, not just the spreadsheet.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                <span><strong className="text-ink">No platform switch.</strong> We work on top of the EHR and billing system you already run.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                <span><strong className="text-ink">We say no.</strong> If we’re not the right fit, we’ll tell you and point you somewhere better.</span>
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

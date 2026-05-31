import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { TeamGrid } from "@/components/site/team-grid";
import { CtaBanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Our story, mission, and the people behind the work. A senior team that has spent careers inside HR, people analytics, and total rewards.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="border-b border-border bg-surface">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <SectionHeading
            as="h1"
            eyebrow="About the firm"
            title="A small, senior team. Built for the work that matters."
            description="We started this firm because the people analytics work most organizations need is rarely done by the people who actually understand the constraints. Our partners have spent careers inside HR, people analytics, and total rewards."
          />
          <dl className="grid grid-cols-3 gap-6 border-t border-border pt-8 lg:border-0 lg:pt-0">
            <Stat v="2018" k="Founded" />
            <Stat v="12" k="Engagements / yr" />
            <Stat v="100%" k="Senior staffed" />
          </dl>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-ink">Mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              To make work fairer and more humane — by helping the
              organizations entrusted with people&rsquo;s careers build durable,
              honest workforce analytics they own.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-ink">How we’re different</h2>
            <ul className="mt-4 space-y-3 text-base text-ink/85">
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                <span><strong className="text-ink">Senior on every engagement.</strong> No junior consultants learning on your time.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                <span><strong className="text-ink">Transfer-first.</strong> Every artifact is built to be maintained by your team.</span>
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
        <SectionHeading eyebrow="Team" title="The people you'll actually work with." />
        <div className="mt-12">
          <TeamGrid />
        </div>
      </Section>

      <CtaBanner
        title="Want to talk to a partner directly?"
        body="Every inquiry is read by a partner. We'll set up a 30-minute call within a few business days."
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

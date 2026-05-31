import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { SectionHeading } from "@/components/site/section-heading";
import { ProcessSteps } from "@/components/site/process-steps";
import { CtaBanner } from "@/components/site/cta-banner";
import { services } from "@/lib/content/services";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "People analytics strategy, workforce data platform, dashboards, talent & retention analytics, pay equity, and HR team enablement.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="border-b border-border bg-surface">
        <SectionHeading
          as="h1"
          eyebrow="Services"
          title="Focused services. Measurable outcomes."
          description="We deliberately keep our service catalog narrow. Each engagement is shaped around the specific workforce decision your team is trying to make better."
        />
      </Section>

      <Section>
        <ul className="space-y-16">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <li
                key={s.slug}
                id={s.slug}
                className="grid scroll-mt-24 gap-10 border-b border-border pb-16 last:border-0 last:pb-0 md:grid-cols-[1fr_1.4fr]"
              >
                <div>
                  <span
                    aria-hidden="true"
                    className="inline-flex size-12 items-center justify-center rounded-lg bg-accent/10 text-accent"
                  >
                    <Icon className="size-6" />
                  </span>
                  <h2 className="mt-5 font-display text-3xl text-ink">{s.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-ink-muted">
                    {s.summary}
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-surface p-7 shadow-soft">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                    Typical outcomes
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {s.outcomes.map((o) => (
                      <li key={o} className="flex gap-3 text-sm text-ink">
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-0.5 size-5 shrink-0 text-accent"
                        />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section className="bg-muted/40">
        <SectionHeading
          eyebrow="How we work"
          title="A four-phase process designed to leave your team stronger."
        />
        <div className="mt-12">
          <ProcessSteps />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}

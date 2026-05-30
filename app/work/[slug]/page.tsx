import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/site/section";
import { CtaBanner } from "@/components/site/cta-banner";
import { caseStudies } from "@/lib/content/case-studies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.summary,
    openGraph: { title: c.title, description: c.summary },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <>
      <Section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/work"
            className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-ink"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            All work
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full bg-accent/10 px-2.5 py-1 font-medium uppercase tracking-wider text-accent">
              {c.sector}
            </span>
            <span className="text-ink-muted">{c.client}</span>
            <span aria-hidden="true" className="text-ink-muted">·</span>
            <span className="text-ink-muted">{c.duration}</span>
          </div>
          <h1 className="mt-4">{c.title}</h1>
          <p className="mt-6 text-xl leading-relaxed text-ink-muted">{c.summary}</p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-12">
          <Block title="The problem">
            <p className="text-base leading-relaxed text-ink/85">{c.problem}</p>
          </Block>

          <Block title="Our approach">
            <ul className="space-y-3">
              {c.approach.map((a) => (
                <li key={a} className="flex gap-3 text-base text-ink/85">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Measurable outcomes">
            <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
              {c.outcomes.map((o) => (
                <div key={o.label} className="bg-surface p-6">
                  <dt className="font-display text-3xl text-ink">{o.metric}</dt>
                  <dd className="mt-2 text-sm text-ink-muted">{o.label}</dd>
                </div>
              ))}
            </dl>
          </Block>

          <Block title="Services used">
            <ul className="flex flex-wrap gap-2">
              {c.services.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-ink-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Block>
        </div>
      </Section>

      <CtaBanner
        title="Working on something similar?"
        body="If any of this resonates with what you're up against, let's compare notes on a call."
      />
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl text-ink">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

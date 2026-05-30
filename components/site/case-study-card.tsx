import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type CaseStudy } from "@/lib/content/case-studies";
import { FadeIn } from "./fade-in";

export function CaseStudyCard({ c, index = 0 }: { c: CaseStudy; index?: number }) {
  return (
    <FadeIn delay={index * 0.05}>
      <Link
        href={`/work/${c.slug}`}
        className="group flex h-full flex-col rounded-xl border border-border bg-surface p-7 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            {c.sector}
          </span>
          <ArrowUpRight aria-hidden="true" className="size-4 text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
        <h3 className="mt-4 font-display text-xl text-ink">{c.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
          {c.summary}
        </p>
        <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
          {c.outcomes.slice(0, 3).map((o) => (
            <div key={o.label}>
              <dt className="font-display text-xl text-ink">{o.metric}</dt>
              <dd className="mt-1 text-xs leading-tight text-ink-muted">{o.label}</dd>
            </div>
          ))}
        </dl>
      </Link>
    </FadeIn>
  );
}

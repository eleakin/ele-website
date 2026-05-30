import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content/services";
import { FadeIn } from "./fade-in";

export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  return (
    <ul
      className={
        "grid gap-6 sm:grid-cols-2 " +
        (compact ? "lg:grid-cols-3" : "lg:grid-cols-3")
      }
    >
      {services.map((s, idx) => {
        const Icon = s.icon;
        return (
          <FadeIn key={s.slug} delay={idx * 0.04}>
            <li className="group relative flex h-full flex-col rounded-xl border border-border bg-surface p-7 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card">
              <span
                className="inline-flex size-11 items-center justify-center rounded-lg bg-accent/10 text-accent"
                aria-hidden="true"
              >
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-xl text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {s.summary}
              </p>

              {!compact && (
                <ul className="mt-5 space-y-2 text-sm text-ink/80">
                  {s.outcomes.map((o) => (
                    <li key={o} className="flex gap-2">
                      <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              )}

              <Link
                href={`/services#${s.slug}`}
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                Learn more
                <ArrowUpRight aria-hidden="true" className="size-4" />
                <span className="sr-only"> about {s.title}</span>
              </Link>
            </li>
          </FadeIn>
        );
      })}
    </ul>
  );
}

import { processSteps } from "@/lib/content/services";
import { FadeIn } from "./fade-in";

export function ProcessSteps() {
  return (
    <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((s, idx) => (
        <FadeIn key={s.n} delay={idx * 0.05}>
          <li className="relative h-full rounded-xl border border-border bg-surface p-7 shadow-soft">
            <span className="font-display text-3xl text-accent">{s.n}</span>
            <h3 className="mt-3 font-display text-xl text-ink">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
          </li>
        </FadeIn>
      ))}
    </ol>
  );
}

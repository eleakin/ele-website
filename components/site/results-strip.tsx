import { FadeIn } from "./fade-in";

// Industry benchmarks — NOT client results. These are general figures from
// public industry sources, used to frame the size of the problem.
const benchmarks = [
  { metric: "20–30%", label: "of revenue lost to denials and leakage" },
  { metric: "25 vs 75", label: "days in A/R — the cost of follow-up discipline" },
  { metric: "98940–43", label: "adjustment codes where errors concentrate" },
  { metric: "5–10 hrs/wk", label: "clinician time AI documentation can return" },
];

export function ResultsStrip() {
  return (
    <FadeIn>
      <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {benchmarks.map((r) => (
          <div key={r.label} className="bg-surface p-7">
            <dt className="font-display text-4xl text-ink">{r.metric}</dt>
            <dd className="mt-2 text-sm text-ink-muted">
              <span className="block font-medium text-ink/90">{r.label}</span>
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-xs text-ink-muted">
        Industry figures, not client results. Sources: zHealth; MedCloudMD (2026); Prognocis; SpryPT (2026).
      </p>
    </FadeIn>
  );
}

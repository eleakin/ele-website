import { FadeIn } from "./fade-in";

const results = [
  { metric: "31%", label: "less regretted attrition", source: "Attrition early-warning model" },
  { metric: "$4.2M", label: "pay-equity remediation funded", source: "Pay equity audit" },
  { metric: "7 → 1", label: "HR systems consolidated", source: "People-data platform" },
  { metric: "90%", label: "less manual HR reporting", source: "Workforce dashboard rollout" },
];

export function ResultsStrip() {
  return (
    <FadeIn>
      <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {results.map((r) => (
          <div key={r.label} className="bg-surface p-7">
            <dt className="font-display text-4xl text-ink">{r.metric}</dt>
            <dd className="mt-2 text-sm text-ink-muted">
              <span className="block font-medium text-ink/90">{r.label}</span>
              <span className="mt-1 block text-xs">{r.source}</span>
            </dd>
          </div>
        ))}
      </dl>
    </FadeIn>
  );
}

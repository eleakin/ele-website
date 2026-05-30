import { FadeIn } from "./fade-in";

const results = [
  { metric: "92%", label: "less manual report assembly", source: "State Medicaid quality program" },
  { metric: "1st-pass", label: "federal review acceptance", source: "1115 waiver evaluation" },
  { metric: "0", label: "missed reportable-event windows", source: "Surveillance modernization" },
  { metric: "400+", label: "staff onboarded to one definition layer", source: "Quality dashboard rollout" },
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

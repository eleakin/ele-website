import { FadeIn } from "./fade-in";

// The founder's own documented experience plus vendor-published figures —
// NOT client results. Used to frame why new-homeowner mail works.
const benchmarks = [
  { metric: "$67/mo", label: "what the founder paid for a new-homeowner list in 2006" },
  { metric: "$6,000+", label: "combined business from the two patients that list produced" },
  { metric: "95%", label: "deliverability guaranteed by the list source" },
  { metric: "Monthly", label: "fresh names for your ZIP codes, every single month" },
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
        The 2006 figures are the founder&rsquo;s own documented experience in his
        practice — one illustrative case, not a client result or a guarantee.
        Deliverability is the list vendor&rsquo;s published guarantee. Your results
        will depend on your ZIP codes, your offer, and your follow-up.
      </p>
    </FadeIn>
  );
}

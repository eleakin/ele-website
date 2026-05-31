import { Quote } from "lucide-react";
import { FadeIn } from "./fade-in";

const testimonials = [
  {
    quote:
      "They built people analytics my team can actually own. Six months in, my HRBPs are acting on flight-risk signals I never had visibility into before.",
    name: "[Chief People Officer]",
    role: "[Global Technology Company]",
  },
  {
    quote:
      "The pay equity analysis held up to legal review on the first pass. That has not happened to us before.",
    name: "[VP, Total Rewards]",
    role: "[Multinational Retailer]",
  },
  {
    quote:
      "Honest, technically rigorous, and refreshingly uninterested in selling us a platform we don't need.",
    name: "[Head of People Analytics]",
    role: "[Healthcare System]",
  },
];

export function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t, idx) => (
        <FadeIn key={t.name} delay={idx * 0.05}>
          <figure className="flex h-full flex-col rounded-xl border border-border bg-surface p-7 shadow-soft">
            <Quote aria-hidden="true" className="size-6 text-accent" />
            <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-4 text-sm">
              <div className="font-medium text-ink">{t.name}</div>
              <div className="text-ink-muted">{t.role}</div>
            </figcaption>
          </figure>
        </FadeIn>
      ))}
    </div>
  );
}

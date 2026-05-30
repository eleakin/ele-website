import { Quote } from "lucide-react";
import { FadeIn } from "./fade-in";

const testimonials = [
  {
    quote:
      "They built infrastructure my team can actually own. Six months in, my analysts are shipping changes I never could have approved before.",
    name: "[Chief Data Officer]",
    role: "[State Medicaid Agency]",
  },
  {
    quote:
      "The evaluation passed federal review on the first submission. That has not happened to us in a decade.",
    name: "[Program Director]",
    role: "[1115 Waiver Program]",
  },
  {
    quote:
      "Honest, technically rigorous, and refreshingly uninterested in selling us things we don't need.",
    name: "[Deputy Director]",
    role: "[State Department of Health]",
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

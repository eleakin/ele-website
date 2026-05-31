"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "./container";

export function Hero() {
  const prefersReduced = useReducedMotion();
  const fade = (delay = 0) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
        };

  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <Container className="relative pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-36">
        <motion.div {...fade(0)} className="max-w-3xl">
          <span className="eyebrow">People analytics consulting</span>
        </motion.div>
        <motion.h1 {...fade(0.05)} className="mt-5 max-w-4xl">
          Evidence-driven analytics for{" "}
          <span className="text-accent">the modern workforce.</span>
        </motion.h1>
        <motion.p
          {...fade(0.12)}
          className="mt-6 max-w-2xl text-lg sm:text-xl text-ink-muted leading-relaxed"
        >
          We help HR and total rewards leaders turn workforce data into decisions
          about who to hire, how to keep them, and how to pay them fairly. No
          vanity dashboards, no permanent dependency.
        </motion.p>
        <motion.div {...fade(0.2)} className="mt-10 flex flex-wrap items-center gap-3">
          <Button asChild variant="accent" size="lg">
            <Link href="/contact">
              Book a discovery call
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/work">See our work</Link>
          </Button>
        </motion.div>

        <motion.dl
          {...fade(0.3)}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-10 sm:grid-cols-4"
        >
          {[
            { v: "20+ yrs", k: "in people analytics" },
            { v: "2M+", k: "employee records analyzed" },
            { v: "0", k: "pay-equity findings overturned" },
            { v: "WCAG 2.1 AA", k: "accessible deliverables" },
          ].map((s) => (
            <div key={s.k}>
              <dt className="text-xs uppercase tracking-wider text-ink-muted">
                {s.k}
              </dt>
              <dd className="mt-1 font-display text-2xl text-ink">{s.v}</dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}

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
          <span className="eyebrow">New-homeowner leads for Nevada chiropractors &amp; dentists</span>
        </motion.div>
        <motion.h1 {...fade(0.05)} className="mt-5 max-w-4xl">
          Your next patients just{" "}
          <span className="text-accent">moved in.</span>
        </motion.h1>
        <motion.p
          {...fade(0.12)}
          className="mt-6 max-w-2xl text-lg sm:text-xl text-ink-muted leading-relaxed"
        >
          Families who just bought a home have no chiropractor or dentist yet —
          they are actively choosing new local providers. We deliver a fresh
          list of new homeowners in your ZIP codes every month, ready to mail,
          so your welcome offer arrives before any competitor&rsquo;s.
        </motion.p>
        <motion.p
          {...fade(0.16)}
          className="mt-4 max-w-2xl text-base text-ink-muted leading-relaxed"
        >
          Our founder ran this exact play in his own practice in 2006: a
          $67/month new-homeowner list produced two patients worth over $6,000
          in combined business. One documented experience, not a promise — but
          it is why this service exists.
        </motion.p>
        <motion.div {...fade(0.2)} className="mt-10 flex flex-wrap items-center gap-3">
          <Button asChild variant="accent" size="lg">
            <Link href="/contact">
              Get a free sample list
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/#approach">See how it works</Link>
          </Button>
        </motion.div>

        <motion.ul
          {...fade(0.3)}
          className="mt-16 flex max-w-3xl flex-wrap items-center gap-x-3 gap-y-3 border-t border-border pt-10 text-sm font-medium text-ink"
        >
          {["DC-founded", "Public-record data — no patient information", "Delivered monthly, ready to mail"].map(
            (item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden="true" className="text-border">
                    ·
                  </span>
                )}
                <span>{item}</span>
              </li>
            )
          )}
        </motion.ul>
      </Container>
    </section>
  );
}

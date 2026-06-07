"use client";

import { useState } from "react";

function Slider({ label, value, display, min, max, step, onChange }: {
  label: string; value: number; display: string;
  min: number; max: number; step: number; onChange: (n: number) => void;
}) {
  return (
    <div>
      <label className="mb-2 flex items-center justify-between text-sm font-semibold text-primary">
        <span>{label}</span>
        <span className="font-display text-accent">{display}</span>
      </label>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
        style={{ accentColor: "hsl(var(--accent))" }}
      />
    </div>
  );
}

export function DenialCalculator() {
  const [claims, setClaims] = useState(320);
  const [avg, setAvg] = useState(68);
  const [denial, setDenial] = useState(12);
  const [recoverable, setRecoverable] = useState(60);

  const annualDenied = claims * 12 * avg * (denial / 100);
  const annualRecoverable = annualDenied * (recoverable / 100);
  const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

  return (
    <div className="grid gap-8 rounded-xl border border-border bg-surface p-6 shadow-card md:grid-cols-2 md:p-8">
      <div className="space-y-5">
        <Slider label="Claims submitted per month" value={claims} display={claims.toLocaleString()} min={40} max={1500} step={10} onChange={setClaims} />
        <Slider label="Average reimbursement per claim" value={avg} display={"$" + avg} min={25} max={200} step={1} onChange={setAvg} />
        <Slider label="Current denial rate" value={denial} display={denial + "%"} min={2} max={35} step={1} onChange={setDenial} />
        <Slider label="Share of denials realistically recoverable" value={recoverable} display={recoverable + "%"} min={20} max={90} step={5} onChange={setRecoverable} />
      </div>
      <div className="flex flex-col justify-center rounded-lg bg-primary p-7 text-primary-foreground">
        <span className="text-xs uppercase tracking-[0.14em] text-accent">Estimated recoverable / year</span>
        <span className="my-2 font-display text-5xl font-semibold leading-none">{money(annualRecoverable)}</span>
        <span className="text-sm text-primary-foreground/70">Annual denied billings: {money(annualDenied)}</span>
        <hr className="my-5 border-primary-foreground/20" />
        <p className="text-xs text-primary-foreground/60">
          Illustrative only. Not a guarantee of results; actual recovery depends on payer mix,
          documentation, and follow-up.
        </p>
      </div>
    </div>
  );
}

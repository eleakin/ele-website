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

export function LeadEstimator() {
  const [zips, setZips] = useState(2);
  const [perZip, setPerZip] = useState(90);
  const [response, setResponse] = useState(1);
  const [patientValue, setPatientValue] = useState(800);

  const monthlyHouseholds = zips * perZip;
  const annualNewPatients = monthlyHouseholds * 12 * (response / 100);
  const annualRevenue = annualNewPatients * patientValue;
  const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

  return (
    <div className="grid gap-8 rounded-xl border border-border bg-surface p-6 shadow-card md:grid-cols-2 md:p-8">
      <div className="space-y-5">
        <Slider label="ZIP codes covered" value={zips} display={String(zips)} min={1} max={5} step={1} onChange={setZips} />
        <Slider label="New homeowners per ZIP per month" value={perZip} display={perZip.toLocaleString()} min={25} max={250} step={5} onChange={setPerZip} />
        <Slider label="Assumed response rate" value={response} display={response + "%"} min={0.5} max={3} step={0.25} onChange={setResponse} />
        <Slider label="Average first-year patient value" value={patientValue} display={"$" + patientValue.toLocaleString()} min={200} max={3000} step={50} onChange={setPatientValue} />
      </div>
      <div className="flex flex-col justify-center rounded-lg bg-primary p-7 text-primary-foreground">
        <span className="text-xs uppercase tracking-[0.14em] text-accent">New households reached / month</span>
        <span className="my-2 font-display text-5xl font-semibold leading-none">{monthlyHouseholds.toLocaleString()}</span>
        <span className="text-sm text-primary-foreground/70">
          At a {response}% response: ~{Math.round(annualNewPatients)} new patients/year, {money(annualRevenue)} in illustrative first-year value
        </span>
        <hr className="my-5 border-primary-foreground/20" />
        <p className="text-xs text-primary-foreground/60">
          Illustrative only — new-homeowner volume varies by ZIP code, and response
          depends on your offer and follow-up. A free sample list shows the real
          numbers for your area.
        </p>
      </div>
    </div>
  );
}

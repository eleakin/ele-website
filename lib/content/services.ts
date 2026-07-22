import {
  ListChecks,
  TrendingUp,
  Send,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  outcomes: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "starter",
    title: "Starter — $147/mo",
    summary:
      "The core list, delivered clean. A monthly file of new homeowners in one or two ZIP codes, ready for your own mailing workflow.",
    outcomes: [
      "Monthly new-homeowner list for 1–2 ZIP codes",
      "Delivered as a clean, deduplicated CSV",
      "Add postcard mailing — we mail them for you for +$75/mo",
      "Cancel any month — no long-term contract",
    ],
    icon: ListChecks,
  },
  {
    slug: "growth",
    title: "Growth — $247/mo",
    summary:
      "Our recommended plan. Wider coverage, files formatted for immediate use, and a monthly summary so you know what the program is returning.",
    outcomes: [
      "Monthly lists for up to 4 ZIP codes",
      "Ready-to-use mail-merge file plus a call list",
      "Monthly ROI summary of the program",
      "Add postcard mailing — we mail them for you for +$100/mo",
    ],
    icon: TrendingUp,
  },
  {
    slug: "full-service",
    title: "Full-Service — $397/mo",
    summary:
      "Everything in Growth, plus done-for-you postcard design and mail coordination — and for +$150/mo we mail the postcards out for you.",
    outcomes: [
      "Everything in the Growth plan",
      "Done-for-you postcard design",
      "Mail-house coordination handled end to end",
      "Add postcard mailing — we mail them for you for +$150/mo",
    ],
    icon: Send,
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Pick your ZIP codes",
    body: "Choose the ZIP codes you want new patients from — usually the ones closest to your practice. We start with a free 25–50 name sample so you can see the volume first.",
  },
  {
    n: "02",
    title: "We pull the list",
    body: "Every month we pull the newest homeowners in your ZIP codes from public-record property data, deduplicate it, and deliver it ready to use — 95% deliverability guaranteed by the source.",
  },
  {
    n: "03",
    title: "Mail your welcome offer",
    body: "You send a welcome offer — a new-patient exam, a cleaning special — that lands before these families have chosen a provider. Or add postcard mailing to any plan and we mail it for you.",
  },
  {
    n: "04",
    title: "Track and refine",
    body: "New patients tell you how they found you; we tally it in a monthly summary. Keep the ZIP codes that produce, swap the ones that don't.",
  },
];

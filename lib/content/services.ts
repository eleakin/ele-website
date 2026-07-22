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
    title: "Starter — $177/mo",
    summary:
      "The core list, delivered clean. A monthly file of new homeowners in one or two ZIP codes, ready for your own mailing workflow.",
    outcomes: [
      "Monthly new-homeowner list for 1–2 ZIP codes",
      "Delivered as a clean spreadsheet — mail-merge ready",
      "Add postcard mailing — we mail them for you for +$75/mo",
      "Cancel any month — no long-term contract",
    ],
    icon: ListChecks,
  },
  {
    slug: "growth",
    title: "Growth — $277/mo",
    summary:
      "Our recommended plan. The same clean, mail-merge-ready delivery, with wider coverage across up to four ZIP codes.",
    outcomes: [
      "Monthly lists for up to 4 ZIP codes",
      "Delivered as a clean spreadsheet — mail-merge ready",
      "Add postcard mailing — we mail them for you for +$100/mo",
      "Cancel any month — no long-term contract",
    ],
    icon: TrendingUp,
  },
  {
    slug: "full-service",
    title: "Full-Service — $397/mo",
    summary:
      "Our widest coverage: everything in the Growth plan plus one more ZIP code, with the option to have us mail the postcards for you.",
    outcomes: [
      "Everything in the Growth plan, plus one ZIP code",
      "Delivered as a clean spreadsheet — mail-merge ready",
      "Add postcard mailing — we mail them for you for +$150/mo",
      "Cancel any month — no long-term contract",
    ],
    icon: Send,
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Pick your ZIP codes",
    body: "Choose the ZIP codes you want new patients from — usually the ones closest to your practice. We start with a free 25 name sample so you can see the volume first.",
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

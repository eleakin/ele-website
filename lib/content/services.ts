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
      "The core list, delivered clean. A monthly file of new homeowners in one ZIP code, ready for your own mailing workflow.",
    outcomes: [
      "Monthly new-homeowner list for 1 ZIP code",
      "Delivered as a clean, deduplicated CSV",
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
      "Monthly lists for up to 3 ZIP codes",
      "Ready-to-use mail-merge file plus a call list",
      "Monthly ROI summary of the program",
    ],
    icon: TrendingUp,
  },
  {
    slug: "full-service",
    title: "Full-Service — $397/mo",
    summary:
      "Everything in Growth, plus we handle the mail itself — postcard design and mailing coordination, done for you.",
    outcomes: [
      "Everything in the Growth plan",
      "Done-for-you postcard design",
      "Mail-house coordination handled end to end",
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
    body: "You (or we, on Full-Service) send a welcome offer — a new-patient exam, a cleaning special — that lands before these families have chosen a provider.",
  },
  {
    n: "04",
    title: "Track and refine",
    body: "New patients tell you how they found you; we tally it in a monthly summary. Keep the ZIP codes that produce, swap the ones that don't.",
  },
];

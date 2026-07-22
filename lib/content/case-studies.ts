export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  title: string;
  summary: string;
  problem: string;
  approach: string[];
  outcomes: { metric: string; label: string }[];
  duration: string;
  services: string[];
};

// No published case studies yet. We do not present invented numbers as real
// outcomes. The founder's own new-homeowner-list experience appears on
// the site clearly framed as founder experience, not a client result. Real,
// client-attributed results will be added here once the first subscriber
// practices have measurable outcomes to share.
export const caseStudies: CaseStudy[] = [];

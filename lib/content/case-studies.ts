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
// outcomes. Real, client-attributed results will be added here once pilot
// engagements are complete. Until then the site leads with our Approach and
// clearly-labeled industry benchmarks.
export const caseStudies: CaseStudy[] = [];

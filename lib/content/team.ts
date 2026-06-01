export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  imageUrl: string; // TODO: replace with /team/<slug>.jpg from /public
};

// Placeholder portraits use a neutral background gradient generator.
// Replace with optimized photos under /public/team/ and update imageUrl.
export const team: TeamMember[] = [
  {
    name: "Eric",
    role: "Founding Partner",
    bio: "Twenty years across people analytics, total rewards, and HR technology at global employers. Believes the best workforce analytics is invisible — it just makes the next people decision easier.",
    credentials: ["MS, Industrial-Organizational Psychology", "Former Head of People Analytics"],
    imageUrl: "/team/eric.jpg",
  },
  {
    name: "Mia",
    role: "Principal, People Analytics",
    bio: "Designs the platforms that quietly run under headcount planning and attrition modeling. Prefers boring infrastructure that survives reorgs.",
    credentials: ["MS, Data Science", "Workday & Greenhouse integration lead"],
    imageUrl: "/team/mia.jpg",
  },
  {
    name: "Clive",
    role: "Principal, Compensation & Pay Equity",
    bio: "Built pay equity and compensation analytics programs for multinational employers. Writes for general counsel and HR business partners in the same week.",
    credentials: ["PhD, Labor Economics"],
    imageUrl: "/team/clive.jpg",
  },
  {
    name: "Jules",
    role: "Director, Delivery",
    bio: "Keeps engagements honest. Tracks scope, calls out drift early, and protects HR staff time.",
    credentials: ["PMP", "Certified ScrumMaster"],
    imageUrl: "/team/jules.jpg",
  },
];

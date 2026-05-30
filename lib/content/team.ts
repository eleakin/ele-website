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
    name: "[Founding Partner]",
    role: "Founding Partner",
    bio: "Twenty years across state Medicaid, public health surveillance, and academic medical centers. Believes the best analytics work is invisible — it just makes the next decision easier.",
    credentials: ["MPH, Health Policy", "Former state analytics director"],
    imageUrl: "/team/placeholder-1.svg",
  },
  {
    name: "[Principal, Engineering]",
    role: "Principal, Data Engineering",
    bio: "Designs the platforms that quietly run under multi-year reporting commitments. Prefers boring infrastructure that survives turnover.",
    credentials: ["MS, Computer Science", "AWS Solutions Architect"],
    imageUrl: "/team/placeholder-2.svg",
  },
  {
    name: "[Principal, Evaluation]",
    role: "Principal, Program Evaluation",
    bio: "Built evaluation programs for federally-funded waivers and demonstration projects. Writes for legislators and clinicians in the same week.",
    credentials: ["PhD, Health Services Research"],
    imageUrl: "/team/placeholder-3.svg",
  },
  {
    name: "[Director, Delivery]",
    role: "Director, Delivery",
    bio: "Keeps engagements honest. Tracks scope, calls out drift early, and protects client staff time.",
    credentials: ["PMP", "Certified ScrumMaster"],
    imageUrl: "/team/placeholder-4.svg",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  imageUrl: string; // TODO: replace with /team/<slug>.jpg from /public
};

export const team: TeamMember[] = [
  {
    name: "Eric L. Eakin, DC",
    role: "Founder & Principal",
    bio: "A chiropractor and data analyst who spent years turning messy operational data into decisions across public-health and analytics roles. Brings clinical fluency and statistical rigor to the chiropractic back office — evidence, leverage, execution.",
    credentials: [
      "Doctor of Chiropractic",
      "Johns Hopkins Data Science Certificate",
      "Six Sigma Green Belt",
    ],
    imageUrl: "/team/eric.jpg",
  },
];

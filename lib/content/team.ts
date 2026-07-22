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
    bio: "A chiropractor and data analyst who has run the new-homeowner play himself: in 2006 a $67/month list brought two patients worth over $6,000 into his own practice. He brings that first-hand practice-growth experience — plus years of turning messy operational data into decisions — to a service built for the providers he knows best. Evidence, leverage, execution.",
    credentials: [
      "Doctor of Chiropractic",
      "Johns Hopkins Data Science Certificate",
      "Six Sigma Green Belt",
    ],
    imageUrl: "/team/eric.jpg",
  },
];

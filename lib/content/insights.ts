export type Insight = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  readingTime: string;
  author: string;
  tags: string[];
  /**
   * Body is structured for now. To migrate to MDX:
   *   1) Add `@next/mdx` + a page.mdx route under app/insights/<slug>/
   *   2) Delete the `body` field here and load frontmatter via fs/MDX import
   *   3) Render the MDX component in app/insights/[slug]/page.tsx
   */
  body: { type: "h2" | "p" | "ul" | "quote"; children: string | string[] }[];
};

export const insights: Insight[] = [
  {
    slug: "why-new-homeowners-are-your-best-prospects",
    title: "Why new homeowners are the best new-patient prospects you're not mailing",
    description:
      "A family that just moved in has no chiropractor and no dentist yet. Here is why that window matters — and why it closes fast.",
    date: "2026-05-20",
    readingTime: "6 min read",
    author: "Dr. Eric L. Eakin, DC",
    tags: ["New Patients", "Direct Mail"],
    body: [
      { type: "p", children: "Most practice marketing tries to convince settled residents to switch providers. That is the hardest sale in local services — inertia is on the incumbent's side. New homeowners are the opposite case: they have no incumbent. A family that just moved across town, or across the country, is actively rebuilding its entire roster of local providers." },
      { type: "h2", children: "Why the window is short" },
      { type: "ul", children: ["New movers make most of their new provider and vendor decisions in their first months in the home — after that, they are the settled residents everyone else is trying to pry loose.", "Industry research on new-mover spending consistently shows this group outspending settled residents in their first months.", "The first credible welcome offer in the mailbox often frames the choice — being second is very different from being first."] },
      { type: "quote", children: "You are not trying to win a patient away from another practice. You are introducing yourself to a family that is actively looking for you." },
      { type: "p", children: "The mechanics are simple: a monthly list of new homeowners in your ZIP codes, a welcome offer in the mail, and a front desk that asks every new patient how they found you. That is the entire play." },
    ],
  },
  {
    slug: "the-67-dollar-list-a-direct-mail-roi-story",
    title: "The $67 list: what one month of new-homeowner data did for my practice",
    description:
      "I paid $67 a month for a new-homeowner list in my own practice. Two patients from it were worth over $6,000. The math still holds up.",
    date: "2026-04-15",
    readingTime: "5 min read",
    author: "Dr. Eric L. Eakin, DC",
    tags: ["Direct Mail", "ROI"],
    body: [
      { type: "p", children: "This is a first-person story from my own practice, not a client result — but it is the reason ELE Practice Leads exists. As a practicing chiropractor, I subscribed to an Equifax-sourced new-homeowner list for $67 a month and mailed a simple welcome offer to the new arrivals in my area." },
      { type: "h2", children: "What came back" },
      { type: "ul", children: ["Two patients I can trace directly to that list became long-term, high-value patients.", "Together they represented more than $6,000 in business — against a data cost of $67 a month.", "Neither would have found the practice otherwise; they were new to the area and chose the first credible offer they received."] },
      { type: "p", children: "One documented experience does not guarantee your results — your ZIP codes, your offer, and your follow-up all matter. But the structure of the math is worth noticing: when the monthly cost is two digits and a single retained patient is worth four, the list does not need to work often to pay for itself many times over." },
      { type: "quote", children: "Direct mail to new homeowners is not a volume game. It is a timing game — and the list is what puts you first in line." },
    ],
  },
  {
    slug: "welcome-offer-postcards-that-get-kept",
    title: "The welcome-offer postcard: what makes a new mover keep it",
    description:
      "The list gets you to the mailbox. The offer decides what happens next. A practical guide to welcome offers that convert.",
    date: "2026-03-18",
    readingTime: "6 min read",
    author: "Dr. Eric L. Eakin, DC",
    tags: ["Direct Mail", "New Patients"],
    body: [
      { type: "p", children: "A new homeowner's mail pile is full of generic coupons. A welcome offer from a local chiropractor or dentist can stand out in that pile — if it reads like a neighbor introducing themselves rather than a chain blasting a discount." },
      { type: "h2", children: "What the keepers have in common" },
      { type: "ul", children: ["A welcome, not a pitch: 'Welcome to the neighborhood' outperforms 'LIMITED TIME OFFER' with people who just unpacked their kitchen.", "One clear, concrete offer — a new-patient exam at a stated price, a cleaning special — not a menu of services.", "A reason to act inside the new-mover window: new-patient scheduling priority, or an offer that expires in 60–90 days.", "A real person: the provider's name and face, the practice's street, how far you are from their new address."] },
      { type: "p", children: "Then close the loop. Train the front desk to ask every new patient how they heard about you, and log it. That one habit is the difference between knowing your mail works and guessing." },
      { type: "quote", children: "The postcard's job is not to sell care. Its job is to be the practice they already recognize when the need shows up." },
    ],
  },
  {
    slug: "homeowner-lists-what-they-are-and-arent",
    title: "What a new-homeowner list is — and what it isn't",
    description:
      "Public-record property data, not patient data. How these lists are built, what the deliverability guarantee means, and how opt-outs work.",
    date: "2026-02-10",
    readingTime: "5 min read",
    author: "Dr. Eric L. Eakin, DC",
    tags: ["Data", "Compliance"],
    body: [
      { type: "p", children: "Providers are rightly careful about data, so it is worth being precise about what a new-homeowner list actually is. Home purchases are recorded in public county records. List vendors compile those records into monthly files: names and mailing addresses of people who recently bought a home in a given ZIP code. That is the entire dataset." },
      { type: "h2", children: "What that means in practice" },
      { type: "ul", children: ["No patient or health information is involved anywhere in the process — this is property-record data, so HIPAA does not apply to the list itself.", "Quality is measurable: the vendor we use guarantees 95% deliverability on its records.", "Postal mail is the lowest-friction channel legally: the consent rules that govern telemarketing (TCPA) and email (CAN-SPAM) do not restrict a postcard, and anyone can opt out of a practice's mailings on request — we honor and track those requests.", "The list is a starting point, not a CRM: once someone responds, they enter your normal patient workflow and the ordinary rules of your practice apply."] },
      { type: "p", children: "Keeping the boundaries clean is part of the service. Practices should never mix their clinical systems into the mailing side, and the mailing side never needs to touch clinical data. Two lanes, clearly separated." },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}

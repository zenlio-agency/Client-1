/**
 * Career openings, shown in the role finder on /careers and offered on the
 * application form at /careers/apply.
 *
 * Sample openings for the design: the US roles in particular are
 * placeholders and must be replaced with real openings before launch.
 * `slug` is the role's stable id in links (`/careers/apply?role=…`);
 * `location` is shown on the role; `country` drives the location filter.
 */
export const ROLES = [
  {
    slug: "senior-java-engineer",
    title: "Senior Java Engineer",
    team: "Digital Product Engineering",
    location: "India",
    country: "India",
    experience: "5–8 yrs",
    mode: "Hybrid",
  },
  {
    slug: "data-engineering-lead",
    title: "Data Engineering Lead",
    team: "Data & Analytics",
    location: "Jersey City, NJ",
    country: "United States",
    experience: "8+ yrs",
    mode: "Hybrid",
  },
  {
    slug: "sap-s4hana-functional-lead",
    title: "SAP S/4HANA Functional Lead",
    team: "SAP & Enterprise Data",
    location: "India",
    country: "India",
    experience: "4–7 yrs",
    mode: "Hybrid",
  },
  {
    slug: "sap-s4hana-solution-architect",
    title: "SAP S/4HANA Solution Architect",
    team: "SAP & Enterprise Data",
    location: "Chicago, IL",
    country: "United States",
    experience: "10+ yrs",
    mode: "Hybrid",
  },
  {
    slug: "genai-engineer",
    title: "GenAI Engineer",
    team: "Applied AI",
    location: "Charlotte, NC",
    country: "United States",
    experience: "5–8 yrs",
    mode: "Hybrid",
  },
  {
    slug: "ai-automation-engineer",
    title: "AI Automation Engineer",
    team: "Agentic AI & Automation",
    location: "India",
    country: "India",
    experience: "3–6 yrs",
    mode: "On-site",
  },
  {
    slug: "intelligent-automation-engineer",
    title: "Intelligent Automation Engineer",
    team: "Agentic AI & Automation",
    location: "Atlanta, GA",
    country: "United States",
    experience: "4–7 yrs",
    mode: "On-site",
  },
  {
    slug: "healthcare-data-architect",
    title: "Healthcare Data Architect",
    team: "Data & Analytics",
    location: "Minneapolis, MN",
    country: "United States",
    experience: "8+ yrs",
    mode: "Hybrid",
  },
  {
    slug: "cloud-platform-engineer",
    title: "Cloud Platform Engineer",
    team: "Digital Product Engineering",
    location: "Remote, United States",
    country: "United States",
    experience: "5–8 yrs",
    mode: "Remote",
  },
  {
    slug: "client-partner",
    title: "Client Partner",
    team: "Client Partnership",
    location: "New York, NY",
    country: "United States",
    experience: "8+ yrs",
    mode: "On-site",
  },
] as const;

export type Role = (typeof ROLES)[number];

/**
 * The form's choice for people who want to be considered for future roles
 * ("Register your interest" on the site; the Talent Network in the
 * Applicant Privacy Notice). The slug stays `talent-network` in links.
 */
export const TALENT_NETWORK = {
  slug: "talent-network",
  title: "Register your interest",
  text: "No specific role yet. We'll keep your profile and our people team will reach out when a relevant role opens.",
} as const;

export const APPLY_PATH = "/careers/apply";

/** The application form, with the role chosen. */
export const applyHref = (slug: string) => `${APPLY_PATH}?role=${slug}`;

/** How joining works, on /careers and beside the application form. */
export const JOIN_STEPS: { title: string; text: string }[] = [
  {
    title: "Discover",
    text: "Explore openings across data, enterprise platforms, AI and digital engineering, or register your interest.",
  },
  {
    title: "Connect",
    text: "An open conversation with our people team about your experience and ambitions.",
  },
  {
    title: "Collaborate",
    text: "A practical session with the team you would join, centered on real business challenges.",
  },
  {
    title: "Contribute",
    text: "Receive your offer, meet your team and start on work that matters, with support from day one.",
  },
];

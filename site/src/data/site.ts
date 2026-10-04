import capData from "@/assets/icons/cap-data.svg";
import capSap from "@/assets/icons/cap-sap.svg";
import capAi from "@/assets/icons/cap-ai.svg";
import capFlow from "@/assets/icons/cap-flow.svg";
import capCode from "@/assets/icons/cap-code.svg";

/**
 * The five capability areas, in the order used everywhere on the site.
 * `slug` names each one's page under `/capabilities/`.
 */
export const CAPABILITIES = [
  {
    id: "cap-data",
    slug: "data-analytics",
    key: "data",
    title: "Data & Analytics",
    line: "Data engineers who turn scattered data into decisions.",
    icon: capData,
  },
  {
    id: "cap-sap",
    slug: "sap-enterprise-data",
    key: "sap",
    title: "SAP & Enterprise Data",
    line: "S/4HANA, BTP and clean-core specialists.",
    icon: capSap,
  },
  {
    id: "cap-ai",
    slug: "applied-ai",
    key: "ai",
    title: "Applied AI",
    line: "GenAI and ML talent that ships to production.",
    icon: capAi,
  },
  {
    id: "cap-flow",
    slug: "agentic-ai-automation",
    key: "ai",
    title: "Agentic AI & Automation",
    line: "Builders of AI agents that get real work done.",
    icon: capFlow,
  },
  {
    id: "cap-code",
    slug: "digital-product-engineering",
    key: "digital",
    title: "Digital Product Engineering",
    line: "Cloud-native product teams, from web to mobile.",
    icon: capCode,
  },
] as const;

/**
 * Client logos for the trust marquee, one scrolling row per entry. `src` is
 * a file in `public/logos/`; a logo without one shows a placeholder. Each
 * logo needs written permission from the company before launch.
 */
export const CLIENT_LOGO_ROWS: {
  label: string;
  logos: { name: string; src?: string }[];
}[] = [
  {
    label: "Banking & Financial Services",
    logos: [
      { name: "American Express", src: "/logos/american-express.svg" },
      { name: "JPMorgan Chase", src: "/logos/jpmorgan-chase.svg" },
      { name: "Bank of America", src: "/logos/bank-of-america.svg" },
      { name: "Citi", src: "/logos/citi.svg" },
      { name: "Goldman Sachs", src: "/logos/goldman-sachs.svg" },
    ],
  },
  {
    label: "Telecommunications, Healthcare and Energy",
    logos: [
      { name: "AT&T", src: "/logos/att.svg" },
      { name: "UnitedHealthcare", src: "/logos/unitedhealthcare.svg" },
      { name: "ExxonMobil", src: "/logos/exxonmobil.svg" },
      { name: "Verizon", src: "/logos/verizon.svg" },
      { name: "CVS Health", src: "/logos/cvs-health.svg" },
      { name: "Chevron", src: "/logos/chevron.svg" },
      { name: "Vodafone", src: "/logos/vodafone.svg" },
      { name: "Johnson & Johnson", src: "/logos/johnson-johnson.svg" },
      { name: "Schneider Electric", src: "/logos/schneider-electric.svg" },
    ],
  },
];

/**
 * The four industries in scope. `id` doubles as the deep-link hash and
 * `slug` names each one's page under `/industries/`.
 */
export const INDUSTRIES = [
  {
    id: "industry-banking",
    slug: "banking-financial-services",
    title: "Banking & Financial Services",
    short: "Banking & FS",
    summary: "Specialists in core banking, payments, risk and compliance.",
    hero: "Modernize core banking without slowing the business.",
    challenge:
      "Decades-old core systems, real-time customer expectations, and every change through audit and risk review.",
    build:
      "Core and digital banking on Java and cloud, SAP finance and data platforms, AI for fraud signals and document processing, and automated KYC and onboarding.",
    outcome: "Faster, compliant releases.",
    metric: "[X]%",
    metricLabel: "faster release cycles",
  },
  {
    id: "industry-telecom",
    slug: "telecommunications",
    title: "Telecommunications",
    short: "Telecom",
    summary: "Engineers for OSS/BSS, billing and network data.",
    hero: "Keep networks and customers connected.",
    challenge:
      "Huge data volumes, complex billing and constant network change, where every outage is public.",
    build:
      "OSS/BSS and billing platforms, churn and capacity analytics, AI-driven service assurance, and round-the-clock application operations.",
    outcome: "Fewer manual tickets and faster recovery.",
    metric: "[X]%",
    metricLabel: "faster incident resolution",
  },
  {
    id: "industry-healthcare",
    slug: "healthcare",
    title: "Healthcare",
    short: "Healthcare",
    summary: "Teams fluent in health data, claims and HIPAA.",
    hero: "Technology that serves patients and protects their data.",
    challenge:
      "Fragmented records, rising admin cost and strict privacy rules such as HIPAA.",
    build:
      "Healthcare data platforms and interoperability, AI for claims and document handling, revenue-cycle automation, and operations analytics.",
    outcome: "Faster claims, privacy built in from day one.",
    metric: "[X]%",
    metricLabel: "reduction in claims turnaround",
  },
  {
    id: "industry-energy",
    slug: "energy",
    title: "Energy",
    short: "Energy",
    summary: "Experts in SAP asset management and field operations.",
    hero: "Digital operations for a sector in transition.",
    challenge:
      "Ageing assets, safety rules and the shift to renewables, with data split across field and enterprise systems.",
    build:
      "SAP for asset management and maintenance, predictive maintenance and demand forecasting, and automated field reporting.",
    outcome: "Assets that stay online longer.",
    metric: "[X]%",
    metricLabel: "less unplanned downtime",
  },
] as const;

/** The two hubs. Coordinates place the pins on the dot map. */
export const HUBS = [
  {
    id: "dallas",
    city: "Dallas, Texas",
    short: "Dallas",
    role: "Client & Leadership Hub",
    text: "Where partnerships start. Our Dallas team works in your time zone to shape the right team for each goal and keep it on track across North America.",
    /* Line breaks render where the address is shown (white-space: pre-line). */
    address: "8668 John Hickman Pkwy #903\nFrisco, Texas 75034",
    phone: "[Phone]",
    email: "[Email]",
    timeZone: "America/Chicago",
    locale: "en-US",
    lat: 33.15,
    lon: -96.82,
    link: { label: "Talk to our Dallas team", href: "/contact" },
  },
  {
    id: "hyderabad",
    city: "Hyderabad, India",
    short: "Hyderabad",
    role: "Engineering & Talent Hub",
    text: "Home to our engineering talent. Hyderabad teams build, run and improve platforms for enterprises worldwide, working as part of each enterprise's own technology organization.",
    address:
      "6E(608), 6th Floor, Business Square\nH.No. 1-98/3/5/23, 24, 25, 26 and 27\nJubilee Enclave, Sy No. 66 & 67\nMadhapur, Hyderabad - 500 081",
    phone: "[Phone]",
    email: "[Email]",
    timeZone: "Asia/Kolkata",
    locale: "en-IN",
    lat: 17.45,
    lon: 78.39,
    link: { label: "View opportunities in Hyderabad", href: "/careers" },
  },
] as const;

/**
 * Other companies shown at the foot of the homepage. Each needs written
 * confirmation before launch. `logo` is a path under `public/` and `href`
 * the company's site; both are optional. Until real entries arrive each
 * slot shows placeholders.
 */
export const ECOSYSTEM: {
  name: string;
  line: string;
  relationship: string;
  logo?: string;
  href?: string;
}[] = Array.from({ length: 4 }, (_, index) => ({
  name: `[Company ${String(index + 1).padStart(2, "0")}]`,
  line: "[One line on what it does and for whom]",
  relationship: "[Relationship]",
}));

/** Main navigation. Items with `menu` open a panel. */
export const NAV = [
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities", menu: "capabilities" },
  { label: "Industries", href: "/industries", menu: "industries" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

/**
 * How a team comes together, from skills brief to Build-Operate-Transfer.
 * Shown on the About page and every capability page.
 */
export const TEAM_STEPS = [
  {
    title: "Shape the brief",
    text: "Share a skills brief: the platforms, roles and outcomes you need. We turn it into a team plan with a start date.",
    note: "Skills brief to team plan",
  },
  {
    title: "Build the team",
    text: "We bring together specialists matched to your stack and assess them on problems from your domain. You meet everyone before they start.",
    note: "Teams live in weeks",
  },
  {
    title: "Operate together",
    text: "The team works inside your tools and controls, ships from its first sprint and reports against the measures you set.",
    note: "Productive from week one",
  },
  {
    title: "Scale or transfer",
    text: "Grow the team as results come in. When you're ready, the capability moves into your own center, people and knowledge included.",
    note: "The capability stays yours",
  },
];

/** Page path for a capability or an industry. */
export const capabilityHref = (cap: { slug: string }) =>
  `/capabilities/${cap.slug}`;
export const industryHref = (industry: { slug: string }) =>
  `/industries/${industry.slug}`;

export const CTA = {
  primary: { label: "Start a Conversation", href: "/contact" },
  secondary: { label: "Explore Opportunities", href: "/careers" },
} as const;

export const SOCIAL = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "X", href: "#", icon: "x" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "YouTube", href: "#", icon: "youtube" },
] as const;

/** Wraps `[placeholder]` runs in a marked span so they read as unconfirmed. */
export const tbc = (text: string) =>
  text.replace(
    /\[([^\]]+)\]/g,
    '<span class="tbc" title="Placeholder: confirm before launch">[$1]</span>',
  );

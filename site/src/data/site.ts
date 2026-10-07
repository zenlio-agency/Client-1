import capData from "@/assets/icons/cap-data.svg";
import capSap from "@/assets/icons/cap-sap.svg";
import capAi from "@/assets/icons/cap-ai.svg";
import capFlow from "@/assets/icons/cap-flow.svg";
import capCode from "@/assets/icons/cap-code.svg";

/**
 * The five capability areas, in the order used everywhere on the site.
 * `slug` names each one's page under `/capabilities/`. `line` is the
 * one-liner shown wherever a capability is listed; `focus` is shown only on
 * the Capabilities page.
 */
export const CAPABILITIES = [
  {
    id: "cap-data",
    slug: "data-analytics",
    key: "data",
    title: "Data & Analytics",
    line: "Modern data platforms that turn scattered data into trusted, decision-ready intelligence.",
    focus: [
      "Data strategy & AI-readiness assessment",
      "Cloud data platform & lakehouse modernization",
      "Data engineering & pipeline (ETL/ELT) modernization",
      "Data governance, quality & observability",
      "BI, analytics & self-service insights",
    ],
    icon: capData,
  },
  {
    id: "cap-sap",
    slug: "sap-enterprise-data",
    key: "sap",
    title: "SAP & Enterprise Data",
    line: "S/4HANA transformation, BTP innovation and clean-core architecture that keep the enterprise core agile.",
    focus: [
      "S/4HANA migration & upgrade",
      "Clean-core strategy & BTP extensions",
      "SAP data, analytics & integration",
      "Master data management & data migration",
      "Application management & continuous optimization",
    ],
    icon: capSap,
  },
  {
    id: "cap-ai",
    slug: "applied-ai",
    key: "ai",
    title: "Applied AI",
    line: "Generative AI and machine learning, engineered for production and governed for the enterprise.",
    focus: [
      "AI use-case discovery & value roadmaps",
      "GenAI applications, copilots & knowledge assistants",
      "Machine learning & predictive analytics",
      "MLOps & LLMOps",
      "Responsible AI, governance & model risk",
    ],
    icon: capAi,
  },
  {
    id: "cap-flow",
    slug: "agentic-ai-automation",
    key: "ai",
    title: "Agentic AI & Automation",
    line: "Intelligent agents and automated workflows that execute real work across your operations.",
    focus: [
      "Agentic workflow design & orchestration",
      "Intelligent process automation",
      "Process intelligence & discovery",
      "Operational decision automation",
      "Agent monitoring, governance & lifecycle management",
    ],
    icon: capFlow,
  },
  {
    id: "cap-code",
    slug: "digital-product-engineering",
    key: "digital",
    title: "Digital Product Engineering",
    line: "Cloud-native products and platforms, engineered from concept to scale across web and mobile.",
    focus: [
      "Product strategy, UX & design",
      "Cloud-native application development",
      "Legacy application modernization",
      "APIs, microservices & integration",
      "DevSecOps, quality engineering & SRE",
    ],
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
      { name: "T-Mobile", src: "/logos/t-mobile.svg" },
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
    summary: "Modern banking platforms for payments, risk and compliance.",
    hero: "Modernize core banking without slowing the business.",
    challenge:
      "Decades-old core systems, real-time customer expectations, and every change through audit and risk review.",
    build:
      "Modern core and digital banking, trusted finance and risk data, AI-driven fraud detection and automated customer onboarding.",
    outcome: "Faster, compliant releases.",
    metric: "[X]%",
    metricLabel: "faster release cycles",
  },
  {
    id: "industry-telecom",
    slug: "telecommunications",
    title: "Telecommunications",
    short: "Telecom",
    summary:
      "Faster launches, accurate billing and proactive service assurance.",
    hero: "Keep networks and customers connected.",
    challenge:
      "Huge data volumes, complex billing and constant network change, where every outage is public.",
    build:
      "Modern order and billing systems, customer and network analytics, AI-driven service assurance and round-the-clock operations.",
    outcome: "Fewer manual tickets and faster recovery.",
    metric: "[X]%",
    metricLabel: "faster incident resolution",
  },
  {
    id: "industry-healthcare",
    slug: "healthcare",
    title: "Healthcare",
    short: "Healthcare",
    summary: "Connected health data, streamlined claims and privacy by design.",
    hero: "Technology that serves patients and protects their data.",
    challenge:
      "Fragmented records, rising admin cost and strict privacy rules such as HIPAA.",
    build:
      "Connected health data platforms, AI for claims and documents, revenue-cycle automation and real-time operations insight.",
    outcome: "Faster claims, privacy built in from day one.",
    metric: "[X]%",
    metricLabel: "reduction in claims turnaround",
  },
  {
    id: "industry-energy",
    slug: "energy",
    title: "Energy",
    short: "Energy",
    summary:
      "Reliable assets, connected field operations and smarter forecasting.",
    hero: "Digital operations for a sector in transition.",
    challenge:
      "Ageing assets, safety rules and the shift to renewables, with data split across field and enterprise systems.",
    build:
      "Asset management on SAP, predictive maintenance, demand forecasting and automated field reporting.",
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
    /* The name used everywhere outside the footer. The city and the
       address appear only in the footer (and in the legal notices, which
       must give the registered address). */
    country: "United States",
    entity: "ManyaIT Inc.",
    role: "Client & Leadership Hub",
    text: "Where partnerships start. Our US team works in your time zone to shape the right team for each goal and keep it on track across North America.",
    /* Line breaks render where the address is shown (white-space: pre-line). */
    address: "8668 John Hickman Pkwy #903\nFrisco, Texas 75034",
    phone: "+1 682-500-9839",
    email: "info@manyait.com",
    timeZone: "America/Chicago",
    locale: "en-US",
    lat: 33.15,
    lon: -96.82,
    link: { label: "Talk to our US team", href: "/contact" },
  },
  {
    id: "hyderabad",
    city: "Hyderabad, India",
    short: "Hyderabad",
    country: "India",
    entity: "ManyaIT Solutions Pvt Ltd",
    role: "Engineering & Talent Hub",
    text: "Home to our engineering talent. Our India teams build, run and improve platforms for enterprises worldwide, working as part of each enterprise's own technology organization.",
    address:
      "Bizness Square, Whitefields\nHITECH City, Hyderabad\nTelangana 500081",
    phone: "+91 73869 36669",
    email: "info@manyait.com",
    timeZone: "Asia/Kolkata",
    locale: "en-IN",
    lat: 17.45,
    lon: 78.39,
    link: { label: "View opportunities in India", href: "/careers" },
  },
] as const;

/**
 * Other companies shown at the foot of the homepage. Each needs written
 * confirmation before launch. `focus` is the label over the card, `logo` a
 * path under `public/` (the name shows instead when it's missing) and
 * `href` the company's site.
 */
export const ECOSYSTEM: {
  name: string;
  focus: string;
  line: string;
  logo?: string;
  href?: string;
}[] = [
  {
    name: "Siri Data Analytics",
    focus: "Data & analytics",
    line: "Advanced analytics, cloud and AI for banking, retail, energy, insurance and utilities.",
    logo: "/logos/siri-data-analytics.webp",
    href: "https://siridataanalytics.com/",
  },
];

/** Main navigation. Items with `menu` open a panel. */
export const NAV = [
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities", menu: "capabilities" },
  { label: "Industries", href: "/industries", menu: "industries" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/insights" },
] as const;

/**
 * The delivery lifecycle, from discovery to running and improving the
 * platform. Shown on the About, Capabilities and capability pages.
 */
export const TEAM_STEPS = [
  {
    title: "Discover & define",
    text: "We align on business goals, assess your current landscape across systems, data, architecture and skills, and shape a clear roadmap with measurable success criteria.",
    note: "Roadmap and success metrics",
  },
  {
    title: "Design & assemble",
    text: "We architect the solution and bring together the right specialists, matched to your technology stack and your domain. You meet the team before work begins.",
    note: "Right architecture, right people",
  },
  {
    title: "Build & deliver",
    text: "Agile, DevSecOps-driven delivery inside your tools and controls, with continuous integration, automated testing and transparent progress against agreed outcomes.",
    note: "Value from the first sprint",
  },
  {
    title: "Operate & evolve",
    text: "We run, monitor and optimize what we build. Then we scale the team, expand the scope or transition full ownership to you, on your timeline.",
    note: "Built to last, yours to keep",
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

/** Social profiles. `#` marks a profile whose address is still to come. */
export const SOCIAL = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/manyait_inc/",
    icon: "instagram",
  },
  { label: "X", href: "#", icon: "x" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "YouTube", href: "#", icon: "youtube" },
] as const;

/** The company's own email addresses and phone, as published on manyait.com. */
export const COMPANY_CONTACT = {
  email: "info@manyait.com",
  careersEmail: "hr@manyait.com",
  phone: "+1 682-500-9839",
} as const;

/**
 * Company figures. The "Why ManyaIT" panel on the homepage shows the first
 * six, three to a row; the figures and wording were supplied by ManyaIT on
 * 7 October 2026. kickoff and specialists feed the "at a glance"
 * strip (`GLANCE_FIGURES`).
 */
export const COMPANY_FIGURES = {
  programs: {
    value: "100+",
    label: "Data and AI programs deployed to production",
  },
  products: {
    value: "25+",
    label: "Digital products engineered from concept to launch",
  },
  onSchedule: {
    value: "100%",
    label: "Enterprise solutions delivered on schedule",
  },
  testCoverage: {
    value: "90%+",
    label: "Automated test coverage on production code",
  },
  enterprises: { value: "50+", label: "Global enterprise clients served" },
  years: { value: "10+", label: "Years powering enterprise innovation" },
  kickoff: { value: "4–6 wks", label: "From kickoff to a delivery-ready team" },
  specialists: { value: "250+", label: "Specialists in our talent network" },
} as const;

/**
 * The "at a glance" strip on the About and Capabilities pages: the same
 * figures as above, with labels written for that strip.
 */
export const GLANCE_FIGURES = [
  {
    value: COMPANY_FIGURES.years.value,
    label: "Years of enterprise technology delivery",
  },
  {
    value: COMPANY_FIGURES.enterprises.value,
    label: "Enterprise clients served",
  },
  {
    value: COMPANY_FIGURES.specialists.value,
    label: "Engineers and specialists in our network",
  },
  {
    value: COMPANY_FIGURES.kickoff.value,
    label: "Average time from kickoff to a productive team",
  },
];

/** Wraps `[placeholder]` runs in a marked span so they read as unconfirmed. */
export const tbc = (text: string) =>
  text.replace(
    /\[([^\]]+)\]/g,
    '<span class="tbc" title="Placeholder: confirm before launch">[$1]</span>',
  );

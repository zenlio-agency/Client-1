import capData from "@/assets/icons/cap-data.svg";
import capSap from "@/assets/icons/cap-sap.svg";
import capAi from "@/assets/icons/cap-ai.svg";
import capFlow from "@/assets/icons/cap-flow.svg";
import capCode from "@/assets/icons/cap-code.svg";

/** The five capability areas, in the order used everywhere on the site. */
export const CAPABILITIES = [
  {
    id: "cap-data",
    key: "data",
    title: "Data & Analytics",
    line: "Data engineers who turn scattered data into decisions.",
    icon: capData,
  },
  {
    id: "cap-sap",
    key: "sap",
    title: "SAP & Enterprise Data",
    line: "S/4HANA, BTP and clean-core specialists.",
    icon: capSap,
  },
  {
    id: "cap-ai",
    key: "ai",
    title: "Applied AI",
    line: "GenAI and ML talent that ships to production.",
    icon: capAi,
  },
  {
    id: "cap-flow",
    key: "ai",
    title: "Agentic AI & Automation",
    line: "Builders of AI agents that get real work done.",
    icon: capFlow,
  },
  {
    id: "cap-code",
    key: "digital",
    title: "Digital Product Engineering",
    line: "Cloud-native product teams, from web to mobile.",
    icon: capCode,
  },
] as const;

/**
 * Client logos for the trust marquee. Add `src`, a file in `public/logos/`,
 * once each logo is cleared for use; until then the tile shows a placeholder.
 */
export const CLIENT_LOGOS: { name: string; src?: string }[] = [
  { name: "Client logo 01" },
  { name: "Client logo 02" },
  { name: "Client logo 03" },
  { name: "Client logo 04" },
  { name: "Client logo 05" },
  { name: "Client logo 06" },
  { name: "Client logo 07" },
  { name: "Client logo 08" },
  { name: "Client logo 09" },
  { name: "Client logo 10" },
  { name: "Client logo 11" },
  { name: "Client logo 12" },
];

/** The four industries in scope. `id` doubles as the deep-link hash. */
export const INDUSTRIES = [
  {
    id: "industry-banking",
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
    address: "[Street address, Dallas, TX]",
    phone: "[Phone]",
    email: "[Email]",
    timeZone: "America/Chicago",
    locale: "en-US",
    lat: 32.78,
    lon: -96.8,
    link: { label: "Explore Dallas", href: "/contact#dallas" },
  },
  {
    id: "hyderabad",
    city: "Hyderabad, India",
    short: "Hyderabad",
    role: "Engineering & Talent Hub",
    text: "Home to our engineering talent. Hyderabad teams build, run and improve platforms for enterprises worldwide, working as part of each enterprise's own technology organization.",
    address: "[Street address, Hyderabad, Telangana]",
    phone: "[Phone]",
    email: "[Email]",
    timeZone: "Asia/Kolkata",
    locale: "en-IN",
    lat: 17.39,
    lon: 78.49,
    link: { label: "View opportunities in Hyderabad", href: "/careers" },
  },
] as const;

/** Main navigation. Items with `menu` open a panel. */
export const NAV = [
  { label: "About", href: "/#why" },
  { label: "Capabilities", href: "/#capabilities", menu: "capabilities" },
  { label: "Industries", href: "/#industries", menu: "industries" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/#insights" },
  { label: "Contact", href: "/contact" },
] as const;

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

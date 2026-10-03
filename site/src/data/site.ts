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
    line: "Turn every data point into a decision.",
    description:
      "Modern data platforms that bring your data into one trusted place. Leaders get live dashboards, teams get self-serve insight, and AI gets clean, governed data.",
    tags: [
      "Lakehouse & real-time pipelines",
      "Self-serve BI",
      "AI-ready data products",
    ],
    icon: capData,
    headline: "From scattered data to real-time decisions",
    deliver: [
      "Modern data platforms on the cloud: lakehouse, warehouse and real-time pipelines",
      "Data engineering: ingestion, transformation and orchestration at scale",
      "BI and self-serve analytics: executive dashboards, KPI scorecards and embedded reports",
      "Predictive analytics: forecasting, demand planning and risk models",
      "Data governance and quality: catalogs, lineage, access control and compliance",
      "AI-ready data: feature stores and data products that feed your AI initiatives",
    ],
    outcomes: [
      "One version of the truth across functions",
      "Faster reporting cycles, from weeks to near real time",
      "Decisions backed by evidence, not instinct",
    ],
  },
  {
    id: "cap-sap",
    key: "sap",
    title: "SAP & Enterprise Data",
    line: "Modernize your core. Unlock what's inside it.",
    description:
      "Move to SAP S/4HANA, keep the core clean and connect SAP data to planning, finance and operations, so your ERP becomes a live source of insight.",
    tags: [
      "SAP S/4HANA & RISE with SAP",
      "SAP BTP clean-core extensions",
      "Datasphere & SAP Analytics Cloud",
    ],
    icon: capSap,
    headline: "A modern SAP core, connected to everything",
    deliver: [
      "SAP S/4HANA transformation: greenfield, brownfield and selective data migration",
      "RISE with SAP and SAP cloud migration",
      "SAP Business Technology Platform (BTP): clean-core extensions, apps and workflows",
      "SAP data and analytics: Datasphere, BW/4HANA and SAP Analytics Cloud",
      "Master data management and data quality across SAP and non-SAP systems",
      "Integration with CRM, e-commerce and cloud platforms through APIs and SAP Integration Suite",
      "Ongoing SAP run, upgrades and continuous improvement",
    ],
    outcomes: [
      "A lean, upgrade-ready SAP core",
      "Real-time visibility into finance, supply chain and operations",
      "SAP data ready for analytics and AI",
    ],
  },
  {
    id: "cap-ai",
    key: "ai",
    title: "Applied AI",
    line: "From AI pilots to AI in production.",
    description:
      "Generative AI and machine learning built on your own data, run securely at enterprise scale and measured against a business outcome.",
    tags: [
      "Copilots & knowledge assistants",
      "Document intelligence",
      "MLOps & LLMOps",
    ],
    icon: capAi,
    headline: "AI that works inside your business, not beside it",
    deliver: [
      "AI use-case discovery and value roadmaps",
      "Generative AI applications: copilots, knowledge assistants and enterprise search on your own data",
      "Document intelligence: reading, classifying and extracting data from invoices, contracts and forms",
      "Machine learning models for forecasting, personalization, fraud and quality",
      "MLOps and LLMOps: deployment, monitoring and continuous improvement",
      "Responsible AI: governance, security, privacy and cost control",
    ],
    outcomes: [
      "AI that moves past the pilot stage and reaches real users",
      "Faster answers for teams, grounded in company knowledge",
      "Clear return on every AI investment",
    ],
  },
  {
    id: "cap-flow",
    key: "ai",
    title: "Autonomous AI Workflows",
    line: "AI that doesn't just answer. It gets work done.",
    description:
      "AI assistants that complete multi-step work across ERP, CRM and ticketing systems, and hand off to a person when judgment is needed.",
    tags: [
      "Human-in-the-loop approvals",
      "Guardrails & audit trails",
      "RPA to AI workflows",
    ],
    icon: capFlow,
    headline: "AI assistants that plan, act and follow through",
    deliver: [
      "AI assistants for finance, HR, IT and customer operations",
      "End-to-end process automation that connects ERP, CRM and ticketing systems",
      "Teams of specialised AI assistants that hand work to one another",
      "Human-in-the-loop approvals for sensitive actions",
      "Guardrails, audit trails and performance monitoring for every action taken",
      "Upgrades from traditional RPA bots to AI-driven workflows",
    ],
    outcomes: [
      "Faster turnaround on everyday requests, day and night",
      "Less manual effort on repetitive, rules-based work",
      "Full visibility into what each assistant did and why",
    ],
  },
  {
    id: "cap-code",
    key: "digital",
    title: "Digital Product Engineering",
    line: "Build modern software, faster.",
    description:
      "Cloud-native applications and platforms, from first release to millions of users, with AI-assisted engineering and DevSecOps built in.",
    tags: [
      "Web & mobile",
      "Legacy modernization",
      "Platform engineering & CI/CD",
    ],
    icon: capCode,
    headline:
      "Software built to scale, from first release to millions of users",
    deliver: [
      "Custom web and mobile applications",
      "Cloud-native platforms and microservices on AWS, Azure and Google Cloud",
      "Legacy modernization: re-platforming and re-architecting older systems",
      "APIs and system integration",
      "DevSecOps, CI/CD and platform engineering",
      "Quality engineering and test automation",
      "AI-assisted development for faster, more consistent delivery",
    ],
    outcomes: [
      "Faster releases with fewer defects",
      "Applications that scale with demand",
      "Lower cost of running and changing your software",
    ],
  },
] as const;

/** The four industries in scope. `id` doubles as the deep-link hash. */
export const INDUSTRIES = [
  {
    id: "industry-banking",
    title: "Banking & Financial Services",
    short: "Banking & FS",
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
    text: "Where client partnerships start. Our Dallas team leads solution design, account leadership and engagement governance for enterprises across North America.",
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
    role: "Engineering & Delivery Hub",
    text: "Where the work is built and run. Our Hyderabad teams engineer, test, operate and continuously improve platforms for enterprises worldwide, as a true extension of each enterprise's own technology organization.",
    address: "[Street address, Hyderabad, Telangana]",
    phone: "[Phone]",
    email: "[Email]",
    timeZone: "Asia/Kolkata",
    locale: "en-IN",
    lat: 17.39,
    lon: 78.49,
    link: { label: "View opportunities in Hyderabad", href: "/#careers" },
  },
] as const;

/** Main navigation. Items with `menu` open a panel. */
export const NAV = [
  { label: "About", href: "/#why" },
  { label: "Capabilities", href: "/#capabilities", menu: "capabilities" },
  { label: "Industries", href: "/#industries", menu: "industries" },
  { label: "Careers", href: "/#careers" },
  { label: "Insights", href: "/#insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const CTA = {
  primary: { label: "Start a Conversation", href: "/contact" },
  secondary: { label: "Explore Opportunities", href: "/#careers" },
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

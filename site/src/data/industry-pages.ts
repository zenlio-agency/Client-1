/**
 * Copy for each industry page under `/industries/`, keyed by industry id
 * from `INDUSTRIES`. Anything in `[brackets]` is a placeholder that shows
 * as unconfirmed until ManyaIT signs it off.
 */
export type IndustryPage = {
  /** Meta description. */
  description: string;
  lede: string;
  /** Three short highlights under the lede. */
  points: string[];
  problems: {
    heading: string;
    rows: { challenge: string; answer: string }[];
  };
  offerings: {
    heading: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  /** One line per capability, keyed by capability id. */
  capabilities: Record<string, string>;
  stack: {
    intro: string;
    groups: { title: string; items: string[] }[];
  };
  /** Outcome figures to confirm. Not shown on the page until confirmed. */
  outcomes: { value: string; label: string }[];
  faq: { question: string; answer: string }[];
};

export const INDUSTRY_PAGES: Record<string, IndustryPage> = {
  "industry-banking": {
    description:
      "Core banking modernization, real-time payments, fraud and AML, and trusted regulatory data, engineered for banks and financial institutions.",
    lede: "We help banks and financial institutions modernize the platforms customers and regulators depend on, so they launch products faster, manage risk with confidence and keep the business running while it changes.",
    points: [
      "Modernization without disruption",
      "Real-time, resilient payments",
      "Trusted risk and regulatory data",
    ],
    problems: {
      heading: "What banks are up against",
      rows: [
        {
          challenge: "Our core is decades old, and every change feels risky.",
          answer:
            "Progressive modernization around the core: new products launch on modern platforms while systems of record stay stable, so risk falls with every release.",
        },
        {
          challenge: "Customers expect everything in real time.",
          answer:
            "Real-time payment and account services with end-to-end observability, so customers get instant experiences and operations see issues first.",
        },
        {
          challenge: "Fraud gets more sophisticated every month.",
          answer:
            "AI-driven fraud detection that scores activity as it happens and explains every alert, so investigators act faster and genuine customers aren't blocked.",
        },
        {
          challenge: "Regulatory reporting consumes our best people.",
          answer:
            "Automated, traceable reporting from source to submission, so figures withstand scrutiny and experts spend their time on analysis, not reconciliation.",
        },
      ],
    },
    offerings: {
      heading: "How we help banks and financial institutions",
      intro:
        "Platforms that move money, manage risk and serve customers, delivered end to end inside your controls.",
      items: [
        {
          title: "Core banking modernization",
          text: "A phased move from legacy cores to cloud-ready, API-enabled platforms, without disrupting day-to-day operations.",
        },
        {
          title: "Digital banking & onboarding",
          text: "Mobile, web and open-banking journeys that make onboarding and everyday banking effortless.",
        },
        {
          title: "Payments modernization",
          text: "Real-time, resilient payment platforms aligned to ISO 20022, with every transaction reconciled.",
        },
        {
          title: "Fraud, AML & financial crime",
          text: "Real-time fraud scoring, automated KYC and AML checks, and a complete audit trail behind every decision.",
        },
        {
          title: "Risk, finance & regulatory data",
          text: "Governed data for risk, liquidity, finance and regulatory reporting, traceable from source to submission.",
        },
        {
          title: "Operations automation & resilience",
          text: "Intelligent workflows for disputes, exceptions and servicing, engineered for operational resilience.",
        },
      ],
    },
    capabilities: {
      "cap-data":
        "One trusted view of risk, finance and customer data for faster decisions.",
      "cap-sap":
        "Finance, group reporting and controlling on SAP, with clean data flowing downstream.",
      "cap-ai":
        "Fraud detection, document processing and assistants that help service teams respond faster.",
      "cap-flow":
        "Onboarding, disputes and payment exceptions handled end to end, with the right approvals.",
      "cap-code":
        "Digital banking apps, payment services and open APIs built for scale.",
    },
    stack: {
      intro:
        "Experience with the platforms and regulations that shape banking, so programs move quickly and stay compliant.",
      groups: [
        {
          title: "Platforms",
          items: [
            "Temenos",
            "Infosys Finacle",
            "FIS",
            "Fiserv",
            "Mambu",
            "Thought Machine",
            "SWIFT",
          ],
        },
        {
          title: "Standards and rules",
          items: [
            "ISO 20022",
            "PCI DSS",
            "SOX",
            "Basel III",
            "GDPR",
            "DORA",
            "RBI guidelines",
          ],
        },
      ],
    },
    outcomes: [
      { value: "[X]%", label: "faster release cycles" },
      { value: "[X]%", label: "fewer manual reconciliations" },
      { value: "[X]%", label: "faster customer onboarding" },
      { value: "[X]%", label: "fewer false-positive fraud alerts" },
    ],
    faq: [
      {
        question: "Can you work within our risk and audit controls?",
        answer:
          "Yes. We deliver inside your environments and change-management processes, follow segregation-of-duties rules and maintain the evidence auditors expect as part of the work.",
      },
      {
        question: "Do you replace our core banking system?",
        answer:
          "Rarely in one step. Most banks see better results by modernizing around the core first, moving products and journeys to new platforms until what remains can be replaced safely.",
      },
      {
        question: "How do you protect customer data?",
        answer:
          "Customer data stays in your environment. Access follows least-privilege principles, sensitive data is masked outside production and every access is logged.",
      },
      {
        question: "Can you support us around the clock?",
        answer:
          "Yes. Support and operations follow the sun, with structured handovers every day and on-call coverage for priority incidents.",
      },
      {
        question: "Can you help us meet operational-resilience expectations?",
        answer:
          "Yes. We map critical business services, their dependencies and impact tolerances, then engineer the monitoring, failover and incident playbooks that keep them within those tolerances.",
      },
    ],
  },

  "industry-telecom": {
    description:
      "BSS and OSS modernization, revenue assurance, network analytics and AI-driven service assurance for operators and service providers.",
    lede: "We help operators and service providers modernize the systems that sell, deliver, charge and assure every service, so new offers reach market faster, revenue is protected and customers stay connected.",
    points: [
      "Faster time to market",
      "Assured revenue",
      "Proactive service assurance",
    ],
    problems: {
      heading: "What operators are up against",
      rows: [
        {
          challenge: "Billing errors cost us revenue and customers.",
          answer:
            "Automated revenue-assurance controls that reconcile usage, rating and invoices every day, stopping leakage before bills go out.",
        },
        {
          challenge: "Launching a new plan takes months.",
          answer:
            "Catalog-driven, modular BSS that lets product teams launch and change offers in weeks, without custom development.",
        },
        {
          challenge: "We hear about outages from customer complaints.",
          answer:
            "AI-driven service assurance that predicts degradation and triggers remediation before customers notice.",
        },
        {
          challenge: "Our network data is huge and mostly unused.",
          answer:
            "Network data platforms that turn telemetry and customer data into insight for capacity planning, retention and experience.",
        },
      ],
    },
    offerings: {
      heading: "How we help operators and service providers",
      intro:
        "The systems that sell, deliver, charge and assure every connection, modernized one domain at a time.",
      items: [
        {
          title: "BSS and OSS modernization",
          text: "Catalog, order and customer management modernized in stages on TM Forum Open APIs.",
        },
        {
          title: "Charging, billing & revenue assurance",
          text: "Accurate convergent charging and billing, with automated reconciliation that protects every dollar of revenue.",
        },
        {
          title: "Network data & analytics",
          text: "Scalable platforms that turn network telemetry into planning, performance and customer insight.",
        },
        {
          title: "Service assurance & AIOps",
          text: "Proactive monitoring, event correlation and automated incident handling that restore service faster.",
        },
        {
          title: "Customer & partner experience",
          text: "Self-service apps and partner portals that lift satisfaction and reduce contact-center demand.",
        },
        {
          title: "Application operations",
          text: "Round-the-clock monitoring, incident response and release management under agreed service levels.",
        },
      ],
    },
    capabilities: {
      "cap-data":
        "Network, usage and customer data combined for retention and capacity planning.",
      "cap-sap":
        "Order-to-cash, billing reconciliation and asset accounting on SAP S/4HANA.",
      "cap-ai":
        "Churn prediction, anomaly detection and assistants for complex customer cases.",
      "cap-flow":
        "Order fallout and provisioning issues resolved automatically, end to end.",
      "cap-code":
        "Self-service apps and partner portals that reduce calls to the contact center.",
    },
    stack: {
      intro:
        "Experience across the platforms and standards that run modern networks, so programs integrate cleanly and scale with your business.",
      groups: [
        {
          title: "Platforms",
          items: [
            "Amdocs",
            "Ericsson",
            "Nokia",
            "Netcracker",
            "Salesforce Communications Cloud",
            "ServiceNow",
          ],
        },
        {
          title: "Standards and rules",
          items: [
            "TM Forum Open APIs",
            "eTOM",
            "SID",
            "3GPP",
            "5G SA and NSA",
            "CPNI",
            "GDPR",
          ],
        },
      ],
    },
    outcomes: [
      { value: "[X]%", label: "faster incident resolution" },
      { value: "[X]%", label: "less revenue leakage" },
      { value: "[X] wks", label: "to launch a new plan" },
      { value: "[X]%", label: "fewer manual tickets" },
    ],
    faq: [
      {
        question: "Do you follow telecom industry standards?",
        answer:
          "Yes. Our work follows TM Forum Open APIs and information models wherever your systems support them, which keeps integrations cleaner and future change less costly.",
      },
      {
        question: "Can you run operations around the clock?",
        answer:
          "Yes. Our teams cover the full day across time zones, with agreed handovers, runbooks and on-call coverage for priority incidents.",
      },
      {
        question: "Can you work alongside our network equipment partners?",
        answer:
          "Yes. We work with the platforms and partners you already have, focusing on the data, integration and software layers around them.",
      },
      {
        question: "How do you protect subscriber data?",
        answer:
          "It stays in your environment under your access controls, with masking outside production and logging that supports CPNI and GDPR obligations.",
      },
      {
        question: "Can you help us monetize 5G and new services?",
        answer:
          "Yes. We modernize the catalog, charging and partner systems that let you package, price and launch network capabilities as products, and the analytics that show which offers perform.",
      },
    ],
  },

  "industry-healthcare": {
    description:
      "Interoperable health data, claims and revenue-cycle automation, and privacy by design for providers, payers and life-sciences organizations.",
    lede: "We help providers, payers and life-sciences organizations connect their data, simplify administration and protect patient privacy, so more time and money go to care.",
    points: [
      "Interoperable health data",
      "Streamlined claims and revenue cycle",
      "Privacy and security by design",
    ],
    problems: {
      heading: "What healthcare organizations are up against",
      rows: [
        {
          challenge: "Patient records are scattered across systems.",
          answer:
            "Standards-based interoperability on HL7 and FHIR that unifies records while every source system stays in place.",
        },
        {
          challenge: "Administrative work keeps growing faster than care.",
          answer:
            "Intelligent document processing and workflows that prepare claims, authorizations and referrals for your team to review.",
        },
        {
          challenge: "Every new tool raises a privacy question.",
          answer:
            "HIPAA-aligned architecture, access controls and audit logging, designed in from day one rather than added at the end.",
        },
        {
          challenge: "Leaders can't see operations in real time.",
          answer:
            "Live dashboards for capacity, throughput and revenue cycle, built on governed data instead of spreadsheets.",
        },
      ],
    },
    offerings: {
      heading: "How we help providers, payers and life sciences",
      intro:
        "Platforms that move health data safely and take administrative work off the people who deliver care.",
      items: [
        {
          title: "Healthcare data platforms",
          text: "Governed platforms that bring clinical, claims and operational data together for analytics, population health and AI.",
        },
        {
          title: "Interoperability & EHR integration",
          text: "Secure connections between EHRs, partners and applications on HL7, FHIR and approved integration engines.",
        },
        {
          title: "Claims & revenue cycle",
          text: "Faster adjudication, fewer denials and cleaner reconciliation, with automation at every step.",
        },
        {
          title: "Prior authorization & care operations",
          text: "Eligibility, authorization and referral workflows prepared automatically for review, so care teams wait less.",
        },
        {
          title: "Patient & member experience",
          text: "Portals and apps that make appointments, benefits and bills easier to understand and act on.",
        },
        {
          title: "Security & compliance",
          text: "Access management, encryption and audit evidence that support your HIPAA and HITRUST obligations.",
        },
      ],
    },
    capabilities: {
      "cap-data":
        "Clinical, claims and operational data on one governed platform.",
      "cap-sap":
        "Supply chain and finance with full traceability for providers and life sciences.",
      "cap-ai":
        "Claims and document processing, and assistants that support operations teams.",
      "cap-flow":
        "Eligibility checks, prior authorizations and claim follow-ups prepared for review.",
      "cap-code":
        "Patient and member portals, and services built on modern health APIs.",
    },
    stack: {
      intro:
        "Experience with the systems and regulations of healthcare, with privacy treated as part of the design from the start.",
      groups: [
        {
          title: "Platforms",
          items: [
            "Epic",
            "Oracle Health",
            "MEDITECH",
            "Salesforce Health Cloud",
            "Facets",
            "QNXT",
          ],
        },
        {
          title: "Standards and rules",
          items: [
            "HIPAA",
            "HITRUST",
            "HL7 v2",
            "FHIR",
            "X12 EDI",
            "ICD-10",
            "CPT",
          ],
        },
      ],
    },
    outcomes: [
      { value: "[X]%", label: "reduction in claims turnaround" },
      { value: "[X]%", label: "fewer claim denials" },
      { value: "[X]%", label: "less manual data entry" },
      { value: "[X] wks", label: "to a productive healthcare team" },
    ],
    faq: [
      {
        question: "Do you work under HIPAA?",
        answer:
          "Yes. We follow your HIPAA policies, complete privacy and security training and work only in environments you control. Business associate agreements are put in place wherever the work requires them.",
      },
      {
        question: "Can you connect to our EHR?",
        answer:
          "Yes, through the interfaces your EHR supports, including standard health APIs and approved integration engines.",
      },
      {
        question: "Is AI safe to use with patient data?",
        answer:
          "It can be, with the right controls: private model hosting, minimum-necessary data access, de-identification where possible and human review for anything that affects care or coverage.",
      },
      {
        question: "Do you work with payers as well as providers?",
        answer:
          "Yes. We deliver claims, eligibility and member platforms for payers, and data, revenue-cycle and patient solutions for providers.",
      },
      {
        question: "Can you support value-based care programs?",
        answer:
          "Yes. We bring clinical, claims and quality data together into governed analytics for risk stratification, care-gap tracking and performance reporting.",
      },
    ],
  },

  "industry-energy": {
    description:
      "Asset performance management, predictive maintenance, OT and IT integration and forecasting for utilities, producers and renewables operators.",
    lede: "We help utilities, producers and renewables operators keep critical assets running, connect field and enterprise data, and plan with confidence as the energy mix changes.",
    points: [
      "Asset reliability",
      "Connected field operations",
      "Sharper forecasting",
    ],
    problems: {
      heading: "What energy companies are up against",
      rows: [
        {
          challenge: "Unplanned downtime costs us more every year.",
          answer:
            "Predictive maintenance that flags failing equipment early enough to plan the fix, before it becomes an outage.",
        },
        {
          challenge: "Our field data and enterprise data never meet.",
          answer:
            "Segmented OT and IT integration between operational systems and SAP, so maintenance, finance and operations work from one asset record.",
        },
        {
          challenge: "Paperwork slows down every field crew.",
          answer:
            "Mobile work orders, digital permits and automated reporting that give crews time back in the field.",
        },
        {
          challenge: "Renewables make demand harder to predict.",
          answer:
            "Load, generation and price forecasts that update as weather and market conditions change.",
        },
      ],
    },
    offerings: {
      heading: "How we help utilities, producers and renewables",
      intro:
        "Digital operations for assets that must run safely for decades, while the energy mix changes around them.",
      items: [
        {
          title: "Asset performance management",
          text: "Maintenance strategies on SAP S/4HANA tied to asset criticality, risk and cost.",
        },
        {
          title: "Predictive maintenance",
          text: "Condition monitoring and failure prediction for critical equipment across generation, networks and pipelines.",
        },
        {
          title: "OT and IT integration",
          text: "SCADA, historian and enterprise systems connected through secure, segmented, read-only-by-default interfaces.",
        },
        {
          title: "Forecasting & trading analytics",
          text: "Demand, generation and price forecasts that support scheduling, trading and grid balancing.",
        },
        {
          title: "Field operations apps",
          text: "Mobile tools for inspections, work orders and safety checks that work offline at remote sites.",
        },
        {
          title: "Sustainability & emissions reporting",
          text: "Emissions data collected, calculated and traced to source for internal targets and external disclosures.",
        },
      ],
    },
    capabilities: {
      "cap-data":
        "Sensor, maintenance and market data on one platform for a clear view of asset health.",
      "cap-sap": "SAP asset management linked directly to field operations.",
      "cap-ai":
        "Failure prediction and load, generation and price forecasting.",
      "cap-flow":
        "Work orders and permits raised and updated automatically from field notes and alerts.",
      "cap-code": "Offline-ready field apps and customer outage tools.",
    },
    stack: {
      intro:
        "Experience across enterprise and operational technology, with clear respect for the systems that keep critical infrastructure running.",
      groups: [
        {
          title: "Platforms",
          items: [
            "SAP PM and EAM",
            "IBM Maximo",
            "AVEVA PI System",
            "Esri ArcGIS",
            "SCADA platforms",
            "Azure IoT",
          ],
        },
        {
          title: "Standards and rules",
          items: [
            "IEC 62443",
            "NERC CIP",
            "ISO 55000",
            "GHG Protocol",
            "ISO 14064",
          ],
        },
      ],
    },
    outcomes: [
      { value: "[X]%", label: "less unplanned downtime" },
      { value: "[X]%", label: "faster work-order completion" },
      { value: "[X]%", label: "better forecast accuracy" },
      { value: "[X] wks", label: "to a productive energy team" },
    ],
    faq: [
      {
        question: "Can you work with operational technology safely?",
        answer:
          "Yes. Integration follows your segmentation and access rules, with read-only data paths by default and any change to control systems left to your authorized engineers.",
      },
      {
        question: "Do you work in renewables as well as traditional energy?",
        answer:
          "Yes. Our asset, forecasting and field operations work applies across wind, solar, storage, grids and conventional generation.",
      },
      {
        question: "Can you help with our move to S/4HANA asset management?",
        answer:
          "Yes. We plan and deliver the move end to end, including maintenance plans, master data cleanup and links to mobile field tools.",
      },
      {
        question: "How do you approach critical-infrastructure security?",
        answer:
          "Security is designed in from the start and aligned with standards such as IEC 62443 and NERC CIP where they apply, with every access logged and reviewed.",
      },
      {
        question: "Can you support grid modernization?",
        answer:
          "Yes. We engineer the data, integration and forecasting layers behind grid modernization, including distributed generation and storage, outage management and network analytics.",
      },
    ],
  },
};

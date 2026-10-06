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
  outcomes: { value: string; label: string }[];
  faq: { question: string; answer: string }[];
};

export const INDUSTRY_PAGES: Record<string, IndustryPage> = {
  "industry-banking": {
    description:
      "Specialist teams for core banking, payments, fraud, risk and regulatory data, who modernize banking platforms without slowing the business.",
    lede: "Teams that know core banking, payments, risk and compliance, building and running the platforms your customers and your regulators depend on.",
    points: [
      "Core and digital banking",
      "Payments and fraud",
      "Risk, finance and regulatory data",
    ],
    problems: {
      heading: "What banks are up against",
      rows: [
        {
          challenge: "Our core is decades old, and every change feels risky.",
          answer:
            "Progressive modernization: new products on cloud services and APIs, connected to the core through a stable integration layer, so risk falls with every release.",
        },
        {
          challenge: "Customers expect everything in real time.",
          answer:
            "Event-driven payments and account services built for instant rails such as FedNow and RTP, with monitoring that spots delays in seconds.",
        },
        {
          challenge: "Fraud gets more sophisticated every month.",
          answer:
            "Machine learning fraud signals scored in real time, with a clear reason behind every alert so investigators act faster.",
        },
        {
          challenge: "Regulatory reporting eats our best people's time.",
          answer:
            "Automated lineage and reconciliations from source system to submission, so the numbers hold up when supervisors ask.",
        },
      ],
    },
    offerings: {
      heading: "What we build for banks and financial institutions",
      intro:
        "Platforms that move money, manage risk and serve customers, built and run inside your controls.",
      items: [
        {
          title: "Core banking modernization",
          text: "Product, account and ledger services modernized in stages, with coexistence patterns that keep the existing core stable.",
        },
        {
          title: "Digital banking",
          text: "Mobile and web banking, onboarding journeys and open-banking APIs that customers actually enjoy using.",
        },
        {
          title: "Payments",
          text: "Real-time payments, ISO 20022 messaging, card platforms and reconciliation services.",
        },
        {
          title: "Fraud and financial crime",
          text: "Fraud scoring, support for AML transaction monitoring and KYC automation, with complete audit trails.",
        },
        {
          title: "Risk, finance and regulatory data",
          text: "Data platforms for credit risk, liquidity, capital and regulatory reporting, with lineage from source to submission.",
        },
        {
          title: "Operations automation",
          text: "Agents and workflows for KYC refresh, payment exceptions, disputes and loan servicing.",
        },
      ],
    },
    capabilities: {
      "cap-data":
        "One reconciled source for risk, finance and regulatory reporting.",
      "cap-sap":
        "SAP finance, group reporting and controlling, with clean data downstream.",
      "cap-ai":
        "Fraud signals, document checks and assistants for service teams.",
      "cap-flow":
        "KYC, disputes and payment exceptions handled end to end, with approvals.",
      "cap-code":
        "Digital banking apps, payments services and open APIs on cloud.",
    },
    stack: {
      intro:
        "Specialists who already speak the language of banking, so time goes into building rather than explaining.",
      groups: [
        {
          title: "Specialists",
          items: [
            "Core banking engineer",
            "Payments architect",
            "Fraud data scientist",
            "Risk data engineer",
            "Banking business analyst",
            "Security engineer",
          ],
        },
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
        question: "Can your teams work within our risk and audit controls?",
        answer:
          "Yes. Teams work inside your environments, follow your change-management and segregation-of-duties rules, and keep the evidence auditors ask for as part of the work.",
      },
      {
        question: "Do you replace our core banking system?",
        answer:
          "Rarely in one step. Most banks get better results modernizing around the core first, moving products and journeys to new services until what remains is small enough to replace safely.",
      },
      {
        question: "How do you handle customer data?",
        answer:
          "Customer data stays in your environment. Access follows least-privilege rules, sensitive fields are masked outside production, and every access is logged.",
      },
      {
        question: "Can teams support us around the clock?",
        answer:
          "Yes. With hubs in the United States and India, support and operations follow the sun, with handovers at fixed times every day.",
      },
    ],
  },

  "industry-telecom": {
    description:
      "Engineers for OSS/BSS, billing, network data and customer platforms, who help operators launch faster, recover sooner and keep customers connected.",
    lede: "Engineers for OSS/BSS, billing, network data and customer platforms, who keep pace with constant network change and keep every outage short.",
    points: [
      "OSS/BSS and billing",
      "Network and customer analytics",
      "Service assurance and operations",
    ],
    problems: {
      heading: "What operators are up against",
      rows: [
        {
          challenge: "Billing errors cost us revenue and customers.",
          answer:
            "Revenue-assurance checks that reconcile usage, rating and invoices every day, catching leakage before the bill goes out.",
        },
        {
          challenge: "Launching a new plan takes months.",
          answer:
            "Catalog-driven BSS and modular order management, so new offers launch in weeks without custom code.",
        },
        {
          challenge: "We hear about outages from customer complaints.",
          answer:
            "AI-driven service assurance that correlates alarms, predicts degradation and opens the right ticket before customers notice.",
        },
        {
          challenge: "Our network data is huge and mostly unused.",
          answer:
            "Streaming platforms that turn network telemetry into capacity planning, churn and customer experience insight.",
        },
      ],
    },
    offerings: {
      heading: "What we build for operators and service providers",
      intro:
        "The systems that sell, provision, bill and assure every connection, modernized one domain at a time.",
      items: [
        {
          title: "OSS/BSS modernization",
          text: "Order management, product catalog, inventory and CRM platforms aligned with TM Forum Open APIs.",
        },
        {
          title: "Billing and revenue assurance",
          text: "Rating, charging and billing platforms with automated reconciliation and leakage detection.",
        },
        {
          title: "Network data platforms",
          text: "Streaming pipelines for performance counters, probes and call detail records, with storage designed for petabyte scale.",
        },
        {
          title: "Service assurance",
          text: "Alarm correlation, anomaly detection and automated ticketing that shorten the time to restore service.",
        },
        {
          title: "Customer and channel apps",
          text: "Self-service apps, retail and partner portals and contact-center tools built on modern cloud stacks.",
        },
        {
          title: "Application operations",
          text: "Round-the-clock monitoring, incident response and release management across our US and India hubs.",
        },
      ],
    },
    capabilities: {
      "cap-data":
        "Network, usage and customer data joined for churn and capacity planning.",
      "cap-sap":
        "Order-to-cash, billing reconciliation and asset accounting on S/4HANA.",
      "cap-ai":
        "Churn prediction, anomaly detection and agent assist for complex cases.",
      "cap-flow": "Order fallout and provisioning errors resolved end to end.",
      "cap-code":
        "Self-service apps and partner portals that cut calls to the contact center.",
    },
    stack: {
      intro:
        "Engineers who understand how a network, a catalog and a bill fit together, and where each one breaks.",
      groups: [
        {
          title: "Specialists",
          items: [
            "OSS/BSS architect",
            "Billing engineer",
            "Network data engineer",
            "Site reliability engineer",
            "Telecom business analyst",
            "Integration engineer",
          ],
        },
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
        question: "Do your teams know TM Forum standards?",
        answer:
          "Yes. Our OSS/BSS work follows TM Forum Open APIs and information models wherever your stack supports them, which keeps integrations cleaner and future changes cheaper.",
      },
      {
        question: "Can you run operations around the clock?",
        answer:
          "Yes. Our US and India hubs cover the day between them, with agreed handovers, runbooks and on-call rotations for priority incidents.",
      },
      {
        question:
          "Can your teams work alongside our network equipment partners?",
        answer:
          "Yes. Our teams work with the platforms and partners you already have, and focus on the data, integration and software layers around them.",
      },
      {
        question: "How do you handle subscriber data?",
        answer:
          "It stays in your environment under your access controls, with masking outside production and logging that supports CPNI and GDPR obligations.",
      },
    ],
  },

  "industry-healthcare": {
    description:
      "Teams fluent in health data, interoperability, claims and HIPAA, building platforms that help providers, payers and life-science firms work faster and safer.",
    lede: "Teams fluent in health data, claims and privacy rules such as HIPAA, building the platforms that help providers, payers and life-science firms work faster and safer.",
    points: [
      "Health data and interoperability",
      "Claims and revenue cycle",
      "Privacy and security by design",
    ],
    problems: {
      heading: "What healthcare organizations are up against",
      rows: [
        {
          challenge: "Patient records are scattered across systems.",
          answer:
            "Interoperability services on HL7 FHIR that bring records together while every source system stays in place.",
        },
        {
          challenge: "Admin work keeps growing faster than care.",
          answer:
            "Document intelligence and workflows that prepare claims, prior authorizations and referrals for your team to check and send.",
        },
        {
          challenge: "Every new tool raises a privacy question.",
          answer:
            "HIPAA-aligned architectures, access controls and audit logging, designed in from the first sprint rather than added at the end.",
        },
        {
          challenge: "Leaders can't see operations in real time.",
          answer:
            "Dashboards for capacity, throughput and revenue cycle, fed by governed data instead of spreadsheets.",
        },
      ],
    },
    offerings: {
      heading: "What we build for providers, payers and life sciences",
      intro:
        "Platforms that move health data safely and take admin work off the people who deliver care.",
      items: [
        {
          title: "Healthcare data platforms",
          text: "Governed platforms that bring clinical, claims and operational data together for analytics and AI.",
        },
        {
          title: "Interoperability",
          text: "HL7 v2 and FHIR integration, APIs and patient-matching services that connect EHRs and partners.",
        },
        {
          title: "Claims and revenue cycle",
          text: "Claims intake, coding support, denial analytics and payment reconciliation, with automation at every step.",
        },
        {
          title: "Document intelligence",
          text: "Extraction from referrals, faxes, lab reports and forms, routed into the right system with human review.",
        },
        {
          title: "Patient and member experience",
          text: "Portals, apps and contact-center tools that make appointments, benefits and bills easier to understand.",
        },
        {
          title: "Security and compliance",
          text: "Access management, encryption, audit logging and evidence collection for HIPAA and HITRUST assessments.",
        },
      ],
    },
    capabilities: {
      "cap-data":
        "Clinical, claims and operational data on one governed platform.",
      "cap-sap":
        "Supply chain and finance with traceability for hospital groups and life sciences.",
      "cap-ai":
        "Claims and document processing, and assistants for operations teams.",
      "cap-flow":
        "Eligibility checks, prior authorizations and claim follow-ups prepared for review.",
      "cap-code":
        "Patient and member portals, and services built on FHIR APIs.",
    },
    stack: {
      intro:
        "Specialists who treat privacy as part of the design, and who know the formats health data actually arrives in.",
      groups: [
        {
          title: "Specialists",
          items: [
            "Healthcare data engineer",
            "Interoperability engineer",
            "FHIR developer",
            "Revenue-cycle analyst",
            "Security and compliance engineer",
            "Clinical data analyst",
          ],
        },
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
        question: "Do your teams work under HIPAA?",
        answer:
          "Yes. Teams follow your HIPAA policies, complete privacy and security training, and work only in environments you control. Business associate agreements are put in place wherever the work requires them.",
      },
      {
        question: "Can you connect to our EHR?",
        answer:
          "Yes, through the interfaces your EHR supports, including FHIR APIs, HL7 v2 feeds and approved integration engines.",
      },
      {
        question: "Is AI safe to use with patient data?",
        answer:
          "It can be, with the right controls: private model hosting, minimum-necessary data access, de-identification where possible and human review for anything that affects care or coverage.",
      },
      {
        question: "Do you work with payers as well as providers?",
        answer:
          "Yes. Our teams work on claims, eligibility and member platforms for payers, and on data, revenue cycle and patient tools for providers.",
      },
    ],
  },

  "industry-energy": {
    description:
      "Specialists in SAP asset management, predictive maintenance, OT data and field operations, helping utilities, producers and renewables operators keep assets online.",
    lede: "Specialists in SAP asset management, field operations and energy data, helping utilities, producers and renewables operators keep assets online and decisions on time.",
    points: [
      "SAP asset management",
      "Predictive maintenance",
      "Field, grid and market data",
    ],
    problems: {
      heading: "What energy companies are up against",
      rows: [
        {
          challenge: "Unplanned downtime costs us more every year.",
          answer:
            "Predictive maintenance models built on sensor and work-order history, flagging failing equipment early enough to plan the fix.",
        },
        {
          challenge: "Our field data and enterprise data never meet.",
          answer:
            "Secure integration between historians, SCADA feeds and SAP, so maintenance, finance and operations see the same asset.",
        },
        {
          challenge: "Paperwork slows down every field crew.",
          answer:
            "Mobile work orders, digital permits and reports created automatically from technician notes and photos.",
        },
        {
          challenge: "Renewables make demand harder to predict.",
          answer:
            "Load, generation and price forecasts that update as weather and market data change.",
        },
      ],
    },
    offerings: {
      heading: "What we build for utilities, producers and renewables",
      intro:
        "Digital operations for assets that have to run safely for decades, while the energy mix changes around them.",
      items: [
        {
          title: "SAP asset management",
          text: "SAP PM, EAM and S/4HANA asset management, with maintenance strategies tied to criticality and cost.",
        },
        {
          title: "Predictive maintenance",
          text: "Condition monitoring and failure prediction for turbines, transformers, pumps and pipelines.",
        },
        {
          title: "OT and IT integration",
          text: "Historian, SCADA and IoT data connected to enterprise systems through secure, segmented interfaces.",
        },
        {
          title: "Forecasting and trading analytics",
          text: "Demand, generation and price forecasts that support scheduling, trading and grid balancing.",
        },
        {
          title: "Field operations apps",
          text: "Mobile tools for inspections, work orders and safety checks that keep working offline at remote sites.",
        },
        {
          title: "Sustainability reporting",
          text: "Emissions data collected, calculated and traced to source, for internal targets and external disclosures.",
        },
      ],
    },
    capabilities: {
      "cap-data":
        "Sensor, maintenance and market data on one platform for asset health.",
      "cap-sap": "SAP PM and asset management linked to field operations.",
      "cap-ai":
        "Failure prediction and load, generation and price forecasting.",
      "cap-flow":
        "Work orders and permits raised and updated from field notes and alerts.",
      "cap-code": "Offline-ready field apps and customer outage tools.",
    },
    stack: {
      intro:
        "Specialists who respect the line between enterprise IT and the systems that keep the lights on.",
      groups: [
        {
          title: "Specialists",
          items: [
            "SAP PM specialist",
            "Asset data engineer",
            "OT integration engineer",
            "Data scientist",
            "GIS developer",
            "Mobile engineer",
          ],
        },
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
        question: "Can your teams work with operational technology safely?",
        answer:
          "Yes. OT integration follows your segmentation and access rules, with read-only data paths by default and any change to control systems left to your authorized engineers.",
      },
      {
        question: "Do you work in renewables as well as traditional energy?",
        answer:
          "Yes. Our asset, forecasting and field work applies across wind, solar, storage, grids and conventional generation.",
      },
      {
        question: "Can you help with our move to S/4HANA asset management?",
        answer:
          "Yes. Our SAP specialists plan and deliver the move, including maintenance plans, master data clean-up and links to mobile field tools.",
      },
      {
        question: "How do you handle critical-infrastructure security?",
        answer:
          "Security is designed in from the start, aligned with standards such as IEC 62443 and NERC CIP where they apply, with every access logged and reviewed.",
      },
    ],
  },
};

/**
 * Copy for each capability page under `/capabilities/`, keyed by capability
 * id from `CAPABILITIES`. Anything in `[brackets]` is a placeholder that
 * shows as unconfirmed until ManyaIT signs it off.
 */
export type CapabilityPage = {
  /** Meta description. */
  description: string;
  /** Page heading. */
  title: string;
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
  stack: {
    intro: string;
    groups: { title: string; items: string[] }[];
  };
  /** One line per industry, keyed by industry id. */
  industries: Record<string, string>;
  outcomes: { value: string; label: string }[];
  faq: { question: string; answer: string }[];
};

export const CAPABILITY_PAGES: Record<string, CapabilityPage> = {
  "cap-data": {
    description:
      "Modern data platforms, real-time pipelines and AI-ready data products, delivered end to end by data engineers and architects who run what they build.",
    title: "Turn scattered data into decisions people trust.",
    lede: "From strategy and architecture to pipelines, governance and analytics, we design, build and run the data platforms your business and your AI depend on. Expert data engineers, analytics engineers and architects deliver end to end and stay accountable for what they build.",
    points: [
      "Trusted data foundation",
      "AI-ready data products",
      "Governed self-service insights",
    ],
    problems: {
      heading: "Where data programs lose value",
      rows: [
        {
          challenge: "Every team has its own version of revenue.",
          answer:
            "A single, governed source of truth with shared business definitions, so every function makes decisions from the same numbers.",
        },
        {
          challenge: "Our reports are a day old before anyone opens them.",
          answer:
            "Real-time pipelines and freshness monitoring, so leaders act on what is happening now, not on yesterday's numbers.",
        },
        {
          challenge:
            "Our AI initiatives spend most of their time waiting on data.",
          answer:
            "Curated, AI-ready data products with clear ownership and built-in quality checks, so AI initiatives start from trusted inputs.",
        },
        {
          challenge: "Cloud data costs keep climbing and nobody knows why.",
          answer:
            "Cost transparency and continuous optimization, so platform spend tracks business value instead of habit.",
        },
      ],
    },
    offerings: {
      heading: "End-to-end data solutions, from platform to insight",
      intro:
        "From data strategy to a platform the whole enterprise relies on, engineered for scale, governed by design and run against clear service levels.",
      items: [
        {
          title: "Modern data platforms",
          text: "Cloud lakehouse and warehouse platforms designed around the decisions your business needs to make, on Databricks, Snowflake, Microsoft Fabric or BigQuery.",
        },
        {
          title: "Data integration and pipelines",
          text: "Reliable batch and real-time pipelines that bring ERP, CRM, core systems and SaaS data together, with full lineage and automated recovery.",
        },
        {
          title: "Analytics and business intelligence",
          text: "A shared business layer and executive dashboards that turn data into decisions leaders act on every day.",
        },
        {
          title: "Governance and data quality",
          text: "Catalogs, access policies, quality controls and lineage that satisfy regulators while keeping the business moving.",
        },
        {
          title: "AI-ready data products",
          text: "Curated, well-owned data products that give AI and analytics initiatives a trusted starting point.",
        },
        {
          title: "Platform operations and FinOps",
          text: "Ongoing monitoring, optimization and cost control that keep the platform reliable and efficient as it grows.",
        },
      ],
    },
    stack: {
      intro:
        "We work with the platforms you already run and the ones your roadmap calls for next, so every program builds on your existing investments.",
      groups: [
        {
          title: "Platforms",
          items: [
            "Databricks",
            "Snowflake",
            "Microsoft Fabric",
            "Google BigQuery",
            "Amazon Redshift",
            "Azure Synapse",
          ],
        },
        {
          title: "Tools",
          items: [
            "dbt",
            "Apache Spark",
            "Apache Kafka",
            "Airflow",
            "Fivetran",
            "Unity Catalog",
            "Power BI",
            "Tableau",
            "Looker",
          ],
        },
      ],
    },
    industries: {
      "industry-banking":
        "One reconciled view of risk, liquidity and regulatory data, with lineage auditors can follow.",
      "industry-telecom":
        "Network, usage and billing data combined for customer retention, capacity planning and revenue assurance.",
      "industry-healthcare":
        "Clinical, claims and operational data on one governed platform, with patient privacy built in.",
      "industry-energy":
        "Sensor, maintenance and market data combined for asset health, demand forecasting and emissions reporting.",
    },
    outcomes: [
      { value: "[X]%", label: "faster time from question to answer" },
      { value: "[X]%", label: "lower data platform run cost" },
      { value: "[X] min", label: "data freshness on critical pipelines" },
      { value: "[X] wks", label: "to a productive data team" },
    ],
    faq: [
      {
        question: "We already have a data platform. Can you build on it?",
        answer:
          "Yes. Most programs start on an existing platform. We assess what is in place, protect what works and improve it against your priorities, rather than starting over.",
      },
      {
        question: "Can you deliver a complete data platform end to end?",
        answer:
          "Yes. We take ownership from assessment and architecture through migration, pipelines, governance and BI rollout. Then we run the platform with agreed service levels, or hand it over to your team with full documentation.",
      },
      {
        question: "Which data platforms do you work with?",
        answer:
          "Databricks, Snowflake, Microsoft Fabric, BigQuery and the major cloud warehouses, along with dbt, Spark, Kafka and Airflow. We work with the platforms you have chosen, not the other way round.",
      },
      {
        question: "How do you keep sensitive data safe?",
        answer:
          "We work inside your environment and follow your access policies. Least-privilege access, masking of sensitive data and audit logging are in place from day one.",
      },
      {
        question: "Can the data platform support our AI initiatives?",
        answer:
          "Yes, and it's one of the strongest reasons to build the data foundation well. We prepare AI-ready data products and work alongside our Applied AI practice, so models and copilots start from trusted data.",
      },
      {
        question: "How quickly can we get started?",
        answer:
          "Most engagements begin within [X] weeks of an agreed scope. A focused team can start with an assessment or a first pipeline while the wider program ramps up.",
      },
    ],
  },

  "cap-sap": {
    description:
      "End-to-end S/4HANA transformation, clean-core BTP extensions and SAP data integration, from assessment and migration to post-go-live support.",
    title: "Modernize your SAP core and unlock what's inside it.",
    lede: "Functional and technical SAP experts who take your ERP from assessment to go-live and beyond. We modernize the core without disrupting the business that runs on it, then connect SAP data to planning, finance, operations and AI.",
    points: [
      "S/4HANA transformation",
      "Clean-core innovation on SAP BTP",
      "SAP data ready for analytics and AI",
    ],
    problems: {
      heading: "Where SAP programs lose momentum",
      rows: [
        {
          challenge: "Our S/4HANA move keeps slipping.",
          answer:
            "A phased roadmap anchored to the end of ECC mainstream maintenance in 2027, with the right transition path chosen on evidence, not assumption.",
        },
        {
          challenge: "Every upgrade breaks our custom code.",
          answer:
            "A clean-core approach that moves custom logic onto SAP BTP, so upgrades become routine and innovation no longer waits on the core.",
        },
        {
          challenge: "Finance can't see SAP data next to everything else.",
          answer:
            "SAP data connected to the rest of the enterprise with its business context intact, so finance and operations plan from one view.",
        },
        {
          challenge: "Our SAP experts spend their week on support tickets.",
          answer:
            "Application management with clear service levels, freeing your in-house experts to focus on transformation instead of maintenance.",
        },
      ],
    },
    offerings: {
      heading: "SAP transformation, delivered end to end",
      intro:
        "Business process and technical expertise in one accountable program, from the first assessment to stable operations after go-live.",
      items: [
        {
          title: "S/4HANA transformation",
          text: "Assessment, roadmap and delivery for system conversion, selective data transition or a new implementation, including RISE with SAP.",
        },
        {
          title: "Clean-core extensions",
          text: "Innovation built alongside the core on SAP BTP, so the ERP stays standard, secure and upgrade-ready.",
        },
        {
          title: "Integration",
          text: "Connections between SAP and your CRM, banking, manufacturing and SaaS platforms, so business processes flow end to end.",
        },
        {
          title: "Enterprise data and planning",
          text: "Reporting, planning and AI-ready ERP data that give leaders a single, current view of the business.",
        },
        {
          title: "Business process excellence",
          text: "Finance, procurement, sales, manufacturing, maintenance and warehouse processes designed around how your business actually runs.",
        },
        {
          title: "Application management",
          text: "Monitoring, incident resolution, release management and continuous improvement after go-live.",
        },
      ],
    },
    stack: {
      intro:
        "Experience across the SAP platforms and modules that run the enterprise, so design decisions and delivery stay aligned.",
      groups: [
        {
          title: "Platforms",
          items: [
            "SAP S/4HANA",
            "RISE with SAP",
            "SAP BTP",
            "SAP Datasphere",
            "SAP Analytics Cloud",
            "SAP BW/4HANA",
            "SAP Integration Suite",
          ],
        },
        {
          title: "Modules",
          items: [
            "FI/CO",
            "MM",
            "SD",
            "PP",
            "PM",
            "EWM",
            "Ariba",
            "SuccessFactors",
          ],
        },
      ],
    },
    industries: {
      "industry-banking":
        "Finance, group reporting and controlling on SAP, with clean data flowing into risk and regulatory reporting.",
      "industry-telecom":
        "Order-to-cash, billing reconciliation and asset accounting that keep pace with constant network change.",
      "industry-healthcare":
        "Supply chain and finance on S/4HANA for hospital groups and life-sciences organizations, with traceability built in.",
      "industry-energy":
        "Asset management and maintenance for plants, grids and field operations, linked to predictive maintenance.",
    },
    outcomes: [
      { value: "[X]%", label: "fewer custom objects in the core" },
      { value: "[X]%", label: "faster period-end close" },
      { value: "[X]%", label: "fewer priority-one incidents" },
      { value: "[X] wks", label: "to a productive SAP team" },
    ],
    faq: [
      {
        question: "When does support for SAP ECC end?",
        answer:
          "Mainstream maintenance for SAP ECC 6.0 ends in 2027, with optional extended maintenance to 2030. Starting now leaves time to clean data and simplify custom code before the move.",
      },
      {
        question:
          "Conversion, selective transition or greenfield: which is right?",
        answer:
          "It depends on how much of your current process design you want to keep. We assess custom code, data quality and your appetite for change, then recommend a path with the trade-offs clearly documented.",
      },
      {
        question: "Can you run a complete S/4HANA program end to end?",
        answer:
          "Yes. We cover readiness assessment, roadmap, data migration, custom-code remediation, testing, cutover and hypercare, with one accountable team from the first workshop to stable operations.",
      },
      {
        question: "What does clean core mean in practice?",
        answer:
          "Keeping S/4HANA as close to standard as possible and building extensions on SAP BTP through released APIs. Upgrades get faster and cheaper because nothing custom sits inside the core.",
      },
      {
        question: "Can you support our SAP landscape after go-live?",
        answer:
          "Yes. We run what we build, with agreed service levels for incidents, a predictable release rhythm and a continuous improvement backlog.",
      },
      {
        question: "Do you work with RISE with SAP?",
        answer:
          "Yes. We deliver on RISE with SAP, on private and public cloud editions of S/4HANA, and on on-premise landscapes.",
      },
    ],
  },

  "cap-ai": {
    description:
      "GenAI and machine learning taken from use case to production, built on your data, governed for the enterprise and measured on business outcomes.",
    title: "Take AI from pilot to production.",
    lede: "We take AI from idea to production. We identify high-value use cases, engineer GenAI and machine learning solutions on your own data, and run them with the security, governance and monitoring your risk teams expect. Every use case is measured against a business outcome.",
    points: [
      "High-value AI use cases",
      "Governed, production-grade AI",
      "Measured business outcomes",
    ],
    problems: {
      heading: "Why AI initiatives stall before production",
      rows: [
        {
          challenge: "Our pilot impressed everyone, then went nowhere.",
          answer:
            "Production thinking from day one: clear ownership, quality evaluation, monitoring and cost controls for every model in service.",
        },
        {
          challenge: "We can't trust the answers it gives.",
          answer:
            "AI grounded in your own knowledge, with cited sources, continuous evaluation and human review for high-stakes decisions.",
        },
        {
          challenge: "Legal and security keep saying no.",
          answer:
            "Private deployment, data-residency controls and a complete audit trail, designed to meet the standards your risk and compliance teams set.",
        },
        {
          challenge: "Nobody can tell us what AI is worth here.",
          answer:
            "Use cases prioritized by business value and feasibility, each with a baseline and a success measure agreed before work begins.",
        },
      ],
    },
    offerings: {
      heading: "AI solutions engineered for production",
      intro:
        "AI use cases that earn their place in production, built on your data and governed by the controls you already trust.",
      items: [
        {
          title: "Copilots and knowledge assistants",
          text: "Assistants that put your policies, manuals and institutional knowledge at every employee's fingertips, with answers that cite their sources.",
        },
        {
          title: "Document intelligence",
          text: "Invoices, claims, contracts and forms processed automatically, with people reviewing only the cases that need judgment.",
        },
        {
          title: "Predictive analytics",
          text: "Forecasting, risk and anomaly models that help the business anticipate demand, risk and opportunity.",
        },
        {
          title: "Enterprise search and retrieval",
          text: "Search and retrieval that keep AI answers accurate and current as your content changes.",
        },
        {
          title: "MLOps and LLMOps",
          text: "The release, monitoring and cost discipline that keeps every model dependable after launch.",
        },
        {
          title: "Responsible AI",
          text: "Guardrails, bias testing and documentation aligned with frameworks such as the NIST AI RMF and the EU AI Act.",
        },
      ],
    },
    stack: {
      intro:
        "Experience across the leading cloud AI platforms and model providers, so each use case runs on the option that best fits its cost, risk and performance needs.",
      groups: [
        {
          title: "Models and platforms",
          items: [
            "Azure OpenAI",
            "Amazon Bedrock",
            "Google Vertex AI",
            "Anthropic Claude",
            "Open-weight models",
            "Databricks Mosaic AI",
          ],
        },
        {
          title: "Tools",
          items: [
            "Python",
            "PyTorch",
            "LangChain",
            "LlamaIndex",
            "MLflow",
            "Vector databases",
            "Hugging Face",
          ],
        },
      ],
    },
    industries: {
      "industry-banking":
        "Fraud detection, KYC document checks and assistants that help service teams resolve customer questions faster.",
      "industry-telecom":
        "Churn prediction, network anomaly detection and assistants that guide service staff through complex customer issues.",
      "industry-healthcare":
        "Claims and prior-authorization processing, and assistants that support clinical operations.",
      "industry-energy":
        "Failure prediction, load and price forecasting, and inspection reports summarized automatically from field notes.",
    },
    outcomes: [
      { value: "[X]", label: "AI use cases running in production" },
      { value: "[X]%", label: "less manual document handling" },
      { value: "[X]%", label: "answer accuracy on evaluation sets" },
      { value: "[X] wks", label: "from approved use case to live pilot" },
    ],
    faq: [
      {
        question: "Can you take an AI use case from idea to production?",
        answer:
          "Yes. We run the full path: use-case discovery, data readiness, prototyping, evaluation, production engineering, MLOps and post-release monitoring, so a promising idea becomes a dependable, governed service.",
      },
      {
        question: "Do we need perfect data before starting with AI?",
        answer:
          "No. A strong first use case needs data that is good enough for one job. We assess quality early, fix what that use case needs and build from there.",
      },
      {
        question: "Will our data be used to train public models?",
        answer:
          "No. Models run in your cloud environment or through enterprise services with training on your data switched off, and access follows your existing controls.",
      },
      {
        question: "Which models do you use?",
        answer:
          "Whichever best fits the task, cost and risk profile: commercial models through Azure OpenAI, Amazon Bedrock or Vertex AI, or open-weight models hosted privately. Evaluation results decide, not preference.",
      },
      {
        question: "How do you measure whether AI is working?",
        answer:
          "Every use case gets a baseline and a target before work begins, plus a quality evaluation. We report both after release, so the decision to scale rests on evidence.",
      },
      {
        question: "Can you work alongside our data science team?",
        answer:
          "Yes. We work within your existing processes and repositories, and bring the production engineering that turns a promising prototype into a dependable service.",
      },
    ],
  },

  "cap-flow": {
    description:
      "AI agents and intelligent automation that complete multi-step work across ERP, CRM and ticketing systems, with human approvals, guardrails and audit trails.",
    title: "AI that doesn't just answer. It gets work done.",
    lede: "We design, build and run AI agents and automated workflows that complete multi-step work across your ERP, CRM and ticketing systems, from process discovery to production, with people approving the decisions that need judgment.",
    points: [
      "Process intelligence",
      "Agents with human oversight",
      "Audit-ready automation",
    ],
    problems: {
      heading: "Where automation hits a wall",
      rows: [
        {
          challenge: "Our teams spend the day copying data between systems.",
          answer:
            "Intelligent workflows that read each request, update every system involved and route only the exceptions to a person.",
        },
        {
          challenge: "Our bots break every time a screen changes.",
          answer:
            "Resilient, API-first automation with AI handling unstructured inputs, so workflows keep running as systems and documents change.",
        },
        {
          challenge: "Audit wants to know exactly what the automation did.",
          answer:
            "A complete record of every action, its inputs and its approver, ready for audit and risk review.",
        },
        {
          challenge: "We have dozens of ideas and no way to choose.",
          answer:
            "Process discovery that ranks opportunities by value, effort and risk, so the first releases deliver measurable returns.",
        },
      ],
    },
    offerings: {
      heading: "Intelligent automation, delivered end to end",
      intro:
        "Agents and workflows that complete real work end to end, with people in control of the decisions that need judgment.",
      items: [
        {
          title: "AI agents for operations",
          text: "Agents that triage requests, reconcile records, prepare reports and complete tasks across your systems, from start to finish.",
        },
        {
          title: "Human-in-the-loop workflows",
          text: "Approval steps, confidence thresholds and escalation paths that keep people in charge of the decisions that matter.",
        },
        {
          title: "Intelligent document flows",
          text: "Emails, forms and documents classified, extracted and routed into the right system without manual handling.",
        },
        {
          title: "RPA modernization",
          text: "Fragile screen-based bots strengthened or replaced with APIs and AI, and existing automation estates brought under one operating model.",
        },
        {
          title: "Governance and observability",
          text: "Permissions, policy checks, monitoring and cost visibility for every agent in production.",
        },
        {
          title: "Process discovery",
          text: "Process and task insight that shows where work waits, where it repeats and where automation will pay back first.",
        },
      ],
    },
    stack: {
      intro:
        "Experience across the automation and enterprise platforms you already own, so automation builds on existing investments.",
      groups: [
        {
          title: "Platforms",
          items: [
            "Microsoft Copilot Studio",
            "Power Automate",
            "UiPath",
            "ServiceNow",
            "Salesforce",
            "SAP Build Process Automation",
          ],
        },
        {
          title: "Frameworks",
          items: [
            "Model Context Protocol",
            "LangGraph",
            "Semantic Kernel",
            "Temporal",
            "REST and event APIs",
          ],
        },
      ],
    },
    industries: {
      "industry-banking":
        "KYC refresh, payment exceptions and dispute workflows completed faster, with every approval recorded for audit.",
      "industry-telecom":
        "Order fallout, provisioning errors and service tickets resolved end to end, with engineers involved only for real faults.",
      "industry-healthcare":
        "Eligibility checks, prior authorizations and claim follow-ups prepared automatically for review.",
      "industry-energy":
        "Work orders, permits and field reports created and updated automatically from technician notes and sensor alerts.",
    },
    outcomes: [
      { value: "[X]%", label: "of requests completed with no manual steps" },
      { value: "[X]%", label: "faster cycle time on automated workflows" },
      { value: "[X] hrs", label: "returned to teams every month" },
      { value: "[X] wks", label: "from discovery sprint to first agent live" },
    ],
    faq: [
      {
        question: "How is an AI agent different from RPA?",
        answer:
          "RPA follows fixed steps on a screen. An agent works toward a goal: it reads unstructured input, decides which tools to use and asks a person when it is unsure. Most organizations use both.",
      },
      {
        question: "How do you stop an agent from doing something it shouldn't?",
        answer:
          "Agents operate with narrow permissions, approved tools and spending limits. Higher-risk actions require human approval, and every step is recorded so it can be reviewed or reversed.",
      },
      {
        question: "Do we have to replace our current automation tools?",
        answer:
          "No. We build on the platforms you already run, including Power Automate, UiPath and ServiceNow, and add AI where it removes manual effort.",
      },
      {
        question: "Which processes should we automate first?",
        answer:
          "High-volume work with clear rules for most cases and a manageable set of exceptions. Process discovery ranks the candidates so the first release pays back quickly.",
      },
      {
        question: "Can you deliver an automation program end to end?",
        answer:
          "Yes. We discover and prioritize processes, design the agents and workflows, integrate them with your systems, and run them in production with monitoring, governance and continuous improvement.",
      },
    ],
  },

  "cap-code": {
    description:
      "Cloud-native web, mobile and platform products designed, built and run end to end, with AI-assisted engineering and DevSecOps in every release.",
    title: "Build modern software, faster.",
    lede: "From product strategy and UX to architecture, engineering and release, we design, build and run web, mobile and platform software, with AI-assisted engineering and security built into every release.",
    points: [
      "Faster time to market",
      "Modernization without disruption",
      "Security in every release",
    ],
    problems: {
      heading: "Where delivery slows down",
      rows: [
        {
          challenge: "Every release waits on the legacy platform.",
          answer:
            "A phased modernization that moves capabilities to modern services one at a time, while existing systems keep running.",
        },
        {
          challenge: "Releasing takes weeks of manual testing.",
          answer:
            "Automated testing and release pipelines that make releases smaller, faster and routine.",
        },
        {
          challenge: "Our cloud bill grows faster than our product.",
          answer:
            "Right-sized, automated infrastructure with cost visibility for every product and service.",
        },
        {
          challenge: "Security reviews arrive at the end and block launches.",
          answer:
            "Security built into every stage of delivery, so risks are caught early instead of at launch.",
        },
      ],
    },
    offerings: {
      heading: "Digital products, from concept to scale",
      intro:
        "Product strategy, design and engineering working as one, measured on business results rather than activity.",
      items: [
        {
          title: "Web and mobile applications",
          text: "Customer and employee experiences on web and mobile, designed with users and measured in production.",
        },
        {
          title: "Cloud-native services",
          text: "Scalable APIs and services on AWS, Azure or Google Cloud that let products grow without re-engineering.",
        },
        {
          title: "Legacy modernization",
          text: "Older applications re-platformed or rebuilt in stages, without freezing the product roadmap.",
        },
        {
          title: "Platform engineering",
          text: "Developer platforms and automated infrastructure that make secure, repeatable delivery the default.",
        },
        {
          title: "Quality engineering",
          text: "Automated, performance and accessibility testing built into every release.",
        },
        {
          title: "AI-assisted engineering",
          text: "AI tools for coding, testing and review, used within clear guardrails to accelerate delivery without lowering quality.",
        },
      ],
    },
    stack: {
      intro:
        "Experience across modern languages, frameworks and cloud platforms, matched to the product and the roadmap ahead.",
      groups: [
        {
          title: "Languages and frameworks",
          items: [
            "Java and Spring Boot",
            ".NET",
            "Node.js",
            "TypeScript",
            "React",
            "Next.js",
            "Flutter",
            "Kotlin",
            "Swift",
            "Go",
          ],
        },
        {
          title: "Cloud and DevOps",
          items: [
            "AWS",
            "Microsoft Azure",
            "Google Cloud",
            "Kubernetes",
            "Terraform",
            "GitHub Actions",
            "Azure DevOps",
            "Datadog",
          ],
        },
      ],
    },
    industries: {
      "industry-banking":
        "Digital banking apps, payments services and open-banking APIs, released safely through automated controls.",
      "industry-telecom":
        "Self-service apps, order management and partner portals that let customers change plans without calling.",
      "industry-healthcare":
        "Patient and member portals, care-team tools and interoperability services on modern health APIs.",
      "industry-energy":
        "Field-service apps, customer portals and outage updates that keep working in low-connectivity areas.",
    },
    outcomes: [
      { value: "[X]x", label: "more frequent releases" },
      { value: "[X]%", label: "lower change failure rate" },
      { value: "[X]%", label: "lower infrastructure cost" },
      { value: "[X] wks", label: "to a productive product team" },
    ],
    faq: [
      {
        question: "Can you build a new product from concept to launch?",
        answer:
          "Yes. We cover discovery, UX and design, architecture, engineering, quality and release, then support and evolve the product after launch, with the same accountable team throughout.",
      },
      {
        question: "Can you take over an existing codebase?",
        answer:
          "Yes. We start with a codebase and architecture review, document what we find and agree priorities with you before making significant changes.",
      },
      {
        question: "Do you work in our tools and processes?",
        answer:
          "Yes. We work within your repositories, ticketing and ways of working, and follow your definition of done. Where we see gaps, we recommend improvements rather than impose a method.",
      },
      {
        question: "How do you modernize without stopping new features?",
        answer:
          "We move one capability at a time behind stable interfaces, so product work continues while the legacy footprint shrinks every quarter.",
      },
      {
        question: "How do you use AI in engineering?",
        answer:
          "AI assistants support coding and testing within guardrails your security team approves. An engineer reviews every change, and nothing ships without passing the release pipeline.",
      },
    ],
  },
};

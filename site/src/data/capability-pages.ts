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
      "Lakehouse and real-time pipelines",
      "Governed, self-serve analytics",
      "AI-ready data products",
    ],
    problems: {
      heading: "Where data programs stall",
      rows: [
        {
          challenge: "Every team has its own version of revenue.",
          answer:
            "One governed semantic layer with shared definitions, so finance, sales and operations read the same number from the same place.",
        },
        {
          challenge: "Our reports are a day old before anyone opens them.",
          answer:
            "Streaming and change-data-capture pipelines that land data in minutes, with freshness checks that alert the team before a dashboard goes stale.",
        },
        {
          challenge: "The AI team spends most of its time cleaning data.",
          answer:
            "Curated data products with owners, contracts and quality tests, ready for models and copilots without another round of wrangling.",
        },
        {
          challenge: "Cloud data costs keep climbing and nobody knows why.",
          answer:
            "Cost tagging, workload tuning and storage tiering, reported every month, so spend follows value instead of habit.",
        },
      ],
    },
    offerings: {
      heading: "End-to-end data solutions, from platform to insight",
      intro:
        "From the first pipeline to a platform the whole enterprise relies on, built to your standards and run with clear service levels.",
      items: [
        {
          title: "Modern data platforms",
          text: "Lakehouse and warehouse platforms on Databricks, Snowflake, Microsoft Fabric or BigQuery, designed around the questions your business actually asks.",
        },
        {
          title: "Pipelines and integration",
          text: "Batch and streaming pipelines from ERP, CRM, core systems and SaaS apps, with orchestration, lineage and automated recovery.",
        },
        {
          title: "Analytics engineering and BI",
          text: "Tested data models, a shared semantic layer and dashboards in Power BI, Tableau or Looker that leaders open every morning.",
        },
        {
          title: "Governance and data quality",
          text: "Catalogs, access policies, quality rules and lineage that satisfy audit and still let teams move quickly.",
        },
        {
          title: "AI-ready data products",
          text: "Feature tables, document stores ready for retrieval and curated datasets with clear owners, so AI projects start from trusted inputs.",
        },
        {
          title: "Platform operations and FinOps",
          text: "Monitoring, incident response, cost control and continuous tuning once the platform is live.",
        },
      ],
    },
    stack: {
      intro:
        "Each team is shaped around the platforms you run today and the roles your roadmap needs next.",
      groups: [
        {
          title: "Specialists",
          items: [
            "Data engineer",
            "Analytics engineer",
            "Data architect",
            "BI developer",
            "Data governance lead",
            "DataOps engineer",
            "Data product owner",
          ],
        },
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
        "Risk, liquidity and regulatory reporting from one reconciled source, with lineage an auditor can follow.",
      "industry-telecom":
        "Network, usage and billing data joined in near real time for churn, capacity and revenue-assurance analytics.",
      "industry-healthcare":
        "Claims, clinical and operational data on one governed platform, with patient data protected by design.",
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
        question: "We already have a data platform. Can your team work on it?",
        answer:
          "Yes. Most teams start on an existing platform. The first weeks go into learning your models, pipelines and controls, then into the backlog you already have.",
      },
      {
        question: "Can you deliver a complete data platform end to end?",
        answer:
          "Yes. We take ownership from assessment and architecture through migration, pipelines, governance and BI rollout. Then we run the platform with agreed service levels, or hand it over to your team with full documentation.",
      },
      {
        question: "Which data platforms do your specialists know?",
        answer:
          "Our data teams work across Databricks, Snowflake, Microsoft Fabric, BigQuery and the major cloud warehouses, plus dbt, Spark, Kafka and Airflow. We match the team to the stack you run, not the other way round.",
      },
      {
        question: "How do you keep sensitive data safe?",
        answer:
          "Teams work inside your environment and follow your access policies. Least-privilege access, masking for sensitive fields and audit logging are in place from day one.",
      },
      {
        question: "Can the same team support our AI projects?",
        answer:
          "Yes, and it's one of the best reasons to build the data foundation well. The team prepares data products for models and copilots and works alongside our Applied AI specialists.",
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
      "S/4HANA and RISE with SAP",
      "Clean-core extensions on BTP",
      "SAP data, ready for analytics and AI",
    ],
    problems: {
      heading: "Where SAP programs stall",
      rows: [
        {
          challenge: "Our S/4HANA move keeps slipping.",
          answer:
            "A phased roadmap built backwards from the end of ECC mainstream maintenance in 2027, with conversion, selective transition or greenfield chosen on evidence.",
        },
        {
          challenge: "Every upgrade breaks our custom code.",
          answer:
            "Custom code moved out of the core and onto SAP BTP through released APIs, so upgrades stay routine and your extensions keep working.",
        },
        {
          challenge: "Finance can't see SAP data next to everything else.",
          answer:
            "SAP Datasphere and SAP Analytics Cloud models that join ERP data with the rest of your platform and keep its business context intact.",
        },
        {
          challenge: "Our SAP experts spend their week on support tickets.",
          answer:
            "Application management with clear service levels, so your in-house experts can focus on change instead of keeping the lights on.",
        },
      ],
    },
    offerings: {
      heading: "SAP transformation, delivered end to end",
      intro:
        "Functional and technical depth in one team, from the first assessment to the support desk after go-live.",
      items: [
        {
          title: "S/4HANA transformation",
          text: "Assessment, roadmap and execution for system conversion, selective data transition or a new implementation, including RISE with SAP.",
        },
        {
          title: "Clean-core extensions",
          text: "Side-by-side apps and integrations on SAP BTP, CAP and Fiori that keep the core standard and upgrade-ready.",
        },
        {
          title: "Integration",
          text: "SAP Integration Suite, APIs and event-driven connections between SAP, CRM, banking, manufacturing and SaaS platforms.",
        },
        {
          title: "Enterprise data and planning",
          text: "SAP Datasphere, BW/4HANA and SAP Analytics Cloud for reporting, planning and AI-ready ERP data.",
        },
        {
          title: "Functional depth",
          text: "FI/CO, MM, SD, PP, PM and EWM specialists who understand the business process as well as the configuration.",
        },
        {
          title: "Application management",
          text: "Monitoring, incident resolution, release management and a steady backlog of improvements after go-live.",
        },
      ],
    },
    stack: {
      intro:
        "Functional leads, developers and architects in one team, so design decisions and build work never drift apart.",
      groups: [
        {
          title: "Specialists",
          items: [
            "SAP solution architect",
            "S/4HANA functional lead",
            "ABAP and RAP developer",
            "BTP developer",
            "Integration specialist",
            "Basis and cloud engineer",
            "SAP data engineer",
          ],
        },
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
        "SAP finance, group reporting and controlling, with clean data flowing into risk and regulatory systems.",
      "industry-telecom":
        "Order-to-cash, billing reconciliation and asset accounting that keep pace with constant network change.",
      "industry-healthcare":
        "Supply chain and finance on S/4HANA for hospital groups and life-science firms, with traceability built in.",
      "industry-energy":
        "SAP Plant Maintenance and asset management for plants, grids and field crews, linked to predictive maintenance.",
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
          "It depends on how much of your current process design you want to keep. Our architects assess custom code, data quality and appetite for change, then recommend a path with the trade-offs written down.",
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
        question: "Can your team support our SAP landscape after go-live?",
        answer:
          "Yes. The team that builds the change can run it, with service levels for incidents, a regular release rhythm and a backlog of improvements.",
      },
      {
        question: "Do your specialists work on RISE with SAP?",
        answer:
          "Yes. Our teams work on RISE with SAP and on private and public cloud editions of S/4HANA, as well as on-premise landscapes.",
      },
    ],
  },

  "cap-ai": {
    description:
      "GenAI and machine learning taken from use case to production, built on your data, governed for the enterprise and measured on business outcomes.",
    title: "Take AI from pilot to production.",
    lede: "We take AI from idea to production. We identify high-value use cases, engineer GenAI and machine learning solutions on your own data, and run them with the security, governance and monitoring your risk teams expect. Every use case is measured against a business outcome.",
    points: [
      "Copilots and knowledge assistants",
      "Document intelligence",
      "MLOps and LLMOps",
    ],
    problems: {
      heading: "Why AI pilots stall",
      rows: [
        {
          challenge: "Our pilot impressed everyone, then went nowhere.",
          answer:
            "Production engineering from the start: evaluation sets, monitoring, cost limits and a named owner for every model in service.",
        },
        {
          challenge: "We can't trust the answers it gives.",
          answer:
            "Retrieval grounded in your own documents, with citations, evaluation suites and human review for high-stakes decisions.",
        },
        {
          challenge: "Legal and security keep saying no.",
          answer:
            "Private deployments, data-residency controls, prompt and output filtering, and an audit trail your risk team can sign off.",
        },
        {
          challenge: "Nobody can tell us what AI is worth here.",
          answer:
            "Use cases ranked by value and feasibility, each with a baseline and a measure agreed before the build starts.",
        },
      ],
    },
    offerings: {
      heading: "AI solutions engineered for production",
      intro:
        "Use cases that earn their place in production, built on the data and controls you already have.",
      items: [
        {
          title: "Copilots and knowledge assistants",
          text: "Assistants grounded in your policies, manuals and tickets, with answers that cite their sources.",
        },
        {
          title: "Document intelligence",
          text: "Extraction and classification for invoices, claims, contracts and forms, with confidence scores and human review queues.",
        },
        {
          title: "Predictive models",
          text: "Forecasting, propensity, risk and anomaly models trained on your data and monitored for drift.",
        },
        {
          title: "Retrieval and search",
          text: "Retrieval-augmented generation, vector search and evaluation pipelines that keep answers accurate as your content changes.",
        },
        {
          title: "MLOps and LLMOps",
          text: "Model registries, CI/CD for models and prompts, evaluation gates, cost monitoring and safe rollback.",
        },
        {
          title: "Responsible AI",
          text: "Guardrails, bias testing, red-teaming and documentation aligned with frameworks such as the NIST AI RMF and the EU AI Act.",
        },
      ],
    },
    stack: {
      intro:
        "Engineers who can take a model from notebook to monitored service, on the cloud and model providers you trust.",
      groups: [
        {
          title: "Specialists",
          items: [
            "ML engineer",
            "GenAI engineer",
            "Data scientist",
            "MLOps engineer",
            "AI architect",
            "Evaluation engineer",
            "AI product owner",
          ],
        },
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
        "Fraud signals, KYC document checks and assistants that help service teams answer policy questions in seconds.",
      "industry-telecom":
        "Churn prediction, network anomaly detection and assistants that guide agents through complex service issues.",
      "industry-healthcare":
        "Claims and prior-authorization document processing, and assistants that support clinical operations teams.",
      "industry-energy":
        "Failure prediction, load and price forecasting, and inspection reports summarized from field notes and photos.",
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
          "No. A good first use case needs data that is good enough for one job. The team checks quality early, fixes what that use case needs, then builds from there.",
      },
      {
        question: "Will our data be used to train public models?",
        answer:
          "No. Models run in your cloud tenancy or through enterprise APIs with training on your data switched off, and access follows your existing controls.",
      },
      {
        question: "Which models do you use?",
        answer:
          "Whichever fits the task, cost and risk profile: commercial models through Azure OpenAI, Amazon Bedrock or Vertex AI, or open-weight models hosted privately. Evaluation results decide, not preference.",
      },
      {
        question: "How do you measure whether AI is working?",
        answer:
          "Every use case gets a baseline and a target before the build, plus an evaluation set for quality. We report both after release, so the decision to scale rests on evidence.",
      },
      {
        question: "Can your specialists work with our data science team?",
        answer:
          "Yes. They join your team's rituals and repositories, and often bring the production engineering that turns a promising prototype into a dependable service.",
      },
    ],
  },

  "cap-flow": {
    description:
      "AI agents and intelligent automation that complete multi-step work across ERP, CRM and ticketing systems, with human approvals, guardrails and audit trails.",
    title: "AI that doesn't just answer. It gets work done.",
    lede: "We design, build and run AI agents and automated workflows that complete multi-step work across your ERP, CRM and ticketing systems, from process discovery to production, with people approving the decisions that need judgment.",
    points: [
      "Agents with human approvals",
      "Guardrails and audit trails",
      "From RPA to AI workflows",
    ],
    problems: {
      heading: "Where automation hits a wall",
      rows: [
        {
          challenge: "Our teams spend the day copying data between systems.",
          answer:
            "Agents that read the request, pull what's needed from each system, update the records and route only the exceptions to a person.",
        },
        {
          challenge: "Our bots break every time a screen changes.",
          answer:
            "API-first automation, with AI handling unstructured inputs, so workflows survive new screens and new document formats.",
        },
        {
          challenge: "Audit wants to know exactly what the automation did.",
          answer:
            "Every action logged with its inputs, its reasoning and its approver, in a format your audit and risk teams can review.",
        },
        {
          challenge: "We have dozens of ideas and no way to choose.",
          answer:
            "A discovery sprint that scores candidate workflows on volume, effort and risk, then builds the strongest ones first.",
        },
      ],
    },
    offerings: {
      heading: "Intelligent automation, delivered end to end",
      intro:
        "Agents and workflows that finish the job, with people in charge of the moments that need judgment.",
      items: [
        {
          title: "AI agents for operations",
          text: "Agents that triage tickets, reconcile records, prepare reports and complete requests from start to finish.",
        },
        {
          title: "Human-in-the-loop workflows",
          text: "Approval steps, confidence thresholds and escalation paths, so people stay in charge of the decisions that matter.",
        },
        {
          title: "Intelligent document flows",
          text: "Inbound email, forms and PDFs classified, extracted and routed into the right system automatically.",
        },
        {
          title: "RPA modernization",
          text: "Fragile screen bots replaced or reinforced with APIs and AI, and existing UiPath or Power Automate estates brought under one model.",
        },
        {
          title: "Guardrails and observability",
          text: "Permission scopes, policy checks, tool limits, tracing and cost dashboards for every agent in service.",
        },
        {
          title: "Process discovery",
          text: "Process and task mining that shows where work waits, where it repeats and where automation will pay back first.",
        },
      ],
    },
    stack: {
      intro:
        "Process thinkers and engineers in one team, building on the automation platforms you already own.",
      groups: [
        {
          title: "Specialists",
          items: [
            "AI automation engineer",
            "Agent developer",
            "Automation architect",
            "Process analyst",
            "Integration engineer",
            "RPA developer",
          ],
        },
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
        "KYC refresh, payment exceptions and dispute workflows that close faster, with every approval logged for audit.",
      "industry-telecom":
        "Order fallout, provisioning errors and service tickets resolved end to end, with engineers called in only for real faults.",
      "industry-healthcare":
        "Eligibility checks, prior authorizations and claim follow-ups prepared automatically for your team to review and send.",
      "industry-energy":
        "Work orders, permits and field reports raised and updated from technician notes and sensor alerts.",
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
          "RPA follows fixed steps on a screen. An agent works from a goal: it reads unstructured input, decides which tools to use and asks a person when it isn't sure. Most estates use both.",
      },
      {
        question: "How do you stop an agent from doing something it shouldn't?",
        answer:
          "Agents get narrow permissions, approved tools and spending limits. Risky actions need a human approval, and every step is logged so it can be reviewed or reversed.",
      },
      {
        question: "Do we have to replace our current automation tools?",
        answer:
          "No. Teams build on what you run today, including Power Automate, UiPath and ServiceNow, and add AI where it removes manual work.",
      },
      {
        question: "Which processes should we automate first?",
        answer:
          "High-volume work with clear rules for most cases and a manageable set of exceptions. The discovery sprint ranks candidates so the first release pays back quickly.",
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
      "Web and mobile products",
      "Legacy modernization",
      "Platform engineering and DevSecOps",
    ],
    problems: {
      heading: "Where delivery slows down",
      rows: [
        {
          challenge: "Every release waits on the legacy platform.",
          answer:
            "A step-by-step modernization that moves functions to new services one at a time, while the old system keeps running.",
        },
        {
          challenge: "Releasing takes weeks of manual testing.",
          answer:
            "Automated test suites, CI/CD pipelines and feature flags, so releases become small, frequent and routine.",
        },
        {
          challenge: "Our cloud bill grows faster than our product.",
          answer:
            "Right-sized infrastructure as code, autoscaling and cost visibility per service and per team.",
        },
        {
          challenge: "Security reviews arrive at the end and block launches.",
          answer:
            "Code scanning, dependency checks and threat modeling inside the pipeline, not after it.",
        },
      ],
    },
    offerings: {
      heading: "Digital products, from concept to scale",
      intro:
        "Product, design and engineering in one team, measured on what users do with the software, not on tickets closed.",
      items: [
        {
          title: "Web and mobile applications",
          text: "Customer and employee apps in React, Next.js, Flutter and native mobile, designed with users and measured in production.",
        },
        {
          title: "Cloud-native services",
          text: "APIs and microservices in Java, .NET, Node.js and Go on AWS, Azure or Google Cloud.",
        },
        {
          title: "Legacy modernization",
          text: "Monoliths and older applications re-platformed or rebuilt in stages, without freezing the roadmap.",
        },
        {
          title: "Platform engineering",
          text: "Internal developer platforms, Kubernetes, infrastructure as code and golden paths that make the right way the easy way.",
        },
        {
          title: "Quality engineering",
          text: "Test automation, performance and accessibility testing built into every pipeline.",
        },
        {
          title: "AI-assisted engineering",
          text: "Coding assistants, AI test generation and review tooling used inside clear guardrails, so teams ship faster without lowering the bar.",
        },
      ],
    },
    stack: {
      intro:
        "Cross-functional teams sized to the product, from a focused squad to a full engineering hub.",
      groups: [
        {
          title: "Specialists",
          items: [
            "Full-stack engineer",
            "Java engineer",
            "Mobile engineer",
            "Cloud architect",
            "Platform and SRE engineer",
            "QA automation engineer",
            "UX designer",
            "Product owner",
          ],
        },
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
        "Patient and member portals, care-team tools and interoperability services built on FHIR APIs.",
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
        question: "Can your team take over an existing codebase?",
        answer:
          "Yes. The team starts with a codebase and architecture review, documents what it finds and agrees priorities with you before changing anything significant.",
      },
      {
        question: "Do you work in our tools and processes?",
        answer:
          "Yes. Teams join your repositories, ticketing and rituals and follow your definition of done. Where there are gaps, we suggest improvements rather than impose a method.",
      },
      {
        question: "How do you modernize without stopping new features?",
        answer:
          "We move one capability at a time behind stable interfaces, so product work continues while the legacy footprint shrinks every quarter.",
      },
      {
        question: "How do your teams use AI in engineering?",
        answer:
          "Coding and testing assistants help with routine work, inside guardrails your security team approves. Engineers review every change, and nothing ships without passing the pipeline.",
      },
    ],
  },
};

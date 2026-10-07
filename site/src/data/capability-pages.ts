/**
 * Copy for each capability page under `/capabilities/`, keyed by capability
 * id from `CAPABILITIES`. Anything in `[brackets]` is a placeholder that
 * shows as unconfirmed until ManyaIT signs it off.
 */
export type CapabilityPage = {
  /** Browser and share title, before " | ManyaIT". */
  seoTitle: string;
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
  /** The roles behind the work, in one line. */
  team: string;
  /** One line per industry, keyed by industry id. */
  industries: Record<string, string>;
  outcomes: { value: string; label: string }[];
  faq: { question: string; answer: string }[];
};

export const CAPABILITY_PAGES: Record<string, CapabilityPage> = {
  "cap-data": {
    seoTitle: "Data & Analytics Engineering",
    description:
      "Lakehouse platforms, governed pipelines and AI-ready data products, architected, engineered and operated end to end.",
    title: "Turn enterprise data into decision-grade intelligence.",
    lede: "We architect, engineer and operate the data platforms your business and your AI depend on, from data strategy and lakehouse design to governed pipelines, semantic layers and self-service analytics, delivered end to end and accountable in production.",
    points: [
      "A governed single source of truth",
      "AI-ready data products",
      "Analytics at enterprise scale",
    ],
    problems: {
      heading: "Where data programs lose value",
      rows: [
        {
          challenge: "Every team has its own version of revenue.",
          answer:
            "A governed semantic layer with shared business definitions, so every function decides from the same numbers.",
        },
        {
          challenge: "Our reports are a day old before anyone opens them.",
          answer:
            "Streaming and incremental pipelines with freshness service levels, so leaders act on what is happening now.",
        },
        {
          challenge: "Our AI initiatives wait months for usable data.",
          answer:
            "Contract-backed data products with named owners and automated quality gates, so AI starts from trusted inputs.",
        },
        {
          challenge:
            "Cloud data spend keeps climbing and nobody can explain it.",
          answer:
            "FinOps with workload-level cost attribution, so platform spend tracks business value.",
        },
      ],
    },
    offerings: {
      heading: "End-to-end data engineering, from platform to insight",
      intro:
        "From data strategy to a platform the whole enterprise relies on, engineered for scale, governed by design and operated against clear service levels.",
      items: [
        {
          title: "Data strategy & AI-readiness",
          text: "Maturity assessment, target-state data architecture and a value-ranked roadmap leadership can fund.",
        },
        {
          title: "Lakehouse & cloud data platforms",
          text: "Databricks, Snowflake, Microsoft Fabric and BigQuery platforms designed around the decisions the business needs to make.",
        },
        {
          title: "Data engineering & pipelines",
          text: "Batch, streaming and change-data-capture pipelines that unify ERP, CRM, core and SaaS data with end-to-end lineage.",
        },
        {
          title: "Governance, quality & observability",
          text: "Cataloging, access policy, quality rules and data observability that satisfy regulators without slowing delivery.",
        },
        {
          title: "Data products & master data",
          text: "Owned, versioned data products and governed master data that give analytics and AI a trusted foundation.",
        },
        {
          title: "BI & semantic layer",
          text: "Governed metrics and self-service analytics that put consistent numbers in front of every decision-maker.",
        },
      ],
    },
    stack: {
      intro:
        "We work with the platforms you already run and the ones your roadmap calls for next, so every program builds on existing investment.",
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
    team: "Data architects, data and analytics engineers, platform engineers and BI specialists, led by an accountable delivery lead.",
    industries: {
      "industry-banking":
        "Reconciled risk, liquidity and regulatory data with lineage auditors can follow.",
      "industry-telecom":
        "Network, usage and billing data unified for retention, capacity planning and revenue assurance.",
      "industry-healthcare":
        "Clinical, claims and operational data on one governed platform, with privacy built in.",
      "industry-energy":
        "Sensor, maintenance and market data combined for asset health, forecasting and emissions reporting.",
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
          "Yes. Most programs start on an existing estate. We assess what is in place, protect what works and modernize against your priorities rather than starting over.",
      },
      {
        question: "Can you deliver a complete data platform end to end?",
        answer:
          "Yes. We own the path from assessment and architecture through migration, pipelines, governance and BI rollout, then operate the platform under agreed service levels or hand it over with full documentation and runbooks.",
      },
      {
        question: "Which data platforms do you work with?",
        answer:
          "Databricks, Snowflake, Microsoft Fabric, BigQuery and the major cloud warehouses, with dbt, Spark, Kafka and Airflow. We work with the platforms you have chosen, not the other way around.",
      },
      {
        question: "How do you keep sensitive data safe?",
        answer:
          "We work inside your environment under your access policies, with least-privilege access, masking of sensitive data and audit logging from day one.",
      },
      {
        question: "Can the data platform support our AI initiatives?",
        answer:
          "Yes, and it is one of the strongest reasons to build the foundation well. We prepare AI-ready data products alongside our Applied AI practice, so models and copilots start from trusted data.",
      },
      {
        question: "How quickly can we get started?",
        answer:
          "Work can begin as soon as the scope is agreed. A focused team can start with an assessment or a first pipeline while the wider program mobilizes.",
      },
    ],
  },

  "cap-sap": {
    seoTitle: "SAP S/4HANA & Enterprise Data",
    description:
      "End-to-end S/4HANA transformation, clean-core BTP extensions and SAP data integration, from readiness assessment to hypercare.",
    title: "Modernize your SAP core and put its data to work.",
    lede: "Functional and technical SAP specialists who take your ERP from readiness assessment through S/4HANA transformation, go-live and hypercare, keeping the core clean and connecting SAP data to finance, supply chain, operations and AI.",
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
            "A phased roadmap anchored to the end of ECC mainstream maintenance in 2027, with the transition path chosen on evidence from code, data and process analysis.",
        },
        {
          challenge: "Every upgrade breaks our custom code.",
          answer:
            "A clean-core approach that moves custom logic onto SAP BTP through released APIs, so upgrades become routine and innovation no longer waits on the core.",
        },
        {
          challenge: "Finance can't see SAP data next to everything else.",
          answer:
            "SAP data federated with the rest of the enterprise, business semantics intact, so finance and operations plan from one view.",
        },
        {
          challenge: "Our SAP experts spend their week on support tickets.",
          answer:
            "Application management under clear service levels, releasing your in-house experts to focus on transformation.",
        },
      ],
    },
    offerings: {
      heading: "SAP transformation, delivered end to end",
      intro:
        "Business process and technical depth in one accountable program, from readiness assessment to stable operations after go-live.",
      items: [
        {
          title: "S/4HANA transformation",
          text: "Readiness assessment, roadmap and delivery for system conversion, selective data transition or new implementation, including RISE with SAP.",
        },
        {
          title: "Clean-core extensions",
          text: "Side-by-side innovation on SAP BTP through released APIs, keeping the core standard, secure and upgrade-ready.",
        },
        {
          title: "Integration",
          text: "Event- and API-led integration between SAP and your CRM, banking, manufacturing and SaaS platforms, so processes flow end to end.",
        },
        {
          title: "SAP data, planning & analytics",
          text: "Datasphere, Analytics Cloud and BW/4HANA delivering a single, current view of the business and AI-ready ERP data.",
        },
        {
          title: "Data migration & master data",
          text: "Cleansing, migration and master data governance, so the new core starts clean and stays that way.",
        },
        {
          title: "Application management",
          text: "Monitoring, incident resolution, release management and continuous improvement after go-live, under agreed service levels.",
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
    team: "Solution architects, functional leads across finance, supply chain, manufacturing and asset management, ABAP and BTP developers, and integration specialists.",
    industries: {
      "industry-banking":
        "Finance, group reporting and controlling on SAP, with clean data flowing into risk and regulatory reporting.",
      "industry-telecom":
        "Order-to-cash, billing reconciliation and asset accounting that keep pace with network change.",
      "industry-healthcare":
        "Supply chain and finance on S/4HANA for providers and life-sciences organizations, with traceability built in.",
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
          "It depends on how much of your current process design you want to keep. We assess custom code, data quality and appetite for change, then recommend a path with the trade-offs documented.",
      },
      {
        question: "Can you run a complete S/4HANA program end to end?",
        answer:
          "Yes. Readiness assessment, roadmap, data migration, custom-code remediation, testing, cutover and hypercare, with one accountable team from the first workshop to stable operations.",
      },
      {
        question: "What does clean core mean in practice?",
        answer:
          "Keeping S/4HANA as close to standard as possible and building extensions on SAP BTP through released APIs. Upgrades get faster and cheaper because nothing custom sits inside the core.",
      },
      {
        question: "Do you deliver on RISE with SAP?",
        answer:
          "Yes. We deliver on RISE with SAP, on private and public cloud editions of S/4HANA, and on on-premise landscapes, then support them after go-live under agreed service levels.",
      },
    ],
  },

  "cap-ai": {
    seoTitle: "Applied AI & Generative AI Engineering",
    description:
      "Generative AI and machine learning taken from use case to production, built on your data, governed for the enterprise and measured on outcomes.",
    title: "Take AI from pilot to production.",
    lede: "We identify high-value use cases, engineer generative AI and machine learning on your own data, and operate them with the evaluation, security and observability your risk teams expect. Every use case is tied to a measurable business outcome.",
    points: [
      "A value-ranked AI portfolio",
      "Governed, production-grade AI",
      "Outcomes measured against a baseline",
    ],
    problems: {
      heading: "Why AI initiatives stall before production",
      rows: [
        {
          challenge: "Our pilot impressed everyone, then went nowhere.",
          answer:
            "Production engineering from day one: named ownership, evaluation harnesses, observability and cost controls for every model in service.",
        },
        {
          challenge: "We can't trust the answers it gives.",
          answer:
            "Retrieval-grounded AI with cited sources, continuous evaluation and human review for high-stakes decisions.",
        },
        {
          challenge: "Legal and security keep saying no.",
          answer:
            "Private deployment, data-residency controls and a complete audit trail, designed to the standards your risk and compliance teams set.",
        },
        {
          challenge: "Nobody can tell us what AI is worth here.",
          answer:
            "Use cases prioritized by value and feasibility, each with a baseline and a success measure agreed before work begins.",
        },
      ],
    },
    offerings: {
      heading: "AI solutions engineered for production",
      intro:
        "AI that earns its place in production, built on your data and governed by the controls you already trust.",
      items: [
        {
          title: "AI strategy & use-case portfolio",
          text: "Use cases ranked by value, feasibility and risk, each with a baseline and a business case.",
        },
        {
          title: "Copilots & knowledge assistants",
          text: "Retrieval-augmented assistants grounded in your policies and institutional knowledge, with every answer traceable to its source.",
        },
        {
          title: "Document intelligence",
          text: "Invoices, claims, contracts and forms processed automatically, with people reviewing only the exceptions that need judgment.",
        },
        {
          title: "Predictive & prescriptive models",
          text: "Forecasting, risk, anomaly and optimization models that let the business anticipate rather than react.",
        },
        {
          title: "MLOps & LLMOps",
          text: "Evaluation harnesses, release management, monitoring and token-cost control that keep every model dependable after launch.",
        },
        {
          title: "Responsible AI & model risk",
          text: "Guardrails, bias testing, adversarial testing and documentation aligned with frameworks such as the NIST AI RMF and the EU AI Act.",
        },
      ],
    },
    stack: {
      intro:
        "Experience across leading cloud AI platforms and model providers, so each use case runs on the option that best fits its cost, risk and performance profile.",
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
    team: "AI architects, ML and GenAI engineers, data scientists and MLOps engineers, working alongside your risk and domain teams.",
    industries: {
      "industry-banking":
        "Fraud detection, KYC document checks and assistants that help service teams resolve customer questions faster.",
      "industry-telecom":
        "Churn prediction, network anomaly detection and assistants that guide service teams through complex customer issues.",
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
          "Yes. Use-case discovery, data readiness, prototyping, evaluation, production engineering, MLOps and post-release monitoring, so a promising idea becomes a dependable, governed service.",
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
          "Every use case gets a baseline, a target and a quality evaluation before work begins. We report both after release, so the decision to scale rests on evidence.",
      },
    ],
  },

  "cap-flow": {
    seoTitle: "Agentic AI & Intelligent Automation",
    description:
      "AI agents and orchestrated workflows that complete multi-step work across ERP, CRM and service platforms, with human approvals and audit trails.",
    title: "AI that doesn't just answer. It executes.",
    lede: "We design, build and operate AI agents and orchestrated workflows that complete multi-step work across your ERP, CRM and service platforms, from process discovery to production, with human approval where judgment matters and an audit trail behind every action.",
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
            "Orchestrated workflows that interpret each request, update every system of record involved and route only the exceptions to a person.",
        },
        {
          challenge: "Our bots break every time a screen changes.",
          answer:
            "API-first, event-driven automation with AI handling unstructured inputs, so workflows stay resilient as systems and documents change.",
        },
        {
          challenge: "Audit wants to know exactly what the automation did.",
          answer:
            "An immutable record of every action, its inputs and its approver, ready for audit and risk review.",
        },
        {
          challenge: "We have dozens of ideas and no way to choose.",
          answer:
            "Process intelligence that ranks opportunities by value, effort and risk, so the first releases return measurable value.",
        },
      ],
    },
    offerings: {
      heading: "Intelligent automation, delivered end to end",
      intro:
        "Agents and workflows that complete real work end to end, with people in control of the decisions that need judgment.",
      items: [
        {
          title: "Process intelligence & discovery",
          text: "Process and task mining that shows where work waits, where it repeats and where automation pays back first.",
        },
        {
          title: "Agentic workflow orchestration",
          text: "Agents that plan, call approved tools and complete multi-step work across systems, from intake to resolution.",
        },
        {
          title: "Human-in-the-loop controls",
          text: "Approval steps, confidence thresholds and escalation paths that keep people in charge of the decisions that matter.",
        },
        {
          title: "Intelligent document flows",
          text: "Emails, forms and documents classified, extracted and routed into the right system without manual handling.",
        },
        {
          title: "RPA & low-code modernization",
          text: "Brittle screen-based bots hardened or replaced with APIs and AI, and existing automation estates brought under one operating model.",
        },
        {
          title: "Agent governance & lifecycle management",
          text: "Permissions, policy enforcement, observability, versioning and cost visibility for every agent in production.",
        },
      ],
    },
    stack: {
      intro:
        "Experience across the automation and enterprise platforms you already own, so automation builds on existing investment.",
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
    team: "Automation architects, agent and integration engineers, and process analysts who understand the operations they automate.",
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
          "RPA follows fixed steps on a screen. An agent works toward a goal: it reads unstructured input, decides which approved tools to use and asks a person when it is unsure. Most organizations use both.",
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
          "Yes. We discover and prioritize processes, design the agents and workflows, integrate them with your systems and run them in production with monitoring, governance and continuous improvement.",
      },
    ],
  },

  "cap-code": {
    seoTitle: "Digital Product Engineering",
    description:
      "Cloud-native web, mobile and platform products designed, built and run end to end, with AI-augmented engineering and DevSecOps in every release.",
    title: "Engineer digital products that scale.",
    lede: "From product strategy and experience design to architecture, engineering and release, we build and run cloud-native web, mobile and platform products, with AI-augmented engineering, DevSecOps and quality engineering in every release.",
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
            "Incremental modernization that moves capabilities to modern services behind stable interfaces, while existing systems keep running.",
        },
        {
          challenge: "Releasing takes weeks of manual testing.",
          answer:
            "Automated testing and CI/CD pipelines that make releases smaller, faster and routine.",
        },
        {
          challenge: "Our cloud bill grows faster than our product.",
          answer:
            "Right-sized, codified infrastructure with cost visibility for every product and service.",
        },
        {
          challenge: "Security reviews arrive at the end and block launches.",
          answer:
            "Shift-left security across the delivery lifecycle, so risks surface early instead of at launch.",
        },
      ],
    },
    offerings: {
      heading: "Digital products, from concept to scale",
      intro:
        "Product strategy, design and engineering working as one, measured on business results rather than activity.",
      items: [
        {
          title: "Product strategy & experience design",
          text: "Discovery, service design and UX research that shape products around real users and measurable outcomes.",
        },
        {
          title: "Cloud-native application engineering",
          text: "Web and mobile applications and scalable services on AWS, Azure or Google Cloud that grow without re-engineering.",
        },
        {
          title: "Legacy modernization",
          text: "Older applications re-platformed or rebuilt in stages, without freezing the product roadmap.",
        },
        {
          title: "APIs, microservices & integration",
          text: "Domain-driven services and well-governed APIs that let products and partners connect cleanly.",
        },
        {
          title: "Platform engineering, DevSecOps & SRE",
          text: "Internal developer platforms, infrastructure as code and reliability engineering that make secure, repeatable delivery the default.",
        },
        {
          title: "Quality engineering",
          text: "Automated functional, performance and accessibility testing built into every release.",
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
    team: "Product managers, UX designers, solution architects, full-stack, mobile and platform engineers, and quality engineers.",
    industries: {
      "industry-banking":
        "Digital banking apps, payment services and open-banking APIs, released safely through automated controls.",
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
          "Yes. Discovery, experience design, architecture, engineering, quality and release, then support and evolution after launch, with the same accountable team throughout.",
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
          "AI assistants support coding, testing and review within guardrails your security team approves. An engineer reviews every change, and nothing ships without passing the release pipeline.",
      },
    ],
  },
};

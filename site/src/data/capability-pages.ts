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
  /** How this kind of work runs: heading, intro and four steps with tags. */
  howItWorks: {
    heading: string;
    intro: string;
    steps: { title: string; text: string; note: string }[];
  };
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
        "From data strategy and target-state architecture to a governed lakehouse the whole enterprise relies on, with lineage, observability and service levels engineered in from day one.",
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
    howItWorks: {
      heading: "From fragmented data to decision-grade intelligence",
      intro:
        "Every data program moves from an honest view of today's estate to a governed platform the business relies on, with value proven at each stage.",
      steps: [
        {
          title: "Assess & prioritize",
          text: "We profile your data estate, platforms and quality, map the decisions the business needs to make, and rank use cases by value and readiness.",
          note: "Value-ranked data roadmap",
        },
        {
          title: "Architect & govern",
          text: "We design the target lakehouse, semantic layer and data contracts, and set ownership, access policy and quality rules before any data moves.",
          note: "Governance by design",
        },
        {
          title: "Engineer & migrate",
          text: "We build pipelines, data products and BI in increments, migrating and reconciling domain by domain so reporting never goes dark.",
          note: "No gap in reporting",
        },
        {
          title: "Operate & optimize",
          text: "We run the platform under freshness and quality service levels, with observability and FinOps keeping it reliable and cost-efficient as it grows.",
          note: "Trusted data, controlled spend",
        },
      ],
    },
    industries: {
      "industry-banking":
        "Reconciled risk, liquidity and regulatory data with lineage auditors can follow.",
      "industry-telecom":
        "Network, usage and billing data unified for retention, capacity planning and revenue assurance.",
      "industry-healthcare":
        "Clinical, claims and operational data on one governed platform, with privacy built in.",
      "industry-energy":
        "Sensor, maintenance and market data combined for asset health, forecasting and emissions reporting.",
      "industry-retail":
        "Customer, inventory and transaction data unified for demand forecasting and lifetime value.",
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
        "Functional and technical SAP depth in one accountable program, from readiness assessment and S/4HANA transformation to clean-core extensions and stable operations after go-live.",
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
    howItWorks: {
      heading: "From readiness assessment to a clean, modern core",
      intro:
        "SAP programs succeed when the transition path is chosen on evidence and the business never stops running. Every program follows the same disciplined path.",
      steps: [
        {
          title: "Assess readiness",
          text: "We analyze custom code, data quality, processes and integrations, then recommend conversion, selective transition or new implementation, with the trade-offs documented.",
          note: "Path chosen on evidence",
        },
        {
          title: "Design to standard",
          text: "We fit processes to SAP standard first, design clean-core extensions on SAP BTP, and plan data migration and integration.",
          note: "Clean core from day one",
        },
        {
          title: "Build, test & cut over",
          text: "Iterative build, automated regression testing and rehearsed data loads lead to a cutover planned around your business calendar.",
          note: "Rehearsed, low-risk go-live",
        },
        {
          title: "Stabilize & run",
          text: "Hypercare after go-live, then application management under agreed service levels and a continuous-improvement roadmap.",
          note: "Stable operations, ongoing value",
        },
      ],
    },
    industries: {
      "industry-banking":
        "Finance, group reporting and controlling on SAP, with clean data flowing into risk and regulatory reporting.",
      "industry-telecom":
        "Order-to-cash, billing reconciliation and asset accounting that keep pace with network change.",
      "industry-healthcare":
        "Supply chain and finance on S/4HANA for providers and life-sciences organizations, with traceability built in.",
      "industry-energy":
        "Asset management and maintenance for plants, grids and field operations, linked to predictive maintenance.",
      "industry-retail":
        "Merchandising, finance and supply chain on S/4HANA with clean master data.",
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
        "Generative AI and machine learning engineered for production: grounded in your enterprise data, governed by your existing controls and measured against business outcomes.",
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
    howItWorks: {
      heading: "From promising use case to governed production AI",
      intro:
        "AI earns its place when value is measured and risk is controlled. Each use case moves through the same evidence-based path.",
      steps: [
        {
          title: "Identify & baseline",
          text: "We rank use cases by value, feasibility and risk, then agree a baseline and a success measure for each before any build begins.",
          note: "Value defined up front",
        },
        {
          title: "Prepare & prototype",
          text: "We ready the data the use case needs and build a working prototype, tested against an evaluation set drawn from your real work.",
          note: "Evidence before scale",
        },
        {
          title: "Engineer for production",
          text: "We add security, guardrails, human review and monitoring, and integrate the model into the systems and workflows where the work happens.",
          note: "Production-grade from release",
        },
        {
          title: "Measure & improve",
          text: "We track outcomes against the baseline, monitor quality, drift and cost, and refine the model as your data and needs change.",
          note: "Outcomes you can prove",
        },
      ],
    },
    industries: {
      "industry-banking":
        "Fraud detection, KYC document checks and assistants that help service teams resolve customer questions faster.",
      "industry-telecom":
        "Churn prediction, network anomaly detection and assistants that guide service teams through complex customer issues.",
      "industry-healthcare":
        "Claims and prior-authorization processing, and assistants that support clinical operations.",
      "industry-energy":
        "Failure prediction, load and price forecasting, and inspection reports summarized automatically from field notes.",
      "industry-retail":
        "Demand forecasting, pricing and personalization models in production.",
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
        "Orchestrated AI agents and intelligent workflows that execute multi-step work across systems of record, with human approval and a full audit trail where judgment matters.",
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
    howItWorks: {
      heading: "From process insight to agents that get work done",
      intro:
        "Automation pays back when the right processes go first and people stay in control. Every program follows the same governed path.",
      steps: [
        {
          title: "Discover & rank",
          text: "Process and task mining shows where work waits and repeats, and ranks candidates by value, effort and risk.",
          note: "Right processes first",
        },
        {
          title: "Design with controls",
          text: "We define each agent's goals, approved tools, permissions and human approval points, along with the audit trail every action will leave.",
          note: "People in control",
        },
        {
          title: "Build & integrate",
          text: "Agents and workflows are built API-first, connected to your systems of record and tested on real exceptions before release.",
          note: "Resilient by design",
        },
        {
          title: "Run & scale",
          text: "We monitor every agent for accuracy, cost and policy compliance, then extend automation to the next process as value is proven.",
          note: "Audit-ready at scale",
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
      "industry-retail":
        "Order exceptions, returns and replenishment handled end to end.",
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

  /* Content from "ManyaIT Projects & Development Capability Page: Content"
     (7 October 2026), on this page under its existing name. */
  "cap-code": {
    seoTitle: "Digital Product Engineering",
    description:
      "Greenfield platforms, zero-downtime modernization, AI integration and recovery of stalled programs, delivered to production by one accountable team.",
    title: "Complex programs, delivered to production.",
    lede: "We take ambitious blueprints, legacy estates and stalled initiatives through to production-grade enterprise platforms. Architects, engineers and data specialists own the work end to end, under DevSecOps delivery and the compliance controls your enterprise runs on.",
    points: [
      "Greenfield platforms built to scale",
      "Modernization without downtime",
      "Stalled programs brought back on track",
    ],
    problems: {
      heading: "Where complex programs break down",
      rows: [
        {
          challenge:
            "We need a new platform, and the clock is already running.",
          answer:
            "Cloud-native, multi-tenant architecture designed in discovery and proven in a working slice before full build, so speed never comes at the cost of scale.",
        },
        {
          challenge:
            "The monolith is too risky to touch and too costly to keep.",
          answer:
            "Domain-driven decomposition behind API gateways, moving one capability at a time while the business keeps running.",
        },
        {
          challenge: "Our AI pilots never reach the systems that matter.",
          answer:
            "AI and agent workflows integrated into core processes, grounded in governed enterprise data with traceable lineage.",
        },
        {
          challenge:
            "Our program is behind, over budget and losing confidence.",
          answer:
            "An independent technical audit, a re-baselined plan and SRE-led stabilization that restore predictable delivery.",
        },
      ],
    },
    offerings: {
      heading: "Complex program delivery, end to end",
      intro:
        "Product strategy, experience design and cloud-native engineering working as one team, with DevSecOps in every release and success measured on business outcomes, not output.",
      items: [
        {
          title: "Greenfield platform engineering",
          text: "Cloud-native, multi-tenant platforms built on microservices, event streaming and governed APIs, designed to grow with the business.",
        },
        {
          title: "Monolith decomposition & legacy modernization",
          text: "Domain-driven decomposition, incremental migration and API-first refactoring that retire legacy risk without downtime.",
        },
        {
          title: "Data and database modernization",
          text: "Legacy data structures moved to modern databases and medallion lakehouses, with lineage and reconciliation at every step.",
        },
        {
          title: "AI and agentic integration",
          text: "Language models and agent workflows embedded in core processes, grounded through retrieval and knowledge graphs, with audit-ready lineage.",
        },
        {
          title: "Program recovery & stabilization",
          text: "Code and architecture audits, CI/CD repair, performance tuning and security remediation that bring stalled initiatives to production.",
        },
        {
          title: "Cloud-native DevSecOps foundations",
          text: "Infrastructure as code, zero-trust access and self-healing clusters that make every release secure and repeatable.",
        },
      ],
    },
    /* "Program types and technologies": each program type with its platforms. */
    stack: {
      intro:
        "Every program type has its own delivery priorities. We match the architecture and toolchain to the problem, not the other way around.",
      groups: [
        {
          title: "Enterprise SaaS & composable web",
          items: [
            "Strongly typed microservices",
            "Server-side rendering",
            "GraphQL",
            "gRPC",
          ],
        },
        {
          title: "Distributed data pipelines",
          items: [
            "Apache Iceberg",
            "Delta Lake",
            "Cloud data warehouses",
            "Apache Kafka",
            "Apache Spark",
          ],
        },
        {
          title: "Cloud-native DevSecOps",
          items: [
            "Kubernetes",
            "Terraform",
            "GitOps deployment pipelines",
            "OpenTelemetry",
          ],
        },
      ],
    },
    team: "Solution and enterprise architects, backend and full-stack engineers, data engineers, SRE and DevSecOps engineers, and AI engineers, led by an accountable program lead.",
    howItWorks: {
      heading: "How we deliver complex programs",
      intro:
        "Every program follows the same accountable path, with risk retired early and value proven before scale.",
      steps: [
        {
          title: "Discover & map",
          text: "We audit the target environment, dependencies, data maturity and constraints, and agree outcomes and success measures.",
          note: "Risks visible before build",
        },
        {
          title: "Prove value",
          text: "Within [X] weeks, we build a working, sandboxed slice of the architecture to test assumptions and validate the business case.",
          note: "Evidence before investment",
        },
        {
          title: "Deliver continuously",
          text: "Cross-functional teams of architects, data engineers and DevSecOps specialists ship production-ready increments through automated testing and release pipelines.",
          note: "Value from the first sprint",
        },
        {
          title: "Govern & transfer",
          text: "We hand over a documented, audit-ready platform with runbooks, or operate it under agreed availability service levels.",
          note: "Built to last, yours to keep",
        },
      ],
    },
    industries: {
      "industry-banking":
        "Core and payment platform modernization, and recovery of high-concurrency transaction systems.",
      "industry-telecom":
        "BSS decomposition and multi-tenant partner platforms built to keep pace with network change.",
      "industry-healthcare":
        "Interoperability platforms and legacy claims systems modernized without service interruption.",
      "industry-energy":
        "Field and asset platforms rebuilt on cloud-native foundations, with operational data kept safely segmented.",
      "industry-retail":
        "Composable commerce and order platforms engineered for peak trading.",
    },
    outcomes: [
      { value: "[X]x", label: "more frequent releases" },
      { value: "[X]%", label: "lower change failure rate" },
      { value: "[X]%", label: "lower infrastructure cost" },
      { value: "[X] wks", label: "to a productive product team" },
    ],
    faq: [
      {
        question: "Can you take over a program that is already in trouble?",
        answer:
          "Yes. We start with an independent audit of code, architecture, delivery and risk, share the findings openly, then agree a re-baselined plan before taking ownership of delivery.",
      },
      {
        question: "How do you modernize without downtime?",
        answer:
          "We decompose by business domain, route traffic through API gateways and migrate one capability at a time, with parallel running and reconciliation until each cutover is proven.",
      },
      {
        question: "How do you keep AI outputs reliable in production?",
        answer:
          "We ground models in governed enterprise data through retrieval and knowledge graphs, evaluate them continuously, require human approval for high-stakes actions and record the lineage of every output.",
      },
      {
        question: "Do you run what you build?",
        answer:
          "Yes, under agreed availability and response service levels, or we hand over to your teams with complete documentation and runbooks.",
      },
      {
        question: "How quickly can we get started?",
        answer:
          "Most programs begin within [X] weeks of an agreed scope, starting with discovery and a proof of value.",
      },
    ],
  },
};

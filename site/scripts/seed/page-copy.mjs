/*
 * Copy that's typed straight into component markup today, so the seed can't
 * read it from a data file. Each string is copied word for word from the
 * component named beside it; `seed-sanity.mjs` checks that every one still
 * appears on the built page. Page headers, FAQs and page titles are read
 * from the page files themselves.
 */

export const HOME = {
  /* HeroHome.astro */
  hero: {
    badge: "Technology & Talent Partners",
    heading: "Build the capabilities your enterprise",
    highlight: "needs next.",
    lede: "ManyaIT helps global enterprises establish and scale Global Capability Centers, with AI-ready engineering capacity aligned to your technology landscape and an operating model built for ownership.",
    points: [
      "AI-ready engineering capacity",
      "Accelerated time to value",
      "Elastic, governed scale",
    ],
  },
  /* CapabilityReel.astro: files in src/assets/photos/ */
  reel: [
    {
      file: "reel-laptop-review.jpg",
      alt: "Two professionals reviewing an analytics dashboard on a laptop",
      caption: "Analytics-led delivery governance",
    },
    {
      file: "reel-conversation.jpg",
      alt: "Two professionals in a one-to-one discussion by a window",
      caption: "Outcome-led discovery and scoping",
    },
    {
      file: "reel-team-briefing.jpg",
      alt: "A presenter leading a working session for a team at laptops",
      caption: "Knowledge transfer built into delivery",
    },
    {
      file: "reel-candidate-meeting.jpg",
      alt: "A specialist in a structured interview with a two-person panel",
      caption: "Domain-specific technical assessment",
    },
    {
      file: "reel-panel-conversation.jpg",
      alt: "A two-person client panel interviewing a specialist",
      caption: "Client sign-off before onboarding",
    },
  ],
  /* ClientLogos.astro */
  logosHeading: {
    start: "Trusted by global enterprises.",
    emphasis: "Powered by our talent.",
  },
  /* WhyMetrics.astro defaults. Its figures come from COMPANY_FIGURES in
     src/data/site.ts, in the order WHY_FIGURES lists. */
  why: {
    eyebrow: "Why ManyaIT",
    heading: "Data-led outcomes, engineered end to end.",
    statement:
      "From data foundations to production-grade AI, we architect, implement and scale the platforms your Global Capability Center runs on. Specialist capacity aligned to your technology landscape, governed delivery and a defined build-operate-transfer path to full ownership.",
    /* The Testimonials destination is still to be confirmed. */
    buttons: [
      { label: "Explore Careers", href: "/careers" },
      { label: "Testimonials", href: "#" },
    ],
  },
  standards: {
    title: "Engineering standards on every program",
    items: [
      "Peer-reviewed code",
      "Data quality checks in every pipeline",
      "Security and quality gates",
      "CI/CD on every release",
    ],
  },
  /* The intro of each homepage section. */
  sections: {
    /* CapabilityBento.astro */
    capabilities: {
      eyebrow: "Capabilities",
      heading: "Expertise across the modern enterprise stack",
      intro:
        "Platform-specialist capability across data, AI, SAP and product engineering, integrated into your roadmap and governed for enterprise scale.",
    },
    /* IndustryCards.astro */
    industries: {
      eyebrow: "Industries",
      heading: "Talent that already knows your industry.",
    },
    /* InsightsGrid.astro */
    insights: {
      eyebrow: "Insights",
      heading: "Ideas shaping technology, data and AI.",
      intro:
        "Field notes from the teams building and running enterprise platforms.",
    },
    /* EcosystemCards.astro */
    ecosystem: {
      eyebrow: "Other companies",
      heading: "Specialist firms. Complementary capabilities.",
      intro:
        "Companies that share ManyaIT's standards of engineering and ownership, extending what enterprises can deliver without adding operational complexity.",
    },
    /* ContactConversation.astro, homepage version */
    contact: {
      eyebrow: "Start a conversation",
      heading: "Tell us what you want to build.",
      intro:
        "Brief us on your goals and we'll match you with the right team. Expect a reply within 1 business day.",
    },
  },
};

/* WhyMetrics.astro: the COMPANY_FIGURES keys it shows, in order. */
export const WHY_FIGURES = [
  "programs",
  "products",
  "onSchedule",
  "testCoverage",
  "enterprises",
  "years",
];

/* Footer.astro */
export const FOOTER_LINE =
  "Technology, data and AI engineering partner for global enterprises, from strategy to production.";

/*
 * Page headers held in components rather than in a HeroDetail on the page:
 * Careers (CareersOpenings.astro), Contact (ContactConversation.astro) and
 * Industries (IndustryDetail.astro).
 */
export const COMPONENT_HEROES = {
  "page-careers": {
    eyebrow: "Careers",
    title: "Build systems that matter.",
    lede: "Join a technology, data and AI engineering partner trusted by enterprises in banking, telecommunications, healthcare, energy and retail. Work on production platforms, own outcomes end to end and grow with every program.",
  },
  "page-contact": {
    eyebrow: "Start a conversation",
    title: "Tell us what you want to build.",
    lede: "Share your objectives and we'll bring the right architects and domain leads to the first conversation. Expect a reply within 1 business day.",
  },
  "page-industries": {
    eyebrow: "Industries",
    title: "Engineering built around your industry.",
    lede: "Technology, data and AI programs shaped by the regulation, core systems and operating pressures of your sector.",
  },
};

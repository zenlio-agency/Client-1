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
    lede: "ManyaIT helps global enterprises build and scale capability centers with AI-ready tech talent, matched to your stack and productive from week one.",
    points: [
      "Vetted, AI-ready talent",
      "Teams live in weeks",
      "Flexible scale",
    ],
    careersPrompt: "Building your career?",
  },
  /* CapabilityReel.astro: files in src/assets/photos/ */
  reel: [
    {
      file: "reel-laptop-review.jpg",
      alt: "Two colleagues reviewing a dashboard on a laptop",
      caption: "Specialists matched to your stack",
    },
    {
      file: "reel-conversation.jpg",
      alt: "Two people talking across a table by a window",
      caption: "Every team starts with your skills brief",
    },
    {
      file: "reel-team-briefing.jpg",
      alt: "A team in a meeting room following a presentation",
      caption: "Teams live in weeks, not quarters",
    },
    {
      file: "reel-candidate-meeting.jpg",
      alt: "A specialist in conversation with two team leads",
      caption: "Assessed on real problems from your domain",
    },
    {
      file: "reel-panel-conversation.jpg",
      alt: "Two team leads meeting a new specialist",
      caption: "You meet everyone before they start",
    },
  ],
  /* ClientLogos.astro */
  logosHeading: {
    start: "Trusted by global enterprises.",
    emphasis: "Powered by our talent.",
  },
  /* WhyCards.astro */
  why: {
    eyebrow: "Why ManyaIT",
    heading: "The right people. Ready faster.",
    emphasis: "Built to stay.",
    statement:
      "We bring the specialists, the setup and the support your Global Capability Center needs to grow without slowing down. Vetted, AI-ready engineers matched to your stack. Teams live in weeks, not quarters. And a clear path to build, operate and transfer, so the capability you scale is always yours.",
  },
  /* TrustStrip.astro defaults. Every figure is a placeholder. */
  stats: [
    { value: "[XX]+", label: "Years powering enterprise technology" },
    { value: "[XX]+", label: "Global enterprises served" },
    { value: "[XX]+", label: "Specialists in our talent network" },
    { value: "[X] wks", label: "Average time to a productive team" },
  ],
  /* The intro of each homepage section. */
  sections: {
    /* CapabilityBento.astro */
    capabilities: {
      eyebrow: "Capabilities",
      heading: "Expertise across the modern enterprise stack",
      intro:
        "Specialist teams for the platforms that matter most, ready to plug into your roadmap.",
    },
    /* IndustryCards.astro */
    industries: {
      eyebrow: "Industries",
      heading: "Talent that already knows your industry.",
      intro:
        "Specialists who speak the language of your sector, its rules and its systems.",
    },
    /* CareersHome.astro */
    careers: {
      eyebrow: "Careers",
      heading: "Build systems that matter.",
    },
    /* InsightsGrid.astro */
    insights: {
      eyebrow: "Insights",
      heading: "Ideas shaping technology, data and AI.",
      intro:
        "Field notes from the teams building and running enterprise platforms.",
    },
    /* GlobalPresence.astro */
    locations: {
      eyebrow: "Global presence",
      heading: "Two cities. One team.",
      intro:
        "Client leadership in Dallas. Engineering depth in Hyderabad. One plan, one standard of work, and a working day that hands over instead of stopping.",
    },
    /* EcosystemCards.astro */
    ecosystem: {
      eyebrow: "The ManyaIT ecosystem",
      heading: "More capabilities. One connected ecosystem.",
      intro:
        "Companies that share ManyaIT's standards of engineering and ownership, so enterprises can add capabilities without adding complexity.",
    },
    /* ContactConversation.astro */
    contact: {
      eyebrow: "Start a conversation",
      heading: "Tell us what you want to build.",
      intro:
        "Brief us on your goals and we'll match you with the right team. Expect a reply within [1] business day.",
    },
  },
};

/* Footer.astro */
export const FOOTER_LINE =
  "Technology & talent partners for global enterprises. AI-ready teams that help your capability center grow.";

/*
 * Page headers held in components rather than in a HeroDetail on the page:
 * Careers (CareersOpenings.astro), Contact (ContactConversation.astro) and
 * Industries (IndustryDetail.astro).
 */
export const COMPONENT_HEROES = {
  "page-careers": {
    eyebrow: "Careers",
    title: "Build systems that matter.",
    lede: "Join teams working on real enterprise platforms across Dallas and Hyderabad. You own the work, learn the business and see the impact over years, not sprints.",
  },
  "page-contact": sectionHero("contact"),
  "page-industries": sectionHero("industries"),
};

/** A homepage section intro, as a page header. */
function sectionHero(name) {
  const { eyebrow, heading, intro } = HOME.sections[name];
  return { eyebrow, title: heading, lede: intro };
}

/*
 * The open roles in CareersOpenings.astro. They're imported as drafts: HR
 * adds the reference code, description and posting date, then publishes.
 */
export const ROLES = [
  {
    title: "Senior Java Engineer",
    team: "Digital Product Engineering",
    location: "hyderabad",
    experience: "5–8 yrs",
    mode: "Hybrid",
  },
  {
    title: "SAP S/4HANA Functional Lead",
    team: "SAP & Enterprise Data",
    location: "hyderabad",
    experience: "4–7 yrs",
    mode: "Hybrid",
  },
  {
    title: "AI Automation Engineer",
    team: "Agentic AI & Automation",
    location: "hyderabad",
    experience: "3–6 yrs",
    mode: "On-site",
  },
  {
    title: "Client Partner",
    team: "Client Partnership",
    location: "dallas",
    experience: "8+ yrs",
    mode: "On-site",
  },
];

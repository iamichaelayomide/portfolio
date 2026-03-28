export type HomeHeroContent = {
  availabilityText: string;
  introText: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  points: string[];
  proof: string[];
  profileImageUrl: string;
  cardEyebrow: string;
  cardTitle: string;
  cardHighlights: string[];
  scrollLabel: string;
};

export type HomeAboutPreviewContent = {
  title: string;
  description: string;
  linkLabel: string;
  profileImageUrl: string;
  locationLabel: string;
  locationValue: string;
  footerTitle: string;
};

export type HomeService = {
  key: string;
  icon: "productDesign" | "uxResearch" | "webBuilds" | "designSystems";
  title: string;
  description: string;
  support: string;
};

export type HomeServicesContent = {
  mobileHeading: string;
  mobileDescription: string;
  desktopHeading: string;
  desktopDescription: string;
  services: HomeService[];
  ctaTitle: string;
  ctaDescription: string;
  ctaSupport: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
};

export type HomeProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type HomeProcessContent = {
  heading: string;
  steps: HomeProcessStep[];
};

export type HomeFinalCtaContent = {
  title: string;
  description: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  email: string;
  responseTime: string;
};

export type HomeContent = {
  hero: HomeHeroContent;
  aboutPreview: HomeAboutPreviewContent;
  services: HomeServicesContent;
  process: HomeProcessContent;
  finalCta: HomeFinalCtaContent;
};

export const homeContent: HomeContent = {
  hero: {
    availabilityText: "Open to remote roles and select freelance projects",
    introText: "Hi, I'm Michael Ayomide",
    title: "Product design for remote teams, founders, and ambitious brands.",
    description:
      "I help SaaS products, websites, and ecommerce experiences feel clearer, more credible, and easier to act on, whether you need a remote design hire or a freelance partner who can ship.",
    primaryCtaLabel: "Book a Call",
    secondaryCtaLabel: "View My Work",
    points: [
      "Available for remote product roles",
      "Freelance websites and ecommerce work",
      "Clear UX, stronger trust, cleaner execution",
    ],
    proof: [
      "Remote product design",
      "Freelance web execution",
      "SaaS UX systems",
      "AI-assisted delivery",
    ],
    profileImageUrl:
      "https://drive.google.com/uc?export=view&id=1si4jvBANQm2h7wl8xuoztD_eNSrHz8K7",
    cardEyebrow: "Product Designer",
    cardTitle: "Clear product direction.\nStronger UX decisions.",
    cardHighlights: [
      "Remote-ready collaboration across product, web, and ecommerce.",
      "From strategy and UI through AI-assisted execution when needed.",
    ],
    scrollLabel: "Scroll",
  },
  aboutPreview: {
    title:
      "I'm Michael Ayomide, a product designer focused on work that feels premium, makes sense fast, and earns trust early.",
    description:
      "I work across SaaS, websites, WooCommerce, Shopify, and conversion-focused web projects with one priority every time: make the offer clearer and the experience easier to act on.",
    linkLabel: "More About Me ->",
    profileImageUrl:
      "https://drive.google.com/uc?export=view&id=1si4jvBANQm2h7wl8xuoztD_eNSrHz8K7",
    locationLabel: "Based in Nigeria",
    locationValue: "Design for SaaS, websites, and ecommerce.",
    footerTitle: "About",
  },
  services: {
    mobileHeading: "Design support that moves from product thinking to live execution.",
    mobileDescription:
      "Clear strategy, sharper UI, and production-ready web work without the handoff friction.",
    desktopHeading: "Product thinking, web execution, and systems that scale.",
    desktopDescription:
      "Scroll the stack. One panel takes over at a time, so the motion stays clean, deliberate, and easy to read in both directions.",
    services: [
      {
        key: "product-design",
        icon: "productDesign",
        title: "Product Design",
        description:
          "Product strategy, flows, and UI direction shaped to make complex products easier to trust and use.",
        support: "Structure, hierarchy, interaction design",
      },
      {
        key: "ux-research-strategy",
        icon: "uxResearch",
        title: "UX Research & Strategy",
        description:
          "Insight, journey mapping, and sharper product decisions before visual polish begins.",
        support: "Discovery, audits, journey mapping",
      },
      {
        key: "web-ecommerce-builds",
        icon: "webBuilds",
        title: "Web & Ecommerce Builds",
        description:
          "WordPress, WooCommerce, Shopify, and conversion-focused websites built to move people to action.",
        support: "Marketing sites, storefronts, conversion UX",
      },
      {
        key: "design-systems",
        icon: "designSystems",
        title: "Design Systems",
        description:
          "Design tokens, reusable components, and systems that keep teams fast and consistent.",
        support: "Reusable UI, consistency, scale",
      },
    ],
    ctaTitle: "Book a call",
    ctaDescription:
      "If you need a remote product designer or a freelance partner for a web build, this is the right next move.",
    ctaSupport: "Free discovery call",
    ctaPrimaryLabel: "Book a Call",
    ctaSecondaryLabel: "WhatsApp Me",
  },
  process: {
    heading: "A process built for speed and good decisions.",
    steps: [
      {
        number: "01",
        title: "Understand",
        description: "I get clear on your users, goals, offer, and constraints before design starts.",
      },
      {
        number: "02",
        title: "Structure",
        description: "I shape the information, flow, and decision points before styling anything.",
      },
      {
        number: "03",
        title: "Design",
        description: "I turn the strategy into polished UI that feels premium and easy to follow.",
      },
      {
        number: "04",
        title: "Deliver",
        description: "You get handoff-ready files or a live build, depending on the engagement.",
      },
    ],
  },
  finalCta: {
    title: "Have a product, website, or store\nthat needs to convert better?\nLet's talk.",
    description:
      "I'm currently taking on SaaS, website, WooCommerce, Shopify, and ecommerce projects.",
    primaryCtaLabel: "Book a Call",
    secondaryCtaLabel: "Send an Email",
    email: "iamichaelayomide@gmail.com",
    responseTime: "Response time: usually same day.",
  },
};

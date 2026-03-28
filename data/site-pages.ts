export type AboutSkill = {
  label: string;
  value: string;
};

export type AboutExperienceItem = {
  range: string;
  role: string;
  context: string;
  description: string;
};

export type AboutPageContent = {
  heroLabel: string;
  title: string;
  intro: string[];
  profileImageUrl: string;
  skillsLabel: string;
  skills: AboutSkill[];
  experienceLabel: string;
  experience: AboutExperienceItem[];
  principles: string[];
  ctaTitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
};

export type ContactLink = {
  key: string;
  icon: "email" | "whatsapp" | "behance" | "linkedin" | "x";
  label: string;
  value: string;
  href: string;
};

export type ContactPageContent = {
  heroLabel: string;
  title: string;
  description: string;
  bestForEyebrow: string;
  bestForText: string;
  form: {
    nameLabel: string;
    emailLabel: string;
    projectTypeLabel: string;
    messageLabel: string;
    projectTypes: string[];
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submitLabel: string;
    submittingLabel: string;
  };
  success: {
    title: string;
    description: string;
    resetLabel: string;
  };
  contactInfoTitle: string;
  contactLinks: ContactLink[];
  booking: {
    title: string;
    subtitle: string;
    eyebrow: string;
    description: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
};

export const aboutPageContent: AboutPageContent = {
  heroLabel: "About",
  title: "Michael Ayomide.",
  intro: [
    "I'm a product designer focused on clarity, usability, and shipping work that actually helps people. I've designed across B2B SaaS platforms, consumer apps, ecommerce, and brand web experiences.",
    "I think deeply about structure before aesthetics. The visual layer is where I execute precision, but the real work happens in the logic underneath.",
    "I also work across WordPress, WooCommerce, Shopify, and AI-assisted web execution to help move strong design thinking into live builds without losing product judgment or quality.",
  ],
  profileImageUrl:
    "https://drive.google.com/uc?export=view&id=1si4jvBANQm2h7wl8xuoztD_eNSrHz8K7",
  skillsLabel: "Capabilities",
  skills: [
    { label: "Design", value: "Figma / Framer / Principle / FigJam" },
    {
      label: "Research",
      value: "User interviews / Journey mapping / Usability testing",
    },
    {
      label: "Build",
      value: "WordPress / WooCommerce / Shopify / Codex / Gemini CLI",
    },
    {
      label: "Systems",
      value: "Design tokens / Component libraries / Documentation",
    },
  ],
  experienceLabel: "Experience",
  experience: [
    {
      range: "2024 - Present",
      role: "Independent Product Designer",
      context: "SaaS, ecommerce, and web builds",
      description:
        "Designing product interfaces, conversion-focused websites, and ecommerce experiences for growing teams and brands.",
    },
    {
      range: "2023 - 2024",
      role: "Product Design Projects",
      context: "Wellness and fintech",
      description:
        "Worked across mobile UX, dashboards, and interaction systems with an execution-focused product lens.",
    },
    {
      range: "2022 - 2023",
      role: "UX and Research Work",
      context: "Consumer and commerce",
      description:
        "Focused on user understanding, structure, and reducing friction across real product flows.",
    },
  ],
  principles: [
    "Clarity over cleverness.",
    "Structure before aesthetics.",
    "Ship, learn, iterate.",
  ],
  ctaTitle: "Let's build something.",
  primaryCtaLabel: "Book a Call",
  secondaryCtaLabel: "Download CV",
};

export const contactPageContent: ContactPageContent = {
  heroLabel: "Contact",
  title: "Let's talk.",
  description:
    "Tell me what you're building. I'll tell you where the clarity, trust, and conversion gaps are.",
  bestForEyebrow: "Best for",
  bestForText:
    "Founders, product teams, and brands that need clearer UX, stronger positioning, or a better-performing website, store, or product experience.",
  form: {
    nameLabel: "Name",
    emailLabel: "Email",
    projectTypeLabel: "Project type",
    messageLabel: "Message",
    projectTypes: ["Product Design", "Web", "Design System", "Other"],
    namePlaceholder: "Your name",
    emailPlaceholder: "you@example.com",
    messagePlaceholder:
      "What are you building, what feels unclear right now, and what result do you want?",
    submitLabel: "Send Message",
    submittingLabel: "Sending...",
  },
  success: {
    title: "Message received.",
    description: "Thanks for reaching out. I'll reply within 3 hours with the next step.",
    resetLabel: "Send another message",
  },
  contactInfoTitle: "Contact Info",
  contactLinks: [
    {
      key: "email",
      icon: "email",
      label: "Email",
      value: "iamichaelayomide@gmail.com",
      href: "mailto:iamichaelayomide@gmail.com",
    },
    {
      key: "whatsapp",
      icon: "whatsapp",
      label: "Call / WhatsApp",
      value: "07032891651",
      href: "https://wa.me/2347032891651",
    },
    {
      key: "behance",
      icon: "behance",
      label: "Behance",
      value: "behance.net/michaelayomide1",
      href: "https://behance.net/michaelayomide1",
    },
    {
      key: "linkedin",
      icon: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/michael-ayomide",
      href: "https://linkedin.com/in/michael-ayomide",
    },
    {
      key: "x",
      icon: "x",
      label: "X",
      value: "@starmikeee",
      href: "https://x.com/starmikeee",
    },
  ],
  booking: {
    title: "Schedule a Free Discovery Call",
    subtitle: "30-minute call | No commitment",
    eyebrow: "Quickest route",
    description:
      "Use the booking link to pick a time that works for you. It opens directly in Google Calendar scheduling.",
    primaryCtaLabel: "Open Booking Page",
    secondaryCtaLabel: "Open Booking Link in New Tab",
  },
};

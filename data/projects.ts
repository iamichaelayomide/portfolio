export type CaseStudyImage = {
  label: string;
  src?: string;
  alt?: string;
  aspect?: "wide" | "landscape" | "portrait" | "grid";
};

export type CaseStudyInsight = {
  title: string;
  text: string;
};

export type CaseStudySection = {
  id:
    | "overview"
    | "challenge"
    | "discovery"
    | "approach"
    | "solution"
    | "process"
    | "outcome"
    | "reflection";
  title: string;
  content: string[];
  quote?: string;
  insights?: CaseStudyInsight[];
  steps?: string[];
  images?: CaseStudyImage[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  type?: "featured";
  category: "Product Design" | "Web" | "Live Projects" | "Design Systems";
  year: string;
  role: string;
  duration: string;
  platform: string;
  thumbnail: string;
  heroImage: string;
  sections: CaseStudySection[];
  outcome: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "spnd",
    title: "SPND",
    tagline: "A spend management product designed for fast financial decisions.",
    description: "B2B fintech dashboard for spend management",
    tags: ["Product Design", "B2B SaaS", "Design System"],
    type: "featured",
    category: "Design Systems",
    year: "2024",
    role: "Lead Product Designer",
    duration: "12 weeks",
    platform: "Responsive web app",
    thumbnail: "/images/work/spnd-thumb.svg",
    heroImage: "/images/work/spnd-hero.svg",
    outcome:
      "A cleaner financial operating system with stronger hierarchy, faster approvals, and a reusable design foundation for future dashboard modules.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          "SPND was designed for finance teams that need to review spend, approve requests, and keep decisions moving without fighting the interface. The product had to feel trustworthy, fast, and legible under pressure.",
          "My role covered product thinking, UX structure, high-fidelity UI, and the component logic that would later become the basis of a design system.",
        ],
      },
      {
        id: "challenge",
        title: "The Challenge",
        content: [
          "Most finance tools overwhelm users with dense tables, unclear status signals, and too many competing actions. The risk was simple: if the interface slowed understanding, approvals slowed the business.",
          "The core design challenge was reducing cognitive load while keeping critical information visible enough for confident decision-making.",
        ],
        quote:
          "The product needed to feel less like a report and more like a decision surface.",
      },
      {
        id: "discovery",
        title: "Discovery",
        content: [
          "I mapped the approval flow from request creation through review, exception handling, and team-level reporting. That exposed the moments where finance users were losing time: context switching, visual noise, and hidden dependencies.",
        ],
        insights: [
          {
            title: "Urgency first",
            text: "Users wanted to see what required action before they explored everything else.",
          },
          {
            title: "Status over volume",
            text: "Readable status patterns mattered more than fitting more rows on screen.",
          },
        ],
        images: [{ label: "User research artifacts / affinity map", aspect: "wide" }],
      },
      {
        id: "approach",
        title: "The Approach",
        content: [
          "I treated the dashboard as a prioritization engine. Primary cards surfaced approvals, anomalies, and high-impact summaries first, while deeper reporting lived further down the hierarchy.",
        ],
        steps: [
          "Define the decision hierarchy before the visual style.",
          "Break complex financial states into consistent, repeatable UI patterns.",
          "Build components that would scale into a tokenized design system.",
        ],
      },
      {
        id: "solution",
        title: "The Solution",
        content: [
          "The final interface uses restrained contrast, modular cards, and clear typographic grouping to guide the eye. Controls are obvious, empty states are intentional, and high-value metrics are readable within seconds.",
        ],
        images: [
          { label: "Executive dashboard overview", aspect: "wide" },
          { label: "Approval workflow detail", aspect: "landscape" },
        ],
      },
      {
        id: "process",
        title: "Design Process",
        content: [
          "I moved from low-fidelity flow framing into more detailed layouts, then refined spacing, table behavior, and status language until the system felt consistent and predictable.",
        ],
        images: [
          { label: "Wireframes", aspect: "grid" },
          { label: "Iteration states", aspect: "grid" },
          { label: "Final component set", aspect: "grid" },
        ],
      },
      {
        id: "outcome",
        title: "Final Outcome",
        content: [
          "SPND shipped with a clearer approval workflow, a cleaner information hierarchy, and a component model the team could extend without redesigning the product from scratch.",
        ],
        images: [{ label: "Final dashboard showcase", aspect: "wide" }],
      },
      {
        id: "reflection",
        title: "Reflection",
        content: [
          "This project reinforced how much product clarity depends on structure before styling. The visual layer mattered, but the real leverage came from deciding what users should notice first and why.",
        ],
      },
    ],
  },
  {
    slug: "slumberpal",
    title: "SlumberPal",
    tagline: "A calmer sleep and nap experience built around audio behavior.",
    description: "Sleep & nap wellness app with audio architecture",
    tags: ["Consumer App", "UX", "Mobile"],
    category: "Product Design",
    year: "2023",
    role: "Lead UX Designer",
    duration: "8 weeks",
    platform: "iOS and Android",
    thumbnail: "/images/work/slumberpal-thumb.svg",
    heroImage: "/images/work/slumberpal-hero.svg",
    outcome:
      "A more coherent wellness experience with clearer routine-building, more understandable audio paths, and calmer onboarding into sleep content.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          "SlumberPal is a wellness product centered on sleep, naps, and audio-led routines. The experience had to feel soothing while still helping users make quick choices.",
          "I focused on UX flows, content structure, mobile UI, and the interaction logic behind different listening modes.",
        ],
      },
      {
        id: "challenge",
        title: "The Challenge",
        content: [
          "The product included several content types, but users could not always tell which option best matched their immediate need. Discovery and choice were competing with each other.",
        ],
        quote:
          "Calm products still need strong hierarchy. Relaxed does not mean vague.",
      },
      {
        id: "discovery",
        title: "Discovery",
        content: [
          "I reviewed user intent around bedtime, short rests, and mid-day recovery. Those contexts were distinct enough that the product needed sharper content framing and faster entry points.",
        ],
        insights: [
          {
            title: "Intent changes fast",
            text: "A bedtime flow should not feel like a quick afternoon reset.",
          },
          {
            title: "Audio is navigation",
            text: "Users think in outcomes, not content categories.",
          },
        ],
        images: [{ label: "Behavior map / audio architecture", aspect: "wide" }],
      },
      {
        id: "approach",
        title: "The Approach",
        content: [
          "I reorganized the product around user intent first, then shaped the UI to reduce the number of decisions required before playback.",
        ],
        steps: [
          "Clarify entry points for sleep, naps, and focus recovery.",
          "Shorten the path from intent to audio playback.",
          "Use warm, calm visual contrast without reducing legibility.",
        ],
      },
      {
        id: "solution",
        title: "The Solution",
        content: [
          "The final mobile experience uses stronger categorization, clearer playback previews, and a more understandable home screen that helps users choose quickly.",
        ],
        images: [
          { label: "Home and discovery screens", aspect: "portrait" },
          { label: "Audio session detail", aspect: "portrait" },
        ],
      },
      {
        id: "process",
        title: "Design Process",
        content: [
          "The product moved through structural wireframes, navigation testing, and multiple visual refinements to find the right balance between softness and usability.",
        ],
        images: [
          { label: "Low-fidelity mobile flows", aspect: "grid" },
          { label: "UI explorations", aspect: "grid" },
          { label: "Final mobile states", aspect: "grid" },
        ],
      },
      {
        id: "outcome",
        title: "Final Outcome",
        content: [
          "SlumberPal became easier to understand at a glance, with calmer screens that still preserved fast access to the right audio experience.",
        ],
        images: [{ label: "Final mobile UI showcase", aspect: "wide" }],
      },
      {
        id: "reflection",
        title: "Reflection",
        content: [
          "Designing for wellness sharpened my thinking around emotional tone. The interface needed warmth, but it still had to communicate decisively.",
        ],
      },
    ],
    liveUrl: "https://slumberpal.app",
  },
  {
    slug: "eaze",
    title: "Eaze",
    tagline: "Reducing friction in a high-intent commerce experience.",
    description: "Streamlined UX for a cannabis delivery platform",
    tags: ["UX Research", "Consumer", "E-commerce"],
    category: "Product Design",
    year: "2022",
    role: "UX Researcher and Product Designer",
    duration: "10 weeks",
    platform: "Web and mobile web",
    thumbnail: "/images/work/eaze-thumb.svg",
    heroImage: "/images/work/eaze-hero.svg",
    outcome:
      "A clearer purchase path with stronger confidence cues, faster decision-making, and reduced friction between browse and checkout.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          "Eaze needed a more confident purchasing experience across browsing, product detail, and checkout. Users were arriving with strong intent but still losing momentum in the flow.",
        ],
      },
      {
        id: "challenge",
        title: "The Challenge",
        content: [
          "The platform had complexity from compliance, product discovery, and delivery expectations. The challenge was to simplify the flow without hiding the details users needed to trust the purchase.",
        ],
        quote:
          "Trust in commerce is built as much through sequence and language as it is through visuals.",
      },
      {
        id: "discovery",
        title: "Discovery",
        content: [
          "I focused on hesitation points during browse and checkout. Users wanted clearer product framing, stronger delivery expectation signals, and less ambiguity around the next step.",
        ],
        insights: [
          {
            title: "Confidence drives conversion",
            text: "Users were willing to act once uncertainty around delivery and product fit was reduced.",
          },
          {
            title: "Decision support matters",
            text: "Too many equally weighted product signals slowed progress.",
          },
        ],
        images: [{ label: "UX audit / friction map", aspect: "wide" }],
      },
      {
        id: "approach",
        title: "The Approach",
        content: [
          "I simplified the experience around a tighter browse-to-buy path, stronger delivery visibility, and better product framing at the moment of decision.",
        ],
        steps: [
          "Reduce visual competition inside product listing cards.",
          "Improve informational hierarchy on product detail pages.",
          "Tighten purchase reassurance throughout checkout.",
        ],
      },
      {
        id: "solution",
        title: "The Solution",
        content: [
          "The updated UX balances speed and assurance. Product cards feel easier to scan, detail pages explain more with less clutter, and checkout keeps attention on completion.",
        ],
        images: [
          { label: "Marketplace listing views", aspect: "landscape" },
          { label: "Checkout refinement", aspect: "landscape" },
        ],
      },
      {
        id: "process",
        title: "Design Process",
        content: [
          "This work combined usability insight, architecture simplification, and interface refinement until the key decision points felt more direct.",
        ],
        images: [
          { label: "User flow sketches", aspect: "grid" },
          { label: "Interface revisions", aspect: "grid" },
          { label: "Final layout patterns", aspect: "grid" },
        ],
      },
      {
        id: "outcome",
        title: "Final Outcome",
        content: [
          "The final experience reduced friction between product discovery and purchase while keeping the platform trustworthy and easy to navigate.",
        ],
        images: [{ label: "Final commerce flow showcase", aspect: "wide" }],
      },
      {
        id: "reflection",
        title: "Reflection",
        content: [
          "The biggest lesson here was that conversion work is not about louder CTAs. It is usually about removing uncertainty from the path leading to the CTA.",
        ],
      },
    ],
  },
  {
    slug: "chillington",
    title: "Chillington (Sharamawa)",
    tagline: "A live multi-location website designed for credibility, clarity, and faster visitor trust.",
    description: "Multi-location brand web presence",
    tags: ["Web Design", "AI-Assisted Build", "Brand System"],
    category: "Live Projects",
    year: "2024",
    role: "Product Designer and AI-Assisted Builder",
    duration: "3 weeks",
    platform: "Live marketing website",
    thumbnail: "/images/work/chillington-thumb.svg",
    heroImage: "/images/work/chillington-hero.svg",
    outcome:
      "A more polished live brand experience that brought multiple locations under one coherent digital system.",
    liveUrl: "https://replace-with-chillington-url.com",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          "Chillington needed a site that could represent multiple locations without looking scattered or improvised. The business needed one digital experience that felt credible, current, and easy to trust.",
          "The build workflow combined product design thinking, structured content planning, and AI-assisted execution using tools like Codex and Gemini CLI to move from design direction to a shipped site faster.",
        ],
      },
      {
        id: "challenge",
        title: "The Problem",
        content: [
          "The brand had useful information, but the experience risked feeling fragmented when visitors moved between brand messaging and location-level details. That tension made the business feel less polished than it actually was.",
          "The real challenge was to make the site do two jobs at once: communicate brand quality and help visitors find the practical information they came for.",
        ],
        quote:
          "A live site has to look good, but it also has to remove doubt in seconds.",
      },
      {
        id: "approach",
        title: "Approach",
        content: [
          "I structured the website around the actual visitor priorities: quickly understanding the business, getting to the right location, and seeing enough quality signals to trust the brand.",
          "Instead of treating the build as a traditional frontend engineering exercise, I used an AI-assisted workflow to translate the design intent into production-ready sections, refine the hierarchy, and ship faster without losing the visual standard.",
        ],
        steps: [
          "Clarify the landing page message before styling the sections.",
          "Build reusable location blocks so every branch feels part of one system.",
          "Use Codex and Gemini CLI as execution tools while keeping product judgment and design decisions manual.",
        ],
      },
      {
        id: "solution",
        title: "Solution",
        content: [
          "The final site uses tighter hierarchy, cleaner section rhythm, and clearer location modules so visitors can move from first impression to useful action with less friction.",
          "The design intentionally balances premium brand presentation with simple utility. It feels composed, but never hides the information people actually need.",
        ],
        images: [
          { label: "Landing page hero and sections", aspect: "wide" },
          { label: "Location module patterns", aspect: "landscape" },
        ],
      },
      {
        id: "outcome",
        title: "Result",
        content: [
          "Chillington launched with a more cohesive digital presence, clearer location-level navigation, and a stronger sense of legitimacy for first-time visitors.",
          "The finished site works as a real business tool, not just a visual showcase. It helps the brand look more established and makes the path to information noticeably easier.",
        ],
        images: [{ label: "Final live site showcase", aspect: "wide" }],
      },
      {
        id: "reflection",
        title: "Reflection",
        content: [
          "This project reinforced that AI can accelerate execution, but it cannot replace judgment. The quality still came from deciding what mattered, how the story should flow, and what visitors needed to understand first.",
        ],
      },
    ],
  },
  {
    slug: "ayomide-stores",
    title: "Ayomide Stores",
    tagline: "A live commerce experience focused on trust, clarity, and everyday shopping speed.",
    description: "WooCommerce e-commerce for household goods",
    tags: ["E-commerce", "AI-Assisted Build", "UI Design"],
    category: "Live Projects",
    year: "2024",
    role: "Designer and AI-Assisted Build Lead",
    duration: "4 weeks",
    platform: "Live WooCommerce storefront",
    thumbnail: "/images/work/ayomide-stores-thumb.svg",
    heroImage: "/images/work/ayomide-stores-hero.svg",
    outcome:
      "A clearer storefront experience with better category navigation, stronger product presentation, and a more direct path to purchase.",
    liveUrl: "https://ayomidestores.vercel.app",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          "Ayomide Stores is a live household goods storefront built to make product discovery, trust, and checkout feel straightforward for everyday shoppers.",
          "The workflow blended design direction, store structuring, and AI-assisted build execution so the site could move from concept to a usable live storefront without needing a traditional coding-heavy process.",
        ],
      },
      {
        id: "challenge",
        title: "The Problem",
        content: [
          "Household e-commerce can become noisy very quickly. When categories, product cards, and trust cues are weak, the whole storefront feels harder to trust even before a shopper checks out.",
          "The challenge was to make the store feel organized and dependable without overcomplicating the interface or slowing people down.",
        ],
        quote:
          "In commerce, clarity is one of the strongest trust signals you can design.",
      },
      {
        id: "approach",
        title: "Approach",
        content: [
          "I focused on the highest-leverage parts of the storefront: category structure, product presentation, and the confidence cues shoppers need before they are ready to act.",
          "The build execution relied on AI tools and CLI workflows to speed up implementation while I stayed responsible for the structure, quality bar, and final product decisions.",
        ],
        steps: [
          "Simplify storefront hierarchy so categories feel easier to scan.",
          "Improve product cards so image, pricing, and action cues work together cleanly.",
          "Use AI-assisted CLI workflows to accelerate production without losing quality control.",
        ],
      },
      {
        id: "solution",
        title: "Solution",
        content: [
          "The final storefront uses cleaner collection layouts, stronger category grouping, and more legible product previews to support faster shopping decisions.",
          "Every key UI decision was aimed at reducing noise while keeping the buying path obvious, especially for returning customers who want speed.",
        ],
        images: [
          { label: "Homepage and category design", aspect: "wide" },
          { label: "Product browsing flow", aspect: "landscape" },
        ],
      },
      {
        id: "outcome",
        title: "Result",
        content: [
          "Ayomide Stores shipped as a clearer, more credible commerce experience with a cleaner path from category browsing to purchase.",
          "The result is a live storefront that feels easier to trust, easier to scan, and easier to use on real shopping tasks.",
        ],
        images: [{ label: "Final storefront showcase", aspect: "wide" }],
      },
      {
        id: "reflection",
        title: "Reflection",
        content: [
          "This project reinforced that AI can make execution faster, but the outcome still depends on product judgment. Better hierarchy and cleaner product framing changed how trustworthy the whole store felt.",
        ],
      },
    ],
  },
];

export const projectFilters = [
  "All",
  "Product Design",
  "Web",
  "Live Projects",
  "Design Systems",
] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

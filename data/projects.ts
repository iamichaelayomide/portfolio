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
    tagline: "Giving every dollar a purpose through intentional allocation and automation.",
    description: "A high-sensitivity personal finance ecosystem designed to reduce cognitive load and promote financial clarity through a modular 'Bucket' system.",
    tags: ["Product Design", "Fintech", "Mobile App"],
    type: "featured",
    category: "Product Design",
    year: "2024",
    role: "Lead Product Designer",
    duration: "12 weeks",
    platform: "iOS and Android",
    thumbnail: "/images/work/spnd-thumb.svg",
    heroImage: "/images/work/spnd-hero.svg",
    outcome:
      "A personal finance operating system that transformed budgeting from a chore into a seamless, automated flow. By introducing the 'Bucket' allocation model and high-trust automation, the app achieved a 45% increase in user engagement with savings goals and established a new benchmark for low-arousal fintech interfaces.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          "Personal finance is often a source of high cognitive load and emotional stress. Traditional budgeting apps focus on 'Reporting'—telling you where your money went—rather than 'Intent'—deciding where it should go. SPND was conceived to flip this script.",
          "As the Lead Product Designer, I was responsible for the end-to-end UX strategy and the development of the 'SPND Material 3' design system. My goal was to build a 'High-Clarity' interface that felt like a supportive companion rather than a rigid accountant.",
          "We focused on three core pillars: Intentional Allocation, High-Trust Automation, and Biological UX—ensuring the app respected the user's mental bandwidth at every touchpoint.",
        ],
      },
      {
        id: "challenge",
        title: "The Challenge",
        content: [
          "The primary friction in budgeting is 'The Manual Burden.' Users have to manually categorize transactions, guess how much they can spend, and constantly check multiple balances. This leads to 'Budget Fatigue' and eventual abandonment.",
          "We faced a psychological hurdle: how to make 'Saving' feel as rewarding as 'Spending'. The app needed to bridge the gap between abstract financial goals (like 'Rent' or 'Emergency Fund') and daily spending decisions.",
          "Technically, we needed to handle complex banking integrations and automation logic while keeping the UI extremely simple and low-arousal.",
        ],
        quote:
          "Budgeting shouldn't be about restriction; it should be about giving yourself permission to spend on what matters.",
      },
      {
        id: "discovery",
        title: "Discovery",
        content: [
          "I conducted interviews with 20 'Frustrated Budgeters'. The recurring theme was 'Context Loss'. Users knew their total balance but didn't know how much of that was 'safe to spend' without compromising their upcoming bills.",
          "Mapping the user journey revealed that the most stressful moment is the 'Allocation' phase—deciding how to split a fresh paycheck. Users were doing this in their heads or on scraps of paper.",
          "We identified a need for 'Bucketing'—a mental model where money is partitioned into specific purposes as soon as it arrives, providing instant clarity on spending power.",
        ],
        insights: [
          {
            title: "The Safety Gap",
            text: "Users need to know their 'Safe-to-Spend' amount at a glance, filtered through their upcoming obligations.",
          },
          {
            title: "Automation Trust",
            text: "Users are willing to automate their savings only if they feel they have an 'Emergency Override' and clear visibility into the logic.",
          },
        ],
        images: [{ label: "User Intent Mapping: From Paycheck to Purpose", src: "/images/work/spnd-intent.png", aspect: "wide" }],
      },
      {
        id: "approach",
        title: "The Approach",
        content: [
          "I implemented a 'Bucket-First' architecture. Every dollar that enters the SPND ecosystem is immediately assigned a role. I designed a 3-step 'Inflow Flow' (Inflow -> Intent -> Math) that guides users through the allocation process with zero ambiguity.",
          "I developed a 'High-Trust' automation layer. Features like 'Monthly Top-ups' and 'Roundups' were designed with 'Preview' states, so users could see exactly how their balance would change before committing.",
          "Visually, I built the system on Material 3 but pushed it toward a 'Soft-Fintech' aesthetic. I used a custom purple-dominant palette and large radius corners to create a friendly, approachable environment.",
        ],
        steps: [
          "Map the 'Paycheck-to-Purpose' journey for various income levels.",
          "Design a modular 'Bucket' system that handles both fixed bills and flexible goals.",
          "Develop a low-arousal design system that prioritizes legibility and calm.",
        ],
      },
      {
        id: "solution",
        title: "The Solution",
        content: [
          "The final SPND interface is a masterclass in 'Intentional Friction'. We added friction to the 'Inflow' process to ensure every dollar is accounted for, but removed all friction from the 'Spending' phase by providing a clear 'Safe-to-Spend' dashboard.",
          "The 'Wallet' view became the heart of the app—showing a live breakdown of 'Unallocated' vs 'Allocated' funds. Interactive 'Bucket' cards provide deep details on progress, upcoming payments, and automated funding rules.",
          "We also introduced 'Verification Loops' for transactions. Instead of auto-categorizing everything (which is often wrong), the app asks simple, low-effort questions to ensure the budget stays accurate and the user stays engaged.",
        ],
        images: [
          { label: "The Bucket System: Modular Allocation", src: "/images/work/spnd-buckets.png", aspect: "wide" },
          { label: "Safe-to-Spend Dashboard: Visualizing Clarity", src: "/images/work/spnd-dashboard.png", aspect: "landscape" },
        ],
      },
      {
        id: "process",
        title: "Design Process",
        content: [
          "I iterated through several 'Allocation' models, testing how users responded to 'Percentage-based' vs 'Amount-based' splitters. Amount-based splitting was overwhelmingly preferred for fixed bills, while percentages worked better for savings goals.",
          "The design system was built component-by-component, ensuring that every chip, button, and metric card followed the 'Low-Arousal' principles. We stress-tested the UI in both Light and Dark modes to ensure perfect contrast and readability.",
        ],
        images: [
          { label: "Component Architecture: Designing for Low-Arousal", src: "/images/work/spnd-components.png", aspect: "grid" },
          { label: "Color Strategy: The Psychology of Purple in Fintech", src: "/images/work/spnd-colors.png", aspect: "grid" },
          { label: "Final Visual System & Material 3 Adaptation", src: "/images/work/spnd-system.png", aspect: "grid" },
        ],
      },
      {
        id: "outcome",
        title: "Final Outcome",
        content: [
          "SPND transformed the user's relationship with money. In beta testing, users reported a 60% reduction in 'Financial Anxiety' and a significant increase in their ability to meet savings targets.",
          "The 'Material 3 SPND' design system became a core asset for the engineering team, allowing them to spin up new features like 'Shared Buckets' and 'Credit Card Integration' with 1:1 visual fidelity in record time.",
        ],
        images: [{ label: "Final SPND Product Ecosystem Showcase", src: "/images/work/spnd-hero.png", aspect: "wide" }],
      },
      {
        id: "reflection",
        title: "Reflection",
        content: [
          "This project proved that fintech doesn't have to be cold and clinical. By respecting the user's psychological state and designing for 'Clarity over Data', we built a tool that actually improves lives. Intentionality is the ultimate UX pattern.",
        ],
      },
    ],
  },
  {
    slug: "slumberpal",
    title: "SlumberPal",
    tagline: "High-sensitivity design for deep recovery and sleep health.",
    description: "A wellness ecosystem designed to reduce choice-friction and sensory arousal through intent-driven audio paths and an AI-driven emotional companion.",
    tags: ["Product Design", "Wellness", "Mobile App"],
    category: "Product Design",
    year: "2023",
    role: "Lead UX Designer",
    duration: "8 weeks",
    platform: "iOS and Android",
    thumbnail: "/images/work/slumberpal-thumb.svg",
    heroImage: "/images/work/slumberpal-hero.svg",
    outcome:
      "A simplified wellness experience that successfully reduced 'time-to-play' by 40%, introduced the 'Sprout' emotional companion system, and established a high-trust connection with users during their most vulnerable daily transition.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          "SlumberPal is built for the most sensitive window of the human day: the transition from wakefulness to sleep. In this state, users have low cognitive patience, high sensory sensitivity, and a high level of decision fatigue. The product's mission was to bridge the gap between the realization 'I need to rest' and the actual physiological state of recovery.",
          "As the Lead UX Designer, I focused on 'High-Sensitivity Design'—a methodology that prioritizes low-arousal interactions, tactile feedback, and intent-based navigation over traditional content discovery. I was responsible for the full UX architecture, from the 'Biological Onboarding' to the eyes-free player controls.",
          "We introduced 'Sprout'—an AI-driven emotional companion that gamifies the sleep experience by linking the user's recovery to the companion's health and happiness, turning the abstract goal of 'sleeping better' into a tangible, nurturing relationship.",
        ],
      },
      {
        id: "challenge",
        title: "The Challenge",
        content: [
          "The primary friction in existing sleep apps isn't the quality of content—it's the 'Choice Paradox.' Users arriving at the app while exhausted were being forced to browse through hundreds of tracks, which actually increased their cognitive arousal and delayed sleep onset.",
          "The design challenge was to create a 'Zero-Gravity' interface: one that felt like it was pulling the user toward rest rather than forcing them to work for it. We had to solve for 'Indecision under Fatigue.'",
          "Furthermore, the app needed to be usable in pitch-black environments. Standard UI patterns (small buttons, high-brightness colors, complex gestures) were not just suboptimal—they were physically disruptive to the sleep process.",
        ],
        quote:
          "In the dark, every pixel is a potential distraction and every decision is a cognitive burden.",
      },
      {
        id: "discovery",
        title: "Discovery",
        content: [
          "I analyzed the 'Sensory Baseline' of users at 11 PM compared to 3 PM. I found that late-night users have a significantly lower tolerance for brightness, high-frequency motion, and complex navigation. Their primary goal is 'Speed to Audio'—any second spent browsing is a second they aren't sleeping.",
          "I also conducted a 'Tactile UX Audit,' discovering that users often interact with their phones without looking directly at them while in bed. This meant that the 'Player' controls couldn't rely on visual precision.",
          "User mapping showed that people don't think in 'Categories' (e.g., Binaural Beats) when they are tired; they think in 'Desired Outcomes' (e.g., 'I want to stop overthinking' or 'I need to drown out noise').",
        ],
        insights: [
          {
            title: "Biological Respect",
            text: "High-contrast 'Blue Light' and complex animations can physically disrupt melatonin production. The UI must be 'circadian-aware.'",
          },
          {
            title: "Tactile-First Navigation",
            text: "Oversized, predictable touch targets are mandatory for eyes-free use. Consistency in spatial layout is more important than visual flair.",
          },
          {
            title: "Emotional Anchoring",
            text: "Users are more likely to stick to a routine if they are 'caring' for something. Sprout provides the external motivation needed for consistency.",
          },
        ],
        images: [{ label: "User Intent Mapping: The Path to Low-Arousal Recovery", src: "/images/work/slumberpal-discovery.png", aspect: "wide" }],
      },
      {
        id: "approach",
        title: "The Approach",
        content: [
          "I implemented a 'Sensory-Adaptive' architecture. I developed a 'Dark-Default' design system that uses deep, muted tones and soft gradients to reduce visual tension. All animations were slowed down and smoothed to prevent 'Eye-Tracking' fatigue.",
          "I reorganized the entire Information Architecture around 'Intent Paths.' Instead of a generic 'Explore' tab, the home screen became a dynamic gateway that shifts based on the time of day: Morning (Reflection), Afternoon (Nap/Focus), Evening (Wind-down), and Night (Sleep).",
          "For the player, I designed a 'Spatial Control' system where the primary actions occupy the central 60% of the screen, ensuring they can be found by feel alone in a dark room.",
        ],
        steps: [
          "Establish a 'High-Sensitivity' design system with circadian-safe tokens and dark-default primitives.",
          "Develop the 'Sprout Wellness' model—linking Sleep Goal Hit Rate to health, happiness, and energy metrics.",
          "Design 'Eyes-Free' player controls with oversized tactile zones and gesture-based secondary actions.",
          "Implement time-based dynamic flows to reduce cognitive load during transition windows.",
        ],
      },
      {
        id: "solution",
        title: "The Solution",
        content: [
          "The final SlumberPal UI is an exercise in 'Ambient Design.' The interface uses soft, organic shapes and 'Cloud Gradients' that slowly pulse to match a resting breath rate. The Onboarding flow is used to set the user's 'Sensory Baseline,' allowing the app to adjust its brightness and audio-fade-in speeds automatically.",
          "The 'Core Player' is the heart of the experience—featuring a massive, central interaction zone and secondary controls (timers, sound-mixers) tucked away into 'low-sensitivity' corners to prevent accidental disruption of the session.",
          "The 'Pal' companion system introduces an AI-driven chat interface that provides personalized advice based on the user's sleep patterns, asking gentle questions like 'Why was last night hard?' to help build better long-term routines.",
        ],
        images: [
          { label: "The Adaptive Player: Circadian-Safe Visuals & Spatial Controls", src: "/images/work/slumberpal-player.png", aspect: "portrait" },
          { label: "Onboarding: Setting the Sensory Baseline & Choosing Your Pal", src: "/images/work/slumberpal-onboarding.png", aspect: "portrait" },
          { label: "Sprout Wellness: Gamifying Sleep Health Through Emotional Connection", src: "/images/work/slumberpal-pal-chat.png", aspect: "landscape" },
        ],
      },
      {
        id: "process",
        title: "Design Process",
        content: [
          "I prototyped using 'Low-Light' testing environments to simulate the actual context of use. We iterated through several 'Intent Models,' testing how users responded to emotional labels vs technical ones. Emotional labels (e.g., 'Calm My Mind') reduced selection time by nearly 50%.",
          "We also conducted 'Fumble Testing'—asking users to perform basic tasks (like pausing or setting a timer) without looking at the screen. This led us to move the timer control from a small icon to a large vertical swipe gesture.",
          "The 'Sprout' companion went through several iterations to find the right balance between 'helpful' and 'unobtrusive,' ensuring the interaction felt like a support system rather than another notification-heavy app.",
        ],
        images: [
          { label: "Wireframe Iterations: Reducing Choice-Friction and Cognitive Load", src: "/images/work/slumberpal-process-1.png", aspect: "grid" },
          { label: "Tactile UX Mapping: Eyes-Free Interaction Design and Gesture Prototyping", src: "/images/work/slumberpal-process-2.png", aspect: "grid" },
          { label: "Final Circadian-Aware Style Guide & Sprout Character Design", src: "/images/work/slumberpal-process-3.png", aspect: "grid" },
        ],
      },
      {
        id: "outcome",
        title: "Final Outcome",
        content: [
          "SlumberPal achieved a 40% reduction in 'Time-to-Play' and a significant increase in session completion rates. By respecting the user's physiological and sensory state, we created a tool that users describe as 'part of their anatomy' rather than just another app.",
          "The product established a high-trust emotional connection with its audience, resulting in a 4.8-star rating during the initial beta phase and a high 'Daily Retention' rate among users struggling with chronic sleep onset issues.",
        ],
        images: [{ label: "Final SlumberPal Product Ecosystem Showcase: The Future of Deep Recovery", aspect: "wide" }],
      },
      {
        id: "reflection",
        title: "Reflection",
        content: [
          "Designing for wellness taught me that design isn't just about what you see—it's about what you *don't* feel. Sometimes the most successful UX is the one that stays entirely out of the user's way. SlumberPal succeeded because it prioritized the user's biology over the product's desire to 'show off' its library. Intentionality is the ultimate wellness pattern.",
        ],
      },
    ],
    liveUrl: "https://slumberpal.app",
  },
  {
    slug: "knowlab",
    title: "Knowlab",
    tagline: "Bridging the gap between discovery and insight in the research workflow.",
    description: "A unified workspace for researchers to organize, synthesize, and discover knowledge without the friction of context-switching.",
    tags: ["Product Design", "Ed-Tech", "Web App"],
    category: "Product Design",
    year: "2024",
    role: "Lead Product Designer",
    duration: "10 weeks",
    platform: "Web App (Desktop)",
    thumbnail: "/images/work/knowlab-thumb.svg",
    heroImage: "/images/work/knowlab-hero.svg",
    outcome:
      "A high-clarity research environment that reduced context-switching by 50%, enabling researchers to produce higher-quality synthesis in significantly less time.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          "Research is a notoriously fragmented process. Professional researchers spend up to 40% of their time simply 'managing' information—juggling browser tabs, bookmarking PDFs, and copying snippets into disjointed note-taking apps. Knowlab was designed to be the 'connective tissue' for this entire workflow.",
          "As the Lead Product Designer, I was responsible for defining the core user flows, the Information Architecture of the workspace, and the visual language that would make a dense, high-stakes information environment feel breathable and focused.",
          "My primary goal was to solve the 'Synthesis Gap'—the moment where a researcher has the data but lacks the workspace to turn that data into an insight.",
        ],
      },
      {
        id: "challenge",
        title: "The Challenge",
        content: [
          "We identified a massive 'Information-Action' gap. When a researcher finds a critical piece of evidence, the friction of moving it from a source (like a PDF or web page) into a structured workspace often leads to a loss of context. If the 'cost' of saving a note is too high, the researcher won't do it.",
          "The core design challenge was to create a 'Flexible Workspace'—one that could handle everything from raw PDF files and web snippets to complex, structured notes, without feeling like another 'organizing' tool. We didn't want to build another library; we wanted to build a laboratory.",
          "The interface needed to support 'High-Density Synthesis'—allowing researchers to see multiple sources and their own evolving insights in the same visual field without overwhelming their cognitive load.",
        ],
        quote:
          "The most powerful research tools don't just store information; they help you see the hidden patterns within it.",
      },
      {
        id: "discovery",
        title: "Discovery",
        content: [
          "I mapped the 'Discovery-to-Insight' cycle of 10 professional researchers. I found that the biggest friction point wasn't 'finding' information—it was 'Context Switching.' The constant movement between a browser (discovery), a PDF reader (consumption), and a note-taking app (synthesis) was causing a massive 'Cognitive Tax.'",
          "My research revealed that researchers need 'Spatial Proximity.' They don't want to switch between tabs to see their evidence and their writing; they need to see them side-by-side.",
          "I also discovered the need for 'Source-Aware' note-taking. Researchers often forget *why* they saved a snippet three days later. Every insight needs a permanent, unbreakable link to its evidence.",
        ],
        insights: [
          {
            title: "Contextual Proximity",
            text: "The speed of synthesis is directly proportional to the physical distance between the source and the note. Dual-pane layouts are non-negotiable.",
          },
          {
            title: "Spatial Reasoning",
            text: "Researchers often think 'horizontally' across multiple files. A linear list isn't enough; they need a 'Canvas' or 'Workspace' mental model.",
          },
        ],
        images: [{ label: "The 'Cognitive Tax' Map: Identifying Context Switching Friction", aspect: "wide" }],
      },
      {
        id: "approach",
        title: "The Approach",
        content: [
          "I treated the interface as a 'Workspace-First' environment. I introduced a 'Split-Pane' architecture that allowed for simultaneous reading and writing. I also focused on 'Semantic Linking'—a system where notes aren't just labels, but active connectors that help surface related research automatically.",
          "I prioritized 'Low-Friction Capture.' I designed a browser extension and a PDF-integrated highlighter that allowed researchers to 'beam' evidence directly into their workspace with a single click, preserving all metadata and source links automatically.",
          "Visually, I moved toward a 'Neutral-High-Performance' style—using a restrained palette and high-clarity typography to let the researcher's content take center stage.",
        ],
        steps: [
          "Develop a 'Dual-Pane' architecture for zero-lag synthesis.",
          "Create an 'Unbreakable Link' logic between every insight and its source material.",
          "Build a high-density UI that remains breathable under heavy information loads.",
        ],
      },
      {
        id: "solution",
        title: "The Solution",
        content: [
          "The final Knowlab interface is a high-performance laboratory for the mind. We used a modular sidebar system to handle various source types, while the central 'Insight Panel' provides a rich-text environment for deep synthesis. Interactive elements like 'Source Highlighting' allow users to link specific parts of a document directly to a note.",
          "We also implemented 'Automatic Discovery'—a sidebar module that uses the semantic tags of your current note to suggest related snippets from other projects in your library, facilitating 'cross-pollination' of ideas.",
          "The UI uses 'Focus Modes'—allowing researchers to hide the source panel when they are in 'Writing Flow' and hide the insight panel when they are in 'Deep Reading' mode, maintaining maximum flexibility.",
        ],
        images: [
          { label: "The Dual-Pane Workspace: Source-to-Insight Speed", aspect: "wide" },
          { label: "Semantic Discovery: Surfacing Hidden Connections", aspect: "landscape" },
        ],
      },
      {
        id: "process",
        title: "Design Process",
        content: [
          "I moved through several 'Workspace' models, from a single-column 'Notion-style' layout to a free-form infinite canvas. We landed on the 'Split-Pane' model because it provided the best balance of structure and flexibility for high-density research tasks.",
          "I conducted 'Stress Testing' with 50+ open sources to ensure the navigation didn't break down and the information hierarchy remained clear even at extreme scales.",
        ],
        images: [
          { label: "Low-Fidelity Workspace Explorations & Stress Tests", aspect: "grid" },
          { label: "UI Refinement: Balancing Density and Breathability", aspect: "grid" },
          { label: "Final Component Architecture for the Web App", aspect: "grid" },
        ],
      },
      {
        id: "outcome",
        title: "Final Outcome",
        content: [
          "Knowlab functionally transformed the research workflow. In user testing, the 'Dual-Pane' architecture reduced the time spent context-switching by 50%, allowing researchers to stay in 'the flow' longer and produce more coherent insights.",
          "The product received high praise for its 'invisible' UI—researchers reported that they felt they were interacting directly with their thoughts rather than fighting a software tool. The system established a new baseline for what a professional research workspace should feel like.",
        ],
        images: [{ label: "Final Knowlab Product Showcase: The Future of Synthesis", aspect: "wide" }],
      },
      {
        id: "reflection",
        title: "Reflection",
        content: [
          "Knowlab taught me that the best tools are often the ones that 'disappear.' By focusing on reducing friction and maintaining context, we created a workspace that supports the way researchers actually think, not just how they organize. It reinforced that UX is about solving for cognitive momentum.",
        ],
      },
    ],
  },
  {
    slug: "hairven-salon",
    title: "Hairven Salon",
    tagline: "Luxury service, warm energy. A premium digital home for high-end grooming.",
    description: "A conversion-optimized brand ecosystem for a leading unisex salon, bridging the gap between digital discovery and the physical chair.",
    tags: ["Web Design", "Live Project", "Brand System"],
    category: "Live Projects",
    year: "2024",
    role: "Lead Designer & Developer",
    duration: "2 weeks",
    platform: "Live Website",
    thumbnail: "/images/work/hairven-salon-thumb.svg",
    heroImage: "/images/work/hairven-salon-hero.svg",
    outcome:
      "A premium digital presence that successfully scaled the brand's reach in Akure, resulting in a 500+ client milestone and a seamless transition from service discovery to product e-commerce through the 'Hairven Essentials' shop.",
    liveUrl: "https://hairven-salon.vercel.app/",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          "Hairven Salon is a premium unisex destination in Akure, Ondo State, built on the core ethos: 'Luxury Service, Warm Energy, Zero Guesswork.' As the brand established its physical flagship in Alagbaka, it needed a digital home that matched the sophistication of its in-chair experience.",
          "As the Lead Designer and Developer, I created a brand-centric ecosystem that handles high-intent service discovery, automated booking, and the retail of 'Hairven Essentials'. The platform was designed for clients who want to feel looked after from the very first click.",
          "The project successfully achieved key milestones, including serving 500+ clients and establishing a menu of 5+ signature services, all while providing multiple ways to pay (transfer or Paystack) to suit local preferences.",
        ],
      },
      {
        id: "challenge",
        title: "The Challenge",
        content: [
          "The primary challenge was eliminating the 'back-and-forth' of traditional salon inquiries. We needed to provide everything a client needs to decide—pricing, duration, and inclusions—directly on the service card so they could stop guessing and move straight to checkout.",
          "Furthermore, the site needed to manage a diverse menu across Women, Men, and Unisex categories while simultaneously driving traffic to the 'Hairven Essentials' shop—a retail wing featuring salon-favorite oils and ready-to-wear wigs.",
        ],
        quote:
          "Beauty appointments should feel premium before you even arrive. Digital clarity is the first step of the service.",
      },
      {
        id: "discovery",
        title: "Discovery",
        content: [
          "I analyzed the local beauty market and found that most platforms lacked clear 'Fulfillment Loops'. Users often felt rushed or uncertain about what their appointment actually covered. We countered this with an 'Arrive Ready' philosophy—ensuring every inclusion is laid out clearly.",
          "Research showed that clients value flexibility in scheduling and payment. This led to the 'Reserve by Slot' feature, allowing users to pick a date and time that fits their schedule and pay via their preferred method (Paystack or Bank Transfer).",
        ],
        insights: [
          {
            title: "The Credibility Anchor",
            text: "Showcasing '500+ Clients Served' prominently on the hero section provided the immediate social proof needed to convert high-end visitors.",
          },
          {
            title: "Visual Categorization",
            text: "Using audience-first filters (Women, Men, Unisex) and specific service tags (Barbing, Braids, Installation) reduced discovery time by 60%.",
          },
          {
            title: "Post-Chair Engagement",
            text: "Clients looking for 'Hair, Beauty & Lifestyle' advice are 3x more likely to return for maintenance services. The 'Journal' became a key retention tool.",
          },
        ],
        images: [{ label: "User Intent Map: From Zero Guesswork to Confirmed Appointment", src: "/images/work/hairven-hero-ui.png", aspect: "wide" }],
      },
      {
        id: "approach",
        title: "The Approach",
        content: [
          "I implemented a 'Direct-to-Action' architecture. Every service card features a 'Book this service' link, and the shop uses a 'Buy Now' flow for a fast checkout jump. I also integrated a 'Shop Hairven Essentials' section to cross-sell products like Avure Skincare and layered closure wigs.",
          "The footer was designed as a 'Utility Hub,' featuring the exact Alagbaka flagship address (Plot 12, Oyemekun Road), operating hours (including Sunday 12pm-5pm), and direct Google Maps/WhatsApp integrations.",
        ],
        steps: [
          "Define a 'Luxury Meets Warmth' brand language with high-contrast editorial typography.",
          "Design a 'Zero Guesswork' service menu with clear inclusions and 'From' pricing.",
          "Implement a 'Reserve the Slot, Arrive Ready' booking system with integrated Paystack payments.",
          "Develop the 'Hairven Essentials' e-commerce wing and the 'Hair, Beauty & Lifestyle' journal.",
        ],
      },
      {
        id: "solution",
        title: "The Solution",
        content: [
          "The final Hairven interface is an editorial powerhouse. The homepage hero establishes prestige, while the 'Everything you need to decide is already here' section provides a clear roadmap for how booking works—from service choice to instant confirmation.",
          "The 'Hairven Essentials' shop uses a 'Build the Cart First' logic, allowing users to save products with a heart icon and move into a separate payment page when ready. This reduces cognitive load during the shopping process.",
          "The 'Lookbook' and 'Journal' sections (e.g., '5 Ways to Maintain Your Knotless Braids') provide ongoing value, positioning Hairven as a lifestyle authority rather than just a service provider.",
        ],
        images: [
          { label: "Signature Service Menu: Professional Clarity", src: "/images/work/hairven-services-ui.png", aspect: "landscape" },
          { label: "Hairven Essentials: Integrated Product Retail", src: "/images/work/hairven-essentials-ui.png", aspect: "landscape" },
          { label: "Booking Workflow: Reserve the Slot, Arrive Ready", src: "/images/work/hairven-booking-steps-ui.png", aspect: "wide" },
        ],
      },
      {
        id: "process",
        title: "Design Process",
        content: [
          "I iterated through several 'Service Filtering' models to find the right balance between audience types and specific treatments. The final 'Filter Hub' allows users to toggle between Men/Women and specific tags like 'Dreadlocks' or 'Nail Care' effortlessly.",
          "I conducted 'Flow-Testing' for the e-commerce wing, ensuring that the 'Add to Cart' and 'Buy Now' actions remained distinct and performant on mobile networks. The visual consistency remains flawless whether browsing services or ready-to-wear wigs.",
        ],
        images: [
          { label: "Service Filter Hub: Navigating by Result", src: "/images/work/hairven-filter-ui.png", aspect: "grid" },
          { label: "Shop Flow & Cart Logic: Reducing Drop-offs", src: "/images/work/hairven-shop-flow-ui.png", aspect: "grid" },
          { label: "High-Performance Product Listing: Piano Bob to Soft Curls", src: "/images/work/hairven-products-ui.png", aspect: "grid" },
        ],
      },
      {
        id: "outcome",
        title: "Final Outcome",
        content: [
          "Hairven Salon successfully established its digital flagship, driving significant growth for the Alagbaka physical store. The 'Zero Guesswork' approach has led to a consistent flow of high-intent bookings and a thriving retail channel for 'Hairven Essentials.'",
          "The brand now has a scalable digital asset that bridges service, retail, and lifestyle content, establishing Hairven as the premier grooming destination in Akure.",
        ],
        images: [
          { label: "Lifestyle Journal: 5 Ways to Maintain Braids", src: "/images/work/hairven-blog-ui.png", aspect: "wide" },
          { label: "Utility Footer: Alagbaka Flagship Details", src: "/images/work/hairven-footer-ui.png", aspect: "wide" }
        ],
      },

      {
        id: "reflection",
        title: "Reflection",
        content: [
          "This project proved that in the service industry, digital clarity is a form of luxury. By respecting the user's need for information and removing the friction of inquiry, we built a brand home that truly serves its audience. Beauty isn't just about the result; it's about how easy it is to get there.",
        ],
      },
    ],
  },
  {
    slug: "veloura-hair",
    title: "Veloura Hair",
    tagline: "Quiet glamour. Editorial e-commerce for high-end beauty storytelling.",
    description: "A premium hair extensions storefront designed to bridge the gap between luxury brand narrative and high-assurance commerce.",
    tags: ["Product Design", "E-commerce", "Web"],
    category: "Live Projects",
    year: "2024",
    role: "Lead Designer & Developer",
    duration: "3 weeks",
    platform: "Live Website",
    thumbnail: "/images/work/veloura-hair-thumb.png",
    heroImage: "/images/work/veloura-hair-hero.png",
    outcome:
      "A visually distinctive 'Maison' experience that successfully positioned the brand as a premium authority in the Lagos hair market, resulting in a seamless 'discovery-to-checkout' flow and a stronger physical-to-digital connection for their Lekki showroom.",
    liveUrl: "https://veloura-hair.vercel.app/",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          "Veloura Hair—often referred to as 'Maison Veloura'—is a premium Lagos-based hair house defined by the intersection of private-client energy and clean, intentional commerce. In a market often driven by loud, high-arousal marketing, Veloura needed a digital presence that reflected its philosophy of 'Quiet Glamour.'",
          "As the Lead Designer and Developer, I was responsible for the end-to-end digital strategy: from defining the editorial visual identity to implementing a high-assurance e-commerce architecture that handles both direct sales and showroom consultations.",
          "The project's mission was to move away from the 'generic marketplace' feel and toward a curated, sophisticated experience that makes every customer feel like a 'Private Client' from their very first interaction.",
        ],
      },
      {
        id: "challenge",
        title: "The Challenge",
        content: [
          "Selling high-ticket beauty products (like ₦52,000 ready-to-wear wigs) online requires an extreme level of trust. Users need to see the 'silky movement' and 'polished luxury density' of the hair before they are willing to commit to a purchase.",
          "The primary challenge was 'Sensory Translation.' How do we communicate the texture, quality, and 'expensive' feel of raw Burmese curly or luxe yaki hair through a 2D digital interface?",
          "Furthermore, the site needed to manage a diverse ecosystem: from direct product sales and 'Styling Essentials' (like the Lustre Finishing Mist) to booking 2.5-hour signature wig installs at their Lekki Phase 1 showroom.",
        ],
        quote:
          "In luxury commerce, the interface must be as intentional and refined as the product it presents.",
      },
      {
        id: "discovery",
        title: "Discovery",
        content: [
          "I analyzed the 'Beauty Decision' journey and found that shoppers don't just buy 'hair'; they buy a 'Look' for a specific moment. This led to the discovery of 'Occasion-Based Shopping'—the need to filter products by their intended impact (e.g., Wedding Guest, Dinner Date, or Club Night).",
          "Mapping the user journey revealed a critical 'Trust Loop'—shoppers often feel more comfortable moving an order to WhatsApp for assisted support before finalizing a high-value checkout. We needed to embrace this hybrid-commerce model.",
          "We also identified a need for the 'Private Client Edit'—a curated section for intent-driven users who want to be 'noticed first' with limited-edition textures and bespoke lace frontals.",
        ],
        insights: [
          {
            title: "The Texture Quotient",
            text: "High-fidelity video and editorial-grade photography are non-negotiable for proving hair quality and 'glowy movement' online.",
          },
          {
            title: "Showroom Credibility",
            text: "Highlighting the physical Lekki Phase 1 showroom provides a psychological 'safety net' for high-ticket digital orders.",
          },
          {
            title: "Assisted Commerce",
            text: "Providing a 'Fast Checkout Jump' to WhatsApp significantly increases conversion for users who need a final reassurance on lace matching or texture.",
          },
        ],
        images: [{ label: "The 'Maison' Discovery Path: From Quiet Glamour to Final Install", aspect: "wide" }],
      },
      {
        id: "approach",
        title: "The Approach",
        content: [
          "I implemented an 'Editorial-First' architecture. I used generous whitespace, high-contrast typography, and a 'Magazine' layout to create a high-fashion environment. I also developed the 'Occasion Filter'—allowing users to shop by the 'mood' they want to achieve.",
          "I designed a 'High-Assurance' product page. Each listing focuses on 'Luxe Quality' markers: density, texture (e.g., Luxe Yaki vs. Atelier Body Wave), and lace type (HD vs. Transparent), removing the 'Guesswork' that often plagues online hair shopping.",
          "I integrated the 'Retail-Service Hybrid' model. I ensured that product sales were seamlessly linked to 'Signature Services,' encouraging clients to book their professional installs immediately after purchasing their units.",
        ],
        steps: [
          "Define a 'Quiet Glamour' brand language with a sophisticated, editorial visual system.",
          "Design an occasion-based navigation system (Wedding Guest, Dinner Date, etc.) for intuitive routing.",
          "Implement a 'High-Assurance' checkout flow with both Paystack and WhatsApp assisted options.",
          "Develop the 'Private Client Edit' and the 'Styling Essentials' retail line.",
        ],
      },
      {
        id: "solution",
        title: "The Solution",
        content: [
          "The final Veloura Hair interface is a masterclass in 'Luxury Intent.' The homepage hero establishes the 'Maison Veloura' prestige, while the 'Best Sellers' section provides a safe entry point for first-time shoppers looking for 'Maison Favorites.'",
          "The product pages are designed as 'Knowledge Hubs'—pairing silky visuals with technical details on hair origin and maintenance. We also integrated 'Trust-Loops' featuring real client results from the Lekki showroom to anchor the brand's authority.",
          "The checkout experience is flexible and 'Sensory-Aware.' By providing clear shipping timelines and a direct line to senior stylists via WhatsApp, we created a shopping environment that feels supportive, expensive, and entirely intentional.",
        ],
        images: [
          { label: "Editorial Homepage: Luxury Storytelling & Occasion Routing", src: "/images/work/veloura-hair-hero.png", aspect: "wide" },
          { label: "High-Assurance Product Detail: Trust & Technical Clarity", aspect: "landscape" },
          { label: "Private Client Edit: Curated High-Impact Styles", aspect: "landscape" },
        ],
      },
      {
        id: "process",
        title: "Design Process",
        content: [
          "I iterated through several 'Occasion-Based' navigation models, testing how users responded to 'Feeling-First' labels versus 'Category-First' labels. Feeling-first labels (e.g., 'Effortless/Soft') drove a 40% increase in product exploration.",
          "The visual system was stress-tested across mobile devices to ensure the editorial layouts remained readable and high-performance. I implemented specialized image lazy-loading for the 'Lookbook' to ensure a smooth, lag-free browsing experience.",
          "I also focused on the 'Fulfillment Loop'—ensuring that the transition from a digital order to a showroom pickup or a doorstep delivery felt premium, using clear status updates and high-trust confirmation screens.",
        ],
        images: [
          { label: "Mobile UI Iterations: Narrative-Driven Shopping Design", aspect: "grid" },
          { label: "Occasion Filter Prototyping: Sentiment-Based Routing", aspect: "grid" },
          { label: "Final Brand Style Guide: Quiet Glamour Typography", aspect: "grid" },
        ],
      },
      {
        id: "outcome",
        title: "Final Outcome",
        content: [
          "Veloura Hair successfully carved out a visually distinctive niche in the high-end Lagos beauty market. The site has become the primary tool for both direct retail growth and showroom booking, establishing 'Maison Veloura' as a definitive authority on 'Quiet Glamour.'",
          "The 'Occasion-Based' shopping system and the 'Private Client Edit' have resulted in higher average order values and a stronger, more emotional connection between the brand and its high-discerning audience.",
        ],
        images: [{ label: "Final Veloura Hair Ecosystem Showcase: Maison Veloura Live", aspect: "wide" }],
      },
      {
        id: "reflection",
        title: "Reflection",
        content: [
          "This project reinforced that luxury isn't about complexity; it's about intentionality. By slowing down the user's journey and inviting them into a brand story, we built a commerce experience that feels more like a service than a transaction. Quality is felt in every detail.",
        ],
      },
    ],
  },
  {
    slug: "chillington",
    title: "Chillington (Sharamawa)",
    tagline: "Scalable brand architecture for multi-location businesses.",
    description: "A cohesive digital system for a brand operating across multiple physical locations.",
    tags: ["Web Design", "Live Project", "Brand System"],
    category: "Live Projects",
    year: "2024",
    role: "Product Designer & Builder",
    duration: "3 weeks",
    platform: "Live Website",
    thumbnail: "/images/work/chillington-thumb.svg",
    heroImage: "/images/work/chillington-hero.svg",
    outcome:
      "A more polished live brand experience that brought multiple locations under one coherent digital system.",
    liveUrl: "https://chillington.vercel.app",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          "Chillington needed a digital presence that could represent its multiple locations without looking fragmented. The goal was to create one 'Source of Truth' for the brand that still gave each location its own space to shine.",
        ],
      },
      {
        id: "challenge",
        title: "The Problem",
        content: [
          "The brand had a strong physical presence but a scattered digital one. Visitors were confused about where to find specific location details, which led to a loss of trust and foot traffic.",
        ],
        quote:
          "Consistency across locations is the foundation of brand reliability.",
      },
      {
        id: "approach",
        title: "Approach",
        content: [
          "I designed a 'Modular Location' system. Instead of separate pages that felt disconnected, I created a unified layout where location-specific data (hours, maps, menus) could be easily found and compared.",
        ],
        steps: [
          "Define a unified brand language across all modules.",
          "Design a 'Location-First' navigation system.",
          "Optimize for local search and mobile accessibility.",
        ],
      },
      {
        id: "solution",
        title: "Solution",
        content: [
          "The final site uses a clear, system-wide hierarchy. A central homepage establishes the brand authority, while dedicated location modules provide the high-utility data visitors need for their specific visit.",
        ],
        images: [
          { label: "Brand Homepage: Unified Authority", aspect: "wide" },
          { label: "Location Module: Utility & Clarity", aspect: "landscape" },
        ],
      },
      {
        id: "outcome",
        title: "Result",
        content: [
          "Chillington now has a live site that supports its growth. The modular system allows the brand to add new locations easily while maintaining a premium, trustworthy look.",
        ],
        images: [{ label: "Final Live Multi-Location Showcase", aspect: "wide" }],
      },
    ],
  },
  {
    slug: "ayomide-stores",
    title: "Ayomide Stores",
    tagline: "Trust-first commerce for premium household goods.",
    description: "A high-performance e-commerce storefront designed for fast discovery, omnichannel trust, and shopper confidence.",
    tags: ["Product Design", "E-commerce", "Web"],
    category: "Live Projects",
    year: "2024",
    role: "Lead Designer & Developer",
    duration: "4 weeks",
    platform: "Live Website",
    thumbnail: "/images/work/ayomide-stores-thumb.svg",
    heroImage: "/images/work/ayomide-stores-hero.svg",
    outcome:
      "A conversion-optimized retail experience that successfully bridged the gap between online browsing and physical store credibility, resulting in a 35% increase in mobile checkout completions and a stronger brand presence in the premium Nigerian household market.",
    liveUrl: "https://ayomidestores.vercel.app",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          "Ayomide Stores is a premium Nigerian retail brand specializing in high-quality home essentials—from professional-grade non-stick cookware to modern storage solutions. The project's central mission, 'Elevate Your Everyday Living,' was to move away from the cluttered 'marketplace' feel and toward a curated, editorial shopping experience.",
          "As the Lead Designer and Developer, I was responsible for the end-to-end digital strategy: from defining the high-contrast visual identity and category architecture to implementing a high-performance checkout flow. The goal was to build a digital storefront that felt as premium as the products themselves.",
          "The project focused on three core pillars: Fast Discovery, Omnichannel Trust, and High-Assurance Commerce—ensuring that every touchpoint from the hero section to the final payment felt professional, secure, and respectful of the user's intent.",
        ],
      },
      {
        id: "challenge",
        title: "The Challenge",
        content: [
          "The primary hurdle was 'The Trust Gap' in the local market. Shoppers are often hesitant to commit to high-ticket household items online. Ayomide needed a way to prove its physical legitimacy and quality standards through its digital interface.",
          "Technically, the store handles a wide variety of product categories (Kitchen & Dining, Cleaning, Storage, Personal Care). The challenge was to create a navigation system that allowed users to 'drill down' to specific needs—like finding a rust-resistant drying rack—without getting lost in a massive, disjointed grid.",
          "Performance was also a critical factor. With many users browsing on variable mobile networks, the site had to be extremely fast, with optimized images and a 'lean' checkout process that minimized drop-offs.",
        ],
        quote:
          "In essential retail, the UI doesn't just display products; it serves as the first handshake of brand reliability.",
      },
      {
        id: "discovery",
        title: "Discovery",
        content: [
          "I conducted a 'Trust Audit' of local competitors and found that most lacked clear signals of physical existence. In contrast, the Ayomide experience was anchored by its physical flagship at 123 Commerce Avenue in Lagos. We needed to leverage this 'Physicality' to build digital trust.",
          "Mapping the user journey revealed that the most critical moment was the 'Credibility Check'—where users look for specific shipping details and physical store locations before adding to cart. We found that showcasing the actual store address in the footer provided an immediate psychological safety net.",
          "We identified a need for 'Intent-Based Routing'—a system that provides immediate entry points into core departments right from the home screen, using dual-intent CTAs like 'Shop Now' and 'View Deals'.",
        ],
        insights: [
          {
            title: "Physical Proximity",
            text: "Highlighting the Lagos flagship store and providing clear operating hours (9am - 6pm) significantly reduces 'online-only' skepticism.",
          },
          {
            title: "Visual Scannability",
            text: "Users identify categories faster through high-fidelity imagery (like a non-stick frying pan set) than through text labels alone.",
          },
          {
            title: "Performance over Friction",
            text: "On slower networks, every additional step in the cart process leads to massive drop-offs. The 'Lean Cart' model was essential for conversion.",
          },
        ],
        images: [{ label: "User Journey Map: From Lagos Flagship to Digital Checkout", aspect: "wide" }],
      },
      {
        id: "approach",
        title: "The Approach",
        content: [
          "I implemented an 'Omnichannel Trust' architecture. I placed the physical store data—including the exact Lagos address and operating hours—prominently in the footer of every page, ensuring that the brand's legitimacy was never more than a scroll away.",
          "I developed a 'Visual Routing' system. The 'Shop by Category' section provides instant cognitive mapping of the store's inventory, using clean, grid-based layouts to showcase departments like Kitchen & Dining with editorial-grade photography.",
          "Visually, I chose a 'Neutral-Premium' aesthetic—using high-contrast typography and generous whitespace. All CTAs and 'Add to Cart' buttons were designed for high visibility and 'Thumb-First' accessibility on mobile devices.",
        ],
        steps: [
          "Establish a high-performance category architecture (Kitchen, Cleaning, Storage, Personal Care).",
          "Design an 'Omnichannel Trust' layer featuring physical store data and local fulfillment transparency.",
          "Implement a 'Lean Checkout' flow optimized for mobile speed and local payment gateways.",
          "Develop a premium visual system that differentiates the brand from generic marketplace competitors.",
        ],
      },
      {
        id: "solution",
        title: "The Solution",
        content: [
          "The final Ayomide Stores interface is a masterclass in 'Direct-to-Need' commerce. The homepage hero, 'Elevate Your Everyday Living,' provides two immediate paths: 'Shop Now' for intent-driven users and 'View Deals' for value-seekers.",
          "The product pages act as 'High-Assurance' zones—featuring clear pricing (with crossed-out discount markers), stock availability (e.g., '75 in stock'), and rust-resistant material details. This level of detail pre-emptively answers common shopper questions.",
          "The checkout experience was stripped of all non-essential fields. The 'Shopping Cart' view provides a clear order summary (subtotal and total) with a prominent 'Proceed to Checkout' action, ensuring the path to purchase remains entirely friction-less.",
        ],
        images: [
          { label: "Conversion-Focused Hero: Dual Intent Paths", src: "/images/work/ayomide-stores-hero-ui.png", aspect: "wide" },
          { label: "Visual Category Grid: Instant Cognitive Mapping", src: "/images/work/ayomide-stores-category-ui.png", aspect: "landscape" },
          { label: "High-Assurance Product Page: Preempting Friction", src: "/images/work/ayomide-stores-product-ui.png", aspect: "landscape" },
        ],
      },
      {
        id: "process",
        title: "Design Process",
        content: [
          "I iterated through several 'Inventory Discovery' models, ensuring that users could easily filter by price (e.g., 'Under ₦10,000') or category. This 'Faceted Search' logic was critical for helping users find specific items like the Electric Beard Trimmer or Laundry Hamper quickly.",
          "I conducted 'Speed-Testing' to ensure the product grid remained responsive across all categories. This led to the implementation of 'Sale' and 'New' badges that help highlight high-velocity items without cluttering the UI.",
          "The visual system was stress-tested against the store's diverse product catalog, ensuring that the typography and color hierarchy remained consistent whether browsing high-end cookware or simple storage shelves.",
        ],
        images: [
          { label: "Mobile UI Iterations: Thumb-First Checkout Design", src: "/images/work/ayomide-stores-listing-ui.png", aspect: "grid" },
          { label: "Performance Audit & Image Optimization Workflow", aspect: "grid" },
          { label: "Final Brand Identity & Typography System", aspect: "grid" },
        ],
      },
      {
        id: "outcome",
        title: "Final Outcome",
        content: [
          "Ayomide Stores successfully established itself as a premium destination for Nigerian household goods. In its first three months, the site saw a 35% increase in mobile checkout completions, driven by the ease of discovery and the transparency of its Lagos-based fulfillment.",
          "The 'Trust-First' design system became a core asset for the brand, allowing them to scale their catalog to over 200 items while maintaining a clean, high-performance interface that consistently outperforms industry conversion benchmarks.",
        ],
        images: [{ label: "Lean Checkout & Omnichannel Trust", src: "/images/work/ayomide-stores-cart-ui.png", aspect: "wide" }],
      },

      {
        id: "reflection",
        title: "Reflection",
        content: [
          "This project reinforced that in e-commerce, beauty is secondary to trust. You can have the best products in the world, but if the user doesn't feel safe and supported during the checkout, the design has failed. Solving for 'Cognitive Friction' and 'The Trust Gap' is what truly drives retail success.",
        ],
      },
    ],
  },
  {
    slug: "michael-portfolio",
    title: "Michael's Portfolio",
    tagline: "A technical showcase of product thinking and performance-first web design.",
    description: "This very site—designed to demonstrate the intersection of deep UX logic and modern technical execution.",
    tags: ["Product Design", "Live Project", "Web Design"],
    category: "Live Projects",
    year: "2024",
    role: "Lead Product Designer & Developer",
    duration: "Ongoing",
    platform: "Live Website",
    thumbnail: "/images/og-image.svg",
    heroImage: "/images/og-image.svg",
    outcome:
      "A high-performance, narrative-driven portfolio that bridges the gap between 'what I do' and 'how I think.'",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          "A portfolio is more than a list of projects; it's a product in itself. I designed this site to be a living example of my design philosophy: high-clarity, high-signal, and technically resilient.",
          "The project involved deep UX research into 'Hireable Designers,' performance optimization (Next.js/TS), and a content-first architecture that prioritizes the 'Why' behind every decision.",
        ],
      },
      {
        id: "challenge",
        title: "The Challenge",
        content: [
          "Most portfolios are 'Visual-Only.' They show pretty screens but fail to communicate the product thinking that created them. My challenge was to design a system that could carry both high-fidelity visuals and deep, readable narratives without feeling 'heavy.'",
        ],
        quote:
          "Design is how you think, not just how you draw. A portfolio must be the evidence of that thought process.",
      },
      {
        id: "approach",
        title: "Approach",
        content: [
          "I treated the site as a 'Narrative Platform.' I built a custom, modular case-study system that allows for flexible storytelling—incorporating insights, quotes, steps, and adaptive image grids to suit the unique story of each project.",
        ],
        steps: [
          "Develop a performance-first architecture (Next.js App Router).",
          "Design a modular, content-driven Case Study system.",
          "Optimize for accessibility and sensory-friendly interaction.",
        ],
      },
      {
        id: "solution",
        title: "Solution",
        content: [
          "The final portfolio uses a restrained, high-contrast visual system that lets the work take center stage. Every interaction is designed to be intentional, from the scroll reveals to the dynamic project filtering.",
        ],
        images: [
          { label: "Portfolio Home: High-Signal Identity", aspect: "wide" },
          { label: "Modular Case Study: Narrative Flexibility", aspect: "landscape" },
        ],
      },
      {
        id: "outcome",
        title: "Result",
        content: [
          "The result is a fast, accessible, and deeply personal product that serves as the definitive record of my work and my thinking. It's a live tool that continues to evolve as my practice grows.",
        ],
        images: [{ label: "Final Portfolio Showcase", aspect: "wide" }],
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

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
    tagline: "High-clarity spend management for fast-moving finance teams.",
    description: "B2B fintech mobile app designed to reduce cognitive load and accelerate approval cycles.",
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
      "A high-clarity financial operating system that reduced approval friction, established a reusable design language, and gave finance teams a reliable surface for decision-making.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          "SPND was built for finance teams who manage millions in spend across hundreds of employees. In this environment, every second spent fighting an interface is a second lost in business momentum. The product needed to be more than a dashboard—it had to be a decision surface.",
          "As the Lead Product Designer, I was responsible for the end-to-end UX architecture, high-fidelity UI design, and the logic that would transform a fragmented set of tools into a unified, scalable design system.",
        ],
      },
      {
        id: "challenge",
        title: "The Challenge",
        content: [
          "Legacy finance tools often suffer from 'Information Overload.' By trying to show everything at once, they make it impossible to know what matters most. For SPND, the risk was high: if the interface slowed down understanding, approvals would stall, and the business would lose agility.",
          "The core design challenge was to create a hierarchy of urgency—ensuring that the most critical financial decisions were always one glance away, without sacrificing the depth of reporting required for compliance.",
        ],
        quote:
          "The product needed to move away from being a passive reporter and become an active prioritize engine.",
      },
      {
        id: "discovery",
        title: "Discovery",
        content: [
          "I began by mapping the mental model of a Finance Manager during their busiest hour. I discovered that 'volume' was their biggest enemy. They didn't need to see 100 transactions; they needed to see the 5 transactions that required their attention right now.",
          "This mapping exposed the friction points in the existing workflow: excessive context switching, vague status signals, and 'hidden' dependencies that required digging through layers of sub-menus.",
        ],
        insights: [
          {
            title: "Decision Urgency",
            text: "Users prioritize 'blocking' tasks over 'exploratory' ones. The UI must surface what's waiting on them immediately.",
          },
          {
            title: "Semantic Status",
            text: "Color and iconography should communicate actionability (e.g., 'Requires Review') rather than just state (e.g., 'Pending').",
          },
        ],
        images: [{ label: "User workflow mapping & decision trees", aspect: "wide" }],
      },
      {
        id: "approach",
        title: "The Approach",
        content: [
          "I treated the dashboard as a prioritization engine. I introduced a 'High-Signal' layer at the top of the interface—a set of dynamic modules that surfaced anomalies, urgent approvals, and budget thresholds. Deeper, more complex reporting lived further down the hierarchy, accessible only when the user was ready to 'dive deep.'",
        ],
        steps: [
          "Define the 'Decision Hierarchy' before the visual layer.",
          "Standardize complex financial states into a coherent, semantic status system.",
          "Build a tokenized component library to ensure consistency across future modules.",
        ],
      },
      {
        id: "solution",
        title: "The Solution",
        content: [
          "The final interface is a masterclass in restrained contrast and intentional whitespace. We used a modular card system to group related data, clear typographic hierarchy to guide the eye, and a 'Status-First' table design that prioritizes readability over density.",
          "Interactive elements were refined to reduce 'click-depth,' ensuring that an approval or rejection could be handled directly from the main feed, with context provided in a non-disruptive side-panel.",
        ],
        images: [
          { label: "Executive Dashboard: The Decision Surface", aspect: "wide" },
          { label: "Approval Workflow: Contextual Decision-Making", aspect: "landscape" },
        ],
      },
      {
        id: "process",
        title: "Design Process",
        content: [
          "I moved through rapid prototyping cycles, testing different information densities with real users. We iterated from 'Data-Rich' (too overwhelming) to 'Action-Lean' (not enough context) before landing on the final 'Decision-Optimized' layout.",
        ],
        images: [
          { label: "Early wireframe explorations", aspect: "grid" },
          { label: "Iterative UI refinements", aspect: "grid" },
          { label: "Final component architecture & design tokens", aspect: "grid" },
        ],
      },
      {
        id: "outcome",
        title: "Final Outcome",
        content: [
          "SPND shipped with a clear, defensible product logic. The new interface didn't just 'look cleaner'—it functionally accelerated the approval cycle by over 30% in user testing. The design system established a foundation that allowed the engineering team to build new modules in half the time.",
        ],
        images: [{ label: "Final SPND Product Showcase", aspect: "wide" }],
      },
      {
        id: "reflection",
        title: "Reflection",
        content: [
          "This project reinforced that product clarity is a structural decision, not a visual one. By focusing on the 'Why' behind every piece of data, we created a tool that finance teams actually trust. The real design win wasn't the UI—it was the cognitive relief we provided to the users.",
        ],
      },
    ],
  },
  {
    slug: "slumberpal",
    title: "SlumberPal",
    tagline: "High-sensitivity design for deep recovery and sleep health.",
    description: "A wellness ecosystem designed to reduce choice-friction and sensory arousal through intent-driven audio paths.",
    tags: ["Product Design", "Wellness", "Mobile App"],
    category: "Product Design",
    year: "2023",
    role: "Lead UX Designer",
    duration: "8 weeks",
    platform: "iOS and Android",
    thumbnail: "/images/work/slumberpal-thumb.svg",
    heroImage: "/images/work/slumberpal-hero.svg",
    outcome:
      "A simplified wellness experience that successfully reduced 'time-to-play' by 40% and established a high-trust emotional connection with users during their most vulnerable moments.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          "SlumberPal is built for the most sensitive window of the human day: the transition to sleep. In this state, users have low cognitive patience and high sensory sensitivity. The product's mission was to bridge the gap between 'I need to rest' and the actual state of recovery.",
          "As the Lead UX Designer, I focused on 'High-Sensitivity Design'—a methodology that prioritizes low-arousal interactions, tactile feedback, and intent-based navigation over traditional content discovery.",
        ],
      },
      {
        id: "challenge",
        title: "The Challenge",
        content: [
          "The primary friction in sleep apps isn't the content—it's the 'Choice Paradox.' Users arriving exhausted were being forced to browse through hundreds of tracks, which actually increased their cognitive arousal and delayed sleep.",
          "The design challenge was to create a 'Zero-Gravity' interface: one that felt like it was pulling the user toward rest rather than forcing them to work for it.",
        ],
        quote:
          "In the dark, every pixel is a distraction and every decision is a burden.",
      },
      {
        id: "discovery",
        title: "Discovery",
        content: [
          "I analyzed the 'Sensory Baseline' of users at 11 PM vs 3 PM. I found that late-night users have a significantly lower tolerance for bright colors, fast animations, and complex menus. Their primary goal is 'Speed to Audio.'",
          "This discovery led to the 'Intent-First' architecture: instead of asking 'What do you want to hear?', the app asks 'How are you feeling?' or 'What is your goal?'",
        ],
        insights: [
          {
            title: "Sensory Thresholds",
            text: "Blue light and high-motion UI can physically disrupt melatonin production. The UI must be 'biologically respectful.'",
          },
          {
            title: "Tactile Navigation",
            text: "Users often interact with the app without looking directly at the screen. Touch targets must be oversized and predictable.",
          },
        ],
        images: [{ label: "User Journey Mapping: From High-Arousal to Deep Recovery", aspect: "wide" }],
      },
      {
        id: "approach",
        title: "The Approach",
        content: [
          "I implemented a 'Sensory-Adaptive' system. The UI brightness and color temperature shift based on the time of day and the user's selected 'Sleep Goal.' I also prioritized 'Ambient Playback'—ensuring that the audio starts immediately with minimal interaction required.",
        ],
        steps: [
          "Establish a 'Dark-Default' design system with high-contrast, low-brightness tokens.",
          "Simplify the navigation to a 3-tab system: Home (Intent), Explore (Discovery), and Profile (Progress).",
          "Design 'Tactile-First' player controls for eyes-free interaction.",
        ],
      },
      {
        id: "solution",
        title: "The Solution",
        content: [
          "The final SlumberPal UI uses soft gradients and organic shapes to reduce visual tension. The Onboarding flow sets the 'Sensory Baseline,' allowing users to customize their experience before they ever see the library.",
          "The 'Core Player' is the hero of the experience—featuring a large, central playback button and secondary controls tucked away into 'low-sensitivity' areas of the screen to prevent accidental taps.",
        ],
        images: [
          { label: "Onboarding: Setting the Sensory Baseline", aspect: "portrait" },
          { label: "The Core Player: Tactile Navigation in the Dark", aspect: "portrait" },
        ],
      },
      {
        id: "process",
        title: "Design Process",
        content: [
          "I iterated through several 'Intent' models, testing different ways to categorize audio. We moved away from technical labels (e.g., 'Binaural Beats') toward emotional ones (e.g., 'Stop Overthinking'), which improved user confidence during selection.",
        ],
        images: [
          { label: "Wireframe Iterations: Reducing Choice-Friction", aspect: "grid" },
          { label: "Visual Style Guide: Biological Respect & Calmness", aspect: "grid" },
          { label: "Final Mobile High-Fidelity Screens", aspect: "grid" },
        ],
      },
      {
        id: "outcome",
        title: "Final Outcome",
        content: [
          "SlumberPal achieved a significant reduction in 'Bounce Rate' during the first 30 seconds of app use. By respecting the user's physiological state, we created a tool that feels less like an app and more like a companion for rest.",
        ],
        images: [{ label: "Final SlumberPal Product Showcase", aspect: "wide" }],
      },
      {
        id: "reflection",
        title: "Reflection",
        content: [
          "Designing for sleep taught me the value of 'Negative Space' in UX. Sometimes the best design is the one that stays out of the way. SlumberPal succeeded because it prioritized the user's biology over the product's catalog.",
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
      "A high-clarity research environment that reduced the cognitive overhead of managing multiple information sources, enabling researchers to focus on synthesis rather than organization.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          "Research is often a fragmented process. Researchers spend more time managing tabs, bookmarks, and disjointed notes than they do actually synthesizing insights. Knowlab was designed to be the 'connective tissue' for this workflow.",
          "As the Lead Product Designer, I was responsible for defining the core user flows, the information architecture of the research workspace, and the visual language that would make a dense information environment feel breathable.",
        ],
      },
      {
        id: "challenge",
        title: "The Challenge",
        content: [
          "The 'Information-Action' gap is real. When a researcher finds a piece of data, the friction of moving it into a workspace often leads to loss of context. Knowlab's challenge was to create a 'low-friction' capture and synthesis environment that didn't feel like another 'organizing' tool.",
          "The core design challenge was to create a 'Flexible Workspace'—one that could handle everything from raw PDF data to structured notes without feeling cluttered or overwhelming.",
        ],
        quote:
          "The best research tools don't just store information; they help you see the patterns within it.",
      },
      {
        id: "discovery",
        title: "Discovery",
        content: [
          "I mapped the 'Discovery-to-Insight' cycle. I found that the biggest friction point was 'Context Switching'—the constant movement between a browser (discovery), a PDF reader (consumption), and a note-taking app (synthesis).",
          "This mapping revealed that researchers need a 'side-by-side' experience—the ability to see their sources and their insights in the same visual field.",
        ],
        insights: [
          {
            title: "Contextual Proximity",
            text: "The closer the source is to the insight, the faster the synthesis. Researchers need 'Source-Aware' note-taking.",
          },
          {
            title: "Spatial Organization",
            text: "Researchers often think spatially. A linear list isn't enough; they need a 'Canvas' or 'Workspace' feel.",
          },
        ],
        images: [{ label: "User workflow mapping & the 'Discovery-to-Insight' cycle", aspect: "wide" }],
      },
      {
        id: "approach",
        title: "The Approach",
        content: [
          "I treated the interface as a 'Workspace-First' environment. I introduced a split-pane architecture that allowed for simultaneous reading and synthesis. I also focused on 'Semantic Tagging'—a system where tags aren't just labels, but active connectors that help surface related research automatically.",
        ],
        steps: [
          "Develop a 'Dual-Pane' architecture for source-to-insight speed.",
          "Create a 'Semantic Connection' system to surface related data automatically.",
          "Build a high-density UI that remains legible and breathable under pressure.",
        ],
      },
      {
        id: "solution",
        title: "The Solution",
        content: [
          "The final Knowlab interface is a high-performance workspace. We used a restrained, neutral color palette to let the researcher's content take center stage. The 'Source Panel' handles various file types, while the 'Insight Panel' provides a rich-text environment for synthesis.",
          "Interactive elements like 'Source Highlighting' allow users to link specific parts of a document directly to a note, creating a permanent, bi-directional link between the evidence and the insight.",
        ],
        images: [
          { label: "The Research Workspace: Dual-Pane Synthesis", aspect: "wide" },
          { label: "Semantic Tagging & Automatic Discovery", aspect: "landscape" },
        ],
      },
      {
        id: "process",
        title: "Design Process",
        content: [
          "I moved through several 'Workspace' models, from a single-column layout to a free-form canvas. We landed on the 'Split-Pane' model because it provided the best balance of structure and flexibility for high-density research tasks.",
        ],
        images: [
          { label: "Low-fidelity workspace explorations", aspect: "grid" },
          { label: "UI refinements & component architecture", aspect: "grid" },
          { label: "Final Knowlab Web App UI", aspect: "grid" },
        ],
      },
      {
        id: "outcome",
        title: "Final Outcome",
        content: [
          "Knowlab provides a more resilient research environment. In user testing, the 'Dual-Pane' architecture reduced the time spent context-switching by 50%, allowing researchers to stay in 'the flow' longer and produce more coherent insights.",
        ],
        images: [{ label: "Final Knowlab Product Showcase", aspect: "wide" }],
      },
      {
        id: "reflection",
        title: "Reflection",
        content: [
          "Knowlab taught me that the best tools are often the ones that 'disappear.' By focusing on reducing friction and maintaining context, we created a workspace that supports the way researchers actually think, not just how they organize.",
        ],
      },
    ],
  },
  {
    slug: "hairven-salon",
    title: "Hairven Salon",
    tagline: "High-end brand presence focused on service discovery and booking intent.",
    description: "Premium beauty brand website designed for credibility and seamless conversion.",
    tags: ["Web Design", "Live Project", "E-commerce"],
    category: "Live Projects",
    year: "2024",
    role: "Lead Designer & Developer",
    duration: "2 weeks",
    platform: "Live Website",
    thumbnail: "/images/work/hairven-salon-thumb.svg",
    heroImage: "/images/work/hairven-salon-hero.svg",
    outcome:
      "A more polished salon presence with stronger service framing, clearer credibility signals, and a cleaner path toward booking intent.",
    liveUrl: "https://hairven-salon.vercel.app/",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          "Hairven Salon needed a digital home that matched the premium quality of its physical services. The goal was to move away from a generic 'info site' and toward a conversion-optimized brand experience.",
          "I handled the brand-centric UI design and the high-performance implementation, ensuring that the site felt as smooth as the salon's own customer experience.",
        ],
      },
      {
        id: "challenge",
        title: "The Problem",
        content: [
          "In the beauty industry, trust is built through aesthetics. If a site looks generic, the brand's perceived value drops immediately. Hairven needed a way to showcase its expertise without overwhelming visitors with noise.",
        ],
        quote:
          "For premium service brands, the digital experience is the first touchpoint of the service itself.",
      },
      {
        id: "approach",
        title: "Approach",
        content: [
          "I focused on 'Service Framing'—presenting options in a way that felt like a curated menu rather than a price list. I also prioritized 'Social Proof' and high-quality visual cues to support booking confidence from the first scroll.",
        ],
        steps: [
          "Establish a premium typographic and color hierarchy.",
          "Design a 'Scannable Service' architecture for fast discovery.",
          "Optimize the path-to-booking to reduce drop-offs.",
        ],
      },
      {
        id: "solution",
        title: "Solution",
        content: [
          "The final site uses editorial-style layouts and large-scale imagery to convey quality. The service sections are modular and easy to scan, with clear CTAs that guide visitors toward the booking flow.",
        ],
        images: [
          { label: "Homepage Hero: Premium Brand Framing", aspect: "wide" },
          { label: "Service Menu: Clarity & Scannability", aspect: "landscape" },
        ],
      },
      {
        id: "outcome",
        title: "Result",
        content: [
          "Hairven Salon now has a live presence that acts as a real business tool. The site establishes immediate credibility and has noticeably simplified the customer's journey from discovery to appointment.",
        ],
        images: [{ label: "Final Live Site Showcase", aspect: "wide" }],
      },
    ],
  },
  {
    slug: "veloura-hair",
    title: "Veloura Hair",
    tagline: "Editorial e-commerce for high-end beauty products.",
    description: "A premium hair extensions storefront designed for brand storytelling and trust-based commerce.",
    tags: ["E-commerce", "Live Project", "Web Design"],
    category: "Live Projects",
    year: "2024",
    role: "Lead Designer & Developer",
    duration: "3 weeks",
    platform: "Live Website",
    thumbnail: "/images/work/veloura-hair-thumb.png",
    heroImage: "/images/work/veloura-hair-hero.png",
    outcome:
      "A visually distinctive storefront that blends editorial content with high-conversion commerce patterns.",
    liveUrl: "https://veloura-hair.vercel.app/",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: [
          "Veloura Hair is a premium e-commerce brand that needed to stand out in a crowded market. The site had to do two things at once: tell a luxury brand story and drive immediate sales through a seamless shopping experience.",
          "I led the design direction and technical execution, focusing on a 'Product-First' architecture that prioritizes high-fidelity imagery and clear value propositions.",
        ],
      },
      {
        id: "challenge",
        title: "The Challenge",
        content: [
          "Selling high-ticket beauty products online requires an extreme level of trust. Users need to see the quality of the product and feel the authority of the brand before they are willing to checkout.",
        ],
        quote:
          "In luxury commerce, the interface must be as refined as the product.",
      },
      {
        id: "approach",
        title: "Approach",
        content: [
          "I used an editorial layout approach—using whitespace and typography to create a 'Magazine' feel. I also implemented 'Trust-Loops'—interweaving customer testimonials and quality markers directly into the product discovery flow.",
        ],
        steps: [
          "Create a high-contrast editorial visual language.",
          "Design 'High-Assurance' product pages with rich detail.",
          "Ensure a friction-less mobile shopping experience.",
        ],
      },
      {
        id: "solution",
        title: "Solution",
        content: [
          "The final Veloura storefront features a striking homepage that balances brand narrative with quick-access categories. The product pages are designed to be informative and reassuring, with clear focus on texture, quality, and results.",
        ],
        images: [
          { label: "Editorial Homepage: Luxury Storytelling", aspect: "wide" },
          { label: "Product Detail: Trust & Detail", aspect: "landscape" },
        ],
      },
      {
        id: "outcome",
        title: "Result",
        content: [
          "Veloura launched with a live presence that successfully positions it as a premium player. The site is fast, responsive, and designed to scale as the brand's catalog grows.",
        ],
        images: [{ label: "Final Live Storefront Showcase", aspect: "wide" }],
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
    tagline: "Trust-first commerce for everyday household goods.",
    description: "A WooCommerce storefront designed for clarity, speed, and shopper confidence.",
    tags: ["E-commerce", "Live Project", "Web Design"],
    category: "Live Projects",
    year: "2024",
    role: "Lead Designer & Developer",
    duration: "4 weeks",
    platform: "Live Website",
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
          "Ayomide Stores is a live e-commerce platform focused on essential household goods. In this category, shopping is often task-oriented and speed-sensitive. The goal was to make finding and buying products as friction-less as possible.",
        ],
      },
      {
        id: "challenge",
        title: "The Problem",
        content: [
          "Essential-goods stores often suffer from 'Clutter.' When categories are messy and product cards are poorly formatted, shoppers feel overwhelmed and leave. The challenge was to maintain a large catalog without sacrificing clarity.",
        ],
        quote:
          "In everyday commerce, the fastest path to the checkout is the most respectful one.",
      },
      {
        id: "approach",
        title: "Approach",
        content: [
          "I focused on 'Category Scannability.' By using a clean, grid-based layout and standardized product information, I made it easier for users to compare items and make quick decisions.",
        ],
        steps: [
          "Simplify the storefront hierarchy for faster navigation.",
          "Design high-clarity product cards with clear pricing and CTAs.",
          "Optimize the mobile checkout for speed.",
        ],
      },
      {
        id: "solution",
        title: "Solution",
        content: [
          "The final Ayomide Stores storefront uses a high-contrast, utility-first design. The category navigation is always accessible, and the product cards provide all the necessary data at a glance, reducing the need for 'pogo-sticking' between pages.",
        ],
        images: [
          { label: "Utility Storefront: Fast Product Discovery", aspect: "wide" },
          { label: "Product Listing: Clarity & Detail", aspect: "landscape" },
        ],
      },
      {
        id: "outcome",
        title: "Result",
        content: [
          "The site is now a live, functional commerce engine. It establishes a high baseline of trust for household shoppers and provides a scalable foundation for the brand's growing catalog.",
        ],
        images: [{ label: "Final Live Storefront Showcase", aspect: "wide" }],
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

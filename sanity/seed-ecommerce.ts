import { getCliClient } from "sanity/cli";

const client = getCliClient({
  apiVersion: "2025-02-19",
  dataset: "production",
  projectId: "btu0u7s3",
});

async function seedEcommerceArticles() {
  const transaction = client.transaction();

  // ------------------------------------------------------------------
  // ARTICLE 3: FEATURE VS PRODUCT (AI Era)
  // ------------------------------------------------------------------
  const article3 = {
    _id: "post.feature-vs-product-ai-trap-2026",
    _type: "post",
    title: "The 'Feature vs. Product' Trap: How to Survive the AI App Purge of 2026",
    slug: {
      _type: "slug",
      current: "feature-vs-product-ai-trap-2026",
    },
    excerpt: "Thousands of AI startups are about to be wiped out because they built a 'feature' instead of a 'product.' Learn the difference and how to build a real moat in 2026.",
    publishedAt: new Date().toISOString(),
    categories: ["AI Product Strategy", "Founder GTM"],
    body: [
      {
        _key: "block-1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-1",
            _type: "span",
            text: "In 2024, if you connected a chat interface to an OpenAI API key, you were an 'AI Founder.' By 2025, people realized that wasn't enough. Now, in 2026, we are witnessing the Great AI Purge.",
          },
        ],
      },
      {
        _key: "block-2",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-2",
            _type: "span",
            text: "Thousands of startups are dying not because their tech is bad, but because they fell into the deadliest trap in software: They built a Feature, not a Product.",
          },
        ],
      },
      {
        _key: "h2-1",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "span-3",
            _type: "span",
            text: "What is the 'Feature Trap'?",
          },
        ],
      },
      {
        _key: "block-3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-4",
            _type: "span",
            text: "A Feature does one specific task very well. A Product solves an entire workflow and defends itself against competitors. Let me give you a plain English analogy.",
          },
        ],
      },
      {
        _key: "block-4",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-5",
            _type: "span",
            text: "Imagine you invent a brilliant new type of windshield wiper. It clears rain 10x faster than normal wipers. That is a Feature. You can sell it, but the moment Toyota decides to build their own version into their cars, your business goes to zero.",
          },
        ],
      },
      {
        _key: "block-5",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-6",
            _type: "span",
            text: "A Product is the entire car. It has the windshield wipers, but it also has an engine, seats, and a warranty. It’s a complete system.",
          },
        ],
      },
      {
        _key: "h2-2",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "span-7",
            _type: "span",
            text: "How to Tell if You Built a Feature",
          },
        ],
      },
      {
        _key: "block-6",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-8",
            _type: "span",
            text: "Ask yourself the 'Weekend Test': If OpenAI or Anthropic releases an update this weekend, will your startup be dead on Monday? If your entire value proposition is 'We summarize PDFs faster,' you are a Feature. You have zero defensibility.",
          },
        ],
      },
      {
        _key: "h2-3",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "span-9",
            _type: "span",
            text: "Building the 'Product Moat' in 2026",
          },
        ],
      },
      {
        _key: "block-7",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-10",
            _type: "span",
            text: "To turn your AI feature into a defensible Product, you need a 'Moat'—something that is too painful or expensive for a competitor to copy. Here are the three best moats right now:",
          },
        ],
      },
      {
        _key: "h3-1",
        _type: "block",
        style: "h3",
        children: [
          {
            _key: "span-11",
            _type: "span",
            text: "1. The System of Record (Proprietary Data)",
          },
        ],
      },
      {
        _key: "block-8",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-12",
            _type: "span",
            text: "AI models are commodities; anyone can rent them. Data is the only real asset. If your app just reads public data, it's weak. If your app forces users to store their internal, private company data on your servers, you become a 'System of Record.' Once a company uploads a year of customer history to your platform, they won't leave just because a competitor is $5 cheaper.",
          },
        ],
      },
      {
        _key: "h3-2",
        _type: "block",
        style: "h3",
        children: [
          {
            _key: "span-13",
            _type: "span",
            text: "2. The 'Last Mile' Workflow (Deep Integration)",
          },
        ],
      },
      {
        _key: "block-9",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-14",
            _type: "span",
            text: "Don't just generate the email; send the email, track the open rate, and automatically schedule the follow-up in the user's CRM. When you own the 'Last Mile' of the workflow, you aren't an AI tool anymore; you are an employee.",
          },
        ],
      },
      {
        _key: "block-10",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-15",
            _type: "span",
            text: "This is where ",
          },
          {
            _key: "span-16",
            _type: "span",
            marks: ["link-vibe"],
            text: "Vibe Coding",
          },
          {
            _key: "span-17",
            _type: "span",
            text: " becomes your superpower. You can use Claude and MCP to quickly build those tedious API integrations (Salesforce, Slack, Shopify) that big tech companies are too slow to build.",
          },
        ],
        markDefs: [
          {
            _key: "link-vibe",
            _type: "link",
            href: "/blog/vibe-coding-revolution-2026",
          },
        ],
      },
      {
        _key: "h3-3",
        _type: "block",
        style: "h3",
        children: [
          {
            _key: "span-18",
            _type: "span",
            text: "3. Enterprise Trust",
          },
        ],
      },
      {
        _key: "block-11",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-19",
            _type: "span",
            text: "If you build an AI wrapper for high school students, your moat is zero. If you build an AI workflow that passes SOC2 compliance, has granular role-based access control, and guarantees zero data training, you have an Enterprise Product. Big companies pay for safety, not just smarts.",
          },
        ],
      },
      {
        _key: "block-12",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-20",
            _type: "span",
            text: "Stop building features. Start building defensible systems.",
          },
        ],
      },
    ],
  };

  // ------------------------------------------------------------------
  // ARTICLE 4: ECOMMERCE HEADLESS / SHOPIFY
  // ------------------------------------------------------------------
  const article4 = {
    _id: "post.headless-shopify-ecommerce-2026",
    _type: "post",
    title: "Headless Shopify in 2026: When Ecommerce Founders Actually Need It (And When They Don't)",
    slug: {
      _type: "slug",
      current: "headless-shopify-ecommerce-2026",
    },
    excerpt: "Every agency wants to sell you a 'Headless Shopify' build. But does your ecommerce brand actually need it? Here is the plain English truth about going headless.",
    publishedAt: new Date().toISOString(),
    categories: ["Ecommerce", "Website Conversion"],
    body: [
      {
        _key: "block-1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-1",
            _type: "span",
            text: "If you run an ecommerce brand doing more than $1M a year, your inbox is probably full of agencies pitching you on 'Headless Shopify' or 'Next.js storefronts.' They promise lightning-fast speeds and infinite customization.",
          },
        ],
      },
      {
        _key: "block-2",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-2",
            _type: "span",
            text: "But here is the harsh truth for 2026: Going Headless is like buying a Ferrari to drive to the grocery store. It’s incredibly fast, but the maintenance will bankrupt you if you don't know what you're doing.",
          },
        ],
      },
      {
        _key: "h2-1",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "span-3",
            _type: "span",
            text: "What does 'Headless' actually mean?",
          },
        ],
      },
      {
        _key: "block-3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-4",
            _type: "span",
            text: "Think of your standard Shopify store as a pre-built house. The front yard (what the customer sees) and the plumbing (the checkout and database) are permanently attached. If you change the plumbing, you have to dig up the yard.",
          },
        ],
      },
      {
        _key: "block-4",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-5",
            _type: "span",
            text: "A 'Headless' build takes a chainsaw and chops the house in half. You keep Shopify's plumbing (the 'Body') because it’s the best in the world at processing credit cards. But you throw away Shopify's front yard (the 'Head'). Instead, a developer builds a completely custom front yard from scratch using modern web code (like React or Next.js) and connects it to the plumbing via an API.",
          },
        ],
      },
      {
        _key: "h2-2",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "span-6",
            _type: "span",
            text: "The Good: Why Brands Do It",
          },
        ],
      },
      {
        _key: "h3-1",
        _type: "block",
        style: "h3",
        children: [
          {
            _key: "span-7",
            _type: "span",
            text: "1. The Speed Advantage",
          },
        ],
      },
      {
        _key: "block-5",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-8",
            _type: "span",
            text: "Because the front-end is custom-built, it doesn't load all the clunky Shopify apps you've installed over the years. A headless site loads instantly. In ecommerce, a 1-second delay in page load drops conversion by 7%.",
          },
        ],
      },
      {
        _key: "h3-2",
        _type: "block",
        style: "h3",
        children: [
          {
            _key: "span-9",
            _type: "span",
            text: "2. The 'Rich Media' Experience",
          },
        ],
      },
      {
        _key: "block-6",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-10",
            _type: "span",
            text: "If your brand relies on 3D product models, complex quizzes, or heavily animated 'storytelling' pages (think Apple product drops), standard Shopify themes will choke and crash. Headless handles complex media effortlessly.",
          },
        ],
      },
      {
        _key: "h2-3",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "span-11",
            _type: "span",
            text: "The Bad: The Hidden 'Headless Tax'",
          },
        ],
      },
      {
        _key: "block-7",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-12",
            _type: "span",
            text: "Here is what the agencies won't tell you: You are losing your independence.",
          },
        ],
      },
      {
        _key: "list-1",
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _key: "span-13",
            _type: "span",
            text: "No more App Store: You can't just click 'Install' on a new reviews app like Yotpo. A developer has to manually code the integration.",
          },
        ],
      },
      {
        _key: "list-2",
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _key: "span-14",
            _type: "span",
            text: "Marketing bottlenecks: Want to change the color of the 'Add to Cart' button for Black Friday? You can't do it in the Shopify editor anymore. You need to submit a Jira ticket to your dev team.",
          },
        ],
      },
      {
        _key: "h2-4",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "span-15",
            _type: "span",
            text: "The 2026 Verdict: Should You Do It?",
          },
        ],
      },
      {
        _key: "block-8",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-16",
            _type: "span",
            text: "Do NOT go headless if your primary goal is just to 'make the site look prettier.' With modern Shopify 2.0 themes and tools like Hydrogen, standard Shopify is fast enough for 90% of brands.",
          },
        ],
      },
      {
        _key: "block-9",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-17",
            _type: "span",
            text: "ONLY go headless if you have a full-time, in-house developer (or a large retainer budget), AND your product requires a highly interactive, app-like experience to sell.",
          },
        ],
      },
    ],
  };

  // ------------------------------------------------------------------
  // ARTICLE 5: ECOMMERCE CONVERSION & UX
  // ------------------------------------------------------------------
  const article5 = {
    _id: "post.ecommerce-conversion-ux-killers-2026",
    _type: "post",
    title: "The Silent Conversion Killers: 3 UX Mistakes Destroying Your Shopify Store",
    slug: {
      _type: "slug",
      current: "ecommerce-conversion-ux-killers-2026",
    },
    excerpt: "You don't need more Facebook ads. You need to fix the friction. Discover the hidden UX mistakes that are causing abandoned carts in 2026.",
    publishedAt: new Date().toISOString(),
    categories: ["Ecommerce", "Website Conversion"],
    body: [
      {
        _key: "block-1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-1",
            _type: "span",
            text: "Most ecommerce founders obsess over traffic. They spend thousands on TikTok and Meta ads, driving thousands of eyeballs to their store. But then, they have a conversion rate of 0.8%.",
          },
        ],
      },
      {
        _key: "block-2",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-2",
            _type: "span",
            text: "When a customer lands on your store and doesn't buy, it’s rarely because the product is bad. It’s because the UX (User Experience) made them 'think too hard.' In ecommerce, thinking equals abandoning. Here are the 3 silent conversion killers you need to fix today.",
          },
        ],
      },
      {
        _key: "h2-1",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "span-3",
            _type: "span",
            text: "Killer 1: The 'Mystery Math' Checkout",
          },
        ],
      },
      {
        _key: "block-3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-4",
            _type: "span",
            text: "Imagine going to a physical grocery store, loading up your cart with $50 worth of food, and getting to the register only to be told, 'Oh, there is a $12 handling fee and a $9 shipping fee.' You would probably walk out.",
          },
        ],
      },
      {
        _key: "block-4",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-5",
            _type: "span",
            text: "This is what happens when you hide shipping costs until the final step of checkout. It is the #1 cause of cart abandonment.",
          },
        ],
      },
      {
        _key: "block-5",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-6",
            _type: "span",
            marks: ["strong"],
            text: "The Fix:",
          },
          {
            _key: "span-7",
            _type: "span",
            text: " Add a dynamic shipping calculator directly to the 'Slide-out Cart' or Product Page. Let them enter their zip code before they ever hit the checkout button. Total transparency builds absolute trust.",
          },
        ],
      },
      {
        _key: "h2-2",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "span-8",
            _type: "span",
            text: "Killer 2: The 'Ghost' Product Hierarchy",
          },
        ],
      },
      {
        _key: "block-6",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-9",
            _type: "span",
            text: "Many founders have 50 products that all sound the same. They sell a 'Hydrating Serum,' an 'Ultra-Moisture Serum,' and a 'Daily Splash Serum.'",
          },
        ],
      },
      {
        _key: "block-7",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-10",
            _type: "span",
            text: "This causes 'Choice Paralysis.' If a user cannot instantly understand the difference between two products, they won't buy either of them.",
          },
        ],
      },
      {
        _key: "block-8",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-11",
            _type: "span",
            marks: ["strong"],
            text: "The Fix:",
          },
          {
            _key: "span-12",
            _type: "span",
            text: " Use 'Outcome-Based Badging.' Instead of just listing the name, add a visual tag above the product image. Tag one as 'Best for Dry Skin,' one as 'Best for Anti-Aging,' and one as 'Our Bestseller.' Hand-hold the user to the correct choice.",
          },
        ],
      },
      {
        _key: "h2-3",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "span-13",
            _type: "span",
            text: "Killer 3: The 'Anxious' Image Gallery",
          },
        ],
      },
      {
        _key: "block-9",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-14",
            _type: "span",
            text: "If you are selling a physical object, the customer cannot hold it. Their entire understanding of its quality comes from your photos. If you only provide three generic photos on a white background, the user feels anxious. 'How big is it? What does the texture look like?'",
          },
        ],
      },
      {
        _key: "block-10",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-15",
            _type: "span",
            marks: ["strong"],
            text: "The Fix:",
          },
          {
            _key: "span-16",
            _type: "span",
            text: " Every product needs the 'Perfect 5' image stack:",
          },
        ],
      },
      {
        _key: "list-3",
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _key: "span-17",
            _type: "span",
            text: "The Clean Hero (White background)",
          },
        ],
      },
      {
        _key: "list-4",
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _key: "span-18",
            _type: "span",
            text: "The Lifestyle (Someone using it in the real world)",
          },
        ],
      },
      {
        _key: "list-5",
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _key: "span-19",
            _type: "span",
            text: "The Scale Shot (Next to a common object like a phone)",
          },
        ],
      },
      {
        _key: "list-6",
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _key: "span-20",
            _type: "span",
            text: "The Detail Shot (Extreme close-up of texture/material)",
          },
        ],
      },
      {
        _key: "list-7",
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [
          {
            _key: "span-21",
            _type: "span",
            text: "The Social Proof (A photo featuring a customer review quote overlay)",
          },
        ],
      },
      {
        _key: "block-11",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-22",
            _type: "span",
            text: "By fixing these three UX mistakes, you don't need to increase your ad spend to increase your revenue. You just need to stop making it hard for people to give you their money.",
          },
        ],
      },
    ],
  };

  transaction.createOrReplace(article3);
  transaction.createOrReplace(article4);
  transaction.createOrReplace(article5);

  try {
    const result = await transaction.commit();
    console.log("Articles 3, 4, and 5 seeded successfully:", result);
  } catch (err) {
    console.error("Failed to seed articles:", err);
  }
}

seedEcommerceArticles();

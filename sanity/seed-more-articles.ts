import { getCliClient } from "sanity/cli";

const client = getCliClient({
  apiVersion: "2025-02-19",
  dataset: "production",
  projectId: "btu0u7s3",
});

async function seedMoreArticles() {
  const transaction = client.transaction();

  // --- PRODUCT DESIGN ---

  const pd1 = {
    _id: "post.b2b-saas-dashboard-design-actionable",
    _type: "post",
    title: "B2B SaaS Dashboard Design: Moving from 'Data Dump' to 'Actionable Insights'",
    slug: { _type: "slug", current: "b2b-saas-dashboard-design-actionable" },
    excerpt: "Most SaaS dashboards are just pretty spreadsheets. Learn how to design a product dashboard that tells the user exactly what they need to do next.",
    publishedAt: new Date().toISOString(),
    categories: ["Product Design", "UX Research & Strategy"],
    body: [
      {
        _key: "block-1",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-1", _type: "span", text: "You log into a new B2B SaaS tool. The first thing you see is a massive dashboard. It has 12 different charts, 4 pie graphs, and a scrolling list of recent activity. It looks incredibly complex, and the sales team loves showing it off." }]
      },
      {
        _key: "block-2",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-2", _type: "span", text: "But there is a massive problem: You have no idea what you are supposed to do." }]
      },
      {
        _key: "block-3",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-3", _type: "span", text: "This is the 'Data Dump' trap. Many founders think that providing more data equals providing more value. But in Product Design, data without direction is just cognitive load. Users don't want to play detective; they want to be told what is broken and how to fix it." }]
      },
      {
        _key: "h2-1",
        _type: "block",
        style: "h2",
        children: [{ _key: "span-4", _type: "span", text: "The Anatomy of an Actionable Dashboard" }]
      },
      {
        _key: "block-4",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-5", _type: "span", text: "An actionable dashboard follows a strict hierarchy: Insights > Actions > Context." }]
      },
      {
        _key: "h3-1",
        _type: "block",
        style: "h3",
        children: [{ _key: "span-6", _type: "span", text: "1. The Insight (What is happening?)" }]
      },
      {
        _key: "block-5",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-7", _type: "span", text: "Instead of showing a chart that says 'Traffic is down 15%,' use natural language. Put a banner at the top that says: 'Your conversion rate dropped 15% this week because 3 of your product pages are loading slowly.'" }]
      },
      {
        _key: "h3-2",
        _type: "block",
        style: "h3",
        children: [{ _key: "span-8", _type: "span", text: "2. The Action (What should I do about it?)" }]
      },
      {
        _key: "block-6",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-9", _type: "span", text: "Right next to that insight, there should be a primary button: 'Review Slow Pages.' You are holding their hand and walking them directly to the solution." }]
      },
      {
        _key: "h3-3",
        _type: "block",
        style: "h3",
        children: [{ _key: "span-10", _type: "span", text: "3. The Context (The Charts)" }]
      },
      {
        _key: "block-7",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-11", _type: "span", text: "Only after you provide the insight and the action should you show the graphs. The graphs are there to prove the insight is true, not to be the main attraction." }]
      },
      {
        _key: "h2-2",
        _type: "block",
        style: "h2",
        children: [{ _key: "span-12", _type: "span", text: "How to Redesign Your Dashboard Today" }]
      },
      {
        _key: "block-8",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-13", _type: "span", text: "Do the 'Morning Coffee Test.' If your user opens your app at 8:00 AM, can they figure out their top priority for the day in under 5 seconds? If not, you need to ruthlessly cut away the charts that look cool but offer no utility." }]
      }
    ]
  };

  const pd2 = {
    _id: "post.psychology-of-onboarding-saas",
    _type: "post",
    title: "The Psychology of Onboarding: Why Your SaaS Loses 40% of Users on Day 1",
    slug: { _type: "slug", current: "psychology-of-onboarding-saas" },
    excerpt: "A bad onboarding sequence is the silent killer of ARR. Learn how to design a 'Time to Value' flow that hooks users immediately.",
    publishedAt: new Date().toISOString(),
    categories: ["Product Design", "UX Research & Strategy"],
    body: [
      {
        _key: "block-1",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-1", _type: "span", text: "Imagine you buy a new video game. You put it in the console, excited to play. But before you can swing a sword, the game makes you read a 50-page manual, sign three contracts, and take a quiz on the controls. You would probably return it." }]
      },
      {
        _key: "block-2",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-2", _type: "span", text: "This is exactly what most B2B SaaS onboarding feels like. You promise them a solution, but first, you force them through a 10-step wizard, ask for their credit card, and make them invite three team members." }]
      },
      {
        _key: "h2-1",
        _type: "block",
        style: "h2",
        children: [{ _key: "span-3", _type: "span", text: "The Metric That Matters: Time to Value (TTV)" }]
      },
      {
        _key: "block-3",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-4", _type: "span", text: "Time to Value is the amount of time it takes a new user to experience the core benefit of your product. If your app is a video editor, the TTV is the moment they successfully export their first clip. If your TTV is longer than 5 minutes, your churn rate will skyrocket." }]
      },
      {
        _key: "h2-2",
        _type: "block",
        style: "h2",
        children: [{ _key: "span-5", _type: "span", text: "3 Rules for Frictionless Onboarding" }]
      },
      {
        _key: "h3-1",
        _type: "block",
        style: "h3",
        children: [{ _key: "span-6", _type: "span", text: "1. Defer the Friction" }]
      },
      {
        _key: "block-4",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-7", _type: "span", text: "Don't ask them to upload a profile picture or invite their boss right away. Let them play with the tool first. Ask for the hard stuff only when it becomes strictly necessary." }]
      },
      {
        _key: "h3-2",
        _type: "block",
        style: "h3",
        children: [{ _key: "span-8", _type: "span", text: "2. The 'Empty State' Opportunity" }]
      },
      {
        _key: "block-5",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-9", _type: "span", text: "When a user logs in, their dashboard is empty. Don't just show a grey box that says 'No projects found.' Use that space! Add a giant button that says 'Create Your First Project' alongside a 30-second video showing how easy it is." }]
      },
      {
        _key: "h3-3",
        _type: "block",
        style: "h3",
        children: [{ _key: "span-10", _type: "span", text: "3. Celebrate the Win" }]
      },
      {
        _key: "block-6",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-11", _type: "span", text: "When they complete their first meaningful action, trigger a success animation. Psychology proves that positive reinforcement releases dopamine, making them want to come back." }]
      }
    ]
  };

  // --- UX RESEARCH & STRATEGY ---

  const ux1 = {
    _id: "post.stop-asking-what-do-you-want-user-interviews",
    _type: "post",
    title: "Stop Asking 'What Do You Want?': How to Conduct User Interviews That Uncover Pain Points",
    slug: { _type: "slug", current: "stop-asking-what-do-you-want-user-interviews" },
    excerpt: "Users are terrible at predicting what they want. Here is a framework for conducting UX research interviews that actually lead to product breakthroughs.",
    publishedAt: new Date().toISOString(),
    categories: ["UX Research & Strategy", "Product Design"],
    body: [
      {
        _key: "block-1",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-1", _type: "span", text: "Henry Ford famously said, 'If I had asked people what they wanted, they would have said faster horses.' This is the golden rule of UX Research." }]
      },
      {
        _key: "block-2",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-2", _type: "span", text: "If you get on a Zoom call with a customer and ask, 'What features should we build next?', they will give you a list of minor tweaks. They will ask for a darker dark mode or a new export button. They will never tell you about the massive, structural problems with your workflow because they are too used to the pain." }]
      },
      {
        _key: "h2-1",
        _type: "block",
        style: "h2",
        children: [{ _key: "span-3", _type: "span", text: "The 'Mom Test' Approach" }]
      },
      {
        _key: "block-3",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-4", _type: "span", text: "To get real insights, you have to stop asking about the future and start asking about the past. People lie about what they will do, but they rarely lie about what they have already done." }]
      },
      {
        _key: "h3-1",
        _type: "block",
        style: "h3",
        children: [{ _key: "span-5", _type: "span", text: "Bad Question vs. Good Question" }]
      },
      {
        _key: "block-4",
        _type: "block",
        style: "normal",
        children: [
          { _key: "span-6", _type: "span", marks: ["strong"], text: "Bad:" },
          { _key: "span-7", _type: "span", text: " 'Would you use a feature that automatically schedules your emails?' (They will always say yes to be polite)." }
        ]
      },
      {
        _key: "block-5",
        _type: "block",
        style: "normal",
        children: [
          { _key: "span-8", _type: "span", marks: ["strong"], text: "Good:" },
          { _key: "span-9", _type: "span", text: " 'Walk me through exactly how you scheduled your emails last Tuesday. Can you share your screen?'" }
        ]
      },
      {
        _key: "h2-2",
        _type: "block",
        style: "h2",
        children: [{ _key: "span-10", _type: "span", text: "Looking for the 'Hacks'" }]
      },
      {
        _key: "block-6",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-11", _type: "span", text: "While they share their screen, watch for 'hacks.' Are they exporting your data into Excel just to sort it, and then bringing it back? That is a massive red flag. That friction point is your next multi-million dollar product feature." }]
      }
    ]
  };

  const ux2 = {
    _id: "post.jobs-to-be-done-framework-saas",
    _type: "post",
    title: "The 'Jobs to be Done' Framework: Designing Software People Actually Hire",
    slug: { _type: "slug", current: "jobs-to-be-done-framework-saas" },
    excerpt: "People don't buy software; they 'hire' it to do a job. Here is how to apply the JTBD framework to your UX strategy to increase conversion and retention.",
    publishedAt: new Date().toISOString(),
    categories: ["UX Research & Strategy", "Founder GTM"],
    body: [
      {
        _key: "block-1",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-1", _type: "span", text: "Nobody wakes up in the morning and says, 'I really want to buy a project management software today.' What they actually say is, 'I am terrified that my team is going to miss the deadline for this launch.'" }]
      },
      {
        _key: "block-2",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-2", _type: "span", text: "This is the core of the Jobs to be Done (JTBD) framework. Your users are 'hiring' your product to relieve a specific anxiety or achieve a specific outcome. If your UX is focused on 'managing tasks' instead of 'relieving anxiety,' you will lose." }]
      },
      {
        _key: "h2-1",
        _type: "block",
        style: "h2",
        children: [{ _key: "span-3", _type: "span", text: "How to Define Your Product's 'Job'" }]
      },
      {
        _key: "block-3",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-4", _type: "span", text: "A JTBD statement follows a specific structure:" }]
      },
      {
        _key: "block-4",
        _type: "block",
        style: "blockquote",
        children: [{ _key: "span-5", _type: "span", text: "When I [Situation], I want to [Motivation], so I can [Expected Outcome]." }]
      },
      {
        _key: "block-5",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-6", _type: "span", text: "Example for Slack: 'When I am working remote, I want to quickly ask my coworker a question without scheduling a meeting, so I can keep my momentum going.'" }]
      },
      {
        _key: "h2-2",
        _type: "block",
        style: "h2",
        children: [{ _key: "span-7", _type: "span", text: "Applying JTBD to your UX Strategy" }]
      },
      {
        _key: "block-6",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-8", _type: "span", text: "Once you know the 'Job', you can redesign your interface. If the job is 'quick communication,' then making the chat box load instantly is 100x more important than adding fancy text formatting options. The framework forces you to prioritize features that actually help the user get the job done faster." }]
      }
    ]
  };

  const ux3 = {
    _id: "post.ux-audits-for-saas-5-step-framework",
    _type: "post",
    title: "UX Audits for SaaS: The 5-Step Framework to Find the Friction in Your Product",
    slug: { _type: "slug", current: "ux-audits-for-saas-5-step-framework" },
    excerpt: "Is your app leaking users? A structured UX audit can find the exact screens where people are giving up. Here is how to audit your own product.",
    publishedAt: new Date().toISOString(),
    categories: ["UX Research & Strategy", "Product Design"],
    body: [
      {
        _key: "block-1",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-1", _type: "span", text: "When a bucket is leaking, you don't pour more water into it; you patch the holes. In software, when your retention is dropping, you don't run more ads; you run a UX Audit." }]
      },
      {
        _key: "block-2",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-2", _type: "span", text: "A UX Audit is a systematic review of your product's interface to identify friction points, confusing copy, and broken flows. Here is the 5-step framework." }]
      },
      {
        _key: "h3-1",
        _type: "block",
        style: "h3",
        children: [{ _key: "span-3", _type: "span", text: "Step 1: Heuristic Evaluation" }]
      },
      {
        _key: "block-3",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-4", _type: "span", text: "Go through your app using Jakob Nielsen's 10 Usability Heuristics. Is system status visible? Do buttons look like buttons? Are error messages helpful or just red text?" }]
      },
      {
        _key: "h3-2",
        _type: "block",
        style: "h3",
        children: [{ _key: "span-5", _type: "span", text: "Step 2: Analytics Deep Dive" }]
      },
      {
        _key: "block-4",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-6", _type: "span", text: "Open Mixpanel or Google Analytics. Look at your primary conversion funnel. Where is the biggest drop-off? If 80% of people leave on the 'Connect Database' screen, that is your Patient Zero." }]
      },
      {
        _key: "h3-3",
        _type: "block",
        style: "h3",
        children: [{ _key: "span-7", _type: "span", text: "Step 3: Session Recordings" }]
      },
      {
        _key: "block-5",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-8", _type: "span", text: "Watch tools like Hotjar or Clarity. Look for 'Rage Clicking' (when a user aggressively clicks an element that isn't responding) and 'Mouse Thrashing' (when they circle their mouse around the screen looking for the next step)." }]
      },
      {
        _key: "block-6",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-9", _type: "span", text: "By combining analytics (where they leave) with recordings (why they leave), you stop guessing and start fixing." }]
      }
    ]
  };

  // --- WEB & ECOMMERCE BUILDS ---

  const web1 = {
    _id: "post.boring-landing-page-playbook-clarity",
    _type: "post",
    title: "The 'Boring' Landing Page Playbook: Why Clarity Converts Better Than Clever Animations",
    slug: { _type: "slug", current: "boring-landing-page-playbook-clarity" },
    excerpt: "Stop letting agencies build you 'award-winning' websites that don't sell. Discover why the most profitable SaaS and Ecommerce sites are actually quite boring.",
    publishedAt: new Date().toISOString(),
    categories: ["Web & Ecommerce Builds", "Website Conversion"],
    body: [
      {
        _key: "block-1",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-1", _type: "span", text: "There is a disease in the web design industry right now. Agencies are trying to win 'Awwwards' instead of winning customers. They build landing pages with custom cursor trails, 3D scrolling models, and text that flies in from every direction." }]
      },
      {
        _key: "block-2",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-2", _type: "span", text: "The result? The site takes 8 seconds to load, the user gets dizzy, and nobody clicks the 'Buy' button." }]
      },
      {
        _key: "h2-1",
        _type: "block",
        style: "h2",
        children: [{ _key: "span-3", _type: "span", text: "Clarity Over Cleverness" }]
      },
      {
        _key: "block-3",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-4", _type: "span", text: "When a user lands on your website, you have exactly 3 seconds to answer three questions:" }]
      },
      {
        _key: "list-1",
        _type: "block",
        style: "normal",
        listItem: "number",
        children: [{ _key: "span-5", _type: "span", text: "What do you sell?" }]
      },
      {
        _key: "list-2",
        _type: "block",
        style: "normal",
        listItem: "number",
        children: [{ _key: "span-6", _type: "span", text: "Why should I care?" }]
      },
      {
        _key: "list-3",
        _type: "block",
        style: "normal",
        listItem: "number",
        children: [{ _key: "span-7", _type: "span", text: "What do I do next?" }]
      },
      {
        _key: "block-4",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-8", _type: "span", text: "If your headline is 'Empowering the Digital Paradigm,' you have failed question number one. Be boring. Say, 'We help plumbers book more jobs automatically.'" }]
      },
      {
        _key: "h2-2",
        _type: "block",
        style: "h2",
        children: [{ _key: "span-9", _type: "span", text: "The Architecture of Conversion" }]
      },
      {
        _key: "block-5",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-10", _type: "span", text: "A high-converting website follows a very predictable structure. It is a psychological slippery slope that guides the user down." }]
      },
      {
        _key: "block-6",
        _type: "block",
        style: "normal",
        children: [
          { _key: "span-11", _type: "span", text: "1. The Hero (The promise)\n2. The Social Proof (Trust me, others like it)\n3. The Problem (Stirring the pain)\n4. The Solution (How we fix it)\n5. The Objection Handlers (FAQs)\n6. The Final CTA (Do it now)" }
        ]
      },
      {
        _key: "block-7",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-12", _type: "span", text: "Boring? Maybe to a designer. But to a founder looking at their Stripe dashboard, it's a masterpiece." }]
      }
    ]
  };

  const web2 = {
    _id: "post.woocommerce-vs-shopify-2026-guide",
    _type: "post",
    title: "WooCommerce vs. Shopify in 2026: The Honest, No-BS Guide for Brands",
    slug: { _type: "slug", current: "woocommerce-vs-shopify-2026-guide" },
    excerpt: "Should you build your store on Shopify or WooCommerce? It depends on what you value more: convenience or ownership. Let's break it down.",
    publishedAt: new Date().toISOString(),
    categories: ["Web & Ecommerce Builds", "Ecommerce"],
    body: [
      {
        _key: "block-1",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-1", _type: "span", text: "The debate has raged for a decade, but in 2026, the lines have been drawn clearly. Choosing between Shopify and WooCommerce is no longer about 'which is better'; it’s about 'what business model are you running?'" }]
      },
      {
        _key: "h2-1",
        _type: "block",
        style: "h2",
        children: [{ _key: "span-2", _type: "span", text: "The Case for Shopify: The Rented Mansion" }]
      },
      {
        _key: "block-2",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-3", _type: "span", text: "Shopify is like renting a luxury penthouse. Everything works perfectly. The plumbing never breaks, security is handled for you, and the checkout process is the best in the industry." }]
      },
      {
        _key: "block-3",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-4", _type: "span", text: "But you don't own the house. If Shopify decides to raise their transaction fees, you pay them. If they ban certain types of products (like CBD or specific supplements), your store is gone tomorrow." }]
      },
      {
        _key: "h2-2",
        _type: "block",
        style: "h2",
        children: [{ _key: "span-5", _type: "span", text: "The Case for WooCommerce: The Custom Home" }]
      },
      {
        _key: "block-4",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-6", _type: "span", text: "WooCommerce (built on WordPress) is like buying a plot of land and building your own house. You own it 100%. No one can evict you, and you have infinite customization over the checkout flow and data structure." }]
      },
      {
        _key: "block-5",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-7", _type: "span", text: "The catch? You are the plumber. If your server crashes during a Black Friday sale, it’s on you (or the developer you hired) to fix it immediately." }]
      },
      {
        _key: "h2-3",
        _type: "block",
        style: "h2",
        children: [{ _key: "span-8", _type: "span", text: "The Verdict" }]
      },
      {
        _key: "block-6",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-9", _type: "span", text: "If you sell standard physical goods and want to move fast, pick Shopify. If you sell complex B2B products, high-risk items, or want to tightly integrate content marketing with commerce, hire a professional to build it on WooCommerce." }]
      }
    ]
  };

  // --- DESIGN SYSTEMS ---

  const ds1 = {
    _id: "post.when-startup-build-design-system-timing",
    _type: "post",
    title: "When Should a Startup Build a Design System? (Hint: Later Than You Think)",
    slug: { _type: "slug", current: "when-startup-build-design-system-timing" },
    excerpt: "Design Systems are the buzzword of the decade. But if you build one too early, it will kill your startup's velocity. Here is the exact timeline of when to scale your UI.",
    publishedAt: new Date().toISOString(),
    categories: ["Design Systems", "Product Design"],
    body: [
      {
        _key: "block-1",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-1", _type: "span", text: "Founders read articles about how Airbnb and Uber use Design Systems, and suddenly they want to spend 3 months building a custom component library for their pre-revenue MVP." }]
      },
      {
        _key: "block-2",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-2", _type: "span", text: "This is a massive mistake. A design system is meant to solve the problem of 'Scaling Consistency.' If you only have one designer and two engineers, you don't have a scaling problem yet. You have a 'finding product-market fit' problem." }]
      },
      {
        _key: "h2-1",
        _type: "block",
        style: "h2",
        children: [{ _key: "span-3", _type: "span", text: "Phase 1: The Scrappy MVP (0-10 Employees)" }]
      },
      {
        _key: "block-3",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-4", _type: "span", text: "Do not build a design system. Use a high-quality UI kit (like Shadcn/ui or Tailwind UI). Your goal is velocity. If the buttons are slightly different shades of blue, the users won't care if the product solves their core problem." }]
      },
      {
        _key: "h2-2",
        _type: "block",
        style: "h2",
        children: [{ _key: "span-5", _type: "span", text: "Phase 2: The Standardization (10-50 Employees)" }]
      },
      {
        _key: "block-4",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-6", _type: "span", text: "You have product-market fit. Now, the 'design debt' is slowing down your engineers. This is when you build your 'Foundation.' You don't need a full system; you just need Design Tokens (centralizing your colors, typography, and spacing)." }]
      },
      {
        _key: "h2-3",
        _type: "block",
        style: "h2",
        children: [{ _key: "span-7", _type: "span", text: "Phase 3: The True System (50+ Employees)" }]
      },
      {
        _key: "block-5",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-8", _type: "span", text: "You have multiple squads working on different features. This is when you invest in a fully documented Design System in Storybook and Figma. Now, the system acts as a central source of truth, ensuring that Team A's dropdown behaves exactly like Team B's dropdown." }]
      }
    ]
  };

  const ds2 = {
    _id: "post.design-tokens-explained-figma-react",
    _type: "post",
    title: "Design Tokens Explained: The Bridge Between Figma and React That Saves Hours",
    slug: { _type: "slug", current: "design-tokens-explained-figma-react" },
    excerpt: "Stop passing hex codes back and forth. Learn how Design Tokens create a single source of truth between designers and developers.",
    publishedAt: new Date().toISOString(),
    categories: ["Design Systems", "Web & Ecommerce Builds"],
    body: [
      {
        _key: "block-1",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-1", _type: "span", text: "The biggest source of friction between design and engineering is the 'translation layer.' A designer creates a button with the color #3B82F6. The engineer copies that hex code into CSS. Six months later, the brand updates their blue. The designer updates Figma, but the engineer has to manually hunt down every instance of #3B82F6 in the codebase." }]
      },
      {
        _key: "block-2",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-2", _type: "span", text: "This is where Design Tokens come in. They are the DNA of your UI." }]
      },
      {
        _key: "h2-1",
        _type: "block",
        style: "h2",
        children: [{ _key: "span-3", _type: "span", text: "What is a Design Token?" }]
      },
      {
        _key: "block-3",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-4", _type: "span", text: "A design token is a semantic name given to a raw value. Instead of using the raw hex code (#3B82F6), you assign it to a token named 'color-brand-primary'. Both Figma and the Codebase reference this exact same token name." }]
      },
      {
        _key: "h2-2",
        _type: "block",
        style: "h2",
        children: [{ _key: "span-5", _type: "span", text: "The 3 Levels of Tokens" }]
      },
      {
        _key: "block-4",
        _type: "block",
        style: "normal",
        children: [
          { _key: "span-6", _type: "span", marks: ["strong"], text: "1. Global Tokens:" },
          { _key: "span-7", _type: "span", text: " The raw palette. (e.g., blue-500 = #3B82F6)" }
        ]
      },
      {
        _key: "block-5",
        _type: "block",
        style: "normal",
        children: [
          { _key: "span-8", _type: "span", marks: ["strong"], text: "2. Semantic Tokens:" },
          { _key: "span-9", _type: "span", text: " What the color means. (e.g., color-action-primary = blue-500). This is crucial for Dark Mode." }
        ]
      },
      {
        _key: "block-6",
        _type: "block",
        style: "normal",
        children: [
          { _key: "span-10", _type: "span", marks: ["strong"], text: "3. Component Tokens:" },
          { _key: "span-11", _type: "span", text: " Where it is used. (e.g., button-background-default = color-action-primary)." }
        ]
      },
      {
        _key: "block-7",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-12", _type: "span", text: "By using tokens, you can completely rebrand a massive application just by changing a single JSON file. It turns UI updates from a month-long refactoring nightmare into a 5-minute task." }]
      }
    ]
  };

  const ds3 = {
    _id: "post.atomic-design-approach-saas",
    _type: "post",
    title: "The Atomic Design Approach to SaaS: Scaling UI Without Creating a Monster",
    slug: { _type: "slug", current: "atomic-design-approach-saas" },
    excerpt: "If your React codebase feels like a tangled mess of spaghetti, you need Atomic Design. Learn how to structure your components like chemistry.",
    publishedAt: new Date().toISOString(),
    categories: ["Design Systems", "Web & Ecommerce Builds"],
    body: [
      {
        _key: "block-1",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-1", _type: "span", text: "As a SaaS application grows, its UI often becomes a 'Frankenstein's Monster.' You end up with 14 different variations of a Card component, each with slightly different padding and logic." }]
      },
      {
        _key: "block-2",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-2", _type: "span", text: "To fix this, the best design and engineering teams use a methodology called Atomic Design, coined by Brad Frost." }]
      },
      {
        _key: "h2-1",
        _type: "block",
        style: "h2",
        children: [{ _key: "span-3", _type: "span", text: "The Chemistry of UI" }]
      },
      {
        _key: "block-3",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-4", _type: "span", text: "Atomic Design breaks interfaces down into 5 distinct levels:" }]
      },
      {
        _key: "block-4",
        _type: "block",
        style: "normal",
        children: [
          { _key: "span-5", _type: "span", marks: ["strong"], text: "1. Atoms:" },
          { _key: "span-6", _type: "span", text: " The absolute basics. A button, an input field, a label. They cannot be broken down further." }
        ]
      },
      {
        _key: "block-5",
        _type: "block",
        style: "normal",
        children: [
          { _key: "span-7", _type: "span", marks: ["strong"], text: "2. Molecules:" },
          { _key: "span-8", _type: "span", text: " Groups of atoms working together. For example, a search bar (Label Atom + Input Atom + Button Atom)." }
        ]
      },
      {
        _key: "block-6",
        _type: "block",
        style: "normal",
        children: [
          { _key: "span-9", _type: "span", marks: ["strong"], text: "3. Organisms:" },
          { _key: "span-10", _type: "span", text: " Complex sections of the UI made of molecules. For example, a top navigation bar." }
        ]
      },
      {
        _key: "block-7",
        _type: "block",
        style: "normal",
        children: [
          { _key: "span-11", _type: "span", marks: ["strong"], text: "4. Templates:" },
          { _key: "span-12", _type: "span", text: " The wireframe structure showing how organisms fit together on a page." }
        ]
      },
      {
        _key: "block-8",
        _type: "block",
        style: "normal",
        children: [
          { _key: "span-13", _type: "span", marks: ["strong"], text: "5. Pages:" },
          { _key: "span-14", _type: "span", text: " The specific instance of a template populated with real data." }
        ]
      },
      {
        _key: "block-9",
        _type: "block",
        style: "normal",
        children: [{ _key: "span-15", _type: "span", text: "By strictly separating your React or Figma components into these buckets, you ensure maximum reusability. When the CEO asks for a new feature, you aren't building it from scratch; you are just assembling existing molecules." }]
      }
    ]
  };

  const newArticles = [pd1, pd2, ux1, ux2, ux3, web1, web2, ds1, ds2, ds3];

  newArticles.forEach((article) => transaction.createOrReplace(article));

  try {
    const result = await transaction.commit();
    console.log("10 new articles seeded successfully!");
  } catch (err) {
    console.error("Failed to seed new articles:", err);
  }
}

seedMoreArticles();

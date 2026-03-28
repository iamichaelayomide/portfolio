import { getCliClient } from "sanity/cli";

const client = getCliClient({
  apiVersion: "2025-02-19",
  dataset: "production",
  projectId: "btu0u7s3",
});

async function seedBlogPost() {
  const transaction = client.transaction();

  const article1 = {
    _id: "post.beyond-seo-geo-playbook-2026",
    _type: "post",
    title: "Beyond SEO: How Founders Can Rank on AI Search Engines in 2026 (The GEO Playbook)",
    slug: {
      _type: "slug",
      current: "beyond-seo-geo-playbook-2026",
    },
    excerpt: "Everyone knows SEO, but in 2026, the game has changed to GEO (Generative Engine Optimization). Learn how to make your website the 'cited source' for AI agents like Perplexity and Gemini.",
    publishedAt: new Date().toISOString(),
    categories: ["AI Search & SEO", "Founder GTM"],
    body: [
      {
        _key: "block-1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-1",
            _type: "span",
            text: "If you’ve ever tried to grow a business online, you’ve heard of SEO (Search Engine Optimization). For twenty years, the formula was simple: you wrote articles with the right keywords, Google’s 'Library' indexed them, and if you were lucky, you’d show up as one of the '10 Blue Links' on page one.",
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
            text: "But in 2026, the library is empty. People aren't wandering through the aisles looking for books anymore. Instead, they are standing at the front desk talking to a Smart Assistant.",
          },
        ],
      },
      {
        _key: "block-3",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-3",
            _type: "span",
            text: "When someone asks, 'Which SaaS platform is best for my 5-person startup?', they don't want a list of websites. They want the Assistant (ChatGPT, Perplexity, or Gemini) to tell them the answer. This is where GEO (Generative Engine Optimization) comes in. If SEO was about being 'found' in a list, GEO is about being 'cited' in a conversation. If the AI doesn't mention your name, you don't exist.",
          },
        ],
      },
      {
        _key: "h2-1",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "span-4",
            _type: "span",
            text: "What exactly is GEO? (The Plain English Version)",
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
            text: "GEO stands for Generative Engine Optimization. Think of it this way: SEO is like putting a bright sign on your shop so people walking by can see it. GEO is like being so famous and reliable that when someone asks a local for a recommendation, they say your name first.",
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
            text: "In 2026, your website isn't just for humans; it’s a Briefing Document for AI robots. These robots (we call them 'Generative Engines') read your site, summarize it, and then 'speak' for you. If your site is messy, vague, or full of 'marketing fluff,' the robot will get confused and skip you.",
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
            text: "The 'Librarian vs. The Butler' Analogy",
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
            text: "To really grasp this, imagine you are looking for a specific type of coffee bean. The Librarian (Old SEO) hands you a stack of 10 magazines and says, 'Good luck finding it.' The Butler (New GEO) says, 'I've read all the magazines. Ayomide’s Beans are the best because they are organic and ship fast.' As a founder, you want to be the 'Ayomide’s Beans' in that conversation.",
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
            text: "Step-by-Step: How to 'Hand-Hold' the AI Agent",
          },
        ],
      },
      {
        _key: "h3-1",
        _type: "block",
        style: "h3",
        children: [
          {
            _key: "span-10",
            _type: "span",
            text: "1. Stop Using 'Vibe' Headlines, Start Using 'Answer' Headlines",
          },
        ],
      },
      {
        _key: "block-7",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-11",
            _type: "span",
            text: "AI agents scan your site in milliseconds. Instead of 'Elevating Your Digital Horizon,' use 'We provide worldwide shipping to over 50 countries.' If an AI is asked, 'Who ships to France?', it will look for the word 'shipping' and 'countries.'",
          },
        ],
      },
      {
        _key: "h3-2",
        _type: "block",
        style: "h3",
        children: [
          {
            _key: "span-12",
            _type: "span",
            text: "2. The 'Receipts' Strategy (EEAT)",
          },
        ],
      },
      {
        _key: "block-8",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-13",
            _type: "span",
            text: "In 2026, AI search engines prioritize Verified Human Authority. Link your blog posts to your real-world profiles (LinkedIn, GitHub). The AI 'follows' these links to see if the author is a real person with a real history.",
          },
        ],
      },
      {
        _key: "h3-3",
        _type: "block",
        style: "h3",
        children: [
          {
            _key: "span-14",
            _type: "span",
            text: "3. Use 'Structured Semantic Blocks'",
          },
        ],
      },
      {
        _key: "block-9",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-15",
            _type: "span",
            text: "LLMs love lists and tables. If you have a pricing page, create a real HTML table. If the AI can't find your price because it's hidden in a fancy slider, it will report your price as 'Unknown,' killing your conversion.",
          },
        ],
      },
      {
        _key: "h2-4",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "span-16",
            _type: "span",
            text: "Your 3-Point 'GEO Audit' Checklist",
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
            _key: "span-17",
            _type: "span",
            text: "The 'Robot Readability' Test: Paste your homepage text into ChatGPT. Ask: 'What do I do, and who is it for?' If the AI can't answer, fix the text.",
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
            _key: "span-18",
            _type: "span",
            text: "The Table Check: Do you have at least one table or list on every main page?",
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
            _key: "span-19",
            _type: "span",
            text: "The Social Proof Link: Is your 'About' page linked to your professional social media?",
          },
        ],
      },
      {
        _key: "block-10",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-20",
            _type: "span",
            text: "The founders who win in 2026 won't be the ones with the most backlinks. They will be the ones who are the most 'citable.'",
          },
        ],
      },
    ],
  };

  transaction.createOrReplace(article1);

  try {
    const result = await transaction.commit();
    console.log("Article 1 seeded successfully:", result);
  } catch (err) {
    console.error("Failed to seed Article 1:", err);
  }
}

seedBlogPost();

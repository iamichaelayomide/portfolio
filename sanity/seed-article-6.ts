import { getCliClient } from "sanity/cli";

const client = getCliClient({
  apiVersion: "2025-02-19",
  dataset: "production",
  projectId: "btu0u7s3",
});

async function seedArticle6() {
  const transaction = client.transaction();

  const article6 = {
    _id: "post.enterprise-ai-trust-security-2026",
    _type: "post",
    title: "The Invisible Moat: Why Enterprise Trust is the New Marketing for AI Startups",
    slug: {
      _type: "slug",
      current: "enterprise-ai-trust-security-2026",
    },
    excerpt: "In 2026, 'cool' is a commodity. If your AI isn't safe, nobody buys it. Learn why Trust is your new marketing department and how to build a vault that even the most paranoid CTO would trust.",
    publishedAt: new Date().toISOString(),
    categories: ["AI Product Strategy", "Enterprise Trust", "Founder GTM"],
    body: [
      {
        _key: "block-1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-1",
            _type: "span",
            text: "In 2024, if your AI was 'cool,' people bought it. In 2026, 'cool' is a commodity. If your AI isn't safe, nobody buys it.",
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
            text: "As we move deeper into the age of agentic software, the biggest barrier to a startup’s growth isn't their algorithm—it’s the Security Review. Enterprise buyers are asking the hard questions: 'Where does my data go? Is it being used to train your next model?' If you are a founder, Trust is your new marketing department.",
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
            text: "The 'Locked Vault' Analogy",
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
            text: "Imagine you are a billionaire looking for a new bank. Bank A has a beautiful lobby and a smart AI teller, but a glass vault with no lock. Bank B has a boring lobby but a steel vault with biometric locks. Most AI startups are Bank A. They have the 'Vibe' but not the 'Vault.' To win in 2026, you need to build a vault that CTOs trust.",
          },
        ],
      },
      {
        _key: "h2-2",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "span-5",
            _type: "span",
            text: "The 3 Pillars of Enterprise AI Trust",
          },
        ],
      },
      {
        _key: "h3-1",
        _type: "block",
        style: "h3",
        children: [
          {
            _key: "span-6",
            _type: "span",
            text: "1. The 'No-Training' Guarantee",
          },
        ],
      },
      {
        _key: "block-4",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-7",
            _type: "span",
            text: "The #1 fear is that proprietary secrets will show up in a ChatGPT response for a competitor. Your website needs a bold 'Data Manifesto' stating: 'We do not use customer data to train our foundational models.'",
          },
        ],
      },
      {
        _key: "h3-2",
        _type: "block",
        style: "h3",
        children: [
          {
            _key: "span-8",
            _type: "span",
            text: "2. Audit-Ready Infrastructure",
          },
        ],
      },
      {
        _key: "block-5",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-9",
            _type: "span",
            text: "SOC2 Type II compliance is the entry fee for Enterprise deals. Use your ",
          },
          {
            _key: "span-10",
            _type: "span",
            marks: ["link-vibe"],
            text: "Vibe Coding",
          },
          {
            _key: "span-11",
            _type: "span",
            text: " stack to automate compliance. Speed in providing security docs is a major trust signal.",
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
            _key: "span-12",
            _type: "span",
            text: "3. Explainability & Governance",
          },
        ],
      },
      {
        _key: "block-6",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-13",
            _type: "span",
            text: "AI is often a 'Black Box.' Build human-readable 'Audit Logs' that show every step of the AI's reasoning. Like a math test, buyers want to see the work, not just the answer.",
          },
        ],
      },
      {
        _key: "h2-3",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "span-14",
            _type: "span",
            text: "Closing Thought: Transparency Wins",
          },
        ],
      },
      {
        _key: "block-7",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-15",
            _type: "span",
            text: "The startups that dominate 2026 will be the ones that made their customers feel safe. Security isn't a 'feature' you add later; it’s the foundation of your brand.",
          },
        ],
      },
    ],
  };

  transaction.createOrReplace(article6);

  try {
    const result = await transaction.commit();
    console.log("Article 6 seeded successfully:", result);
  } catch (err) {
    console.error("Failed to seed Article 6:", err);
  }
}

seedArticle6();

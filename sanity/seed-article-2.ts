import { getCliClient } from "sanity/cli";

const client = getCliClient({
  apiVersion: "2025-02-19",
  dataset: "production",
  projectId: "btu0u7s3",
});

async function seedArticle2() {
  const transaction = client.transaction();

  const article2 = {
    _id: "post.vibe-coding-revolution-2026",
    _type: "post",
    title: "The Vibe Coding Revolution: How to Build at AI Speed in 2026",
    slug: {
      _type: "slug",
      current: "vibe-coding-revolution-2026",
    },
    excerpt: "Stop fighting with syntax and start orchestrating intent. Discover the 'Vibe Coding' workflow using Claude, Gemini, and MCP to build products 10x faster.",
    publishedAt: new Date().toISOString(),
    categories: ["Vibe Coding", "AI Product Strategy"],
    body: [
      {
        _key: "block-1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-1",
            _type: "span",
            text: "For decades, the path to becoming a software developer was paved with memorization. You had to learn where the semicolons went, how to manage memory, and why a specific framework required ten lines of 'boilerplate' code just to show a hello world. We were 'writers' of code, painstakingly typing out every instruction.",
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
            text: "In 2026, that era is over. We have entered the age of Vibe Coding.",
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
            text: "Vibe coding isn't about being lazy; it’s about Efficiency of Intent. It’s the shift from being a manual laborer who lays bricks to being the architect who designs the skyscraper. You provide the 'vibe'—the vision, the logic, and the user experience—and the AI handles the 'bricks' (the syntax).",
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
            text: "The 'Conductor' Analogy: Why Your Role Has Changed",
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
            text: "Imagine a world-class symphony orchestra. There are fifty musicians, each an expert in their instrument. In the center stands the Conductor. The Conductor doesn't play the violin. They don't blow into the trumpet. Yet, without them, the music is just noise. The Conductor’s job is to set the tempo, ensure the harmony, and translate the 'vibe' of the composer into a masterpiece.",
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
            text: "In Vibe Coding, you are the Conductor. Your AI tools—Claude, Gemini, and the Model Context Protocol (MCP)—are your expert musicians. They can play any 'instrument' (Python, TypeScript, Rust) perfectly. Your job is to stand at the podium and guide them.",
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
            text: "Meet Your Orchestra: The 2026 Vibe Stack",
          },
        ],
      },
      {
        _key: "h3-1",
        _type: "block",
        style: "h3",
        children: [
          {
            _key: "span-8",
            _type: "span",
            text: "1. Claude: The Lead Violinist (The Reasoning Core)",
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
            text: "Claude (specifically the 3.7 Sonnet model) is the heart of the vibe coding movement. It understands the context of a human-centric product. If you ask for a login page, Claude might include a 'Forgot Password' flow because it understands user expectations.",
          },
        ],
      },
      {
        _key: "h3-2",
        _type: "block",
        style: "h3",
        children: [
          {
            _key: "span-10",
            _type: "span",
            text: "2. Gemini: The Infinite Library (The Memory Palace)",
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
            text: "Gemini changed the game with its 2-million-token context window. You can feed Gemini your entire codebase, and it will hold it all in its 'active memory.' It knows exactly where everything is in a 50,000-line app.",
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
            text: "3. MCP: The Universal Remote (The Connection)",
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
            text: "The Model Context Protocol (MCP) allows Claude to 'reach out' of the chat box and interact with your tools—Linear tickets, GitHub repositories, and Google Calendar.",
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
            text: "The Vibe Coding Workflow: A Hand-Holding Guide",
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
            text: "Vibe coding starts with Clarity of Intent. Create a ticket in Linear, then use a 'Vibe Prompt' in Claude. If the AI makes a mistake, do not touch the code—correct the 'Vibe.' Finally, use the ",
          },
          {
            _key: "span-16",
            _type: "span",
            marks: ["link-1"],
            text: "GEO Playbook",
          },
          {
            _key: "span-17",
            _type: "span",
            text: " to generate documentation for AI search engines.",
          },
        ],
        markDefs: [
          {
            _key: "link-1",
            _type: "link",
            href: "/blog/beyond-seo-geo-playbook-2026",
          },
        ],
      },
      {
        _key: "h2-4",
        _type: "block",
        style: "h2",
        children: [
          {
            _key: "span-18",
            _type: "span",
            text: "Why 'Vibe Coding' is the Ultimate Founder Advantage",
          },
        ],
      },
      {
        _key: "block-10",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "span-19",
            _type: "span",
            text: "In 2026, the cost of building is near zero. The only thing with high value is Vision. A founder who can vibe code is a 'Company of One' that can outbuild teams of twenty.",
          },
        ],
      },
    ],
  };

  transaction.createOrReplace(article2);

  try {
    const result = await transaction.commit();
    console.log("Article 2 seeded successfully:", result);
  } catch (err) {
    console.error("Failed to seed Article 2:", err);
  }
}

seedArticle2();

import { getPosts } from "./lib/content";

async function test() {
  const posts = await getPosts();
  console.log("Total posts found:", posts.length);
  posts.forEach((p, i) => {
    console.log(`${i + 1}. ${p.title} - ${p.publishedAt}`);
  });
}

test();

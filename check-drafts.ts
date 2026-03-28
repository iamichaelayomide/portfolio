import { getCliClient } from "sanity/cli";

const client = getCliClient({
  apiVersion: "2025-02-19",
  dataset: "production",
  projectId: "btu0u7s3",
});

async function check() {
  const allPosts = await client.fetch('*[_type == "post"]{ _id, title, publishedAt }');
  console.log("Total posts in Sanity:", allPosts.length);
  allPosts.forEach(p => {
    console.log(`- [${p._id}] ${p.title} (${p.publishedAt})`);
  });
  
  const drafts = allPosts.filter(p => p._id.startsWith('drafts.'));
  console.log("Draft count:", drafts.length);
}

check();

import { getCliClient } from "sanity/cli";

const client = getCliClient({
  apiVersion: "2025-02-19",
  dataset: "production",
  projectId: "btu0u7s3",
});

async function list() {
  const posts = await client.fetch('*[_type == "post"]{ _id, title, "slug": slug.current, publishedAt }');
  console.log(JSON.stringify(posts, null, 2));
}

list();

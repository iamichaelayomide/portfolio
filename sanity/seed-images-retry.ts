import { getCliClient } from "sanity/cli";
import fetch from "node-fetch";

const client = getCliClient({
  apiVersion: "2025-02-19",
  dataset: "production",
  projectId: "btu0u7s3",
});

const postImageMap: Record<string, string> = {
  "post.when-startup-build-design-system-timing": "https://images.unsplash.com/photo-1542744094-24638ea0b3b5?q=80&w=1200", 
  "post.atomic-design-approach-saas": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200"
};

async function uploadImage(url: string, id: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch ${url}`);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    console.log(`Uploading image for ${id}...`);
    const asset = await client.assets.upload('image', buffer, { filename: `${id}.jpg` });
    
    console.log(`Patching document ${id}...`);
    await client.patch(id).set({
      featuredImage: {
        _type: 'image',
        asset: { _type: 'reference', _ref: asset._id },
        alt: `Cover image for ${id.replace("post.", "")}`
      }
    }).commit();
    console.log(`Success: ${id}`);
  } catch (error) {
    console.error(`Error processing ${id}:`, error);
  }
}

async function seedImages() {
  for (const [id, url] of Object.entries(postImageMap)) {
    await uploadImage(url, id);
  }
}

seedImages();
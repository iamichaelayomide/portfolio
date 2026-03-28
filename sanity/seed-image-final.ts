import { getCliClient } from "sanity/cli";
import fetch from "node-fetch";

const client = getCliClient({
  apiVersion: "2025-02-19",
  dataset: "production",
  projectId: "btu0u7s3",
});

async function uploadImage() {
  const id = "post.when-startup-build-design-system-timing";
  const url = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200";
  try {
    const response = await fetch(url);
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

uploadImage();
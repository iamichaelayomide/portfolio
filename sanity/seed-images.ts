import { getCliClient } from "sanity/cli";
import fetch from "node-fetch";

const client = getCliClient({
  apiVersion: "2025-02-19",
  dataset: "production",
  projectId: "btu0u7s3",
});

const postImageMap: Record<string, string> = {
  "post.beyond-seo-geo-playbook-2026": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
  "post.vibe-coding-revolution-2026": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
  "post.feature-vs-product-ai-trap-2026": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
  "post.headless-shopify-ecommerce-2026": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200",
  "post.ecommerce-conversion-ux-killers-2026": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200",
  "post.enterprise-ai-trust-security-2026": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
  
  "post.b2b-saas-dashboard-design-actionable": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200", 
  "post.psychology-of-onboarding-saas": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200",
  "post.stop-asking-what-do-you-want-user-interviews": "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200",
  "post.jobs-to-be-done-framework-saas": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200",
  "post.ux-audits-for-saas-5-step-framework": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200",
  "post.boring-landing-page-playbook-clarity": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200",
  "post.woocommerce-vs-shopify-2026-guide": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
  "post.when-startup-build-design-system-timing": "https://images.unsplash.com/photo-1507238691740-14c010643911?q=80&w=1200", 
  "post.design-tokens-explained-figma-react": "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1200",
  "post.atomic-design-approach-saas": "https://images.unsplash.com/photo-1522881115392-ce8900d167ba?q=80&w=1200"
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
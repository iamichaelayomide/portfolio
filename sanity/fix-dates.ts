import { getCliClient } from "sanity/cli";

const client = getCliClient({
  apiVersion: "2025-02-19",
  dataset: "production",
  projectId: "btu0u7s3",
});

// Today is March 28, 2026.
// Let's ensure ALL dates are <= March 28, 2026.
const articleSchedule = [
  { id: "post.vibe-coding-revolution-2026", date: "2026-03-28T10:00:00Z" },
  { id: "post.beyond-seo-geo-playbook-2026", date: "2026-03-27T14:30:00Z" },
  { id: "post.b2b-saas-dashboard-design-actionable", date: "2026-03-26T13:10:00Z" },
  { id: "post.feature-vs-product-ai-trap-2026", date: "2026-03-25T09:15:00Z" },
  { id: "post.enterprise-ai-trust-security-2026", date: "2026-03-23T11:45:00Z" },
  { id: "post.ecommerce-conversion-ux-killers-2026", date: "2026-03-20T16:20:00Z" },
  { id: "post.headless-shopify-ecommerce-2026", date: "2026-03-18T08:00:00Z" },
  { id: "post.psychology-of-onboarding-saas", date: "2026-03-15T10:00:00Z" },
  { id: "post.woocommerce-vs-shopify-2026-guide", date: "2026-03-12T14:00:00Z" },
  { id: "post.boring-landing-page-playbook-clarity", date: "2026-03-09T09:00:00Z" },
  { id: "post.ux-audits-for-saas-5-step-framework", date: "2026-03-05T11:30:00Z" },
  { id: "post.jobs-to-be-done-framework-saas", date: "2026-03-01T15:45:00Z" },
  { id: "post.stop-asking-what-do-you-want-user-interviews", date: "2026-02-25T10:20:00Z" },
  { id: "post.when-startup-build-design-system-timing", date: "2026-02-20T12:00:00Z" },
  { id: "post.design-tokens-explained-figma-react", date: "2026-02-15T09:30:00Z" },
  { id: "post.atomic-design-approach-saas", date: "2026-02-10T14:00:00Z" },
];

async function reschedule() {
  console.log("Fixing dates to ensure everything is published and in the past/present...");
  
  for (const item of articleSchedule) {
    try {
      await client.patch(item.id).set({ publishedAt: item.date }).commit();
      console.log(`Updated ${item.id} -> ${item.date}`);
    } catch (err) {
      console.error(`Failed to update ${item.id}:`, err);
    }
  }
  
  console.log("Success! Dates fixed.");
}

reschedule();
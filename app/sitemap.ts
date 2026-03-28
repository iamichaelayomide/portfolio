import type { MetadataRoute } from "next";
import { getPosts, getProjects } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://michaelayomide.com";
  const [projects, posts] = await Promise.all([getProjects(), getPosts()]);

  return [
    "",
    "/work",
    "/blog",
    "/about",
    "/contact",
    ...projects.map((project) => `/work/${project.slug}`),
    ...posts.map((post) => `/blog/${post.slug}`),
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}

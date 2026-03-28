import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://michaelayomide.com";
  const projects = await getProjects();

  return [
    "",
    "/work",
    "/about",
    "/contact",
    ...projects.map((project) => `/work/${project.slug}`),
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}

import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://michaelayomide.com";

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

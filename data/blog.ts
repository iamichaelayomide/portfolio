import type { TypedObject } from "@portabletext/types";

export type BlogPostSummary = {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  categories: string[];
  featuredImage?: string;
  featuredImageAlt?: string;
  readingTime: string;
};

export type BlogPost = BlogPostSummary & {
  body: TypedObject[];
};

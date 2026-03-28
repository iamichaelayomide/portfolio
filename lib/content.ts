import type {
  Project,
} from "@/data/projects";
import { getProjectBySlug as getFallbackProjectBySlug, projects as fallbackProjects } from "@/data/projects";
import type { TypedObject } from "@portabletext/types";
import type { FaqItem } from "@/data/faqs";
import { faqs as fallbackFaqs } from "@/data/faqs";
import type { BlogPost, BlogPostSummary } from "@/data/blog";
import type {
  HomeContent,
} from "@/data/home-content";
import { homeContent as fallbackHomeContent } from "@/data/home-content";
import type {
  AboutPageContent,
  ContactPageContent,
} from "@/data/site-pages";
import {
  aboutPageContent as fallbackAboutPageContent,
  contactPageContent as fallbackContactPageContent,
} from "@/data/site-pages";
import { sanityClient } from "@/lib/sanity/client";
import {
  latestPostsQuery,
  postBySlugQuery,
  postsQuery,
} from "@/lib/sanity/queries";
import type { QueryParams } from "next-sanity";

type PartialBlogPost = Partial<BlogPost> & {
  body?: TypedObject[] | null;
};

function blocksToPlainText(blocks: unknown[] | null | undefined) {
  return (blocks || [])
    .map((block) => {
      if (!block || typeof block !== "object" || !("children" in block)) {
        return "";
      }

      const children = (block as { children?: unknown[] }).children || [];

      return children
        .map((child) => {
          if (!child || typeof child !== "object" || !("text" in child)) {
            return "";
          }

          return String((child as { text?: unknown }).text || "");
        })
        .join("");
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function estimateReadingTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min read`;
}

function normalizeBlogPost(post: PartialBlogPost | null | undefined): BlogPost | null {
  if (!post?.slug || !post.title) {
    return null;
  }

  const plainText = blocksToPlainText(post.body);
  const excerpt = post.excerpt || plainText.slice(0, 180).trim();

  return {
    slug: post.slug,
    title: post.title,
    excerpt,
    publishedAt: post.publishedAt || new Date().toISOString(),
    categories: (post.categories || []).filter(Boolean),
    featuredImage: post.featuredImage || undefined,
    featuredImageAlt: post.featuredImageAlt || undefined,
    readingTime: estimateReadingTime(`${post.title} ${excerpt} ${plainText}`),
    body: post.body || [],
  };
}

async function fetchFromSanity<T>(query: string, params?: QueryParams) {
  try {
    if (params) {
      return await sanityClient.fetch<T>(query, params, {
        next: { revalidate: 0 },
      });
    }

    return await sanityClient.fetch<T>(query, {}, {
      next: { revalidate: 0 },
    });
  } catch (error) {
    console.warn("Sanity fetch failed, using local fallback content.", error);
    return null;
  }
}

export async function getProjects(): Promise<Project[]> {
  return fallbackProjects;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return getFallbackProjectBySlug(slug);
}

export async function getFaqs(): Promise<FaqItem[]> {
  return fallbackFaqs;
}

export async function getHomeContent(): Promise<HomeContent> {
  return fallbackHomeContent;
}

export async function getAboutPageContent(): Promise<AboutPageContent> {
  return fallbackAboutPageContent;
}

export async function getContactPageContent(): Promise<ContactPageContent> {
  return fallbackContactPageContent;
}

export async function getPosts(): Promise<BlogPostSummary[]> {
  const sanityPosts = await fetchFromSanity<PartialBlogPost[]>(postsQuery);

  if (!sanityPosts?.length) {
    return [];
  }

  return sanityPosts
    .map((post) => normalizeBlogPost(post))
    .filter((post): post is BlogPost => Boolean(post))
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      publishedAt: post.publishedAt,
      categories: post.categories,
      featuredImage: post.featuredImage,
      featuredImageAlt: post.featuredImageAlt,
      readingTime: post.readingTime,
    }));
}

export async function getLatestPosts(): Promise<BlogPostSummary[]> {
  const sanityPosts = await fetchFromSanity<PartialBlogPost[]>(latestPostsQuery);

  if (!sanityPosts?.length) {
    return [];
  }

  return sanityPosts
    .map((post) => normalizeBlogPost(post))
    .filter((post): post is BlogPost => Boolean(post))
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      publishedAt: post.publishedAt,
      categories: post.categories,
      featuredImage: post.featuredImage,
      featuredImageAlt: post.featuredImageAlt,
      readingTime: post.readingTime,
    }));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const sanityPost = await fetchFromSanity<PartialBlogPost | null>(postBySlugQuery, { slug });
  return normalizeBlogPost(sanityPost) || undefined;
}

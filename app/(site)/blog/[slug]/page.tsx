import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import PortableTextContent from "@/components/blog/PortableTextContent";
import FinalCTA from "@/components/sections/FinalCTA";
import { getHomeContent, getPostBySlug, getPosts } from "@/lib/content";
import { createBlurDataURL } from "@/lib/utils";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} - Michael Ayomide`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} - Michael Ayomide`,
      description: post.excerpt,
      images: post.featuredImage ? [{ url: post.featuredImage }] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const [post, homeContent] = await Promise.all([
    getPostBySlug(params.slug),
    getHomeContent(),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <article className="pb-16 pt-8 md:pb-24 md:pt-12">
      <div className="section-shell mb-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-body text-body-sm text-text-secondary transition-colors hover:text-text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      <div className="section-shell">
        <div className="mx-auto max-w-[900px] space-y-10">
          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 font-body text-body-xs uppercase tracking-[0.08em] text-text-muted">
              <span>{formatDate(post.publishedAt)}</span>
              <span>{post.readingTime}</span>
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-[var(--accent-warm-10)] px-3 py-1 text-text-secondary"
                >
                  {category}
                </span>
              ))}
            </div>

            <div className="space-y-5">
              <p className="section-label mb-0">
                <span className="section-rule" />
                Blog Post
              </p>
              <h1 className="max-w-[16ch] text-balance font-display text-[clamp(40px,7vw,74px)] font-semibold leading-[0.96] tracking-[-0.05em] text-text-primary">
                {post.title}
              </h1>
              <p className="max-w-[46rem] font-body text-body-lg leading-[1.8] text-text-secondary">
                {post.excerpt}
              </p>
            </div>

            {post.featuredImage ? (
              <div className="relative aspect-[16/9] overflow-hidden rounded-[32px] border border-border-subtle bg-bg-elevated">
                <Image
                  src={post.featuredImage}
                  alt={post.featuredImageAlt || `${post.title} cover image`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={createBlurDataURL()}
                />
              </div>
            ) : null}
          </header>

          <PortableTextContent value={post.body} className="pb-6" />
        </div>
      </div>

      <FinalCTA content={homeContent.finalCta} />
    </article>
  );
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPostSummary } from "@/data/blog";
import { createBlurDataURL } from "@/lib/utils";

export default function BlogCard({ post }: { post: BlogPostSummary }) {
  const isDraft = post._id.startsWith("drafts.");

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative overflow-hidden rounded-[28px] border border-border-subtle bg-bg-surface transition-all duration-200 ease-default hover:-translate-y-1 hover:border-border-strong hover:shadow-hover"
    >
      {isDraft && (
        <div className="absolute right-4 top-4 z-overlay rounded-full bg-accent-warm px-3 py-1 font-body text-[10px] font-bold uppercase tracking-widest text-bg-base shadow-glow">
          Draft
        </div>
      )}
      <div className="relative aspect-[16/10] overflow-hidden bg-bg-elevated">
        {post.featuredImage ? (
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt || `${post.title} cover image`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 ease-default group-hover:scale-[1.03]"
            placeholder="blur"
            blurDataURL={createBlurDataURL()}
          />
        ) : null}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-bg-base via-bg-base/45 to-transparent" />
      </div>

      <div className="space-y-4 p-6">
        <div className="flex flex-wrap items-center gap-3 font-body text-body-xs uppercase tracking-[0.08em] text-text-muted">
          <span>{formatDate(post.publishedAt)}</span>
          <span>{post.readingTime}</span>
          {post.categories.slice(0, 2).map((category) => (
            <span
              key={category}
              className="rounded-full bg-[var(--accent-warm-10)] px-3 py-1 text-text-secondary"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <h3 className="font-display text-display-sm font-medium text-text-primary">
              {post.title}
            </h3>
            <p className="font-body text-body-sm leading-[1.7] text-text-secondary">
              {post.excerpt}
            </p>
          </div>
          <span className="pt-1 text-text-secondary transition-all duration-200 ease-default group-hover:translate-x-1 group-hover:opacity-100 md:opacity-0">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

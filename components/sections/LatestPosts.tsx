import Link from "next/link";
import BlogCard from "@/components/blog/BlogCard";
import { buttonStyles } from "@/components/ui/Button";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import type { BlogPostSummary } from "@/data/blog";

export default function LatestPosts({ posts }: { posts: BlogPostSummary[] }) {
  const hasPosts = posts.length > 0;

  return (
    <section className="section-space">
      <div className="section-shell">
        <ScrollReveal className="mb-10">
          <p className="section-label">
            <span className="section-rule" />
            Blog
          </p>
          <h2 className="font-display text-display-md font-semibold text-text-primary">
            Writing about product thinking, UX, design systems, and web execution.
          </h2>
        </ScrollReveal>

        {hasPosts ? (
          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <StaggerItem key={post._id}>
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <ScrollReveal>
            <div className="rounded-[28px] border border-border-subtle bg-bg-surface p-8 md:p-10">
              <h3 className="font-display text-display-sm font-medium text-text-primary">
                The blog section is live, but there are no posts to show yet.
              </h3>
              <p className="mt-4 max-w-prose font-body text-body-md text-text-secondary">
                If Sanity draft access is unavailable, the site now falls back to published posts
                instead of hiding this section completely.
              </p>
            </div>
          </ScrollReveal>
        )}

        <div className="mt-10 text-center">
          <Link href="/blog" className={buttonStyles({ variant: "secondary", size: "md" })}>
            {hasPosts ? "Read the Blog ->" : "Visit the Blog ->"}
          </Link>
        </div>
      </div>
    </section>
  );
}

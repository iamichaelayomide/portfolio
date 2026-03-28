import Link from "next/link";
import BlogCard from "@/components/blog/BlogCard";
import { buttonStyles } from "@/components/ui/Button";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import type { BlogPostSummary } from "@/data/blog";

export default function LatestPosts({ posts }: { posts: BlogPostSummary[] }) {
  if (!posts.length) {
    return null;
  }

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

        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10 text-center">
          <Link href="/blog" className={buttonStyles({ variant: "secondary", size: "md" })}>
            {"Read the Blog ->"}
          </Link>
        </div>
      </div>
    </section>
  );
}

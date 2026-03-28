import type { Metadata } from "next";
import Link from "next/link";
import CategoryFilter from "@/components/blog/CategoryFilter";
import { buttonStyles } from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getPosts } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog - Michael Ayomide",
  description:
    "Thoughts on product design, UX strategy, web execution, and building clearer digital experiences.",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="section-space">
      <div className="section-shell space-y-12 pt-10">
        <ScrollReveal className="max-w-[840px]">
          <p className="section-label">
            <span className="section-rule" />
            Blog
          </p>
          <h1 className="font-display text-display-lg font-semibold text-text-primary">
            Notes on product thinking, UX systems, and web execution.
          </h1>
          <p className="mt-4 max-w-[44rem] font-body text-body-lg text-text-secondary">
            A place for deeper writing about design decisions, process, product clarity,
            and the work behind stronger digital experiences.
          </p>
        </ScrollReveal>

        {!posts.length ? (
          <ScrollReveal>
            <div className="rounded-[28px] border border-border-subtle bg-bg-surface p-8 md:p-10">
              <h2 className="font-display text-display-sm font-medium text-text-primary">
                No posts published yet.
              </h2>
              <p className="mt-4 max-w-prose font-body text-body-md text-text-secondary">
                Your blog is wired up. Open Sanity Studio, create a new blog post, add rich
                content and images, then publish it and it will appear here automatically.
              </p>
              <div className="mt-6">
                <Link href="/studio" className={buttonStyles({ variant: "secondary", size: "md" })}>
                  Open Studio
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ) : (
          <CategoryFilter posts={posts} />
        )}
      </div>
    </section>
  );
}

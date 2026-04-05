"use client";

import { useState, useMemo } from "react";
import BlogCard from "@/components/blog/BlogCard";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import type { BlogPostSummary } from "@/data/blog";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  posts: BlogPostSummary[];
}

export default function CategoryFilter({ posts }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const normalizeCategory = (value: string) =>
    value.trim().replace(/\s+/g, " ").toLowerCase();

  // Extract unique categories with stronger normalization safety
  const categories = useMemo(() => {
    const cats = new Map<string, string>();
    if (Array.isArray(posts)) {
      posts.forEach((post) => {
        if (Array.isArray(post.categories)) {
          post.categories.forEach((cat) => {
            if (typeof cat === "string" && cat.trim().length > 0) {
              const normalized = normalizeCategory(cat);
              if (!cats.has(normalized)) {
                cats.set(normalized, cat.trim());
              }
            }
          });
        }
      });
    }
    return ["All", ...Array.from(cats.values()).sort((a, b) => a.localeCompare(b))];
  }, [posts]);

  // Filtered posts
  const filteredPosts = useMemo(() => {
    if (!Array.isArray(posts)) return [];
    if (selectedCategory === "All") return posts;
    const selected = normalizeCategory(selectedCategory);
    return posts.filter((post) => 
      Array.isArray(post.categories) &&
      post.categories.some(
        (category) => typeof category === "string" && normalizeCategory(category) === selected,
      )
    );
  }, [posts, selectedCategory]);

  return (
    <div className="space-y-10">
      {/* Category Navigation */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <span className="font-body text-body-xs uppercase tracking-[0.1em] text-text-muted">
            Explore Categories
          </span>
          
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "rounded-full px-5 py-2 font-body text-body-sm transition-all duration-200 border",
                  selectedCategory === category
                    ? "bg-text-primary border-text-primary text-bg-base shadow-sm"
                    : "border-border-subtle bg-bg-elevated text-text-secondary hover:border-border-default hover:text-text-primary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-border-subtle pb-4">
          <p className="font-body text-body-sm text-text-muted">
            Found {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} in <span className="text-text-secondary font-medium">{selectedCategory}</span>
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((post) => (
            <StaggerItem key={post._id}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <ScrollReveal>
          <div className="rounded-[32px] border border-dashed border-border-default bg-bg-surface/50 p-12 text-center md:p-20">
            <h3 className="font-display text-display-xs font-medium text-text-primary">
              No articles found.
            </h3>
            <p className="mt-2 font-body text-body-md text-text-secondary">
              Try exploring a different category or check back soon.
            </p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="mt-8 font-body text-body-sm font-medium text-accent-rose hover:underline"
            >
              Reset all filters
            </button>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}

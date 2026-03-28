"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronDown, Check } from "lucide-react";
import * as Popover from "@radix-ui/react-popover";
import BlogCard from "@/components/blog/BlogCard";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import type { BlogPostSummary } from "@/data/blog";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  posts: BlogPostSummary[];
}

export default function CategoryFilter({ posts }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [open, setOpen] = useState(false);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    posts.forEach((post) => {
      post.categories.forEach((cat) => cats.add(cat));
    });
    return ["All", ...Array.from(cats).sort()];
  }, [posts]);

  // Filtered posts
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") return posts;
    return posts.filter((post) => post.categories.includes(selectedCategory));
  }, [posts, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Category Navigation / Dropdown */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="font-body text-body-xs uppercase tracking-widest text-text-muted">
            Filter by:
          </span>
          
          {/* Desktop Pills (visible on md+) */}
          <div className="hidden flex-wrap gap-2 md:flex">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "rounded-full px-4 py-1.5 font-body text-body-sm transition-all duration-200",
                  selectedCategory === category
                    ? "bg-text-primary text-bg-surface"
                    : "border border-border-subtle bg-bg-elevated text-text-secondary hover:border-border-default hover:text-text-primary"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mobile Dropdown (visible on < md) */}
          <div className="md:hidden">
            <Popover.Root open={open} onOpenChange={setOpen}>
              <Popover.Trigger asChild>
                <button className="flex items-center gap-2 rounded-lg border border-border-subtle bg-bg-elevated px-4 py-2 font-body text-body-sm text-text-primary transition-colors hover:border-border-default">
                  {selectedCategory}
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")} />
                </button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content
                  className="z-50 min-w-[200px] overflow-hidden rounded-xl border border-border-default bg-bg-surface shadow-lg animate-in fade-in zoom-in-95 duration-200"
                  align="start"
                  sideOffset={8}
                >
                  <div className="max-h-[300px] overflow-y-auto p-1">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setOpen(false);
                        }}
                        className={cn(
                          "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left font-body text-body-sm transition-colors",
                          selectedCategory === category
                            ? "bg-bg-elevated text-text-primary font-medium"
                            : "text-text-secondary hover:bg-bg-elevated hover:text-text-primary"
                        )}
                      >
                        {category}
                        {selectedCategory === category && <Check className="h-3.5 w-3.5" />}
                      </button>
                    ))}
                  </div>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>
        </div>

        <p className="font-body text-body-xs text-text-muted">
          Showing {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"}
        </p>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <ScrollReveal>
          <div className="rounded-[28px] border border-border-subtle bg-bg-surface p-8 text-center md:p-12">
            <h3 className="font-display text-display-xs font-medium text-text-primary">
              No posts found in this category.
            </h3>
            <p className="mt-2 font-body text-body-md text-text-secondary">
              Try selecting a different filter or check back later.
            </p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="mt-6 font-body text-body-sm font-medium text-accent-rose hover:underline"
            >
              Reset filters
            </button>
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}

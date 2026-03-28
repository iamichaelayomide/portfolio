"use client";

import { useState } from "react";
import Link from "next/link";
import ProjectCard from "@/components/ui/ProjectCard";
import { buttonStyles } from "@/components/ui/Button";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import type { Project } from "@/data/projects";
import { projectFilters } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function FeaturedWork({ projects }: { projects: Project[] }) {
  const homeProjects = projects.slice(0, 5);
  const featured = homeProjects[0];
  const rest = homeProjects.slice(1);

  if (!featured) {
    return null;
  }

  return (
    <section className="section-space">
      <div className="section-shell">
        <ScrollReveal className="mb-10">
          <p className="section-label">
            <span className="section-rule" />
            Selected Work
          </p>
          <h2 className="font-display text-display-md font-semibold text-text-primary">
            Selected work with real commercial intent.
          </h2>
        </ScrollReveal>
        <div className="space-y-6">
          <ScrollReveal>
            <ProjectCard project={featured} featured />
          </ScrollReveal>
          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {rest.map((project) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <div className="mt-10 text-center">
          <Link href="/work" className={buttonStyles({ variant: "secondary", size: "md" })}>
            {"View All Work ->"}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function WorkShowcase({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<(typeof projectFilters)[number]>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-6 border-b border-border-subtle pb-3">
        {projectFilters.map((filter) => {
          const active = filter === activeFilter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "border-b pb-2 font-body text-body-sm transition-colors duration-150 ease-default",
                active
                  ? "border-accent-rose text-text-primary"
                  : "border-transparent text-text-muted hover:text-text-secondary",
              )}
            >
              {filter}
            </button>
          );
        })}
      </div>
      {!filteredProjects.length ? (
        <p className="font-body text-body-md text-text-secondary">
          No projects have been published in Sanity yet.
        </p>
      ) : null}
      <StaggerContainer className="grid gap-6 md:grid-cols-2" delay={0.06}>
        {filteredProjects.map((project) => (
          <StaggerItem key={project.slug}>
            <ProjectCard project={project} featured={project.type === "featured"} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

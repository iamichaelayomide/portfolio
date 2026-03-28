import type { Metadata } from "next";
import { WorkShowcase } from "@/components/sections/FeaturedWork";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getProjects } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Work - Michael Ayomide",
  description: "Selected projects across product, web, live builds, and systems.",
};

export default async function WorkPage() {
  const projects = await getProjects();

  return (
    <section className="section-space">
      <div className="section-shell space-y-12 pt-10">
        <ScrollReveal>
          <p className="section-label">
            <span className="section-rule" />
            Work
          </p>
          <h1 className="font-display text-display-lg font-semibold text-text-primary">Work</h1>
          <p className="mt-4 font-body text-body-lg text-text-secondary">
            Selected projects across product, web, live builds, and systems.
          </p>
        </ScrollReveal>
        <WorkShowcase projects={projects} />
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import FinalCTA from "@/components/sections/FinalCTA";
import { getHomeContent, getProjectBySlug, getProjects } from "@/lib/content";
import { createBlurDataURL } from "@/lib/utils";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} - Michael Ayomide`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Michael Ayomide`,
      description: project.description,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const [projects, homeContent] = await Promise.all([getProjects(), getHomeContent()]);
  const projectIndex = projects.findIndex((project) => project.slug === params.slug);
  const project = projectIndex >= 0 ? projects[projectIndex] : null;

  if (!project) {
    notFound();
  }

  const previous = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const next = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <article className="pb-16 pt-8 md:pb-24 md:pt-12">
      <div className="section-shell mb-8">
        <div className="flex flex-col gap-5">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-body text-body-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            All Work
          </Link>

          {project.liveUrl ? (
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border-accent bg-accent-glow px-4 py-2 font-body text-body-sm font-medium text-accent-rose transition-all duration-200 ease-default hover:-translate-y-0.5 hover:bg-accent-rose hover:text-bg-base"
              >
                Visit Live Project
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="font-body text-body-xs text-text-muted">
                Live build. Case study below explains the problem, approach, solution, and result.
              </p>
            </div>
          ) : null}
        </div>
      </div>

      <CaseStudyHero project={project} />

      {project.sections.map((section) => (
        <CaseStudySection key={section.id} section={section} />
      ))}

      <section className="section-shell section-space border-t border-border-subtle">
        <div className="grid gap-6 md:grid-cols-2">
          {previous ? (
            <CaseStudyNavCard
              direction="previous"
              slug={previous.slug}
              title={previous.title}
              description={previous.description}
              thumbnail={previous.thumbnail}
            />
          ) : (
            <div />
          )}
          {next ? (
            <CaseStudyNavCard
              direction="next"
              slug={next.slug}
              title={next.title}
              description={next.description}
              thumbnail={next.thumbnail}
            />
          ) : (
            <div />
          )}
        </div>
      </section>

      <FinalCTA content={homeContent.finalCta} />
    </article>
  );
}

function CaseStudyNavCard({
  direction,
  slug,
  title,
  description,
  thumbnail,
}: {
  direction: "previous" | "next";
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
}) {
  const isNext = direction === "next";

  return (
    <Link
      href={`/work/${slug}`}
      className={`group overflow-hidden rounded-xl border border-border-subtle bg-bg-surface transition-all duration-200 ease-default hover:-translate-y-1 hover:border-border-strong hover:shadow-hover ${
        isNext ? "text-right" : "text-left"
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={thumbnail}
          alt={`${title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL={createBlurDataURL()}
        />
      </div>
      <div className="space-y-3 p-6">
        <p className="font-body text-body-xs uppercase tracking-caps text-text-muted">
          {isNext ? "Next Project" : "Previous Project"}
        </p>
        <h3 className="font-display text-display-sm font-medium text-text-primary">{title}</h3>
        <p className="font-body text-body-sm text-text-secondary">{description}</p>
        <span
          className={`inline-flex items-center gap-2 font-body text-body-sm text-text-primary ${
            isNext ? "justify-end" : ""
          }`}
        >
          {isNext ? "Next" : "Previous"}
          {isNext ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
        </span>
      </div>
    </Link>
  );
}

import Image from "next/image";
import type { Project } from "@/data/projects";
import { createBlurDataURL } from "@/lib/utils";

export default function CaseStudyHero({ project }: { project: Project }) {
  const meta = [
    { label: "Year", value: project.year },
    { label: "Role", value: project.role },
    { label: "Duration", value: project.duration },
    { label: "Platform", value: project.platform },
  ];

  return (
    <section className="section-shell space-y-8 pb-10 pt-6 md:space-y-10">
      <div className="relative aspect-[16/10] max-h-[560px] overflow-hidden rounded-xl border border-border-subtle bg-bg-elevated">
        <Image
          src={project.heroImage}
          alt={`${project.title} hero visual`}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
          placeholder="blur"
          blurDataURL={createBlurDataURL()}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg-base via-bg-base/55 to-transparent" />
        <div className="absolute left-5 top-5">
          <span className="rounded-full border border-border-default bg-bg-base/75 px-3 py-1 font-body text-body-xs uppercase tracking-caps text-text-secondary backdrop-blur-md">
            {project.category === "Live Projects" ? "Live Project" : project.category}
          </span>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-5">
          <div className="space-y-3">
            <h1 className="font-display text-display-lg font-semibold text-text-primary">
              {project.title}
            </h1>
            <p className="max-w-prose font-body text-body-lg text-text-secondary">
              {project.tagline}
            </p>
          </div>
          <div className="max-w-[40rem] rounded-xl border border-border-accent bg-accent-glow p-5">
            <p className="font-body text-body-xs uppercase tracking-caps text-accent-warm">
              Outcome
            </p>
            <p className="mt-3 font-body text-body-md text-text-primary">{project.outcome}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 rounded-xl border border-border-subtle bg-bg-surface p-6">
          {meta.map((item) => (
            <div key={item.label} className="space-y-2">
              <p className="font-body text-body-xs uppercase tracking-caps text-text-muted">
                {item.label}
              </p>
              <p className="font-body text-body-sm text-text-primary">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

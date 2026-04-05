"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Dot } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { EASE_DEFAULT } from "@/lib/motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { createBlurDataURL } from "@/lib/utils";

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const reducedMotion = useReducedMotion();
  const eyebrow = project.category === "Live Projects" ? "Live Project" : project.category;

  return (
    <Link href={`/work/${project.slug}`} className="block focus-visible:outline-none">
      <motion.article
        whileHover={
          reducedMotion
            ? undefined
            : {
                y: -4,
                boxShadow: "0 4px 24px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)",
                borderColor: "var(--border-default)",
              }
        }
        transition={{ duration: 0.25, ease: EASE_DEFAULT }}
        className="group overflow-hidden rounded-xl border border-border-subtle bg-bg-surface shadow-card"
      >
        <div
          className={`relative overflow-hidden bg-bg-elevated ${
            featured ? "aspect-[21/9]" : "aspect-[16/10]"
          }`}
        >
          <motion.div
            whileHover={reducedMotion ? undefined : { scale: 1.03 }}
            transition={{ duration: 0.4, ease: EASE_DEFAULT }}
            className="h-full w-full"
          >
            <Image
              src={project.thumbnail}
              alt={`${project.title} project preview`}
              fill
              sizes={
                featured ? "(max-width: 1024px) 100vw, 1200px" : "(max-width: 1024px) 100vw, 50vw"
              }
              className="object-cover"
              placeholder="blur"
              blurDataURL={createBlurDataURL()}
            />
          </motion.div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-bg-base via-bg-base/45 to-transparent" />

          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-border-default bg-bg-base/80 px-3 py-1 font-body text-body-xs uppercase tracking-caps text-text-secondary backdrop-blur-md">
              {eyebrow}
            </span>
            {featured ? (
              <span className="rounded-full border border-border-accent bg-accent-glow px-3 py-1 font-body text-body-xs font-medium uppercase tracking-caps text-accent-rose">
                Featured
              </span>
            ) : null}
            {project.liveUrl ? (
              <span className="inline-flex items-center rounded-full border border-border-default bg-bg-base/80 px-3 py-1 font-body text-body-xs uppercase tracking-caps text-text-secondary backdrop-blur-md">
                <Dot className="-ml-1 h-4 w-4 text-status-online" />
                Live
              </span>
            ) : null}
          </div>
        </div>

        <div className="space-y-4 px-6 pb-6 pt-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-display-sm font-medium text-text-primary">
                {project.title}
              </h3>
            </div>
            <span className="pt-1 text-text-secondary transition-all duration-200 ease-default group-hover:translate-x-1 group-hover:opacity-100 md:opacity-0">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

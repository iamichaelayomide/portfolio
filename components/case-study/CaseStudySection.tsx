import Image from "next/image";
import ImagePlaceholder from "@/components/case-study/ImagePlaceholder";
import type { CaseStudySection as CaseStudySectionType } from "@/data/projects";
import { createBlurDataURL } from "@/lib/utils";

const gridClassMap = {
  wide: "grid-cols-1",
  landscape: "grid-cols-1 md:grid-cols-2",
  portrait: "grid-cols-1 md:grid-cols-2",
  grid: "grid-cols-1 md:grid-cols-3",
};

const aspectMap = {
  wide: "aspect-[16/9]",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  grid: "aspect-square",
};

export default function CaseStudySection({
  section,
}: {
  section: CaseStudySectionType;
}) {
  const defaultAspect = section.images?.length === 3 ? "grid" : "wide";

  return (
    <section className="section-shell section-space border-t border-border-subtle">
      <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div>
          <p className="section-label">
            <span className="section-rule" />
            {section.title}
          </p>
        </div>
        <div className="space-y-8">
          <div className="max-w-prose space-y-5">
            {section.content.map((paragraph) => (
              <p key={paragraph} className="font-body text-body-md text-text-secondary">
                {paragraph}
              </p>
            ))}
          </div>

          {section.quote ? (
            <blockquote className="max-w-prose rounded-xl border border-border-accent bg-accent-glow px-6 py-5 font-display text-display-sm font-medium text-text-primary">
              &ldquo;{section.quote}&rdquo;
            </blockquote>
          ) : null}

          {section.insights?.length ? (
            <div className="grid gap-5 md:grid-cols-2">
              {section.insights.map((insight) => (
                <div
                  key={insight.title}
                  className="rounded-xl border border-border-subtle bg-bg-surface p-6"
                >
                  <h3 className="font-display text-xl font-medium text-text-primary">
                    {insight.title}
                  </h3>
                  <p className="mt-3 font-body text-body-sm text-text-secondary">
                    {insight.text}
                  </p>
                </div>
              ))}
            </div>
          ) : null}

          {section.steps?.length ? (
            <ol className="space-y-4">
              {section.steps.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-xl border border-border-subtle bg-bg-surface p-5"
                >
                  <span className="font-display text-xl text-text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-body text-body-md text-text-secondary">{step}</span>
                </li>
              ))}
            </ol>
          ) : null}

          {section.images?.length ? (
            <div
              className={`grid gap-5 ${
                gridClassMap[section.images[0]?.aspect ?? defaultAspect]
              }`}
            >
              {section.images.map((image) =>
                image.src ? (
                  <div
                    key={image.label}
                    className={`relative overflow-hidden rounded-xl border border-border-subtle bg-bg-elevated ${
                      aspectMap[image.aspect ?? defaultAspect]
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt || image.label}
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={createBlurDataURL()}
                    />
                  </div>
                ) : (
                  <ImagePlaceholder
                    key={image.label}
                    label={image.label}
                    aspect={image.aspect ?? defaultAspect}
                  />
                )
              )}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

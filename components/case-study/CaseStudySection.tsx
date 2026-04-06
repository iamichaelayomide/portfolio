import Image from "next/image";
import ImagePlaceholder from "@/components/case-study/ImagePlaceholder";
import type { CaseStudySection as CaseStudySectionType } from "@/data/projects";
import { createBlurDataURL, optimizeImageUrl } from "@/lib/utils";
import { urlForImage } from "@/lib/sanity/image";

const gridClassMap = {
  wide: "grid-cols-1",
  landscape: "grid-cols-1",
  portrait: "grid-cols-1 md:grid-cols-2",
  grid: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
};

const aspectMap = {
  wide: "aspect-[16/9] md:aspect-[21/9]",
  landscape: "aspect-[16/10]",
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
        <div className="space-y-12">
          <div className="max-w-prose space-y-5">
            {section.content.map((paragraph) => (
              <p key={paragraph} className="font-body text-body-lg text-text-secondary leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {section.quote ? (
            <blockquote className="max-w-prose border-l-4 border-accent-primary pl-6 py-2 font-display text-display-sm italic text-text-primary">
              &ldquo;{section.quote}&rdquo;
            </blockquote>
          ) : null}

          {section.insights?.length ? (
            <div className="grid gap-6 md:grid-cols-2">
              {section.insights.map((insight) => (
                <div
                  key={insight.title}
                  className="rounded-lg border border-border-subtle bg-bg-surface p-8 shadow-sm"
                >
                  <h3 className="font-display text-display-sm font-semibold text-text-primary">
                    {insight.title}
                  </h3>
                  <p className="mt-4 font-body text-body-md text-text-secondary leading-relaxed">
                    {insight.text}
                  </p>
                </div>
              ))}
            </div>
          ) : null}

          {section.steps?.length ? (
            <div className="space-y-6">
              {section.steps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-6 items-start"
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-accent-glow border border-border-accent font-display text-body-lg font-bold text-accent-primary">
                    {index + 1}
                  </span>
                  <span className="font-body text-body-lg text-text-secondary pt-1">{step}</span>
                </div>
              ))}
            </div>
          ) : null}

          {section.images?.length ? (
            <div
              className={`grid gap-8 ${
                gridClassMap[section.images[0]?.aspect ?? defaultAspect]
              }`}
            >
              {section.images.map((image) => {
                const imageUrl = image.image?.asset 
                  ? urlForImage(image.image)
                      .width(1400)
                      .quality(74)
                      .fit("max")
                      .auto("format")
                      .url()
                  : image.src
                    ? optimizeImageUrl(image.src, { width: 1400, quality: 74 })
                    : undefined;

                return imageUrl ? (
                  <div key={image.label} className="space-y-3">
                    <div
                      className={`relative overflow-hidden rounded-lg border border-border-subtle bg-bg-elevated shadow-md transition-transform duration-500 hover:scale-[1.01] ${
                        aspectMap[image.aspect ?? defaultAspect]
                      }`}
                    >
                      <Image
                        src={imageUrl}
                        alt={image.alt || image.label}
                        fill
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL={createBlurDataURL()}
                        sizes="(max-width: 1024px) 100vw, 800px"
                      />
                    </div>
                    <p className="text-center font-body text-body-sm text-text-muted italic">
                      {image.label}
                    </p>
                  </div>
                ) : (
                  <ImagePlaceholder
                    key={image.label}
                    label={image.label}
                    aspect={image.aspect ?? defaultAspect}
                  />
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

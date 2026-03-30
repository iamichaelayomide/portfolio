import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CalendlyButton from "@/components/ui/CalendlyButton";
import { buttonStyles } from "@/components/ui/Button";
import { getAboutPageContent } from "@/lib/content";
import { createBlurDataURL } from "@/lib/utils";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About - Michael Ayomide",
  description:
    "About Michael Ayomide, product designer focused on clarity, usability, and shipped work that helps people.",
};

export default async function AboutPage() {
  const content = await getAboutPageContent();

  return (
    <section className="section-space">
      <div className="section-shell space-y-16 pt-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
          <ScrollReveal>
            <p className="section-label">
              <span className="section-rule" />
              {content.heroLabel}
            </p>
            <h1 className="font-display text-display-lg font-semibold text-text-primary">
              {content.title}
            </h1>
            <div className="mt-6 max-w-prose space-y-5 font-body text-body-md text-text-secondary">
              {content.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="overflow-hidden rounded-[28px] border border-border-default premium-panel p-3 shadow-card">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[22px]">
                <Image
                  src={content.profileImageUrl}
                  alt="Portrait of Michael Ayomide"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={createBlurDataURL("#120b1c")}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="space-y-6">
          <ScrollReveal>
            <p className="section-label">
              <span className="section-rule" />
              {content.skillsLabel}
            </p>
          </ScrollReveal>
          <div className="grid gap-5 md:grid-cols-2">
            {content.skills.map((item, index) => (
              <ScrollReveal key={item.label} delay={index * 0.06}>
                <div className="rounded-xl border border-border-subtle bg-bg-surface p-6">
                  <p className="font-body text-body-xs uppercase tracking-caps text-text-muted">
                    {item.label}
                  </p>
                  <p className="mt-3 font-body text-body-md text-text-secondary">{item.value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
          <ScrollReveal>
            <p className="section-label">
              <span className="section-rule" />
              {content.experienceLabel}
            </p>
          </ScrollReveal>
          <div className="space-y-6">
            {content.experience.map((item, index) => (
              <ScrollReveal key={`${item.range}-${item.role}`} delay={index * 0.06}>
                <div className="rounded-xl border border-border-subtle bg-bg-surface p-6">
                  <p className="font-body text-body-xs uppercase tracking-caps text-text-muted">
                    {item.range}
                  </p>
                  <h2 className="mt-3 font-display text-display-sm font-medium text-text-primary">
                    {item.role}
                  </h2>
                  <p className="mt-1 font-body text-body-sm text-accent-warm">{item.context}</p>
                  <p className="mt-3 font-body text-body-md text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {content.principles.map((value, index) => (
            <ScrollReveal key={value} delay={index * 0.06}>
              <div className="rounded-xl border border-border-subtle bg-bg-surface p-6 font-display text-display-sm font-medium text-text-primary">
                {value}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="rounded-[28px] border border-border-subtle bg-bg-surface p-8 md:p-10">
          <h2 className="font-display text-display-md font-semibold text-text-primary">
            {content.ctaTitle}
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <CalendlyButton label={content.primaryCtaLabel} />
            <a
              href="/michael-ayomide-cv.pdf"
              className={buttonStyles({ variant: "secondary", size: "md" })}
            >
              {content.secondaryCtaLabel}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

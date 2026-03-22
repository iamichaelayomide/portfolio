import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CalendlyButton from "@/components/ui/CalendlyButton";
import { buttonStyles } from "@/components/ui/Button";
import { createBlurDataURL } from "@/lib/utils";

const PROFILE_IMAGE =
  "https://drive.google.com/uc?export=view&id=1si4jvBANQm2h7wl8xuoztD_eNSrHz8K7";

const experience = [
  {
    range: "2024 - Present",
    role: "Independent Product Designer",
    context: "B2B SaaS, consumer apps, and web projects",
    description:
      "Designing product interfaces, systems, and conversion-focused websites for growing teams.",
  },
  {
    range: "2023 - 2024",
    role: "Product Design Projects",
    context: "Wellness and fintech",
    description:
      "Worked across mobile UX, dashboards, and interaction systems with an execution-focused product lens.",
  },
  {
    range: "2022 - 2023",
    role: "UX and Research Work",
    context: "Consumer and commerce",
    description:
      "Focused on user understanding, structure, and reducing friction across real product flows.",
  },
];

export const metadata: Metadata = {
  title: "About - Michael Ayomide",
  description:
    "About Michael Ayomide, product designer focused on clarity, usability, and shipped work that helps people.",
};

export default function AboutPage() {
  return (
    <section className="section-space">
      <div className="section-shell space-y-16 pt-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
          <ScrollReveal>
            <p className="section-label">
              <span className="section-rule" />
              About
            </p>
            <h1 className="font-display text-display-lg font-semibold text-text-primary">
              Michael Ayomide.
            </h1>
            <div className="mt-6 max-w-prose space-y-5 font-body text-body-md text-text-secondary">
              <p>
                I&apos;m a product designer focused on clarity, usability, and shipping work that actually helps people. I&apos;ve designed across B2B SaaS platforms, consumer apps, e-commerce, and brand web experiences.
              </p>
              <p>
                I think deeply about structure before aesthetics. The visual layer is where I execute precision, but the real work happens in the logic underneath.
              </p>
              <p>
                I use AI-assisted execution workflows like Codex and Gemini CLI to help move strong design thinking into live builds, while keeping the product judgment, direction, and quality bar firmly in my hands.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="overflow-hidden rounded-[28px] border border-border-default premium-panel p-3 shadow-card">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[22px]">
                <Image
                  src={PROFILE_IMAGE}
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

        <div className="grid gap-5 md:grid-cols-2">
          {[
            ["Design", "Figma · Framer · Principle · FigJam"],
            ["Research", "User Interviews · Journey Mapping · Usability Testing"],
            ["Build", "Codex · Gemini CLI · Framer · WooCommerce"],
            ["Systems", "Design Tokens · Component Libraries · Documentation"],
          ].map(([label, value], index) => (
            <ScrollReveal key={label} delay={index * 0.06}>
              <div className="rounded-xl border border-border-subtle bg-bg-surface p-6">
                <p className="font-body text-body-xs uppercase tracking-caps text-text-muted">
                  {label}
                </p>
                <p className="mt-3 font-body text-body-md text-text-secondary">{value}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
          <ScrollReveal>
            <p className="section-label">
              <span className="section-rule" />
              Experience
            </p>
          </ScrollReveal>
          <div className="space-y-6">
            {experience.map((item, index) => (
              <ScrollReveal key={item.range} delay={index * 0.06}>
                <div className="rounded-xl border border-border-subtle bg-bg-surface p-6">
                  <p className="font-body text-body-xs uppercase tracking-caps text-text-muted">
                    {item.range}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-medium text-text-primary">
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
          {[
            "Clarity over cleverness.",
            "Structure before aesthetics.",
            "Ship, learn, iterate.",
          ].map((value, index) => (
            <ScrollReveal key={value} delay={index * 0.06}>
              <div className="rounded-xl border border-border-subtle bg-bg-surface p-6 font-display text-2xl font-medium text-text-primary">
                {value}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="rounded-[28px] border border-border-subtle bg-bg-surface p-8 md:p-10">
          <h2 className="font-display text-display-md font-semibold text-text-primary">
            Let&apos;s build something.
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <CalendlyButton />
            <a
              href="/michael-ayomide-cv.pdf"
              className={buttonStyles({ variant: "secondary", size: "md" })}
            >
              Download CV
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

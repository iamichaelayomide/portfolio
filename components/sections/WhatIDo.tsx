"use client";

import { useRef } from "react";
import { Blocks, Compass, LayoutPanelTop, SquareStack } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const services = [
  {
    icon: LayoutPanelTop,
    title: "Product Design",
    description:
      "Product strategy, flows, and UI direction shaped to make complex products easier to trust and use.",
  },
  {
    icon: Compass,
    title: "UX Research & Strategy",
    description:
      "Insight, journey mapping, and sharper product decisions before visual polish begins.",
  },
  {
    icon: Blocks,
    title: "Web & Ecommerce Builds",
    description:
      "WordPress, WooCommerce, Shopify, and conversion-focused websites built to move people to action.",
  },
  {
    icon: SquareStack,
    title: "Design Systems",
    description:
      "Design tokens, reusable components, and systems that keep teams fast and consistent.",
  },
];

function ServiceCard({
  index,
  title,
  description,
  icon: Icon,
  progress,
}: {
  index: number;
  title: string;
  description: string;
  icon: typeof LayoutPanelTop;
  progress: MotionValue<number>;
}) {
  const start = index * 0.18;
  const mid = start + 0.16;
  const end = start + 0.32;
  const y = useTransform(progress, [start, mid], [220, index * 18]);
  const scale = useTransform(progress, [start, mid], [0.92, 1]);
  const opacity = useTransform(progress, [start, mid], [0.45, 1]);
  const borderOpacity = useTransform(progress, [start, end], [0.08, 0.18]);
  const borderColor = useTransform(borderOpacity, (value) => `rgba(255,255,255,${value})`);

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        borderColor,
      }}
      className="absolute inset-x-0 mx-auto flex min-h-[300px] w-full max-w-[720px] flex-col justify-between rounded-[32px] border bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015)),linear-gradient(180deg,rgba(98,15,133,0.18),rgba(6,3,10,0.28))] p-7 shadow-card sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border-default bg-bg-base/50 text-accent-warm">
          <Icon className="h-5 w-5" />
        </div>
        <p className="font-body text-body-xs uppercase tracking-[0.12em] text-text-muted">
          0{index + 1}
        </p>
      </div>
      <div className="mt-10">
        <h3 className="font-display text-[clamp(28px,3vw,40px)] font-medium leading-[1.04] tracking-[-0.03em] text-text-primary">
          {title}
        </h3>
        <p className="mt-4 max-w-[32rem] font-body text-body-md text-text-secondary">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhatIDo() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  if (reducedMotion) {
    return (
      <section className="section-space relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent-glow-strong),transparent_24%),linear-gradient(180deg,rgba(98,15,133,0.16),rgba(6,3,10,0.02)_42%)]" />
        <div className="section-shell relative">
          <ScrollReveal className="mb-10">
            <p className="section-label">
              <span className="section-rule" />
              What I Do
            </p>
            <h2 className="font-display text-display-md font-semibold text-text-primary">
              Design support that goes beyond the mockup.
            </h2>
          </ScrollReveal>
          <div className="space-y-5">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <ScrollReveal key={service.title} delay={index * 0.06}>
                  <div className="rounded-[28px] border border-border-default bg-bg-surface/90 p-7 shadow-card sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border-default bg-bg-base/50 text-accent-warm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="font-body text-body-xs uppercase tracking-[0.12em] text-text-muted">
                        0{index + 1}
                      </p>
                    </div>
                    <h3 className="mt-10 font-display text-display-sm font-medium text-text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-4 font-body text-body-md text-text-secondary">
                      {service.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative h-[280vh] overflow-clip">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent-glow-strong),transparent_24%),radial-gradient(circle_at_20%_20%,var(--accent-rose-soft),transparent_28%),linear-gradient(180deg,rgba(98,15,133,0.16),rgba(6,3,10,0.02)_42%)]" />
      <div className="sticky top-0 flex h-screen items-center">
        <div className="section-shell relative w-full">
          <ScrollReveal className="mb-12 max-w-[620px]">
            <p className="section-label">
              <span className="section-rule" />
              What I Do
            </p>
            <h2 className="font-display text-display-md font-semibold text-text-primary">
              Design support that goes beyond the mockup.
            </h2>
            <p className="mt-4 max-w-[34rem] font-body text-body-lg text-text-secondary">
              Scroll through the stack. Each layer represents how I take product
              work from thinking to live execution.
            </p>
          </ScrollReveal>

          <div className="relative h-[380px] sm:h-[420px]">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                index={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

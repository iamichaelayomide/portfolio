"use client";

import { useRef } from "react";
import { Blocks, Compass, LayoutPanelTop, SquareStack } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { buttonStyles } from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const services = [
  {
    icon: LayoutPanelTop,
    title: "Product Design",
    description:
      "Product strategy, flows, and UI direction shaped to make complex products easier to trust and use.",
    support: "Structure, hierarchy, interaction design",
  },
  {
    icon: Compass,
    title: "UX Research & Strategy",
    description:
      "Insight, journey mapping, and sharper product decisions before visual polish begins.",
    support: "Discovery, audits, journey mapping",
  },
  {
    icon: Blocks,
    title: "Web & Ecommerce Builds",
    description:
      "WordPress, WooCommerce, Shopify, and conversion-focused websites built to move people to action.",
    support: "Marketing sites, storefronts, conversion UX",
  },
  {
    icon: SquareStack,
    title: "Design Systems",
    description:
      "Design tokens, reusable components, and systems that keep teams fast and consistent.",
    support: "Reusable UI, consistency, scale",
  },
];

const BOOKING_URL = "https://calendar.app.google/Um4G3aYbGQ798AWw5";
const WHATSAPP_URL =
  "https://wa.me/2347032891651?text=Hi%2C%20I%20saw%20your%20website%20and%20I%27d%20like%20to%20talk%20about%20working%20with%20you.";

const panels = [
  ...services,
  {
    icon: Blocks,
    title: "Book a call",
    description:
      "If you need a remote product designer or a freelance partner for a web build, this is the right next move.",
    support: "Free discovery call",
    cta: true,
  },
] as const;

function ServiceCard({
  index,
  title,
  description,
  support,
  icon: Icon,
  progress,
  total,
  cta = false,
}: {
  index: number;
  title: string;
  description: string;
  support: string;
  icon: typeof LayoutPanelTop;
  progress: MotionValue<number>;
  total: number;
  cta?: boolean;
}) {
  const step = 1 / total;
  const start = index * step;
  const enter = start + step * 0.18;
  const hold = Math.min(1, start + step * 0.74);
  const end = Math.min(1, start + step);

  const opacity = useTransform(
    progress,
    index === 0
      ? [0, hold, end]
      : index === total - 1
        ? [start, enter, 1]
        : [start, enter, hold, end],
    index === 0
      ? [1, 1, 0]
      : index === total - 1
        ? [0, 1, 1]
        : [0, 1, 1, 0],
  );
  const y = useTransform(
    progress,
    index === 0
      ? [0, hold, end]
      : index === total - 1
        ? [start, enter, 1]
        : [start, enter, hold, end],
    index === 0
      ? [0, 0, -30]
      : index === total - 1
        ? [60, 0, 0]
        : [60, 0, 0, -30],
  );
  const scale = useTransform(
    progress,
    index === 0
      ? [0, hold, end]
      : index === total - 1
        ? [start, enter, 1]
        : [start, enter, hold, end],
    index === 0
      ? [1, 1, 0.985]
      : index === total - 1
        ? [0.97, 1, 1]
        : [0.97, 1, 1, 0.985],
  );
  const borderGlow = useTransform(
    progress,
    [start, enter, Math.min(1, enter + step * 0.22)],
    [0.12, 0.28, 0.14],
  );
  const borderColor = useTransform(borderGlow, (value) => `rgba(254, 1, 220, ${value})`);

  return (
    <motion.article
      style={{
        y,
        scale,
        opacity,
        borderColor,
        zIndex: total - index,
      }}
      className={`absolute inset-x-0 top-0 mx-auto flex min-h-[360px] w-full max-w-[760px] flex-col justify-between overflow-hidden rounded-[32px] border bg-[linear-gradient(180deg,#6d258d_0%,#3a184f_44%,#17101f_100%)] p-7 shadow-[0_18px_60px_rgba(0,0,0,0.42)] sm:min-h-[400px] sm:p-9 ${
        cta ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(254,1,220,0.12),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_40%)]" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-[20px] border border-border-default bg-black/20 text-accent-warm shadow-[0_0_0_1px_rgba(254,1,220,0.08)]">
          <Icon className="h-6 w-6" />
        </div>
        <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 font-body text-body-xs uppercase tracking-[0.14em] text-text-secondary">
          0{index + 1}
        </div>
      </div>

      <div className="relative mt-10 space-y-5">
        <h3 className="max-w-[12ch] font-display text-[clamp(34px,4.5vw,56px)] font-medium leading-[0.98] tracking-[-0.04em] text-white">
          {title}
        </h3>
        <p className="max-w-[35rem] font-body text-[17px] leading-[1.75] text-[#F1E8F8] sm:text-[18px]">
          {description}
        </p>
      </div>

      <div className="relative flex items-end justify-between gap-4 border-t border-white/10 pt-5">
        <p className="font-body text-body-sm text-[#DCCEE8]">{support}</p>
        {cta ? (
          <div className="hidden sm:flex sm:items-center sm:gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className={buttonStyles({
                variant: "primary",
                size: "sm",
                className: "bg-accent-warm text-bg-base hover:bg-accent-warm hover:text-bg-base",
              })}
            >
              Book a Call
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className={buttonStyles({
                variant: "secondary",
                size: "sm",
                className: "border-white/12 bg-black/20 text-[#E8D9F3] hover:border-white/20",
              })}
            >
              WhatsApp Me
            </a>
          </div>
        ) : (
          <div className="hidden rounded-full border border-white/10 bg-black/20 px-3 py-1 font-body text-body-xs uppercase tracking-[0.12em] text-[#E8D9F3] sm:block">
            From thinking to execution
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function WhatIDo() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.28,
  });

  if (reducedMotion) {
    return (
      <section className="section-space relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent-glow-strong),transparent_24%),linear-gradient(180deg,rgba(98,15,133,0.16),rgba(6,3,10,0.02)_42%)]" />
        <div className="section-shell relative">
          <ScrollReveal className="mb-10 max-w-[700px]">
            <p className="section-label">
              <span className="section-rule" />
              What I Do
            </p>
            <h2 className="font-display text-display-md font-semibold text-text-primary">
              Design support that moves from product thinking to live execution.
            </h2>
            <p className="mt-4 font-body text-body-lg text-text-secondary">
              Clear strategy, sharper UI, and production-ready web work without the
              handoff friction.
            </p>
          </ScrollReveal>
          <div className="space-y-5">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <ScrollReveal key={service.title} delay={index * 0.06}>
                  <div className="overflow-hidden rounded-[28px] border border-border-default bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)),linear-gradient(180deg,rgba(88,22,122,0.72),rgba(19,11,31,0.94))] p-7 shadow-card sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border-default bg-black/20 text-accent-warm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="rounded-full border border-white/10 bg-black/20 px-3 py-1 font-body text-body-xs uppercase tracking-[0.12em] text-text-secondary">
                        0{index + 1}
                      </p>
                    </div>
                    <h3 className="mt-10 font-display text-display-sm font-medium text-white">
                      {service.title}
                    </h3>
                    <p className="mt-4 font-body text-body-md text-[#F1E8F8]">
                      {service.description}
                    </p>
                    <p className="mt-6 border-t border-white/10 pt-4 font-body text-body-sm text-[#DCCEE8]">
                      {service.support}
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
    <section ref={sectionRef} className="relative h-[320vh] overflow-clip">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent-glow-strong),transparent_24%),radial-gradient(circle_at_20%_20%,var(--accent-rose-soft),transparent_28%),linear-gradient(180deg,rgba(98,15,133,0.16),rgba(6,3,10,0.02)_42%)]" />
      <div className="sticky top-0 flex h-screen items-center">
        <div className="section-shell grid w-full items-center gap-12 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16">
          <ScrollReveal className="max-w-[340px]">
            <p className="section-label">
              <span className="section-rule" />
              What I Do
            </p>
            <h2 className="font-display text-display-md font-semibold text-text-primary">
              Product thinking, web execution, and systems that scale.
            </h2>
            <p className="mt-4 font-body text-body-lg text-text-secondary">
              Scroll the stack. One panel takes over at a time, so the motion stays
              clean, deliberate, and easy to read in both directions.
            </p>

            <div className="mt-8 space-y-3">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="flex items-center justify-between rounded-full border border-white/8 bg-white/[0.02] px-4 py-3"
                >
                  <span className="font-body text-body-sm text-[#ECE1F5]">{service.title}</span>
                  <span className="font-body text-body-xs uppercase tracking-[0.12em] text-text-secondary">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="relative h-[430px] sm:h-[470px]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-x-6 top-0 h-full rounded-[36px] border border-white/8 bg-white/[0.02]" />
              <div className="absolute inset-x-3 top-6 h-full rounded-[36px] border border-white/8 bg-white/[0.02]" />
              <div className="absolute inset-0 top-12 rounded-[36px] border border-white/8 bg-white/[0.015]" />
            </div>

            {panels.map((service, index) => (
              <ServiceCard
                key={service.title}
                index={index}
                title={service.title}
                description={service.description}
                support={service.support}
                icon={service.icon}
                progress={smoothProgress}
                total={panels.length}
                cta={"cta" in service ? service.cta : false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

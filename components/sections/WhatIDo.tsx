"use client";

import { useEffect, useRef, useState } from "react";
import { Blocks, Compass, LayoutPanelTop, SquareStack } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { buttonStyles } from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { HomeService, HomeServicesContent } from "@/data/home-content";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/utils";

const BOOKING_URL = "https://calendar.app.google/Um4G3aYbGQ798AWw5";
const WHATSAPP_URL =
  "https://wa.me/2347032891651?text=Hi%2C%20I%20saw%20your%20website%20and%20I%27d%20like%20to%20talk%20about%20working%20with%20you.";

const iconMap = {
  productDesign: LayoutPanelTop,
  uxResearch: Compass,
  webBuilds: Blocks,
  designSystems: SquareStack,
} as const;

type ServiceCardData = Pick<HomeService, "title" | "description" | "support"> & {
  icon: keyof typeof iconMap;
  cta?: boolean;
};

function ServiceCard({
  index,
  title,
  description,
  support,
  icon,
  progress,
  total,
  cta = false,
  primaryCtaLabel,
  secondaryCtaLabel,
}: {
  index: number;
  title: string;
  description: string;
  support: string;
  icon: keyof typeof iconMap;
  progress: MotionValue<number>;
  total: number;
  cta?: boolean;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
}) {
  const Icon = iconMap[icon];
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
        zIndex: cta ? total + 2 : total - index,
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
        <h3 className="max-w-[12ch] font-display text-display-lg font-medium text-white">
          {title}
        </h3>
        <p className="max-w-[35rem] font-body text-body-md text-[#F1E8F8]">
          {description}
        </p>
      </div>

      <div className="relative flex items-end justify-between gap-4 border-t border-white/10 pt-5">
        <p className="font-body text-body-sm text-[#DCCEE8]">{support}</p>
        {cta ? (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
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
              {primaryCtaLabel}
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
              {secondaryCtaLabel}
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

type WhatIDoProps = {
  content: HomeServicesContent;
};

export default function WhatIDo({ content }: WhatIDoProps) {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [mobileLayout, setMobileLayout] = useState(false);
  const services = content.services;
  const panels: ServiceCardData[] = [
    ...services,
    {
      icon: "webBuilds",
      title: content.ctaTitle,
      description: content.ctaDescription,
      support: content.ctaSupport,
      cta: true,
    },
  ];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const index = Math.min(
      panels.length - 1,
      Math.floor(scrollYProgress.get() * panels.length)
    );
    setActiveIndex(index);

    return scrollYProgress.on("change", (latest) => {
      const index = Math.min(
        panels.length - 1,
        Math.floor(latest * panels.length)
      );
      setActiveIndex(index);
    });
  }, [scrollYProgress, panels.length]);

  useEffect(() => {
    const sync = () => setMobileLayout(window.innerWidth < 1024);
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  if (reducedMotion || mobileLayout) {
    return (
      <section className="section-space relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent-glow-strong),transparent_24%),linear-gradient(180deg,rgba(98,15,133,0.16),rgba(6,3,10,0.02)_42%)]" />
        <div className="section-shell relative">
          <ScrollReveal className="mb-8 max-w-[700px] sm:mb-10">
            <p className="section-label">
              <span className="section-rule" />
              What I Do
            </p>
            <h2 className="font-display text-display-md font-semibold text-text-primary">
              {content.mobileHeading}
            </h2>
            <p className="mt-4 font-body text-body-lg text-text-secondary">
              {content.mobileDescription}
            </p>
          </ScrollReveal>
          <div className="space-y-4 sm:space-y-5">
            {panels.map((service, index) => {
              const Icon = iconMap[service.icon];

              return (
                <ScrollReveal key={`${service.title}-${index}`} delay={index * 0.06}>
                  <div className="overflow-hidden rounded-[24px] border border-border-default bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)),linear-gradient(180deg,rgba(88,22,122,0.72),rgba(19,11,31,0.94))] p-5 shadow-card sm:rounded-[28px] sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border-default bg-black/20 text-accent-warm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="rounded-full border border-white/10 bg-black/20 px-3 py-1 font-body text-body-xs uppercase tracking-[0.12em] text-text-secondary">
                        0{index + 1}
                      </p>
                    </div>
                    <h3 className="mt-8 font-display text-display-sm font-medium text-white sm:mt-10">
                      {service.title}
                    </h3>
                    <p className="mt-4 font-body text-body-sm leading-[1.7] text-[#F1E8F8] sm:text-body-md">
                      {service.description}
                    </p>
                    {service.cta ? (
                      <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-4">
                        <p className="font-body text-body-sm text-[#DCCEE8]">{service.support}</p>
                        <div className="flex flex-col gap-3 sm:flex-row">
                          <a
                            href={BOOKING_URL}
                            target="_blank"
                            rel="noreferrer"
                            className={buttonStyles({
                              variant: "primary",
                              size: "md",
                              className:
                                "w-full justify-center bg-accent-warm text-bg-base hover:bg-accent-warm hover:text-bg-base",
                            })}
                          >
                            {content.ctaPrimaryLabel}
                          </a>
                          <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noreferrer"
                            className={buttonStyles({
                              variant: "secondary",
                              size: "md",
                              className:
                                "w-full justify-center border-white/12 bg-black/20 text-[#E8D9F3] hover:border-white/20",
                            })}
                          >
                            {content.ctaSecondaryLabel}
                          </a>
                        </div>
                      </div>
                    ) : (
                      <p className="mt-6 border-t border-white/10 pt-4 font-body text-body-sm text-[#DCCEE8]">
                        {service.support}
                      </p>
                    )}
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
    <section ref={sectionRef} className="relative z-20 mt-[-1px] h-[400vh] bg-bg-base overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent-glow-strong),transparent_24%),radial-gradient(circle_at_20%_20%,var(--accent-rose-soft),transparent_28%),linear-gradient(180deg,rgba(98,15,133,0.16),rgba(6,3,10,0.02)_42%)]" />
      <div className="sticky top-0 flex h-screen items-center">
        <div className="section-shell grid w-full items-center gap-12 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16">
          <ScrollReveal className="max-w-[340px]">
            <p className="section-label">
              <span className="section-rule" />
              What I Do
            </p>
            <h2 className="font-display text-display-lg font-semibold text-text-primary">
              {content.desktopHeading}
            </h2>
            <p className="mt-4 font-body text-body-lg text-text-secondary">
              {content.desktopDescription}
            </p>

            <div className="mt-8 space-y-3">
              {panels.map((service, index) => (
                <div
                  key={service.title}
                  className={cn(
                    "flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300",
                    activeIndex === index 
                      ? "border-accent-warm bg-accent-glow text-white shadow-[0_0_15px_rgba(254,1,220,0.1)]" 
                      : "border-white/8 bg-white/[0.02] text-[#ECE1F5]"
                  )}
                >
                  <span className="font-body text-body-sm">{service.title}</span>
                  <span className="font-body text-body-xs uppercase tracking-[0.12em] opacity-60">
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
                key={`${service.title}-${index}`}
                index={index}
                title={service.title}
                description={service.description}
                support={service.support}
                icon={service.icon}
                progress={smoothProgress}
                total={panels.length}
                cta={service.cta}
                primaryCtaLabel={content.ctaPrimaryLabel}
                secondaryCtaLabel={content.ctaSecondaryLabel}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

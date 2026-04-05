"use client";

import { useEffect, useRef, useState } from "react";
import { Blocks, Compass, LayoutPanelTop, SquareStack } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { buttonStyles } from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { HomeService, HomeServicesContent } from "@/data/home-content";
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

const ENTER_Y = 64;
const EXIT_Y = -560;

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
  position,
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
  position: MotionValue<number>;
  total: number;
  cta?: boolean;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
}) {
  const Icon = iconMap[icon];
  const y = useTransform(position, (value) => {
    const delta = value - index;

    if (delta <= -1) {
      return ENTER_Y;
    }

    if (delta >= 1) {
      return EXIT_Y;
    }

    if (delta >= 0 && delta < 1) {
      return EXIT_Y * delta;
    }

    return ENTER_Y * -delta;
  });

  const scale = useTransform(position, (value) => {
    const delta = value - index;

    if (Math.abs(delta) >= 1) {
      return 0.98;
    }

    return 1 - Math.abs(delta) * 0.02;
  });

  const opacity = useTransform(position, (value) => {
    const delta = value - index;

    if (Math.abs(delta) >= 1) {
      return 0;
    }

    return 1 - Math.abs(delta);
  });

  const borderGlow = useTransform(position, (value) => {
    const delta = Math.abs(value - index);
    return 0.12 + Math.max(0, 0.16 - delta * 0.12);
  });
  const borderColor = useTransform(borderGlow, (value) => `rgba(254, 1, 220, ${value})`);
  const zIndex = useTransform(position, (value) => {
    const delta = Math.abs(value - index);
    if (delta >= 1) {
      return 0;
    }
    return Math.round(total * 10 - delta * 10 + (cta ? 4 : 0));
  });

  return (
    <motion.article
      style={{
        y,
        scale,
        opacity,
        borderColor,
        zIndex,
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
    offset: ["start start", "end start"],
  });

  const panelPosition = useTransform(scrollYProgress, [0, 1], [0, panels.length - 1]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const index = Math.min(panels.length - 1, Math.round(panelPosition.get()));
    setActiveIndex(index);

    return panelPosition.on("change", (latest) => {
      const index = Math.min(panels.length - 1, Math.round(latest));
      setActiveIndex(index);
    });
  }, [panels.length, panelPosition]);

  useEffect(() => {
    const sync = () => setMobileLayout(window.innerWidth < 1024);
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  if (mobileLayout) {
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
    <section
      ref={sectionRef}
      className="relative z-20 mt-[-1px] bg-bg-base"
      style={{ height: `${panels.length * 100}vh` }}
    >
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

          <div className="relative h-[430px] overflow-hidden sm:h-[470px]">

            {panels.map((service, index) => (
              <ServiceCard
                key={`${service.title}-${index}`}
                index={index}
                title={service.title}
                description={service.description}
                support={service.support}
                icon={service.icon}
                position={panelPosition}
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

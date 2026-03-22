"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";
import BrandMark from "@/components/ui/BrandMark";
import { buttonStyles } from "@/components/ui/Button";
import CalendlyButton from "@/components/ui/CalendlyButton";
import { EASE_DEFAULT } from "@/lib/motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn, createBlurDataURL } from "@/lib/utils";

const proof = ["Product Design", "AI-Assisted Builds", "Design Systems", "High-Conversion Web"];
const PROFILE_IMAGE =
  "https://drive.google.com/uc?export=view&id=1si4jvBANQm2h7wl8xuoztD_eNSrHz8K7";

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const [hideScrollCue, setHideScrollCue] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const panelY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const panelRotate = useTransform(scrollYProgress, [0, 1], [0, -3]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.8], [0.55, 0.1]);

  useEffect(() => {
    const onScroll = () => setHideScrollCue(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative flex min-h-[100svh] items-center overflow-hidden">
      <motion.div
        style={reducedMotion ? undefined : { y: orbY, opacity: glowOpacity }}
        className="pointer-events-none absolute -right-20 top-20 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,var(--accent-warm-soft),transparent_58%)] blur-3xl"
      />
      <motion.div
        style={reducedMotion ? undefined : { y: panelY }}
        className="pointer-events-none absolute left-[-120px] top-16 hidden h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,var(--accent-rose-soft),transparent_62%)] blur-3xl lg:block"
      />

      <div className="section-shell grid w-full items-center gap-10 py-20 sm:py-24 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12">
        <motion.div
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="max-w-[760px]"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.1, ease: EASE_DEFAULT },
              },
            }}
            className="mb-5 inline-flex max-w-full items-center gap-3 rounded-full border border-border-default bg-bg-elevated/80 px-4 py-2 font-body text-body-xs text-text-secondary"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 rounded-full bg-[var(--status-online-soft)]" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-status-online animate-pulse-dot" />
            </span>
            Available for work - Product Design and AI-assisted web execution
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.4, delay: 0.3, ease: EASE_DEFAULT },
              },
            }}
            className="mb-3 font-display text-lg font-normal text-text-secondary sm:text-xl"
          >
            <AnimatedText text="Hi, I'm Michael Ayomide" />
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, delay: 0.6, ease: EASE_DEFAULT },
              },
            }}
            className="max-w-[11ch] text-balance font-display text-[clamp(30px,5.8vw,58px)] leading-[1.02] font-semibold tracking-[-0.03em] text-text-primary sm:max-w-[12ch]"
          >
            Need better product design?
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.75, ease: EASE_DEFAULT },
              },
            }}
            className="mt-4 max-w-[33rem] text-balance font-body text-[15px] leading-[1.65] text-text-secondary sm:mt-5 sm:text-body-lg"
          >
            I help founders and teams turn unclear products into clean UX, stronger trust, and live experiences people actually understand.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, delay: 0.9, ease: EASE_DEFAULT },
              },
            }}
            className="mt-6 space-y-3 sm:mt-7"
          >
            <div className="flex flex-wrap gap-3">
              <Link href="/work" className={buttonStyles({ variant: "primary", size: "md" })}>
                View My Work
              </Link>
              <CalendlyButton
                variant="secondary"
                label="Book a Call"
                className="border-border-accent bg-accent-warm text-bg-base hover:border-border-accent hover:bg-accent-warm hover:text-bg-base sm:bg-bg-elevated sm:text-text-primary"
              />
            </div>
            <p className="font-body text-body-xs text-text-muted">Typically replies within 3 hours</p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, delay: 1, ease: EASE_DEFAULT },
              },
            }}
            className="mt-8 lg:hidden"
          >
            <div className="premium-panel relative overflow-hidden rounded-[28px] border border-border-default bg-bg-surface p-3 shadow-card">
              <div className="relative overflow-hidden rounded-[22px] border border-border-default bg-bg-base/60">
                <div className="relative aspect-[4/4.6]">
                  <Image
                    src={PROFILE_IMAGE}
                    alt="Portrait of Michael Ayomide"
                    fill
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className="object-cover object-center"
                    placeholder="blur"
                    blurDataURL={createBlurDataURL("#120b1c")}
                    priority
                  />
                </div>
                <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-border-default bg-bg-base/80 p-4 backdrop-blur-md">
                  <p className="font-body text-body-xs uppercase tracking-[0.12em] text-accent-warm">
                    Product Designer
                  </p>
                  <p className="mt-2 font-display text-xl font-medium leading-tight text-text-primary">
                    Premium taste. Clear thinking. Real product outcomes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.45, delay: 1.1, ease: EASE_DEFAULT },
              },
            }}
            className="mt-10 font-body text-body-xs uppercase tracking-[0.05em] text-text-muted sm:mt-12"
          >
            {proof.join("  ·  ")}
          </motion.p>
        </motion.div>

        <motion.div
          style={reducedMotion ? undefined : { y: panelY, rotate: panelRotate }}
          className="hidden lg:block"
        >
          <div className="premium-panel relative overflow-hidden rounded-[32px] border border-border-default bg-bg-surface p-6 shadow-card">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent-glow-strong),transparent_36%)]" />
            <div className="relative space-y-6">
              <BrandMark withName />
              <div className="relative overflow-hidden rounded-[24px] border border-border-default bg-bg-base/60">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={PROFILE_IMAGE}
                    alt="Portrait of Michael Ayomide"
                    fill
                    sizes="360px"
                    className="object-cover object-center"
                    placeholder="blur"
                    blurDataURL={createBlurDataURL("#120b1c")}
                    priority
                  />
                </div>
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-border-default bg-bg-base/80 p-4 backdrop-blur-md">
                  <p className="font-body text-body-xs uppercase tracking-[0.12em] text-accent-warm">
                    Product Designer
                  </p>
                  <p className="mt-2 font-display text-2xl font-medium text-text-primary">
                    Premium taste. Clear thinking. Real product outcomes.
                  </p>
                </div>
              </div>
              <div className="grid gap-3">
                {[
                  "B2B SaaS product design",
                  "Design systems and UX structure",
                  "AI-assisted web builds with strong product judgment",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border-subtle bg-bg-base/50 px-4 py-3 font-body text-body-sm text-text-secondary"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300 ease-default",
          hideScrollCue && "opacity-0",
        )}
      >
        <div className="flex flex-col items-center gap-2 font-body text-body-xs uppercase tracking-caps text-text-muted">
          <span>Scroll</span>
          <ArrowDown className="h-4 w-4 animate-scroll-bounce" />
        </div>
      </div>
    </section>
  );
}

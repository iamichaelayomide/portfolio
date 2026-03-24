"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";
import { buttonStyles } from "@/components/ui/Button";
import CalendlyButton from "@/components/ui/CalendlyButton";
import { EASE_DEFAULT } from "@/lib/motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn, createBlurDataURL } from "@/lib/utils";

const proof = [
  "Remote product design",
  "Freelance web execution",
  "SaaS UX systems",
  "AI-assisted delivery",
];
const PROFILE_IMAGE =
  "https://drive.google.com/uc?export=view&id=1si4jvBANQm2h7wl8xuoztD_eNSrHz8K7";

const heroPoints = [
  "Available for remote product roles",
  "Freelance websites and ecommerce work",
  "Clear UX, stronger trust, cleaner execution",
];

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const [hideScrollCue, setHideScrollCue] = useState(false);
  const [pointer, setPointer] = useState({ x: 0.72, y: 0.28 });
  const [pulse, setPulse] = useState({ x: 0.72, y: 0.28, key: 0 });
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const panelY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const panelRotate = useTransform(scrollYProgress, [0, 1], [0, -2]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.8], [0.55, 0.1]);

  useEffect(() => {
    const onScroll = () => setHideScrollCue(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (reducedMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    setPointer({ x, y });
  };

  const handlePointerLeave = () => {
    if (reducedMotion) return;
    setPointer({ x: 0.72, y: 0.28 });
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLElement>) => {
    if (reducedMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    setPointer({ x, y });
    setPulse((current) => ({ x, y, key: current.key + 1 }));
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
        <motion.div
          style={reducedMotion ? undefined : { y: orbY, opacity: glowOpacity }}
          className="absolute -right-16 top-14 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,var(--accent-warm-soft),transparent_58%)] blur-3xl"
        />
        <motion.div
          style={reducedMotion ? undefined : { y: panelY }}
          className="absolute left-[-140px] top-12 hidden h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,var(--accent-rose-soft),transparent_62%)] blur-3xl lg:block"
        />
        {!reducedMotion ? (
          <>
            <motion.div
              animate={{ left: `${pointer.x * 100}%`, top: `${pointer.y * 100}%` }}
              transition={{ duration: 0.35, ease: EASE_DEFAULT }}
              className="absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(254,1,220,0.16),transparent_68%)] blur-2xl"
            />
            <motion.div
              animate={{
                left: `${(pointer.x * 0.82 + 0.1) * 100}%`,
                top: `${(pointer.y * 0.76 + 0.12) * 100}%`,
              }}
              transition={{ duration: 0.45, ease: EASE_DEFAULT }}
              className="absolute h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border-accent bg-accent-glow/40 blur-sm"
            />
            <motion.div
              key={pulse.key}
              initial={{
                opacity: 0.35,
                scale: 0.2,
                left: `${pulse.x * 100}%`,
                top: `${pulse.y * 100}%`,
              }}
              animate={{ opacity: 0, scale: 1.9 }}
              transition={{ duration: 0.7, ease: EASE_DEFAULT }}
              className="absolute h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border-accent"
            />
          </>
        ) : null}
      </div>

      <div className="section-shell relative z-raised grid w-full items-center gap-12 py-20 sm:py-24 lg:grid-cols-[minmax(0,1.05fr)_420px] lg:gap-14">
        <motion.div
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-[760px]"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, delay: 0.08, ease: EASE_DEFAULT },
              },
            }}
            className="mb-5 inline-flex max-w-full items-center gap-3 rounded-full border border-border-default bg-bg-elevated/85 px-4 py-2 font-body text-body-xs text-text-secondary"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 rounded-full bg-[var(--status-online-soft)]" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-status-online animate-pulse-dot" />
            </span>
            Open to remote roles and select freelance projects
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.35, delay: 0.2, ease: EASE_DEFAULT },
              },
            }}
            className="mb-4 font-display text-lg font-normal text-text-secondary sm:text-xl"
          >
            <AnimatedText text="Hi, I'm Michael Ayomide" />
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, delay: 0.38, ease: EASE_DEFAULT },
              },
            }}
            className="max-w-[13ch] text-balance font-display text-[clamp(40px,6vw,82px)] leading-[0.96] tracking-[-0.05em] text-text-primary"
          >
            Product design for remote teams, founders, and ambitious brands.
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.52, ease: EASE_DEFAULT },
              },
            }}
            className="mt-6 max-w-[34rem] text-pretty font-body text-[18px] leading-[1.72] text-text-secondary"
          >
            I help SaaS products, websites, and ecommerce experiences feel clearer,
            more credible, and easier to act on, whether you need a remote design hire
            or a freelance partner who can ship.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, delay: 0.66, ease: EASE_DEFAULT },
              },
            }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <CalendlyButton
              variant="primary"
              label="Book a Call"
              className="bg-accent-warm text-bg-base hover:bg-accent-warm hover:text-bg-base"
            />
            <Link href="/work" className={buttonStyles({ variant: "secondary", size: "md" })}>
              View My Work
            </Link>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, delay: 0.78, ease: EASE_DEFAULT },
              },
            }}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {heroPoints.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border-subtle bg-bg-surface/60 px-4 py-4 font-body text-body-sm text-text-secondary backdrop-blur-sm"
              >
                {item}
              </div>
            ))}
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.45, delay: 0.9, ease: EASE_DEFAULT },
              },
            }}
            className="mt-8 font-body text-body-xs uppercase tracking-[0.08em] text-text-muted"
          >
            {proof.join("  /  ")}
          </motion.p>
        </motion.div>

        <motion.div
          style={reducedMotion ? undefined : { y: panelY, rotate: panelRotate }}
          className="relative"
        >
          <div className="premium-panel relative overflow-hidden rounded-[34px] border border-border-default bg-bg-surface p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent-glow-strong),transparent_34%)]" />
            <div className="relative space-y-5">
              <div className="relative overflow-hidden rounded-[28px] border border-border-default bg-bg-base/65">
                <div className="relative aspect-[4/4.8]">
                  <Image
                    src={PROFILE_IMAGE}
                    alt="Portrait of Michael Ayomide"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-center"
                    placeholder="blur"
                    blurDataURL={createBlurDataURL("#120b1c")}
                    priority
                  />
                </div>
                <div className="absolute inset-x-4 bottom-4 rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(47,18,48,0.72),rgba(28,14,24,0.9))] p-5 backdrop-blur-md">
                  <p className="font-body text-body-xs uppercase tracking-[0.14em] text-accent-warm">
                    Product Designer
                  </p>
                  <p className="mt-3 font-display text-[clamp(28px,3vw,40px)] leading-[1.02] tracking-[-0.03em] text-text-primary">
                    Clear product direction.
                    <br />
                    Stronger UX decisions.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  "Remote-ready collaboration across product, web, and ecommerce.",
                  "From strategy and UI through AI-assisted execution when needed.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border-subtle bg-bg-base/50 px-4 py-4 font-body text-body-sm leading-[1.65] text-text-secondary"
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

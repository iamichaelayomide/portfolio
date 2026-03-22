"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import BrandMark from "@/components/ui/BrandMark";
import CalendlyButton from "@/components/ui/CalendlyButton";
import { buttonStyles } from "@/components/ui/Button";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export default function FinalCTA() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });
  const logoY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const logoRotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  return (
    <section className="section-space">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[32px] border border-border-subtle bg-bg-surface bg-grain px-6 py-16 text-center shadow-card md:px-10 md:py-20">
          <motion.div
            style={reducedMotion ? undefined : { y: logoY, rotate: logoRotate }}
            className="pointer-events-none absolute right-8 top-8 hidden opacity-50 lg:block"
          >
            <BrandMark className="scale-[1.25]" />
          </motion.div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent-glow-strong),transparent_26%),linear-gradient(180deg,rgba(98,15,133,0.08),transparent_55%)]" />
          <div className="relative mx-auto max-w-[760px]">
            <h2 className="font-display text-display-lg font-semibold text-text-primary">
              Have a product, website, or idea
              <br />
              that needs better design?
              <br />
              Let&apos;s talk.
            </h2>
            <p className="mt-6 font-body text-body-lg text-text-secondary">
              I&apos;m currently taking on new projects. Discovery call is free.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <CalendlyButton label="Book a Call" showIcon />
              <a
                href="mailto:hello@michaelayomide.com"
                className={buttonStyles({ variant: "secondary", size: "md" })}
              >
                Send an Email
              </a>
            </div>
            <p className="mt-4 font-body text-body-xs text-text-muted">
              Response time: usually same day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

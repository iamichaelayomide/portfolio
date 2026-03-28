"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { HomeAboutPreviewContent } from "@/data/home-content";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { createBlurDataURL } from "@/lib/utils";

type AboutPreviewProps = {
  content: HomeAboutPreviewContent;
};

export default function AboutPreview({ content }: AboutPreviewProps) {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [26, -20]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.96, 1.04]);

  return (
    <section className="section-space">
      <div className="section-shell grid gap-8 rounded-[32px] border border-border-subtle bg-bg-surface p-8 lg:grid-cols-[minmax(0,1fr)_400px] lg:p-10">
        <ScrollReveal>
          <p className="section-label">
            <span className="section-rule" />
            {content.footerTitle}
          </p>
          <div className="max-w-[620px] space-y-5">
            <p className="font-display text-display-md font-semibold text-text-primary">
              {content.title}
            </p>
            <p className="font-body text-body-md text-text-secondary">{content.description}</p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-body text-body-sm text-text-primary transition-colors hover:text-accent-warm"
            >
              {content.linkLabel}
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <motion.div
            style={reducedMotion ? undefined : { y: imageY }}
            className="premium-panel relative overflow-hidden rounded-[28px] border border-border-default p-3 shadow-card"
          >
            <motion.div
              style={reducedMotion ? undefined : { scale: imageScale }}
              className="relative aspect-[4/5] overflow-hidden rounded-[22px]"
            >
              <Image
                src={content.profileImageUrl}
                alt="Portrait of Michael Ayomide"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
                placeholder="blur"
                blurDataURL={createBlurDataURL("#120b1c")}
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-x-6 bottom-6 rounded-2xl border border-border-default bg-bg-base/80 p-4 backdrop-blur-md">
              <p className="font-body text-body-xs uppercase tracking-[0.12em] text-accent-warm">
                {content.locationLabel}
              </p>
              <p className="mt-2 font-display text-2xl font-medium text-text-primary">
                {content.locationValue}
              </p>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

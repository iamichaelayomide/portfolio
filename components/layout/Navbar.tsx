"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import BrandMark from "@/components/ui/BrandMark";
import CalendlyButton from "@/components/ui/CalendlyButton";
import { EASE_DEFAULT, EASE_SPRING } from "@/lib/motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-navbar h-14 transition-all duration-300 ease-default md:h-16",
          scrolled || open ? "glass-nav" : "border-b border-transparent bg-transparent",
        )}
        >
        <div className="section-shell flex h-full items-center justify-between">
          <Link href="/" aria-label="Go to homepage">
            <BrandMark withName compactOnMobile className="gap-2.5" />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <div className="flex items-center gap-6">
              {links.map((link) => {
                const active = pathname === link.href || pathname.startsWith(`${link.href}/`);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "font-body text-body-sm text-text-secondary transition-colors duration-150 ease-default hover:text-text-primary",
                      active && "text-text-primary",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <CalendlyButton
              size="sm"
              variant="outline"
              label="Book a Call"
              className="border-border-accent bg-accent-glow text-accent-warm hover:border-border-accent hover:bg-accent-warm hover:text-bg-base"
            />
          </nav>
          <button
            type="button"
            className={cn(
              "relative z-[210] flex h-11 w-11 items-center justify-center rounded-full border border-border-default bg-bg-elevated/80 text-text-primary transition-colors duration-200 ease-default md:hidden",
              open && "border-border-accent bg-accent-glow text-accent-warm",
            )}
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            <span className="relative h-4 w-5">
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={reducedMotion ? { duration: 0 } : EASE_SPRING}
                className="absolute left-0 top-0 block h-px w-5 bg-current"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2, ease: EASE_DEFAULT }}
                className="absolute left-0 top-[7px] block h-px w-5 bg-current"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={reducedMotion ? { duration: 0 } : EASE_SPRING}
                className="absolute left-0 top-[14px] block h-px w-5 bg-current"
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE_DEFAULT }}
            className="fixed inset-0 z-modal overflow-y-auto bg-[var(--bg-base-95)] backdrop-blur-2xl md:hidden"
          >
            <div className="section-shell flex min-h-screen flex-col pb-[max(env(safe-area-inset-bottom),1.5rem)] pt-5">
              <motion.nav
                initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: 12 }}
                transition={{ duration: 0.28, ease: EASE_DEFAULT }}
                className="flex flex-1 flex-col"
              >
                <div className="flex items-center justify-between gap-4 border-b border-border-subtle pb-4">
                  <Link href="/" aria-label="Go to homepage" onClick={() => setOpen(false)}>
                    <BrandMark withName compactOnMobile className="gap-2.5" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex h-11 items-center justify-center rounded-full border border-border-default bg-bg-elevated/80 px-4 font-body text-body-sm text-text-primary transition-colors duration-200 ease-default hover:border-border-accent hover:text-accent-warm"
                    aria-label="Close navigation"
                  >
                    Close
                  </button>
                </div>

                <div className="flex flex-col gap-5 pt-7">
                  {links.map((link, index) => {
                    const active = pathname === link.href || pathname.startsWith(`${link.href}/`);

                    return (
                      <motion.div
                        key={link.href}
                        initial={reducedMotion ? false : { opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.06 + index * 0.04,
                          ease: EASE_DEFAULT,
                        }}
                      >
                        <Link
                          href={link.href}
                          className={cn(
                            "block border-b border-border-subtle pb-5 font-display text-[clamp(28px,9vw,50px)] font-medium leading-none text-text-secondary transition-colors duration-150 ease-default",
                            active && "text-text-primary",
                          )}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div
                  initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.24, ease: EASE_DEFAULT }}
                  className="mt-10 space-y-4 pt-2"
                >
                  <CalendlyButton
                    label="Book a Call"
                    size="lg"
                    showIcon
                    className="w-full justify-center border-border-accent bg-accent-warm text-bg-base hover:border-border-accent hover:bg-accent-warm hover:text-bg-base"
                  />
                  <p className="font-body text-body-xs text-text-muted">
                    Typically replies within 3 hours
                  </p>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

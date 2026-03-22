"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { EASE_IN, EASE_OUT } from "@/lib/motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <main className="min-h-[100svh] pt-14 md:pt-16">{children}</main>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: EASE_OUT }}
        className="min-h-[100svh] pt-14 md:pt-16"
      >
        <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.2, ease: EASE_IN }}>
          {children}
        </motion.div>
      </motion.main>
    </AnimatePresence>
  );
}

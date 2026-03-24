"use client";

import { ArrowUpRight } from "lucide-react";
import { buttonStyles } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const BOOKING_URL = "https://calendar.app.google/Um4G3aYbGQ798AWw5";

export default function CalendlyButton({
  className,
  label = "Book a Call",
  size = "md",
  variant = "primary",
  showIcon = false,
}: {
  className?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost" | "outline";
  showIcon?: boolean;
}) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noreferrer"
      className={cn(buttonStyles({ variant, size }), "gap-2", className)}
    >
      <span>{label}</span>
      {showIcon ? <ArrowUpRight className="h-4 w-4" /> : null}
    </a>
  );
}

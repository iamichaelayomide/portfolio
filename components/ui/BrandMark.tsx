import Image from "next/image";
import { cn } from "@/lib/utils";

export default function BrandMark({
  className,
  withName = false,
  compactOnMobile = false,
}: {
  className?: string;
  withName?: boolean;
  compactOnMobile?: boolean;
}) {
  return (
    <div className={cn("inline-flex items-center gap-2.5 sm:gap-3", className)}>
      <span
        className={cn(
          "relative flex items-center justify-center rounded-full border border-border-default bg-bg-elevated",
          compactOnMobile ? "h-9 w-9 sm:h-10 sm:w-10" : "h-10 w-10",
        )}
      >
        <Image
          src="/logo-mark.svg"
          alt="Michael Ayomide logo"
          width={22}
          height={22}
          className={cn("object-contain", compactOnMobile ? "h-5 w-5 sm:h-6 sm:w-6" : "h-6 w-6")}
        />
      </span>
      {withName ? (
        <span className="flex flex-col">
          <span
            className={cn(
              "font-display font-semibold tracking-tight text-text-primary",
              compactOnMobile ? "text-[15px] sm:text-base" : "text-base",
            )}
          >
            Michael Ayomide
          </span>
          <span
            className={cn(
              "font-body uppercase tracking-[0.12em] text-text-muted",
              compactOnMobile ? "hidden text-[10px] sm:block" : "text-[11px]",
            )}
          >
            Product Designer
          </span>
        </span>
      ) : null}
    </div>
  );
}

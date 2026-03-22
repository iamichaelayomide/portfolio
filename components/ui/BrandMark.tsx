import Image from "next/image";
import { cn } from "@/lib/utils";

export default function BrandMark({
  className,
  withName = false,
}: {
  className?: string;
  withName?: boolean;
}) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border-default bg-bg-elevated">
        <Image
          src="/logo-mark.svg"
          alt="Michael Ayomide logo"
          width={22}
          height={22}
          className="h-6 w-6 object-contain"
        />
      </span>
      {withName ? (
        <span className="flex flex-col">
          <span className="font-display text-base font-semibold tracking-tight text-text-primary">
            Michael Ayomide
          </span>
          <span className="font-body text-[11px] uppercase tracking-[0.12em] text-text-muted">
            Product Designer
          </span>
        </span>
      ) : null}
    </div>
  );
}

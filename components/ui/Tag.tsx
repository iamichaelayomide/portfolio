import { cn } from "@/lib/utils";

export default function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-border-subtle bg-bg-elevated px-3 py-1 font-body text-body-xs text-text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}

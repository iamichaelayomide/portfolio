import { ImageIcon } from "lucide-react";

const aspectMap = {
  wide: "aspect-[16/9] md:aspect-[21/9]",
  landscape: "aspect-[16/10]",
  portrait: "aspect-[3/4]",
  grid: "aspect-square",
};

export default function ImagePlaceholder({
  label,
  aspect = "wide",
}: {
  label: string;
  aspect?: keyof typeof aspectMap;
}) {
  return (
    <div
      className={`flex w-full items-center justify-center rounded-lg border border-dashed border-border-default bg-bg-elevated px-6 text-center shadow-inner ${aspectMap[aspect]}`}
    >
      <div className="space-y-3">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-bg-surface border border-border-subtle">
          <ImageIcon className="h-6 w-6 text-text-muted" />
        </div>
        <p className="font-body text-body-sm text-text-secondary font-medium">[ {label} ]</p>
        <p className="font-body text-body-xs text-text-muted uppercase tracking-wider">Awaiting Asset</p>
      </div>
    </div>
  );
}

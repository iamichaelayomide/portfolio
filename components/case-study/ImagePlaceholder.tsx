import { ImageIcon } from "lucide-react";

const aspectMap = {
  wide: "aspect-[16/9]",
  landscape: "aspect-[4/3]",
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
      className={`flex w-full items-center justify-center rounded-lg border border-dashed border-border-default bg-bg-elevated px-6 text-center ${aspectMap[aspect]}`}
    >
      <div className="space-y-3">
        <ImageIcon className="mx-auto h-6 w-6 text-text-muted" />
        <p className="font-body text-body-sm text-text-secondary">[ {label} ]</p>
      </div>
    </div>
  );
}

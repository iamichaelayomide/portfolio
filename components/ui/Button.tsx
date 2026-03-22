import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cn(
    "inline-flex items-center justify-center rounded-md font-body font-medium tracking-normal transition-all duration-[160ms] ease-default focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60",
    variant === "primary" &&
      "bg-accent-rose text-white hover:-translate-y-px hover:brightness-95 hover:shadow-hover active:translate-y-0 active:shadow-card",
    variant === "secondary" &&
      "border border-border-default bg-bg-elevated text-text-primary hover:-translate-y-px hover:border-border-strong",
    variant === "ghost" &&
      "bg-transparent text-text-secondary hover:bg-bg-surface hover:text-text-primary",
    variant === "outline" &&
      "border border-border-default bg-transparent text-text-primary hover:-translate-y-px hover:border-border-strong",
    size === "sm" && "h-9 px-4 text-body-sm",
    size === "md" && "h-12 px-6 text-body-sm sm:text-body-md",
    size === "lg" && "h-14 px-8 text-body-md",
    className,
  );
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={buttonStyles({ variant, size, className })}
      {...props}
    />
  ),
);

Button.displayName = "Button";

export default Button;

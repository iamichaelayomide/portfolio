export const EASE_DEFAULT = [0.4, 0.0, 0.2, 1] as const;
export const EASE_OUT = [0.0, 0.0, 0.2, 1] as const;
export const EASE_IN = [0.4, 0.0, 1.0, 1] as const;
export const EASE_SPRING = {
  type: "spring",
  stiffness: 300,
  damping: 30,
} as const;

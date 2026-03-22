"use client";

import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  className?: string;
};

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const reducedMotion = useReducedMotion();
  const [typedCount, setTypedCount] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorActive, setCursorActive] = useState(true);

  useEffect(() => {
    if (reducedMotion) {
      setTypedCount(text.length);
      setCursorActive(false);
      return;
    }

    let timeout: ReturnType<typeof setTimeout> | undefined;
    let completeTimeout: ReturnType<typeof setTimeout> | undefined;

    setTypedCount(0);
    setCursorVisible(true);
    setCursorActive(true);

    const type = (count: number) => {
      timeout = setTimeout(() => {
        setTypedCount(count);
        if (count < text.length) {
          type(count + 1);
        } else {
          completeTimeout = setTimeout(() => setCursorActive(false), 2000);
        }
      }, count === 1 ? 0 : 45);
    };

    type(text.length > 0 ? 1 : 0);

    const blink = setInterval(() => setCursorVisible((value) => !value), 1000);

    return () => {
      if (timeout) clearTimeout(timeout);
      if (completeTimeout) clearTimeout(completeTimeout);
      clearInterval(blink);
    };
  }, [reducedMotion, text]);

  const typedText = useMemo(() => text.slice(0, typedCount), [text, typedCount]);

  return (
    <span className={cn("relative inline-flex min-h-[1.5em] items-start", className)}>
      <span aria-hidden className="invisible select-none">
        {text}
      </span>
      <span className="absolute inset-0">
        {typedText}
        {cursorActive ? (
          <span
            className={cn(
              "ml-1 inline-block h-[1.15em] w-px align-middle bg-text-secondary transition-opacity duration-500 ease-default",
              cursorVisible ? "opacity-100" : "opacity-0",
            )}
          />
        ) : null}
      </span>
    </span>
  );
}

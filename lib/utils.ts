import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createBlurDataURL(fill = "#191919") {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
      <rect width="10" height="10" fill="${fill}" />
      <rect width="10" height="10" fill="url(#g)" />
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#B76E79" stop-opacity="0.24" />
          <stop offset="1" stop-color="#C4956A" stop-opacity="0.18" />
        </linearGradient>
      </defs>
    </svg>
  `;

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

export function formatProjectCategory(tags: string[]) {
  return tags.slice(0, 3).join(" · ");
}

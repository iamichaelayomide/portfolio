import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import { urlForImage } from "@/lib/sanity/image";
import { cn } from "@/lib/utils";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="font-body text-body-md leading-[1.85] text-text-secondary">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-[clamp(28px,4vw,42px)] font-semibold leading-[1.05] text-text-primary">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-[clamp(22px,3vw,30px)] font-medium text-text-primary">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-border-accent pl-5 font-display text-2xl leading-[1.4] text-text-primary">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-3 pl-6 font-body text-body-md text-text-secondary">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-3 pl-6 font-body text-body-md text-text-secondary">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="list-disc leading-[1.8]">{children}</li>,
    number: ({ children }) => <li className="list-decimal leading-[1.8]">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "#";
      const external = href.startsWith("http");

      return (
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className="text-accent-warm underline decoration-border-accent underline-offset-4 transition-colors hover:text-text-primary"
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const src = urlForImage(value).width(1600).fit("max").auto("format").url();
      const alt = typeof value?.alt === "string" ? value.alt : "Blog image";
      const caption = typeof value?.caption === "string" ? value.caption : "";

      return (
        <figure className="space-y-3">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] border border-border-subtle bg-bg-elevated">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
            />
          </div>
          {caption ? (
            <figcaption className="font-body text-body-xs text-text-muted">{caption}</figcaption>
          ) : null}
        </figure>
      );
    },
  },
};

export default function PortableTextContent({
  value,
  className,
}: {
  value: TypedObject[];
  className?: string;
}) {
  return (
    <div className={cn("space-y-6", className)}>
      <PortableText value={value} components={components} />
    </div>
  );
}

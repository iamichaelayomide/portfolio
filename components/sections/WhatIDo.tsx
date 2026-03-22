import { Blocks, Compass, LayoutPanelTop, SquareStack } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    icon: LayoutPanelTop,
    title: "Product Design",
    description: "SaaS flows, product structure, and polished UI built around clarity and action.",
  },
  {
    icon: Compass,
    title: "UX Research & Strategy",
    description: "User understanding, journey mapping, and product decisions grounded in evidence.",
  },
  {
    icon: Blocks,
    title: "Web & Ecommerce Builds",
    description: "WordPress, WooCommerce, Shopify, and high-conversion websites shaped to perform.",
  },
  {
    icon: SquareStack,
    title: "Design Systems",
    description: "Scalable component libraries, tokens, and structure built for consistency.",
  },
];

export default function WhatIDo() {
  return (
    <section className="section-space bg-bg-light text-text-light">
      <div className="section-shell">
        <ScrollReveal className="mb-10">
          <p className="section-label text-text-light-secondary">
            <span className="section-rule bg-[var(--text-light-secondary-30)]" />
            What I Do
          </p>
          <h2 className="font-display text-display-md font-semibold text-text-light">
            The full picture.
          </h2>
        </ScrollReveal>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <ScrollReveal key={service.title} delay={index * 0.06}>
                <div className="h-full rounded-xl bg-bg-light-card p-8 shadow-card transition-all duration-200 ease-default hover:-translate-y-1 hover:shadow-hover">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--text-light-10)] bg-bg-light text-text-light">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-medium text-text-light">
                    {service.title}
                  </h3>
                  <p className="mt-4 font-body text-body-md text-text-light-secondary">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

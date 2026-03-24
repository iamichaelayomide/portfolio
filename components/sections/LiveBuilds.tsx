import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const builds = [
  {
    name: "Ayomide Stores - E-commerce",
    url: "https://ayomidestores.vercel.app",
    description:
      "A conversion-focused storefront shaped in design and executed with AI-assisted CLI workflows.",
  },
  {
    name: "Hairven Salon - Beauty brand website",
    url: "https://hairven-salon.vercel.app/",
    description:
      "A salon website built to feel polished, premium, and easy to trust while guiding visitors toward booking and service discovery.",
  },
];

export default function LiveBuilds() {
  return (
    <section className="section-space">
      <div className="section-shell">
        <ScrollReveal className="mb-10">
          <p className="section-label">
            <span className="section-rule" />
            Selected Live Builds
          </p>
          <h2 className="font-display text-display-md font-semibold text-text-primary">
            Shipped. Running. Real.
          </h2>
          <p className="mt-4 max-w-[640px] font-body text-body-lg text-text-secondary">
            Live websites and stores translated from design thinking into launch-ready
            experiences with AI-assisted execution.
          </p>
        </ScrollReveal>
        <div className="grid gap-6 lg:grid-cols-2">
          {builds.map((build, index) => (
            <ScrollReveal key={build.url} delay={index * 0.08}>
              <a
                href={build.url}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-xl border border-border-default bg-bg-elevated p-6 shadow-card transition-all duration-200 ease-default hover:-translate-y-1 hover:border-border-strong hover:shadow-hover"
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className="rounded-full border border-border-default bg-bg-surface px-4 py-2 font-body text-body-xs text-text-secondary">
                    {build.url.replace("https://", "")}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border-default bg-bg-surface px-3 py-1 font-body text-body-xs text-text-secondary">
                    <span className="h-2 w-2 rounded-full bg-status-online" />
                    {"Live ->"}
                  </div>
                </div>
                <div className="rounded-xl border border-border-subtle bg-bg-base p-6">
                  <p className="font-body text-body-xs uppercase tracking-caps text-text-secondary">
                    Live Preview
                  </p>
                  <div className="mt-4 rounded-lg border border-border-subtle bg-bg-surface p-5">
                    <p className="font-display text-2xl font-medium text-text-primary">
                      {build.name}
                    </p>
                    <p className="mt-3 font-body text-body-sm text-text-secondary">
                      {build.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between gap-4 font-body text-body-sm text-text-secondary">
                  <span>{build.url}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-default group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

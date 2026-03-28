import ScrollReveal from "@/components/ui/ScrollReveal";
import type { HomeProcessContent } from "@/data/home-content";

type ProcessProps = {
  content: HomeProcessContent;
};

export default function Process({ content }: ProcessProps) {
  return (
    <section className="section-space">
      <div className="section-shell">
        <ScrollReveal className="mb-10">
          <p className="section-label">
            <span className="section-rule" />
            How I Work
          </p>
          <h2 className="font-display text-display-md font-semibold text-text-primary">
            {content.heading}
          </h2>
        </ScrollReveal>
        <div className="grid gap-6 lg:grid-cols-4">
          {content.steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.08}>
              <div className="relative h-full rounded-xl border border-border-subtle bg-bg-surface p-6">
                {index < content.steps.length - 1 ? (
                  <div className="absolute right-[-24px] top-10 hidden h-px w-12 border-t border-dashed border-border-default lg:block" />
                ) : null}
                <p className="font-display text-5xl font-medium text-[var(--text-muted-60)]">
                  {step.number}
                </p>
                <h3 className="mt-6 font-display text-2xl font-medium text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 font-body text-body-md text-text-secondary">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

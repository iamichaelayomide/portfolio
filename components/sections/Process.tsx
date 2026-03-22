import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "I get clear on your users, goals, offer, and constraints before design starts.",
  },
  {
    number: "02",
    title: "Structure",
    description: "I shape the information, flow, and decision points before styling anything.",
  },
  {
    number: "03",
    title: "Design",
    description: "I turn the strategy into polished UI that feels premium and easy to follow.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "You get handoff-ready files or a live build, depending on the engagement.",
  },
];

export default function Process() {
  return (
    <section className="section-space">
      <div className="section-shell">
        <ScrollReveal className="mb-10">
          <p className="section-label">
            <span className="section-rule" />
            How I Work
          </p>
          <h2 className="font-display text-display-md font-semibold text-text-primary">
            A process built for speed and good decisions.
          </h2>
        </ScrollReveal>
        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.08}>
              <div className="relative h-full rounded-xl border border-border-subtle bg-bg-surface p-6">
                {index < steps.length - 1 ? (
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

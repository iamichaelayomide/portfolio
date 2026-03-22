import Accordion from "@/components/ui/Accordion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  return (
    <section className="section-space">
      <div className="section-shell grid gap-10 lg:grid-cols-[360px_minmax(0,1fr)]">
        <ScrollReveal>
          <p className="section-label">
            <span className="section-rule" />
            Frequently Asked
          </p>
          <h2 className="font-display text-display-md font-semibold text-text-primary">
            Questions you might have.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <Accordion items={faqs} />
        </ScrollReveal>
      </div>
    </section>
  );
}

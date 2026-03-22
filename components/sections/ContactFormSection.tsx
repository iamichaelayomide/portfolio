"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExternalLink, Linkedin, Mail, MessageCircleMore } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "@/components/ui/Button";
import CalendlyButton from "@/components/ui/CalendlyButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  projectType: z.enum(["Product Design", "Web", "Design System", "Other"]),
  message: z.string().min(20, "Please share a bit more detail about the project."),
});

type ContactValues = z.infer<typeof contactSchema>;

const links = [
  { icon: Mail, label: "Email", value: "hello@michaelayomide.com", href: "mailto:hello@michaelayomide.com" },
  { icon: MessageCircleMore, label: "WhatsApp", value: "+234 XXX XXX XXXX", href: "https://wa.me/2340000000000" },
  { icon: ExternalLink, label: "Behance", value: "behance.net/michaelayomide1", href: "https://behance.net/michaelayomide1" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/michael-ayomide", href: "https://linkedin.com/in/michael-ayomide" },
  { icon: ExternalLink, label: "X", value: "@starmikeee", href: "https://x.com/starmikeee" },
];

export default function ContactFormSection() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "Product Design",
      message: "",
    },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSent(true);
  };

  return (
    <section className="section-space">
      <div className="section-shell space-y-12 pt-10">
        <ScrollReveal>
          <p className="section-label">
            <span className="section-rule" />
            Contact
          </p>
          <h1 className="font-display text-display-lg font-semibold text-text-primary">
            Let&apos;s talk.
          </h1>
          <p className="mt-4 font-body text-body-lg text-text-secondary">
            Tell me what you&apos;re building. I&apos;ll tell you how I can help.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
          <ScrollReveal>
            {sent ? (
              <div className="rounded-xl border border-border-accent bg-accent-glow p-8">
                <h2 className="font-display text-display-sm font-medium text-text-primary">
                  Message received.
                </h2>
                <p className="mt-4 max-w-prose font-body text-body-md text-text-secondary">
                  Thanks for reaching out. I&apos;ll reply within 24 hours with the next step.
                </p>
                <Button className="mt-6" variant="secondary" onClick={() => setSent(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 rounded-xl border border-border-subtle bg-bg-surface p-6 md:p-8"
              >
                <FormField label="Name" error={errors.name?.message}>
                  <input
                    {...register("name")}
                    className="w-full rounded-md border border-border-default bg-bg-surface px-4 py-3 font-body text-body-md text-text-primary placeholder:text-text-muted focus:border-accent-rose focus:outline-none"
                    placeholder="Your name"
                  />
                </FormField>
                <FormField label="Email" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full rounded-md border border-border-default bg-bg-surface px-4 py-3 font-body text-body-md text-text-primary placeholder:text-text-muted focus:border-accent-rose focus:outline-none"
                    placeholder="you@example.com"
                  />
                </FormField>
                <FormField label="Project type" error={errors.projectType?.message}>
                  <select
                    {...register("projectType")}
                    className="w-full rounded-md border border-border-default bg-bg-surface px-4 py-3 font-body text-body-md text-text-primary focus:border-accent-rose focus:outline-none"
                  >
                    <option>Product Design</option>
                    <option>Web</option>
                    <option>Design System</option>
                    <option>Other</option>
                  </select>
                </FormField>
                <FormField label="Message" error={errors.message?.message}>
                  <textarea
                    {...register("message")}
                    className="min-h-[120px] w-full rounded-md border border-border-default bg-bg-surface px-4 py-3 font-body text-body-md text-text-primary placeholder:text-text-muted focus:border-accent-rose focus:outline-none"
                    placeholder="Project goals, timeline, context, and what you need help with."
                  />
                </FormField>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="space-y-6">
            <div className="rounded-xl border border-border-subtle bg-bg-surface p-6">
              <h2 className="font-display text-2xl font-medium text-text-primary">
                Contact Info
              </h2>
              <div className="mt-6 space-y-4">
                {links.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="flex items-start gap-4 rounded-lg border border-transparent px-1 py-2 transition-colors hover:border-border-subtle"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border-default bg-bg-elevated text-text-secondary">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block font-body text-body-xs uppercase tracking-caps text-text-muted">
                          {item.label}
                        </span>
                        <span className="mt-1 block font-body text-body-sm text-text-primary">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border-subtle bg-bg-surface">
              <div className="border-b border-border-subtle px-6 py-5">
                <h2 className="font-display text-2xl font-medium text-text-primary">
                  Schedule a Free Discovery Call ↗
                </h2>
                <p className="mt-2 font-body text-body-sm text-text-secondary">
                  30-minute call · No commitment
                </p>
              </div>
              <div className="min-h-[500px] bg-bg-elevated">
                <iframe
                  title="Calendly scheduling"
                  src="https://calendly.com/michaelayomide"
                  className="h-[500px] w-full border-0"
                />
              </div>
              <div className="border-t border-border-subtle px-6 py-5">
                <CalendlyButton
                  label="Open Calendly in New Tab"
                  variant="secondary"
                  showIcon
                  className="w-full"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-body text-body-sm text-text-primary">{label}</span>
      {children}
      {error ? <span className="mt-2 block font-body text-body-xs text-accent-rose">{error}</span> : null}
    </label>
  );
}

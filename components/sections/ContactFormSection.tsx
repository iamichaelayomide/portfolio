"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ExternalLink, Mail, MessageCircleMore } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "@/components/ui/Button";
import CalendlyButton from "@/components/ui/CalendlyButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { ContactLink, ContactPageContent } from "@/data/site-pages";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  projectType: z.string().min(1, "Please choose a project type."),
  message: z.string().min(20, "Please share a bit more detail about the project."),
});

type ContactValues = z.infer<typeof contactSchema>;

const iconMap = {
  email: Mail,
  whatsapp: MessageCircleMore,
  behance: ExternalLink,
  linkedin: ExternalLink,
  x: ExternalLink,
} as const;

type ContactFormSectionProps = {
  content: ContactPageContent;
};

export default function ContactFormSection({ content }: ContactFormSectionProps) {
  const [sent, setSent] = useState(false);
  const defaultProjectType = content.form.projectTypes[0] || "Product Design";
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: defaultProjectType,
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
            {content.heroLabel}
          </p>
          <h1 className="font-display text-display-lg font-semibold text-text-primary">
            {content.title}
          </h1>
          <p className="mt-4 max-w-[40rem] font-body text-body-lg text-text-secondary">
            {content.description}
          </p>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
          <ScrollReveal>
            {sent ? (
              <div className="rounded-xl border border-border-accent bg-accent-glow p-8">
                <h2 className="font-display text-display-sm font-medium text-text-primary">
                  {content.success.title}
                </h2>
                <p className="mt-4 max-w-prose font-body text-body-md text-text-secondary">
                  {content.success.description}
                </p>
                <Button className="mt-6" variant="secondary" onClick={() => setSent(false)}>
                  {content.success.resetLabel}
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 rounded-xl border border-border-subtle bg-bg-surface p-6 md:p-8"
              >
                <div className="rounded-xl border border-border-subtle bg-bg-elevated/55 p-4">
                  <p className="font-body text-body-xs uppercase tracking-caps text-accent-warm">
                    {content.bestForEyebrow}
                  </p>
                  <p className="mt-2 font-body text-body-sm text-text-secondary">
                    {content.bestForText}
                  </p>
                </div>

                <FormField label={content.form.nameLabel} error={errors.name?.message}>
                  <input
                    {...register("name")}
                    className="w-full rounded-md border border-border-default bg-bg-surface px-4 py-3 font-body text-body-md text-text-primary placeholder:text-text-muted focus:border-accent-rose focus:outline-none"
                    placeholder={content.form.namePlaceholder}
                  />
                </FormField>
                <FormField label={content.form.emailLabel} error={errors.email?.message}>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full rounded-md border border-border-default bg-bg-surface px-4 py-3 font-body text-body-md text-text-primary placeholder:text-text-muted focus:border-accent-rose focus:outline-none"
                    placeholder={content.form.emailPlaceholder}
                  />
                </FormField>
                <FormField
                  label={content.form.projectTypeLabel}
                  error={errors.projectType?.message}
                >
                  <select
                    {...register("projectType")}
                    className="w-full rounded-md border border-border-default bg-bg-surface px-4 py-3 font-body text-body-md text-text-primary focus:border-accent-rose focus:outline-none"
                  >
                    {content.form.projectTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </FormField>
                <FormField label={content.form.messageLabel} error={errors.message?.message}>
                  <textarea
                    {...register("message")}
                    className="min-h-[140px] w-full rounded-md border border-border-default bg-bg-surface px-4 py-3 font-body text-body-md text-text-primary placeholder:text-text-muted focus:border-accent-rose focus:outline-none"
                    placeholder={content.form.messagePlaceholder}
                  />
                </FormField>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? content.form.submittingLabel : content.form.submitLabel}
                </Button>
              </form>
            )}
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="space-y-6">
            <div className="rounded-xl border border-border-subtle bg-bg-surface p-6">
              <h2 className="font-display text-display-sm font-medium text-text-primary">
                {content.contactInfoTitle}
              </h2>
              <div className="mt-6 space-y-4">
                {content.contactLinks.map((item) => (
                  <ContactLinkCard key={item.key} item={item} />
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border-subtle bg-bg-surface">
              <div className="border-b border-border-subtle px-6 py-5">
                <h2 className="font-display text-display-sm font-medium text-text-primary">
                  {content.booking.title}
                </h2>
                <p className="mt-2 font-body text-body-sm text-text-secondary">
                  {content.booking.subtitle}
                </p>
              </div>
              <div className="space-y-5 bg-bg-elevated px-6 py-8">
                <div className="rounded-xl border border-border-subtle bg-bg-base/70 p-5">
                  <p className="font-body text-body-xs uppercase tracking-caps text-accent-warm">
                    {content.booking.eyebrow}
                  </p>
                  <p className="mt-3 font-body text-body-sm text-text-secondary">
                    {content.booking.description}
                  </p>
                </div>
                <CalendlyButton
                  label={content.booking.primaryCtaLabel}
                  variant="primary"
                  showIcon
                  className="w-full justify-center"
                />
              </div>
              <div className="border-t border-border-subtle px-6 py-5">
                <CalendlyButton
                  label={content.booking.secondaryCtaLabel}
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

function ContactLinkCard({ item }: { item: ContactLink }) {
  const Icon = iconMap[item.icon];
  const external = item.href.startsWith("http");

  return (
    <a
      href={item.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex items-start gap-4 rounded-lg border border-transparent px-1 py-2 transition-colors hover:border-border-subtle"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border-default bg-bg-elevated text-text-secondary">
        <Icon className="h-4 w-4" />
      </span>
      <span>
        <span className="block font-body text-body-xs uppercase tracking-caps text-text-muted">
          {item.label}
        </span>
        <span className="mt-1 block font-body text-body-sm text-text-primary">{item.value}</span>
      </span>
    </a>
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
      {error ? (
        <span className="mt-2 block font-body text-body-xs text-accent-rose">{error}</span>
      ) : null}
    </label>
  );
}

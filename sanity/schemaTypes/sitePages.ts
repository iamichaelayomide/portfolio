import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutSkill = defineType({
  name: "aboutSkill",
  title: "About Skill",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "value",
      title: "Value",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});

export const aboutExperienceItem = defineType({
  name: "aboutExperienceItem",
  title: "About Experience Item",
  type: "object",
  fields: [
    defineField({
      name: "range",
      title: "Range",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "context",
      title: "Context",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
  ],
});

export const contactLink = defineType({
  name: "contactLink",
  title: "Contact Link",
  type: "object",
  fields: [
    defineField({
      name: "key",
      title: "Key",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      validation: (rule) => rule.required(),
      options: {
        list: [
          { title: "Email", value: "email" },
          { title: "WhatsApp", value: "whatsapp" },
          { title: "Behance", value: "behance" },
          { title: "LinkedIn", value: "linkedin" },
          { title: "X", value: "x" },
        ],
      },
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "value",
      title: "Value",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "href",
      title: "Link",
      type: "url",
      validation: (rule) => rule.required(),
    }),
  ],
});

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({ name: "heroLabel", title: "Hero label", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "intro",
      title: "Intro paragraphs",
      type: "array",
      of: [defineArrayMember({ type: "text" })],
    }),
    defineField({ name: "profileImageUrl", title: "Profile image URL", type: "url" }),
    defineField({ name: "skillsLabel", title: "Skills label", type: "string" }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [defineArrayMember({ type: "aboutSkill" })],
    }),
    defineField({ name: "experienceLabel", title: "Experience label", type: "string" }),
    defineField({
      name: "experience",
      title: "Experience",
      type: "array",
      of: [defineArrayMember({ type: "aboutExperienceItem" })],
    }),
    defineField({
      name: "principles",
      title: "Principles",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({ name: "ctaTitle", title: "CTA title", type: "string" }),
    defineField({ name: "primaryCtaLabel", title: "Primary CTA label", type: "string" }),
    defineField({ name: "secondaryCtaLabel", title: "Secondary CTA label", type: "string" }),
  ],
  preview: {
    prepare: () => ({
      title: "About Page",
      subtitle: "About page content",
    }),
  },
});

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({ name: "heroLabel", title: "Hero label", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({ name: "bestForEyebrow", title: "Best for eyebrow", type: "string" }),
    defineField({ name: "bestForText", title: "Best for text", type: "text", rows: 4 }),
    defineField({
      name: "form",
      title: "Form copy",
      type: "object",
      fields: [
        defineField({ name: "nameLabel", title: "Name label", type: "string" }),
        defineField({ name: "emailLabel", title: "Email label", type: "string" }),
        defineField({ name: "projectTypeLabel", title: "Project type label", type: "string" }),
        defineField({ name: "messageLabel", title: "Message label", type: "string" }),
        defineField({
          name: "projectTypes",
          title: "Project type options",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({ name: "namePlaceholder", title: "Name placeholder", type: "string" }),
        defineField({ name: "emailPlaceholder", title: "Email placeholder", type: "string" }),
        defineField({
          name: "messagePlaceholder",
          title: "Message placeholder",
          type: "text",
          rows: 3,
        }),
        defineField({ name: "submitLabel", title: "Submit label", type: "string" }),
        defineField({ name: "submittingLabel", title: "Submitting label", type: "string" }),
      ],
    }),
    defineField({
      name: "success",
      title: "Success state",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
        defineField({ name: "resetLabel", title: "Reset label", type: "string" }),
      ],
    }),
    defineField({ name: "contactInfoTitle", title: "Contact info title", type: "string" }),
    defineField({
      name: "contactLinks",
      title: "Contact links",
      type: "array",
      of: [defineArrayMember({ type: "contactLink" })],
    }),
    defineField({
      name: "booking",
      title: "Booking card",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
        defineField({ name: "primaryCtaLabel", title: "Primary CTA label", type: "string" }),
        defineField({ name: "secondaryCtaLabel", title: "Secondary CTA label", type: "string" }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Contact Page",
      subtitle: "Contact page content",
    }),
  },
});

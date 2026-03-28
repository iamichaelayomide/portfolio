import { defineArrayMember, defineField, defineType } from "sanity";

export const homeService = defineType({
  name: "homeService",
  title: "Home Service",
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
          { title: "Product Design", value: "productDesign" },
          { title: "UX Research", value: "uxResearch" },
          { title: "Web Builds", value: "webBuilds" },
          { title: "Design Systems", value: "designSystems" },
        ],
      },
    }),
    defineField({
      name: "title",
      title: "Title",
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
    defineField({
      name: "support",
      title: "Support text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});

export const homeProcessStep = defineType({
  name: "homeProcessStep",
  title: "Home Process Step",
  type: "object",
  fields: [
    defineField({
      name: "number",
      title: "Number",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
  ],
});

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({ name: "availabilityText", title: "Availability text", type: "string" }),
        defineField({ name: "introText", title: "Intro text", type: "string" }),
        defineField({ name: "title", title: "Title", type: "text", rows: 4 }),
        defineField({ name: "description", title: "Description", type: "text", rows: 5 }),
        defineField({ name: "primaryCtaLabel", title: "Primary CTA label", type: "string" }),
        defineField({ name: "secondaryCtaLabel", title: "Secondary CTA label", type: "string" }),
        defineField({
          name: "points",
          title: "Hero points",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({
          name: "proof",
          title: "Proof items",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({ name: "profileImageUrl", title: "Profile image URL", type: "url" }),
        defineField({ name: "cardEyebrow", title: "Card eyebrow", type: "string" }),
        defineField({ name: "cardTitle", title: "Card title", type: "text", rows: 3 }),
        defineField({
          name: "cardHighlights",
          title: "Card highlights",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({ name: "scrollLabel", title: "Scroll label", type: "string" }),
      ],
    }),
    defineField({
      name: "aboutPreview",
      title: "About Preview",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "text", rows: 4 }),
        defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
        defineField({ name: "linkLabel", title: "Link label", type: "string" }),
        defineField({ name: "profileImageUrl", title: "Profile image URL", type: "url" }),
        defineField({ name: "locationLabel", title: "Location label", type: "string" }),
        defineField({ name: "locationValue", title: "Location value", type: "string" }),
        defineField({ name: "footerTitle", title: "Section label", type: "string" }),
      ],
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "object",
      fields: [
        defineField({ name: "mobileHeading", title: "Mobile heading", type: "text", rows: 3 }),
        defineField({
          name: "mobileDescription",
          title: "Mobile description",
          type: "text",
          rows: 4,
        }),
        defineField({ name: "desktopHeading", title: "Desktop heading", type: "text", rows: 3 }),
        defineField({
          name: "desktopDescription",
          title: "Desktop description",
          type: "text",
          rows: 4,
        }),
        defineField({
          name: "services",
          title: "Service cards",
          type: "array",
          of: [defineArrayMember({ type: "homeService" })],
        }),
        defineField({ name: "ctaTitle", title: "CTA title", type: "string" }),
        defineField({ name: "ctaDescription", title: "CTA description", type: "text", rows: 4 }),
        defineField({ name: "ctaSupport", title: "CTA support", type: "string" }),
        defineField({ name: "ctaPrimaryLabel", title: "CTA primary label", type: "string" }),
        defineField({ name: "ctaSecondaryLabel", title: "CTA secondary label", type: "string" }),
      ],
    }),
    defineField({
      name: "process",
      title: "Process",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "text", rows: 3 }),
        defineField({
          name: "steps",
          title: "Steps",
          type: "array",
          of: [defineArrayMember({ type: "homeProcessStep" })],
        }),
      ],
    }),
    defineField({
      name: "finalCta",
      title: "Final CTA",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "text", rows: 4 }),
        defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
        defineField({ name: "primaryCtaLabel", title: "Primary CTA label", type: "string" }),
        defineField({ name: "secondaryCtaLabel", title: "Secondary CTA label", type: "string" }),
        defineField({ name: "email", title: "Email", type: "string" }),
        defineField({ name: "responseTime", title: "Response time", type: "string" }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Home Page",
      subtitle: "Homepage copy and section content",
    }),
  },
});

import { defineArrayMember, defineField, defineType } from "sanity";

export const caseStudyInsight = defineType({
  name: "caseStudyInsight",
  title: "Case Study Insight",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
  ],
});

export const caseStudyImage = defineType({
  name: "caseStudyImage",
  title: "Case Study Image",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alt text",
      type: "string",
    }),
    defineField({
      name: "aspect",
      title: "Aspect",
      type: "string",
      initialValue: "wide",
      options: {
        list: [
          { title: "Wide", value: "wide" },
          { title: "Landscape", value: "landscape" },
          { title: "Portrait", value: "portrait" },
          { title: "Grid", value: "grid" },
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Uploaded image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "src",
      title: "External image URL",
      type: "url",
      description: "Optional fallback if you prefer to link an image instead of uploading it.",
    }),
  ],
  preview: {
    select: {
      title: "label",
      media: "image",
    },
  },
});

export const projectSection = defineType({
  name: "projectSection",
  title: "Project Section",
  type: "object",
  fields: [
    defineField({
      name: "id",
      title: "Section ID",
      type: "string",
      validation: (rule) => rule.required(),
      options: {
        list: [
          { title: "Overview", value: "overview" },
          { title: "Challenge", value: "challenge" },
          { title: "Discovery", value: "discovery" },
          { title: "Approach", value: "approach" },
          { title: "Solution", value: "solution" },
          { title: "Process", value: "process" },
          { title: "Outcome", value: "outcome" },
          { title: "Reflection", value: "reflection" },
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
      name: "content",
      title: "Paragraphs",
      type: "array",
      of: [defineArrayMember({ type: "text", rows: 4 })],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "insights",
      title: "Insights",
      type: "array",
      of: [defineArrayMember({ type: "caseStudyInsight" })],
    }),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [defineArrayMember({ type: "caseStudyImage" })],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "id",
    },
  },
});

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers show first on the website.",
    }),
    defineField({
      name: "featured",
      title: "Featured on cards",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (rule) => rule.required(),
      options: {
        list: [
          { title: "Product Design", value: "Product Design" },
          { title: "Web", value: "Web" },
          { title: "Live Projects", value: "Live Projects" },
          { title: "Design Systems", value: "Design Systems" },
        ],
      },
    }),
    defineField({
      name: "year",
      title: "Year",
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
      name: "duration",
      title: "Duration",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "platform",
      title: "Platform",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "thumbnailImage",
      title: "Thumbnail image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "thumbnailUrl",
      title: "Thumbnail URL",
      type: "url",
      description: "Optional fallback if you want to link a thumbnail instead of uploading it.",
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "heroImageUrl",
      title: "Hero image URL",
      type: "url",
      description: "Optional fallback if you want to link a hero image instead of uploading it.",
    }),
    defineField({
      name: "outcome",
      title: "Outcome",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "liveUrl",
      title: "Live project URL",
      type: "url",
    }),
    defineField({
      name: "sections",
      title: "Case study sections",
      type: "array",
      of: [defineArrayMember({ type: "projectSection" })],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "thumbnailImage",
    },
  },
});

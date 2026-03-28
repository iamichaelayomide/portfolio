import { getCliClient } from "sanity/cli";
import { faqs } from "../data/faqs";
import { projects } from "../data/projects";

const client = getCliClient({
  apiVersion: "2025-02-19",
  dataset: "production",
  projectId: "btu0u7s3",
});

const siteUrl = "https://michael-ayomide-portfolio.vercel.app";

function absoluteUrl(pathOrUrl?: string) {
  if (!pathOrUrl) {
    return undefined;
  }

  if (/^https?:\/\//.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return `${siteUrl}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

function createKey(...parts: Array<string | number | undefined>) {
  return parts
    .filter(Boolean)
    .join("-")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

async function seed() {
  const transaction = client.transaction();

  projects.forEach((project, projectIndex) => {
    transaction.createOrReplace({
      _id: `project.${project.slug}`,
      _type: "project",
      order: projectIndex + 1,
      featured: project.type === "featured",
      title: project.title,
      slug: {
        _type: "slug",
        current: project.slug,
      },
      tagline: project.tagline,
      description: project.description,
      tags: project.tags,
      category: project.category,
      year: project.year,
      role: project.role,
      duration: project.duration,
      platform: project.platform,
      thumbnailUrl: absoluteUrl(project.thumbnail),
      heroImageUrl: absoluteUrl(project.heroImage),
      outcome: project.outcome,
      liveUrl: project.liveUrl,
      sections: project.sections.map((section, sectionIndex) => ({
        _key: createKey(project.slug, section.id, sectionIndex),
        _type: "projectSection",
        id: section.id,
        title: section.title,
        content: section.content,
        quote: section.quote,
        insights: section.insights?.map((insight, insightIndex) => ({
          _key: createKey(project.slug, section.id, "insight", insightIndex),
          _type: "caseStudyInsight",
          title: insight.title,
          text: insight.text,
        })),
        steps: section.steps,
        images: section.images?.map((image, imageIndex) => ({
          _key: createKey(project.slug, section.id, "image", imageIndex),
          _type: "caseStudyImage",
          label: image.label,
          alt: image.alt,
          aspect: image.aspect,
          src: absoluteUrl(image.src),
        })),
      })),
    });
  });

  faqs.forEach((faq, faqIndex) => {
    transaction.createOrReplace({
      _id: `faq.${String(faqIndex + 1).padStart(2, "0")}`,
      _type: "faq",
      order: faqIndex + 1,
      question: faq.question,
      answer: faq.answer,
    });
  });

  await transaction.commit();

  const [seededProjects, seededFaqs] = await Promise.all([
    client.fetch<number>('count(*[_type == "project"])'),
    client.fetch<number>('count(*[_type == "faq"])'),
  ]);

  console.log(
    JSON.stringify(
      {
        ok: true,
        dataset: "production",
        seededProjects,
        seededFaqs,
      },
      null,
      2,
    ),
  );
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});

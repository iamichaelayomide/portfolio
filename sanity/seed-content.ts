import { getCliClient } from "sanity/cli";
import { faqs } from "../data/faqs";
import { homeContent } from "../data/home-content";
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

  transaction.createOrReplace({
    _id: "homePage",
    _type: "homePage",
    hero: {
      availabilityText: homeContent.hero.availabilityText,
      introText: homeContent.hero.introText,
      title: homeContent.hero.title,
      description: homeContent.hero.description,
      primaryCtaLabel: homeContent.hero.primaryCtaLabel,
      secondaryCtaLabel: homeContent.hero.secondaryCtaLabel,
      points: homeContent.hero.points,
      proof: homeContent.hero.proof,
      profileImageUrl: homeContent.hero.profileImageUrl,
      cardEyebrow: homeContent.hero.cardEyebrow,
      cardTitle: homeContent.hero.cardTitle,
      cardHighlights: homeContent.hero.cardHighlights,
      scrollLabel: homeContent.hero.scrollLabel,
    },
    aboutPreview: {
      title: homeContent.aboutPreview.title,
      description: homeContent.aboutPreview.description,
      linkLabel: homeContent.aboutPreview.linkLabel,
      profileImageUrl: homeContent.aboutPreview.profileImageUrl,
      locationLabel: homeContent.aboutPreview.locationLabel,
      locationValue: homeContent.aboutPreview.locationValue,
      footerTitle: homeContent.aboutPreview.footerTitle,
    },
    services: {
      mobileHeading: homeContent.services.mobileHeading,
      mobileDescription: homeContent.services.mobileDescription,
      desktopHeading: homeContent.services.desktopHeading,
      desktopDescription: homeContent.services.desktopDescription,
      services: homeContent.services.services.map((service, serviceIndex) => ({
        _key: createKey("home-service", service.key, serviceIndex),
        _type: "homeService",
        key: service.key,
        icon: service.icon,
        title: service.title,
        description: service.description,
        support: service.support,
      })),
      ctaTitle: homeContent.services.ctaTitle,
      ctaDescription: homeContent.services.ctaDescription,
      ctaSupport: homeContent.services.ctaSupport,
      ctaPrimaryLabel: homeContent.services.ctaPrimaryLabel,
      ctaSecondaryLabel: homeContent.services.ctaSecondaryLabel,
    },
    process: {
      heading: homeContent.process.heading,
      steps: homeContent.process.steps.map((step, stepIndex) => ({
        _key: createKey("home-process", step.number, stepIndex),
        _type: "homeProcessStep",
        number: step.number,
        title: step.title,
        description: step.description,
      })),
    },
    finalCta: {
      title: homeContent.finalCta.title,
      description: homeContent.finalCta.description,
      primaryCtaLabel: homeContent.finalCta.primaryCtaLabel,
      secondaryCtaLabel: homeContent.finalCta.secondaryCtaLabel,
      email: homeContent.finalCta.email,
      responseTime: homeContent.finalCta.responseTime,
    },
  });

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

  const [seededHomePages, seededProjects, seededFaqs] = await Promise.all([
    client.fetch<number>('count(*[_type == "homePage"])'),
    client.fetch<number>('count(*[_type == "project"])'),
    client.fetch<number>('count(*[_type == "faq"])'),
  ]);

  console.log(
    JSON.stringify(
      {
        ok: true,
        dataset: "production",
        seededHomePages,
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

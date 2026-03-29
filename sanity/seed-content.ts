import { getCliClient } from "sanity/cli";
import { faqs } from "../data/faqs";
import { homeContent } from "../data/home-content";
import { projects } from "../data/projects";
import { aboutPageContent, contactPageContent } from "../data/site-pages";

const client = getCliClient({
  apiVersion: "2025-02-19",
  dataset: "production",
  projectId: "btu0u7s3",
  token: process.env.SANITY_API_WRITE_TOKEN,
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
    _id: "aboutPage",
    _type: "aboutPage",
    heroLabel: aboutPageContent.heroLabel,
    title: aboutPageContent.title,
    intro: aboutPageContent.intro,
    profileImageUrl: aboutPageContent.profileImageUrl,
    skillsLabel: aboutPageContent.skillsLabel,
    skills: aboutPageContent.skills.map((skill, skillIndex) => ({
      _key: createKey("about-skill", skill.label, skillIndex),
      _type: "aboutSkill",
      label: skill.label,
      value: skill.value,
    })),
    experienceLabel: aboutPageContent.experienceLabel,
    experience: aboutPageContent.experience.map((item, itemIndex) => ({
      _key: createKey("about-experience", item.range, itemIndex),
      _type: "aboutExperienceItem",
      range: item.range,
      role: item.role,
      context: item.context,
      description: item.description,
    })),
    principles: aboutPageContent.principles,
    ctaTitle: aboutPageContent.ctaTitle,
    primaryCtaLabel: aboutPageContent.primaryCtaLabel,
    secondaryCtaLabel: aboutPageContent.secondaryCtaLabel,
  });

  transaction.createOrReplace({
    _id: "contactPage",
    _type: "contactPage",
    heroLabel: contactPageContent.heroLabel,
    title: contactPageContent.title,
    description: contactPageContent.description,
    bestForEyebrow: contactPageContent.bestForEyebrow,
    bestForText: contactPageContent.bestForText,
    form: {
      nameLabel: contactPageContent.form.nameLabel,
      emailLabel: contactPageContent.form.emailLabel,
      projectTypeLabel: contactPageContent.form.projectTypeLabel,
      messageLabel: contactPageContent.form.messageLabel,
      projectTypes: contactPageContent.form.projectTypes,
      namePlaceholder: contactPageContent.form.namePlaceholder,
      emailPlaceholder: contactPageContent.form.emailPlaceholder,
      messagePlaceholder:
        contactPageContent.form.messagePlaceholder,
      submitLabel: contactPageContent.form.submitLabel,
      submittingLabel: contactPageContent.form.submittingLabel,
    },
    success: {
      title: contactPageContent.success.title,
      description: contactPageContent.success.description,
      resetLabel: contactPageContent.success.resetLabel,
    },
    contactInfoTitle: contactPageContent.contactInfoTitle,
    contactLinks: contactPageContent.contactLinks.map((link, linkIndex) => ({
      _key: createKey("contact-link", link.key, linkIndex),
      _type: "contactLink",
      key: link.key,
      icon: link.icon,
      label: link.label,
      value: link.value,
      href: link.href,
    })),
    booking: {
      title: contactPageContent.booking.title,
      subtitle: contactPageContent.booking.subtitle,
      eyebrow: contactPageContent.booking.eyebrow,
      description: contactPageContent.booking.description,
      primaryCtaLabel: contactPageContent.booking.primaryCtaLabel,
      secondaryCtaLabel: contactPageContent.booking.secondaryCtaLabel,
    },
  });

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
      thumbnailUrl: project.thumbnail,
      heroImageUrl: project.heroImage,
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
          src: image.src,
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

  const [seededHomePages, seededAboutPages, seededContactPages, seededProjects, seededFaqs] =
    await Promise.all([
      client.fetch<number>('count(*[_type == "homePage"])'),
      client.fetch<number>('count(*[_type == "aboutPage"])'),
      client.fetch<number>('count(*[_type == "contactPage"])'),
      client.fetch<number>('count(*[_type == "project"])'),
      client.fetch<number>('count(*[_type == "faq"])'),
    ]);

  console.log(
    JSON.stringify(
      {
        ok: true,
        dataset: "production",
        seededHomePages,
        seededAboutPages,
        seededContactPages,
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

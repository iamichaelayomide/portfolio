import type {
  CaseStudyImage,
  CaseStudyInsight,
  CaseStudySection,
  Project,
} from "@/data/projects";
import { getProjectBySlug as getFallbackProjectBySlug, projects as fallbackProjects } from "@/data/projects";
import type { TypedObject } from "@portabletext/types";
import type { FaqItem } from "@/data/faqs";
import { faqs as fallbackFaqs } from "@/data/faqs";
import type { BlogPost, BlogPostSummary } from "@/data/blog";
import type {
  HomeAboutPreviewContent,
  HomeContent,
  HomeFinalCtaContent,
  HomeHeroContent,
  HomeProcessContent,
  HomeProcessStep,
  HomeService,
  HomeServicesContent,
} from "@/data/home-content";
import { homeContent as fallbackHomeContent } from "@/data/home-content";
import type {
  AboutExperienceItem,
  AboutPageContent,
  AboutSkill,
  ContactLink,
  ContactPageContent,
} from "@/data/site-pages";
import {
  aboutPageContent as fallbackAboutPageContent,
  contactPageContent as fallbackContactPageContent,
} from "@/data/site-pages";
import { sanityClient } from "@/lib/sanity/client";
import {
  aboutPageQuery,
  contactPageQuery,
  faqsQuery,
  homePageQuery,
  latestPostsQuery,
  postBySlugQuery,
  postsQuery,
  projectBySlugQuery,
  projectsQuery,
} from "@/lib/sanity/queries";
import type { QueryParams } from "next-sanity";

const FALLBACK_PROJECT_IMAGE = "/og-image.svg";
const SECTION_IDS: CaseStudySection["id"][] = [
  "overview",
  "challenge",
  "discovery",
  "approach",
  "solution",
  "process",
  "outcome",
  "reflection",
];
const PROJECT_CATEGORIES: Project["category"][] = [
  "Product Design",
  "Web",
  "Live Projects",
  "Design Systems",
];

type PartialProject = Omit<Partial<Project>, "sections"> & {
  sections?: Array<Partial<CaseStudySection> | null> | null;
};
type PartialHomeContent = {
  hero?: Partial<HomeHeroContent> | null;
  aboutPreview?: Partial<HomeAboutPreviewContent> | null;
  services?:
    | (Partial<HomeServicesContent> & {
        services?: Array<Partial<HomeService> | null> | null;
      })
    | null;
  process?:
    | (Partial<HomeProcessContent> & {
        steps?: Array<Partial<HomeProcessStep> | null> | null;
      })
    | null;
  finalCta?: Partial<HomeFinalCtaContent> | null;
};
type PartialAboutPageContent = Omit<Partial<AboutPageContent>, "skills" | "experience"> & {
  skills?: Array<Partial<AboutSkill> | null> | null;
  experience?: Array<Partial<AboutExperienceItem> | null> | null;
};
type PartialContactPageContent = Omit<
  Partial<ContactPageContent>,
  "contactLinks" | "form" | "success" | "booking"
> & {
  form?: Partial<ContactPageContent["form"]> | null;
  success?: Partial<ContactPageContent["success"]> | null;
  contactLinks?: Array<Partial<ContactLink> | null> | null;
  booking?: Partial<ContactPageContent["booking"]> | null;
};
type PartialBlogPost = Partial<BlogPost> & {
  body?: TypedObject[] | null;
};

function isValidSectionId(value: string | undefined): value is CaseStudySection["id"] {
  return SECTION_IDS.includes(value as CaseStudySection["id"]);
}

function isValidProjectCategory(value: string | undefined): value is Project["category"] {
  return PROJECT_CATEGORIES.includes(value as Project["category"]);
}

function normalizeInsight(
  insight: Partial<CaseStudyInsight> | null | undefined,
): CaseStudyInsight | null {
  if (!insight?.title || !insight.text) {
    return null;
  }

  return {
    title: insight.title,
    text: insight.text,
  } satisfies CaseStudyInsight;
}

function normalizeImage(image: Partial<CaseStudyImage> | null | undefined): CaseStudyImage | null {
  if (!image?.label) {
    return null;
  }

  return {
    label: image.label,
    src: image.src || undefined,
    alt: image.alt || undefined,
    aspect: image.aspect || "wide",
  } satisfies CaseStudyImage;
}

function normalizeSection(
  section: Partial<CaseStudySection> | null | undefined,
  index: number,
): CaseStudySection {
  const content = (section?.content || []).filter(Boolean);
  const insights: CaseStudyInsight[] = (section?.insights || [])
    .map((insight) => normalizeInsight(insight))
    .filter((insight): insight is CaseStudyInsight => Boolean(insight));
  const images: CaseStudyImage[] = (section?.images || [])
    .map((image) => normalizeImage(image))
    .filter((image): image is CaseStudyImage => Boolean(image));
  const steps = (section?.steps || []).filter(Boolean);

  return {
    id: isValidSectionId(section?.id) ? section.id : "overview",
    title: section?.title || `Section ${index + 1}`,
    content: content.length ? content : ["Project details coming soon."],
    quote: section?.quote || undefined,
    insights: insights.length ? insights : undefined,
    steps: steps.length ? steps : undefined,
    images: images.length ? images : undefined,
  };
}

function normalizeProject(project: PartialProject): Project {
  const category = isValidProjectCategory(project.category) ? project.category : "Product Design";
  const description = project.description || "Project details coming soon.";
  const sections: CaseStudySection[] = (project.sections || []).map((section, index) =>
    normalizeSection(section, index),
  );

  return {
    slug: project.slug || "",
    title: project.title || "Untitled Project",
    tagline: project.tagline || description,
    description,
    tags: project.tags?.length ? project.tags : [category],
    type: project.type,
    category,
    year: project.year || "2026",
    role: project.role || "Designer",
    duration: project.duration || "TBD",
    platform: project.platform || "Web",
    thumbnail: project.thumbnail || FALLBACK_PROJECT_IMAGE,
    heroImage: project.heroImage || project.thumbnail || FALLBACK_PROJECT_IMAGE,
    outcome: project.outcome || description,
    liveUrl: project.liveUrl || undefined,
    sections: sections.length
      ? sections
      : [
          {
            id: "overview",
            title: "Overview",
            content: [description],
          },
        ],
  };
}

function normalizeStringList(value: string[] | null | undefined, fallback: string[]) {
  const normalized = (value || []).filter(Boolean);
  return normalized.length ? normalized : fallback;
}

function normalizeHomeService(service: Partial<HomeService> | null | undefined, fallback: HomeService) {
  const icon = service?.icon;

  return {
    key: service?.key || fallback.key,
    icon:
      icon === "productDesign" ||
      icon === "uxResearch" ||
      icon === "webBuilds" ||
      icon === "designSystems"
        ? icon
        : fallback.icon,
    title: service?.title || fallback.title,
    description: service?.description || fallback.description,
    support: service?.support || fallback.support,
  } satisfies HomeService;
}

function normalizeHomeProcessStep(
  step: Partial<HomeProcessStep> | null | undefined,
  fallback: HomeProcessStep,
) {
  return {
    number: step?.number || fallback.number,
    title: step?.title || fallback.title,
    description: step?.description || fallback.description,
  } satisfies HomeProcessStep;
}

function normalizeHomeContent(content: PartialHomeContent | null | undefined): HomeContent {
  const fallback = fallbackHomeContent;

  return {
    hero: {
      availabilityText: content?.hero?.availabilityText || fallback.hero.availabilityText,
      introText: content?.hero?.introText || fallback.hero.introText,
      title: content?.hero?.title || fallback.hero.title,
      description: content?.hero?.description || fallback.hero.description,
      primaryCtaLabel: content?.hero?.primaryCtaLabel || fallback.hero.primaryCtaLabel,
      secondaryCtaLabel: content?.hero?.secondaryCtaLabel || fallback.hero.secondaryCtaLabel,
      points: normalizeStringList(content?.hero?.points, fallback.hero.points),
      proof: normalizeStringList(content?.hero?.proof, fallback.hero.proof),
      profileImageUrl: content?.hero?.profileImageUrl || fallback.hero.profileImageUrl,
      cardEyebrow: content?.hero?.cardEyebrow || fallback.hero.cardEyebrow,
      cardTitle: content?.hero?.cardTitle || fallback.hero.cardTitle,
      cardHighlights: normalizeStringList(
        content?.hero?.cardHighlights,
        fallback.hero.cardHighlights,
      ),
      scrollLabel: content?.hero?.scrollLabel || fallback.hero.scrollLabel,
    },
    aboutPreview: {
      title: content?.aboutPreview?.title || fallback.aboutPreview.title,
      description: content?.aboutPreview?.description || fallback.aboutPreview.description,
      linkLabel: content?.aboutPreview?.linkLabel || fallback.aboutPreview.linkLabel,
      profileImageUrl:
        content?.aboutPreview?.profileImageUrl || fallback.aboutPreview.profileImageUrl,
      locationLabel: content?.aboutPreview?.locationLabel || fallback.aboutPreview.locationLabel,
      locationValue: content?.aboutPreview?.locationValue || fallback.aboutPreview.locationValue,
      footerTitle: content?.aboutPreview?.footerTitle || fallback.aboutPreview.footerTitle,
    },
    services: {
      mobileHeading: content?.services?.mobileHeading || fallback.services.mobileHeading,
      mobileDescription:
        content?.services?.mobileDescription || fallback.services.mobileDescription,
      desktopHeading: content?.services?.desktopHeading || fallback.services.desktopHeading,
      desktopDescription:
        content?.services?.desktopDescription || fallback.services.desktopDescription,
      services:
        content?.services?.services?.length
          ? content.services.services.map((service, index) =>
              normalizeHomeService(
                service,
                fallback.services.services[index] || fallback.services.services[0],
              ),
            )
          : fallback.services.services,
      ctaTitle: content?.services?.ctaTitle || fallback.services.ctaTitle,
      ctaDescription: content?.services?.ctaDescription || fallback.services.ctaDescription,
      ctaSupport: content?.services?.ctaSupport || fallback.services.ctaSupport,
      ctaPrimaryLabel: content?.services?.ctaPrimaryLabel || fallback.services.ctaPrimaryLabel,
      ctaSecondaryLabel:
        content?.services?.ctaSecondaryLabel || fallback.services.ctaSecondaryLabel,
    },
    process: {
      heading: content?.process?.heading || fallback.process.heading,
      steps:
        content?.process?.steps?.length
          ? content.process.steps.map((step, index) =>
              normalizeHomeProcessStep(
                step,
                fallback.process.steps[index] || fallback.process.steps[0],
              ),
            )
          : fallback.process.steps,
    },
    finalCta: {
      title: content?.finalCta?.title || fallback.finalCta.title,
      description: content?.finalCta?.description || fallback.finalCta.description,
      primaryCtaLabel: content?.finalCta?.primaryCtaLabel || fallback.finalCta.primaryCtaLabel,
      secondaryCtaLabel:
        content?.finalCta?.secondaryCtaLabel || fallback.finalCta.secondaryCtaLabel,
      email: content?.finalCta?.email || fallback.finalCta.email,
      responseTime: content?.finalCta?.responseTime || fallback.finalCta.responseTime,
    },
  };
}

function normalizeAboutSkill(skill: Partial<AboutSkill> | null | undefined, fallback: AboutSkill) {
  return {
    label: skill?.label || fallback.label,
    value: skill?.value || fallback.value,
  } satisfies AboutSkill;
}

function normalizeAboutExperienceItem(
  item: Partial<AboutExperienceItem> | null | undefined,
  fallback: AboutExperienceItem,
) {
  return {
    range: item?.range || fallback.range,
    role: item?.role || fallback.role,
    context: item?.context || fallback.context,
    description: item?.description || fallback.description,
  } satisfies AboutExperienceItem;
}

function normalizeAboutPageContent(
  content: PartialAboutPageContent | null | undefined,
): AboutPageContent {
  const fallback = fallbackAboutPageContent;

  return {
    heroLabel: content?.heroLabel || fallback.heroLabel,
    title: content?.title || fallback.title,
    intro: normalizeStringList(content?.intro, fallback.intro),
    profileImageUrl: content?.profileImageUrl || fallback.profileImageUrl,
    skillsLabel: content?.skillsLabel || fallback.skillsLabel,
    skills:
      content?.skills?.length
        ? content.skills.map((skill, index) =>
            normalizeAboutSkill(skill, fallback.skills[index] || fallback.skills[0]),
          )
        : fallback.skills,
    experienceLabel: content?.experienceLabel || fallback.experienceLabel,
    experience:
      content?.experience?.length
        ? content.experience.map((item, index) =>
            normalizeAboutExperienceItem(
              item,
              fallback.experience[index] || fallback.experience[0],
            ),
          )
        : fallback.experience,
    principles: normalizeStringList(content?.principles, fallback.principles),
    ctaTitle: content?.ctaTitle || fallback.ctaTitle,
    primaryCtaLabel: content?.primaryCtaLabel || fallback.primaryCtaLabel,
    secondaryCtaLabel: content?.secondaryCtaLabel || fallback.secondaryCtaLabel,
  };
}

function normalizeContactLink(link: Partial<ContactLink> | null | undefined, fallback: ContactLink) {
  const icon = link?.icon;

  return {
    key: link?.key || fallback.key,
    icon:
      icon === "email" ||
      icon === "whatsapp" ||
      icon === "behance" ||
      icon === "linkedin" ||
      icon === "x"
        ? icon
        : fallback.icon,
    label: link?.label || fallback.label,
    value: link?.value || fallback.value,
    href: link?.href || fallback.href,
  } satisfies ContactLink;
}

function normalizeContactPageContent(
  content: PartialContactPageContent | null | undefined,
): ContactPageContent {
  const fallback = fallbackContactPageContent;

  return {
    heroLabel: content?.heroLabel || fallback.heroLabel,
    title: content?.title || fallback.title,
    description: content?.description || fallback.description,
    bestForEyebrow: content?.bestForEyebrow || fallback.bestForEyebrow,
    bestForText: content?.bestForText || fallback.bestForText,
    form: {
      nameLabel: content?.form?.nameLabel || fallback.form.nameLabel,
      emailLabel: content?.form?.emailLabel || fallback.form.emailLabel,
      projectTypeLabel: content?.form?.projectTypeLabel || fallback.form.projectTypeLabel,
      messageLabel: content?.form?.messageLabel || fallback.form.messageLabel,
      projectTypes: normalizeStringList(content?.form?.projectTypes, fallback.form.projectTypes),
      namePlaceholder: content?.form?.namePlaceholder || fallback.form.namePlaceholder,
      emailPlaceholder: content?.form?.emailPlaceholder || fallback.form.emailPlaceholder,
      messagePlaceholder:
        content?.form?.messagePlaceholder || fallback.form.messagePlaceholder,
      submitLabel: content?.form?.submitLabel || fallback.form.submitLabel,
      submittingLabel: content?.form?.submittingLabel || fallback.form.submittingLabel,
    },
    success: {
      title: content?.success?.title || fallback.success.title,
      description: content?.success?.description || fallback.success.description,
      resetLabel: content?.success?.resetLabel || fallback.success.resetLabel,
    },
    contactInfoTitle: content?.contactInfoTitle || fallback.contactInfoTitle,
    contactLinks:
      content?.contactLinks?.length
        ? content.contactLinks.map((link, index) =>
            normalizeContactLink(link, fallback.contactLinks[index] || fallback.contactLinks[0]),
          )
        : fallback.contactLinks,
    booking: {
      title: content?.booking?.title || fallback.booking.title,
      subtitle: content?.booking?.subtitle || fallback.booking.subtitle,
      eyebrow: content?.booking?.eyebrow || fallback.booking.eyebrow,
      description: content?.booking?.description || fallback.booking.description,
      primaryCtaLabel:
        content?.booking?.primaryCtaLabel || fallback.booking.primaryCtaLabel,
      secondaryCtaLabel:
        content?.booking?.secondaryCtaLabel || fallback.booking.secondaryCtaLabel,
    },
  };
}

function blocksToPlainText(blocks: unknown[] | null | undefined) {
  return (blocks || [])
    .map((block) => {
      if (!block || typeof block !== "object" || !("children" in block)) {
        return "";
      }

      const children = (block as { children?: unknown[] }).children || [];

      return children
        .map((child) => {
          if (!child || typeof child !== "object" || !("text" in child)) {
            return "";
          }

          return String((child as { text?: unknown }).text || "");
        })
        .join("");
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function estimateReadingTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min read`;
}

function normalizeBlogPost(post: PartialBlogPost | null | undefined): BlogPost | null {
  if (!post?.slug || !post.title) {
    return null;
  }

  const plainText = blocksToPlainText(post.body);
  const excerpt = post.excerpt || plainText.slice(0, 180).trim();

  return {
    slug: post.slug,
    title: post.title,
    excerpt,
    publishedAt: post.publishedAt || new Date().toISOString(),
    categories: (post.categories || []).filter(Boolean),
    featuredImage: post.featuredImage || undefined,
    featuredImageAlt: post.featuredImageAlt || undefined,
    readingTime: estimateReadingTime(`${post.title} ${excerpt} ${plainText}`),
    body: post.body || [],
  };
}

async function fetchFromSanity<T>(query: string, params?: QueryParams) {
  try {
    if (params) {
      return await sanityClient.fetch<T>(query, params, {
        next: { revalidate: 0 },
      });
    }

    return await sanityClient.fetch<T>(query, {}, {
      next: { revalidate: 0 },
    });
  } catch (error) {
    console.warn("Sanity fetch failed, using local fallback content.", error);
    return null;
  }
}

export async function getProjects(): Promise<Project[]> {
  const sanityProjects = await fetchFromSanity<PartialProject[]>(projectsQuery);

  if (!sanityProjects?.length) {
    return fallbackProjects;
  }

  const normalized = sanityProjects
    .map((project) => normalizeProject(project))
    .filter((project) => Boolean(project.slug));

  return normalized.length ? normalized : fallbackProjects;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const sanityProject = await fetchFromSanity<PartialProject | null>(projectBySlugQuery, { slug });

  if (sanityProject?.slug) {
    return normalizeProject(sanityProject);
  }

  return getFallbackProjectBySlug(slug);
}

export async function getFaqs(): Promise<FaqItem[]> {
  const sanityFaqs = await fetchFromSanity<FaqItem[]>(faqsQuery);

  if (!sanityFaqs?.length) {
    return fallbackFaqs;
  }

  return sanityFaqs.filter((faq) => faq.question && faq.answer);
}

export async function getHomeContent(): Promise<HomeContent> {
  const sanityHomeContent = await fetchFromSanity<PartialHomeContent | null>(homePageQuery);
  return normalizeHomeContent(sanityHomeContent);
}

export async function getAboutPageContent(): Promise<AboutPageContent> {
  const sanityAboutPageContent = await fetchFromSanity<PartialAboutPageContent | null>(
    aboutPageQuery,
  );
  return normalizeAboutPageContent(sanityAboutPageContent);
}

export async function getContactPageContent(): Promise<ContactPageContent> {
  const sanityContactPageContent = await fetchFromSanity<PartialContactPageContent | null>(
    contactPageQuery,
  );
  return normalizeContactPageContent(sanityContactPageContent);
}

export async function getPosts(): Promise<BlogPostSummary[]> {
  const sanityPosts = await fetchFromSanity<PartialBlogPost[]>(postsQuery);

  if (!sanityPosts?.length) {
    return [];
  }

  return sanityPosts
    .map((post) => normalizeBlogPost(post))
    .filter((post): post is BlogPost => Boolean(post))
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      publishedAt: post.publishedAt,
      categories: post.categories,
      featuredImage: post.featuredImage,
      featuredImageAlt: post.featuredImageAlt,
      readingTime: post.readingTime,
    }));
}

export async function getLatestPosts(): Promise<BlogPostSummary[]> {
  const sanityPosts = await fetchFromSanity<PartialBlogPost[]>(latestPostsQuery);

  if (!sanityPosts?.length) {
    return [];
  }

  return sanityPosts
    .map((post) => normalizeBlogPost(post))
    .filter((post): post is BlogPost => Boolean(post))
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      publishedAt: post.publishedAt,
      categories: post.categories,
      featuredImage: post.featuredImage,
      featuredImageAlt: post.featuredImageAlt,
      readingTime: post.readingTime,
    }));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const sanityPost = await fetchFromSanity<PartialBlogPost | null>(postBySlugQuery, { slug });
  return normalizeBlogPost(sanityPost) || undefined;
}

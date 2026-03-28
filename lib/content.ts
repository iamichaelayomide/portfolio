import type {
  CaseStudyImage,
  CaseStudyInsight,
  CaseStudySection,
  Project,
} from "@/data/projects";
import { getProjectBySlug as getFallbackProjectBySlug, projects as fallbackProjects } from "@/data/projects";
import type { FaqItem } from "@/data/faqs";
import { faqs as fallbackFaqs } from "@/data/faqs";
import { sanityClient } from "@/lib/sanity/client";
import { faqsQuery, projectBySlugQuery, projectsQuery } from "@/lib/sanity/queries";
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

async function fetchFromSanity<T>(query: string, params?: QueryParams) {
  try {
    if (params) {
      return await sanityClient.fetch<T>(query, params);
    }

    return await sanityClient.fetch<T>(query);
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

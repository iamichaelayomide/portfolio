import { groq } from "next-sanity";

export const projectsQuery = groq`*[_type == "project"] | order(order asc, _createdAt desc) {
  "slug": slug.current,
  title,
  tagline,
  description,
  tags,
  "type": select(featured == true => "featured", null),
  category,
  year,
  role,
  duration,
  platform,
  "thumbnail": coalesce(thumbnailImage.asset->url, thumbnailUrl),
  "heroImage": coalesce(heroImage.asset->url, heroImageUrl),
  outcome,
  liveUrl,
  sections[] {
    id,
    title,
    content,
    quote,
    insights[] {
      title,
      text
    },
    steps,
    images[] {
      label,
      alt,
      aspect,
      "src": coalesce(image.asset->url, src)
    }
  }
}`;

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  tagline,
  description,
  tags,
  "type": select(featured == true => "featured", null),
  category,
  year,
  role,
  duration,
  platform,
  "thumbnail": coalesce(thumbnailImage.asset->url, thumbnailUrl),
  "heroImage": coalesce(heroImage.asset->url, heroImageUrl),
  outcome,
  liveUrl,
  sections[] {
    id,
    title,
    content,
    quote,
    insights[] {
      title,
      text
    },
    steps,
    images[] {
      label,
      alt,
      aspect,
      "src": coalesce(image.asset->url, src)
    }
  }
}`;

export const faqsQuery = groq`*[_type == "faq"] | order(order asc, _createdAt asc) {
  question,
  answer
}`;

export const homePageQuery = groq`*[_type == "homePage"][0] {
  hero {
    availabilityText,
    introText,
    title,
    description,
    primaryCtaLabel,
    secondaryCtaLabel,
    points,
    proof,
    profileImageUrl,
    cardEyebrow,
    cardTitle,
    cardHighlights,
    scrollLabel
  },
  aboutPreview {
    title,
    description,
    linkLabel,
    profileImageUrl,
    locationLabel,
    locationValue,
    footerTitle
  },
  services {
    mobileHeading,
    mobileDescription,
    desktopHeading,
    desktopDescription,
    services[] {
      key,
      icon,
      title,
      description,
      support
    },
    ctaTitle,
    ctaDescription,
    ctaSupport,
    ctaPrimaryLabel,
    ctaSecondaryLabel
  },
  process {
    heading,
    steps[] {
      number,
      title,
      description
    }
  },
  finalCta {
    title,
    description,
    primaryCtaLabel,
    secondaryCtaLabel,
    email,
    responseTime
  }
}`;

export const aboutPageQuery = groq`*[_type == "aboutPage"][0] {
  heroLabel,
  title,
  intro,
  profileImageUrl,
  skillsLabel,
  skills[] {
    label,
    value
  },
  experienceLabel,
  experience[] {
    range,
    role,
    context,
    description
  },
  principles,
  ctaTitle,
  primaryCtaLabel,
  secondaryCtaLabel
}`;

export const contactPageQuery = groq`*[_type == "contactPage"][0] {
  heroLabel,
  title,
  description,
  bestForEyebrow,
  bestForText,
  form {
    nameLabel,
    emailLabel,
    projectTypeLabel,
    messageLabel,
    projectTypes,
    namePlaceholder,
    emailPlaceholder,
    messagePlaceholder,
    submitLabel,
    submittingLabel
  },
  success {
    title,
    description,
    resetLabel
  },
  contactInfoTitle,
  contactLinks[] {
    key,
    icon,
    label,
    value,
    href
  },
  booking {
    title,
    subtitle,
    eyebrow,
    description,
    primaryCtaLabel,
    secondaryCtaLabel
  }
}`;

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc, _createdAt desc) {
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  categories,
  "featuredImage": featuredImage.asset->url,
  "featuredImageAlt": featuredImage.alt,
  body
}`;

export const latestPostsQuery = groq`*[_type == "post"] | order(publishedAt desc, _createdAt desc)[0...3] {
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  categories,
  "featuredImage": featuredImage.asset->url,
  "featuredImageAlt": featuredImage.alt,
  body
}`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  categories,
  "featuredImage": featuredImage.asset->url,
  "featuredImageAlt": featuredImage.alt,
  body
}`;

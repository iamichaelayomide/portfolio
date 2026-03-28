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

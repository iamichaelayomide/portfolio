import type { Metadata } from "next";
import AboutPreview from "@/components/sections/AboutPreview";
import FAQ from "@/components/sections/FAQ";
import FeaturedWork from "@/components/sections/FeaturedWork";
import FinalCTA from "@/components/sections/FinalCTA";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import WhatIDo from "@/components/sections/WhatIDo";
import { getFaqs, getHomeContent, getProjects } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Michael Ayomide - Product Designer",
  description:
    "Product designer for SaaS, websites, and ecommerce experiences that need stronger trust, cleaner UX, and better conversion.",
};

export default async function HomePage() {
  const [projects, faqs, homeContent] = await Promise.all([
    getProjects(),
    getFaqs(),
    getHomeContent(),
  ]);

  return (
    <>
      <Hero content={homeContent.hero} />
      <FeaturedWork projects={projects.slice(0, 5)} />
      <WhatIDo content={homeContent.services} />
      <Process content={homeContent.process} />
      <AboutPreview content={homeContent.aboutPreview} />
      <FAQ items={faqs} />
      <FinalCTA content={homeContent.finalCta} />
    </>
  );
}

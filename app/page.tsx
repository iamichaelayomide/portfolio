import type { Metadata } from "next";
import AboutPreview from "@/components/sections/AboutPreview";
import FAQ from "@/components/sections/FAQ";
import FeaturedWork from "@/components/sections/FeaturedWork";
import FinalCTA from "@/components/sections/FinalCTA";
import Hero from "@/components/sections/Hero";
import LiveBuilds from "@/components/sections/LiveBuilds";
import Process from "@/components/sections/Process";
import WhatIDo from "@/components/sections/WhatIDo";

export const metadata: Metadata = {
  title: "Michael Ayomide - Product Designer",
  description:
    "Product designer specializing in UX, UI, design systems, and high-conversion web experiences.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <LiveBuilds />
      <WhatIDo />
      <Process />
      <AboutPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}

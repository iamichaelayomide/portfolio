import type { Metadata } from "next";
import ContactFormSection from "@/components/sections/ContactFormSection";
import { getContactPageContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact - Michael Ayomide",
  description: "Tell Michael Ayomide what you are building and start a design conversation.",
};

export default async function ContactPage() {
  const content = await getContactPageContent();

  return <ContactFormSection content={content} />;
}

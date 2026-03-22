import type { Metadata } from "next";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact - Michael Ayomide",
  description: "Tell Michael Ayomide what you are building and start a design conversation.",
};

export default function ContactPage() {
  return <ContactFormSection />;
}

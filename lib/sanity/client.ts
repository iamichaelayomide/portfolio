import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/lib/sanity/env";

const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN;
export const hasSanityToken = Boolean(token);

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

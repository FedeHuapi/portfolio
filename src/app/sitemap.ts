import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// A single page for now: if more routes are added, list them here.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}

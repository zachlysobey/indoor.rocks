import type { MetadataRoute } from "next";
import { siteUrl } from "./siteUrl";

// A static export: written out as a file at build time.
export const dynamic = "force-static";

// Served as /robots.txt: crawl everything, and here's the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", siteUrl).href,
  };
}

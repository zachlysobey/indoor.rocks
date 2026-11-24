import type { MetadataRoute } from "next";
import { gymRoutes } from "./climbing-gyms/gymRoutes";
import { getData } from "./getData";
import { gymSlug } from "./gymSlug";
import { siteUrl } from "./siteUrl";

// A static export: written out as a file at build time.
export const dynamic = "force-static";

// Every page that isn't one per gym. sitemap.test.ts fails if a page is added without one here.
const pages = [
  "/",
  gymRoutes.index(),
  gymRoutes.map(),
  gymRoutes.list(),
  gymRoutes.chains(),
  "/home-walls/",
  "/tv/",
  "/climbing-holds/",
  "/climbing-shoes/",
];

// Served as /sitemap.xml: every page, then every gym's page. Just URLs: the build can't know when a
// page last changed, and Google ignores changeFrequency and priority.
export default function sitemap(): MetadataRoute.Sitemap {
  const gymPages = getData().climbingGyms.map(gym => gymRoutes.page(gymSlug(gym)));
  return [...pages, ...gymPages].map(path => ({ url: new URL(path, siteUrl).href }));
}

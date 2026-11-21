import { readdirSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { gymRoutes } from "./climbing-gyms/gymRoutes";
import { getData } from "./getData";
import { gymSlug } from "./gymSlug";
import sitemap from "./sitemap";

const urls = sitemap().map(entry => entry.url);

// Every page.tsx in the app with no [dynamic] segment, as the path it's served at.
const staticPages = readdirSync(__dirname, { recursive: true, encoding: "utf8" })
  .filter(file => /(^|\/)page\.tsx$/.test(file) && !file.includes("["))
  .map(file => `/${file.replace(/page\.tsx$/, "")}`);

describe("sitemap", () => {
  it("lists every page", () => {
    expect(staticPages.length).toBeGreaterThan(0);
    for (const page of staticPages) expect(urls).toContain(`https://indoor.rocks${page}`);
  });

  it("lists every gym's page", () => {
    for (const gym of getData().climbingGyms)
      expect(urls).toContain(`https://indoor.rocks${gymRoutes.page(gymSlug(gym))}`);
  });

  it("lists each URL once", () => {
    expect(new Set(urls).size).toBe(urls.length);
  });
});

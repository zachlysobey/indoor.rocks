import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import HomeWallsPage from "./page";

// The links are hand-written markup, so check the mistakes that are easy to make by hand.
describe("home walls page", () => {
  const hrefs = [...renderToStaticMarkup(<HomeWallsPage />).matchAll(/href="([^"]*)"/g)].map(
    ([, href]) => href,
  );

  it("has links", () => {
    expect(hrefs.length).toBeGreaterThan(0);
  });

  it("links only to valid https URLs", () => {
    for (const href of hrefs) {
      expect(new URL(href).protocol, href).toBe("https:");
    }
  });

  it("lists each link once", () => {
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
});

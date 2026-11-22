import type { ComponentType } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { siteUrl } from "./siteUrl";

// Link pages are hand-written markup, so check the mistakes that are easy to make by hand.
// Relative links resolve against the site, so links to other pages here pass too.
export function describeLinkPage(name: string, Page: ComponentType) {
  describe(name, () => {
    const hrefs = [...renderToStaticMarkup(<Page />).matchAll(/href="([^"]*)"/g)].map(
      ([, href]) => href,
    );

    it("has links", () => {
      expect(hrefs.length).toBeGreaterThan(0);
    });

    it("links only to valid https URLs", () => {
      for (const href of hrefs) {
        expect(new URL(href, siteUrl).protocol, href).toBe("https:");
      }
    });

    it("lists each link once", () => {
      expect(new Set(hrefs).size).toBe(hrefs.length);
    });
  });
}

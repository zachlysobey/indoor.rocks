import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { gymRoutes } from "./gymRoutes";
import { ViewToggle } from "./ViewToggle";

// The toggle's links, in order. Outside Next, <Link> drops the trailing slash that `trailingSlash`
// keeps in the app, so hrefs are compared without it.
const toggleLinks = (html: string) =>
  [...(html.match(/<nav aria-label="Gym views".*?<\/nav>/)?.[0] ?? "").matchAll(/<a ([^>]*)>([^<]*)<\/a>/g)].map(
    ([, attributes, label]) => ({
      href: attributes.match(/href="([^"]*)"/)?.[1],
      label,
      current: attributes.includes('aria-current="page"'),
    }),
  );

const withoutSlash = (href: string) => href.replace(/\/$/, "");

describe("ViewToggle", () => {
  const map = withoutSlash(gymRoutes.map());
  const list = withoutSlash(gymRoutes.list());

  it("links the map and list views, marking the current one", () => {
    expect(toggleLinks(renderToStaticMarkup(<ViewToggle current="map" />))).toEqual([
      { href: map, label: "Map", current: true },
      { href: list, label: "List", current: false },
    ]);
    expect(toggleLinks(renderToStaticMarkup(<ViewToggle current="list" />))).toEqual([
      { href: map, label: "Map", current: false },
      { href: list, label: "List", current: true },
    ]);
  });
});

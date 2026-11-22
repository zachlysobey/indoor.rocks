import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { gymRoutes } from "./climbing-gyms/gymRoutes";
import { featuredGym } from "./featuredGym";
import { getData } from "./getData";
import { gymSlug } from "./gymSlug";
import { describeLinkPage } from "./linkPageChecks";
import Home from "./page";

describeLinkPage("home page", Home);

describe("home page", () => {
  const html = renderToStaticMarkup(<Home />);
  // Outside Next, <Link> doesn't get the trailingSlash config and drops the slash, so compare without it.
  const unslashed = (href: string) => href.replace(/(.)\/$/, "$1");
  const hrefs = [...html.matchAll(/href="([^"]*)"/g)].map(([, href]) => unslashed(href));

  it("says how many gyms are listed", () => {
    expect(html).toContain(`${getData().climbingGyms.length} climbing gyms`);
  });

  it("links to each section", () => {
    for (const href of [gymRoutes.index(), "/home-walls", "/climbing-holds", "/tv"])
      expect(hrefs).toContain(unslashed(href));
  });

  it("features a listed gym, linked to its own page", () => {
    expect(getData().climbingGyms).toContain(featuredGym);
    expect(hrefs).toContain(unslashed(gymRoutes.page(gymSlug(featuredGym))));
  });
});

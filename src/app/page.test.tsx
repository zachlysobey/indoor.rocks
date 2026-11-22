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

  it("says how many gyms are listed", () => {
    expect(html).toContain(`${getData().climbingGyms.length} climbing gyms`);
  });

  it("links to each section", () => {
    for (const href of [gymRoutes.index(), "/home-walls", "/climbing-holds", "/tv"])
      expect(html).toContain(`href="${href}"`);
  });

  it("features a listed gym, linked to its own page", () => {
    expect(getData().climbingGyms).toContain(featuredGym);
    expect(html).toContain(`href="${gymRoutes.page(gymSlug(featuredGym))}"`);
  });
});

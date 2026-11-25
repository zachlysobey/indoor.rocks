import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { getData } from "../../getData";
import { gymSlug } from "../../gymSlug";
import { describeLinkPage } from "../../linkPageChecks";
import { gymsByCountry } from "../../regions";
import { gymRoutes } from "../gymRoutes";
import GymListPage from "./page";

describeLinkPage("list page", GymListPage);

describe("list page", () => {
  const html = renderToStaticMarkup(<GymListPage />);
  const countries = gymsByCountry(getData().climbingGyms);

  it("heads each country's regions with the country, in order", () => {
    const headings = [...html.matchAll(/id="((?:country|region)-[A-Z-]+)"/g)].map(([, id]) => id);
    expect(headings).toEqual(
      countries.flatMap(country => [
        `country-${country.id}`,
        ...country.regions.map(region => `region-${region.id}`),
      ]),
    );
  });

  it("links every gym's page", () => {
    for (const gym of getData().climbingGyms) expect(html).toContain(`href="${gymRoutes.page(gymSlug(gym))}"`);
  });
});

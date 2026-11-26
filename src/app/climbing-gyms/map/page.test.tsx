import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import { getData } from "../../getData";
import { gymsByCountry } from "../../regions";
import ClimbingGymMapPage from "./page";

// Rendered outside Next, there's no app router to give these: a fresh load, nothing in focus.
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: () => {} }),
  useSearchParams: () => new URLSearchParams(),
}));

describe("map page", () => {
  const html = renderToStaticMarkup(<ClimbingGymMapPage />);
  const countries = gymsByCountry(getData().climbingGyms);

  it("lists each country's regions under the country, in order", () => {
    const headings = [...html.matchAll(/<(h2|h3)[^>]*>.*?<span>([^<]*)<\/span>/g)].map(
      ([, level, name]) => `${level} ${name}`,
    );
    expect(headings).toEqual(
      countries.flatMap(country => [
        `h2 ${country.name}`,
        ...country.regions.map(region => `h3 ${region.name}`),
      ]),
    );
  });

  it("starts with every region collapsed", () => {
    expect(html).not.toContain('aria-expanded="true"');
    const regionCount = countries.reduce((sum, country) => sum + country.regions.length, 0);
    expect(html.match(/<ul [^>]*hidden=""/g)).toHaveLength(regionCount);
  });
});

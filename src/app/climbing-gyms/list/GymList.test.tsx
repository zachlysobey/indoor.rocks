import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { getData } from "../../getData";
import { gymSlug } from "../../gymSlug";
import { gymRoutes } from "../gymRoutes";
import { byName, filterGyms, noFilter, type GymFilter } from "./gymFilter";
import { GymList } from "./GymList";

// gymFilter.test.ts covers what matches; this covers what's shown.
const gyms = getData().climbingGyms;

const render = (props: Partial<Parameters<typeof GymList>[0]> = {}) =>
  renderToStaticMarkup(<GymList gyms={gyms} {...props} />);

const linkedPages = (html: string) => [...html.matchAll(/<a href="([^"]*)"/g)].map(([, href]) => href);
const pages = (shown: typeof gyms) => shown.map(gym => gymRoutes.page(gymSlug(gym)));
const status = (html: string) => html.match(/<output[^>]*>([^<]*)</)?.[1];
const filters = (html: string) => html.match(/<details[^>]*>.*?<\/details>/)?.[0] ?? "";

describe("GymList", () => {
  it("starts with every gym, by region", () => {
    const html = render();
    expect(status(html)).toBe(`${gyms.length} gyms`);
    expect(html).toContain('<option value="region" selected="">');
    expect(new Set(linkedPages(html))).toEqual(new Set(pages(gyms)));
  });

  it("shows only the gyms that match, with how many", () => {
    const filter: GymFilter = { query: "boulder", amenities: ["bouldering"] };
    const shown = filterGyms(gyms, filter);
    expect(shown.length).toBeGreaterThan(0);
    expect(shown.length).toBeLessThan(gyms.length);

    const html = render({ initialFilter: filter });
    expect(status(html)).toBe(`${shown.length} of ${gyms.length} gyms`);
    expect(new Set(linkedPages(html))).toEqual(new Set(pages(shown)));
    expect(html).toContain('value="boulder"');
    expect(html).toMatch(/<input type="checkbox" checked=""\/>Bouldering</);
  });

  it("keeps the amenity filters behind a closed disclosure, until it starts filtering by them", () => {
    expect(filters(render())).toMatch(/^<details class="[^"]*">/);
    expect(filters(render())).toMatch(/<summary>Filters<\/summary>/);
    expect(filters(render())).toContain('type="checkbox"');

    const html = filters(render({ initialFilter: { ...noFilter, amenities: ["bouldering", "lead"] } }));
    expect(html).toMatch(/^<details [^>]*open=""/);
    expect(html).toMatch(/<summary>Filters<span[^>]*>2<\/span><\/summary>/);
  });

  it("keeps the search plain, with how it works in a popover", () => {
    const html = render();
    expect(html).toContain('placeholder="Search gyms"');
    const target = html.match(/<button [^>]*popoverTarget="([^"]+)"[^>]*aria-label="How search works"/i)?.[1];
    expect(target).toBeTruthy();
    expect(html).toMatch(new RegExp(`<div id="${target}" popover="auto"[^>]*>[^<]*name, city, region, country and chain`));
  });

  it("labels the sort as a sort", () => {
    expect(render()).toMatch(/<label[^>]*><span>Sort by<\/span><select>/);
  });

  it("says when nothing matches", () => {
    const html = render({ initialFilter: { ...noFilter, query: "no such gym anywhere" } });
    expect(status(html)).toBe("No gyms match");
    expect(linkedPages(html)).toEqual([]);
  });

  it("lists A–Z in one list, without region headings", () => {
    const html = render({ initialSort: "name" });
    expect(linkedPages(html)).toEqual(pages(byName(gyms)));
    expect(html).not.toMatch(/<h[34]/);
  });
});

import { describe, expect, it } from "vitest";
import { amenities } from "../../data/amenities";
import type { AmenityName } from "../../data/amenityMap";
import type { Address, ClimbingGym } from "../../dataModel";
import { getData } from "../../getData";
import { byName, chainChoices, filterCount, filterGyms, independent, noFilter } from "./gymFilter";

const base = getData().climbingGyms[0];

const gym = (name: string, address: Partial<Address>, has: AmenityName[] = [], chain?: string): ClimbingGym => ({
  ...base,
  name,
  address: { ...base.address, ...address },
  amenities: amenities(...has),
  parent: chain ? { name: chain } : undefined,
});

const boulder = gym("Boulder Barn", { city: "Boulder", region: "CO", country: "US" }, ["bouldering"]);
const ropes = gym("Rope Works", { city: "Austin", region: "TX", country: "US" }, ["top-rope", "lead"], "Crux");
const both = gym("Café Cumbre", { city: "Santiago", region: "QUE", country: "MX" }, ["bouldering", "lead"]);
const gyms = [boulder, ropes, both];

const names = (found: ClimbingGym[]) => found.map(found => found.name);
const search = (query: string, has: AmenityName[] = [], country = "") =>
  names(filterGyms(gyms, { ...noFilter, query, country, amenities: has }));

describe("filterGyms", () => {
  it("keeps every gym with no filter", () => {
    expect(filterGyms(gyms, noFilter)).toEqual(gyms);
  });

  it("searches the name, city, region, country and chain", () => {
    expect(search("barn")).toEqual(["Boulder Barn"]);
    expect(search("austin")).toEqual(["Rope Works"]);
    expect(search("colorado")).toEqual(["Boulder Barn"]);
    expect(search("mexico")).toEqual(["Café Cumbre"]);
    expect(search("crux")).toEqual(["Rope Works"]);
  });

  it("ignores case, accents and extra spaces", () => {
    expect(search("  CAFE  ")).toEqual(["Café Cumbre"]);
    expect(search("queretaro")).toEqual(["Café Cumbre"]);
  });

  it("needs every word to match, in any order", () => {
    expect(search("texas works")).toEqual(["Rope Works"]);
    expect(search("texas barn")).toEqual([]);
  });

  it("needs every amenity asked for", () => {
    expect(search("", ["bouldering"])).toEqual(["Boulder Barn", "Café Cumbre"]);
    expect(search("", ["bouldering", "lead"])).toEqual(["Café Cumbre"]);
    expect(search("barn", ["lead"])).toEqual([]);
  });

  it("keeps only the country asked for, alongside the other filters", () => {
    expect(search("", [], "US")).toEqual(["Boulder Barn", "Rope Works"]);
    expect(search("", [], "MX")).toEqual(["Café Cumbre"]);
    expect(search("", [], "CA")).toEqual([]);
    expect(search("", ["bouldering"], "US")).toEqual(["Boulder Barn"]);
    expect(search("austin", [], "MX")).toEqual([]);
  });

  it("keeps gyms in any of the chains asked for, independents included", () => {
    const inChains = (...chains: string[]) => names(filterGyms(gyms, { ...noFilter, chains }));
    expect(inChains("Crux")).toEqual(["Rope Works"]);
    expect(inChains(independent)).toEqual(["Boulder Barn", "Café Cumbre"]);
    expect(inChains("Crux", independent)).toEqual(["Boulder Barn", "Rope Works", "Café Cumbre"]);
    expect(names(filterGyms(gyms, { ...noFilter, chains: ["Crux"], amenities: ["bouldering"] }))).toEqual([]);
  });
});

describe("chainChoices", () => {
  it("puts independents first, then the chains biggest first, each with its count", () => {
    // gymChains groups by company, so the second Crux gym shares the first's.
    const more = [...gyms, { ...gym("Crux Two", {}), parent: ropes.parent }, gym("Solo Spot", {}, [], "Solo")];
    expect(chainChoices(more)).toEqual([
      { chain: independent, count: 2 },
      { chain: "Crux", count: 2 },
      { chain: "Solo", count: 1 },
    ]);
  });
});

describe("filterCount", () => {
  it("counts the country, each chain and each amenity, but not the search", () => {
    expect(filterCount(noFilter)).toBe(0);
    expect(filterCount({ ...noFilter, query: "barn" })).toBe(0);
    expect(filterCount({ ...noFilter, country: "US" })).toBe(1);
    expect(filterCount({ query: "", country: "CA", chains: ["Crux", independent], amenities: ["lead"] })).toBe(4);
  });
});

describe("byName", () => {
  it("sorts A–Z, ignoring case and accents, without changing its input", () => {
    const input = [gym("delta", {}), gym("Éclair", {}), gym("Alpha", {})];
    expect(names(byName(input))).toEqual(["Alpha", "delta", "Éclair"]);
    expect(names(input)).toEqual(["delta", "Éclair", "Alpha"]);
  });
});

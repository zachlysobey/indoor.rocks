import { describe, expect, it } from "vitest";
import { amenities } from "../../data/amenities";
import type { AmenityName } from "../../data/amenityMap";
import type { Address, ClimbingGym } from "../../dataModel";
import { getData } from "../../getData";
import { byName, filterGyms, noFilter } from "./gymFilter";

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
const search = (query: string, has: AmenityName[] = []) => names(filterGyms(gyms, { query, amenities: has }));

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
});

describe("byName", () => {
  it("sorts A–Z, ignoring case and accents, without changing its input", () => {
    const input = [gym("delta", {}), gym("Éclair", {}), gym("Alpha", {})];
    expect(names(byName(input))).toEqual(["Alpha", "delta", "Éclair"]);
    expect(names(input)).toEqual(["delta", "Éclair", "Alpha"]);
  });
});

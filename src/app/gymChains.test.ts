import { readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import type { ClimbingGym, Company } from "./dataModel";
import { getData } from "./getData";
import { gymChains } from "./gymChains";

const gym = (name: string, parent?: Company): ClimbingGym => ({
  name,
  parent,
  amenities: [],
  address: {
    streetNumber: "1",
    streetName: "Main St",
    city: "Anytown",
    state: "NY",
    postalCode: "10001",
    country: "USA",
    latitude: 40,
    longitude: -74,
  },
});

describe("gymChains", () => {
  const big: Company = { name: "Big" };
  const alpha: Company = { name: "Alpha" };
  const zulu: Company = { name: "Zulu" };
  const gyms = [
    gym("Zulu 1", zulu),
    gym("Big 1", big),
    gym("Independent"),
    gym("Alpha 1", alpha),
    gym("Big 2", big),
  ];

  it("groups gyms by parent, biggest first, then by name", () => {
    expect(gymChains(gyms).map(({ company, gyms }) => [company.name, gyms.map(g => g.name)])).toEqual([
      ["Big", ["Big 1", "Big 2"]],
      ["Alpha", ["Alpha 1"]],
      ["Zulu", ["Zulu 1"]],
    ]);
  });

  it("leaves out gyms with no parent", () => {
    expect(gymChains([gym("Independent")])).toEqual([]);
  });
});

// The real data: every company file, like "companies/movement.ts".
describe("companies", () => {
  const dataDir = join(__dirname, "data");
  const companyFiles = readdirSync(join(dataDir, "companies")).map(file => `companies/${file}`);
  const chains = gymChains(getData().climbingGyms);

  it("finds the company files", () => {
    expect(companyFiles.length).toBeGreaterThan(0);
  });

  // A company no gym names as its parent would never show on the chains page.
  it.each(companyFiles)("has gyms for the company in %s", async file => {
    for (const company of Object.values(await import(join(dataDir, file))))
      expect(chains.map(chain => chain.company)).toContain(company);
  });

  it("links only to https websites", () => {
    for (const { company } of chains)
      if (company.website) expect(new URL(company.website).protocol, company.name).toBe("https:");
  });
});

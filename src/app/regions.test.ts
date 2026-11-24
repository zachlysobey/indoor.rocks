import { describe, expect, it } from "vitest";
import { getData } from "./getData";
import { countries, regionId, regions } from "./regions";

// Rough [south, west, north, east] boxes around each region, by regionId, generous enough to need no
// upkeep. They catch a gym pinned in the wrong region or with a dropped minus sign, not a wrong street.
const bounds: Record<string, [number, number, number, number]> = {
  "US-NY": [40.4, -79.8, 45.1, -71.8],
  "US-NJ": [38.9, -75.6, 41.4, -73.8],
  "US-PA": [39.7, -80.6, 42.3, -74.6],
  "US-DE": [38.4, -75.8, 39.9, -75.0],
  "US-MD": [37.8, -79.5, 39.8, -75.0],
  "US-DC": [38.7, -77.2, 39.0, -76.9],
  "US-VA": [36.5, -83.7, 39.5, -75.2],
  "US-WV": [37.2, -82.7, 40.7, -77.7],
  "US-OH": [38.4, -84.9, 42.0, -80.5],
  "US-KY": [36.5, -89.6, 39.2, -81.9],
  "US-IN": [37.7, -88.1, 41.8, -84.7],
  "US-MI": [41.6, -90.5, 48.3, -82.1],
  "US-NC": [33.8, -84.4, 36.6, -75.4],
  "US-SC": [32.0, -83.4, 35.3, -78.5],
  "US-GA": [30.3, -85.7, 35.0, -80.8],
  "US-FL": [24.4, -87.7, 31.1, -79.9],
  "US-TN": [34.9, -90.4, 36.7, -81.6],
  "US-AL": [30.1, -88.5, 35.1, -84.8],
  "US-MS": [30.1, -91.7, 35.0, -88.1],
  "US-AR": [33.0, -94.7, 36.5, -89.6],
  "US-LA": [28.9, -94.1, 33.1, -88.8],
  "US-MO": [35.9, -95.8, 40.7, -89.1],
  "US-CT": [40.9, -73.8, 42.1, -71.7],
  "US-RI": [41.1, -71.9, 42.1, -71.1],
  "US-MA": [41.2, -73.6, 42.9, -69.9],
  "US-VT": [42.7, -73.5, 45.1, -71.4],
  "US-NH": [42.6, -72.6, 45.4, -70.6],
  "US-ME": [42.9, -71.1, 47.5, -66.9],
  "US-KS": [36.9, -102.1, 40.1, -94.5],
  "US-OK": [33.6, -103.1, 37.1, -94.4],
  "US-IA": [40.3, -96.7, 43.6, -90.1],
  "US-NE": [39.9, -104.1, 43.1, -95.3],
  "US-ND": [45.9, -104.1, 49.0, -96.5],
  "US-SD": [42.4, -104.1, 46.0, -96.4],
  "US-MT": [44.3, -116.1, 49.0, -104.0],
  "US-WY": [40.9, -111.1, 45.0, -104.0],
  "US-ID": [41.9, -117.3, 49.0, -111.0],
  "US-AK": [51.2, -180.0, 71.5, -129.9],
  "US-HI": [18.9, -160.3, 22.3, -154.7],
  "US-NM": [31.3, -109.1, 37.0, -103.0],
  "US-NV": [35.0, -120.0, 42.0, -114.0],
  "US-MN": [43.4, -97.3, 49.4, -89.4],
  "US-WI": [42.4, -92.9, 47.1, -86.7],
  "US-AZ": [31.3, -114.9, 37.0, -109.0],
  "US-OR": [41.9, -124.7, 46.3, -116.4],
  "US-UT": [36.9, -114.1, 42.1, -109.0],
  "US-WA": [45.5, -124.9, 49.1, -116.9],
  "US-CO": [36.9, -109.1, 41.1, -102.0],
  "US-CA": [32.5, -124.5, 42.1, -114.1],
  "US-TX": [25.8, -106.7, 36.6, -93.5],
  "US-IL": [36.9, -91.6, 42.6, -87.0],
  "CA-BC": [48.2, -139.1, 60.0, -114.0],
};

describe("regions", () => {
  const gyms = getData().climbingGyms;

  it("lists countries by their ISO 3166-1 alpha-2 codes, once each", () => {
    const codes = countries.map(country => country.code);
    for (const code of codes) expect(code).toMatch(/^[A-Z]{2}$/);
    expect(new Set(codes).size).toBe(codes.length);
  });

  it.each(countries)("lists $name's regions alphabetically by name", ({ regions }) => {
    const names = regions.map(region => region.name);
    expect(names).toEqual(names.toSorted((a, b) => a.localeCompare(b, "en")));
  });

  // Codes repeat across countries ("WA"), but a repeat within one would merge two groups.
  it.each(countries)("gives each of $name's regions a unique code", ({ regions }) => {
    const codes = regions.map(region => region.code);
    expect(new Set(codes).size).toBe(codes.length);
  });

  it("lists every gym's region", () => {
    const listed = regions.map(region => region.id);
    for (const gym of gyms) expect(listed, gym.name).toContain(regionId(gym.address));
  });

  it("puts every gym inside its region", () => {
    for (const { name, address } of gyms) {
      const [south, west, north, east] = bounds[regionId(address)];
      expect(address.latitude, name).toBeGreaterThan(south);
      expect(address.latitude, name).toBeLessThan(north);
      expect(address.longitude, name).toBeGreaterThan(west);
      expect(address.longitude, name).toBeLessThan(east);
    }
  });
});

import { describe, expect, it } from "vitest";
import { getData } from "./getData";
import { states } from "./states";

// Rough [south, west, north, east] boxes around each state, generous enough to need no upkeep.
// They catch a gym pinned in the wrong state or with a dropped minus sign, not a wrong street.
const bounds: Record<string, [number, number, number, number]> = {
  NY: [40.4, -79.8, 45.1, -71.8],
  NJ: [38.9, -75.6, 41.4, -73.8],
  PA: [39.7, -80.6, 42.3, -74.6],
  DE: [38.4, -75.8, 39.9, -75.0],
  MD: [37.8, -79.5, 39.8, -75.0],
  DC: [38.7, -77.2, 39.0, -76.9],
  VA: [36.5, -83.7, 39.5, -75.2],
  WV: [37.2, -82.7, 40.7, -77.7],
  OH: [38.4, -84.9, 42.0, -80.5],
  KY: [36.5, -89.6, 39.2, -81.9],
  IN: [37.7, -88.1, 41.8, -84.7],
  MI: [41.6, -90.5, 48.3, -82.1],
  NC: [33.8, -84.4, 36.6, -75.4],
  SC: [32.0, -83.4, 35.3, -78.5],
  GA: [30.3, -85.7, 35.0, -80.8],
  FL: [24.4, -87.7, 31.1, -79.9],
  TN: [34.9, -90.4, 36.7, -81.6],
  AL: [30.1, -88.5, 35.1, -84.8],
  MS: [30.1, -91.7, 35.0, -88.1],
  AR: [33.0, -94.7, 36.5, -89.6],
  LA: [28.9, -94.1, 33.1, -88.8],
  MO: [35.9, -95.8, 40.7, -89.1],
  CT: [40.9, -73.8, 42.1, -71.7],
  RI: [41.1, -71.9, 42.1, -71.1],
  MA: [41.2, -73.6, 42.9, -69.9],
  VT: [42.7, -73.5, 45.1, -71.4],
  NH: [42.6, -72.6, 45.4, -70.6],
  ME: [42.9, -71.1, 47.5, -66.9],
  KS: [36.9, -102.1, 40.1, -94.5],
  OK: [33.6, -103.1, 37.1, -94.4],
  IA: [40.3, -96.7, 43.6, -90.1],
  NE: [39.9, -104.1, 43.1, -95.3],
};

describe("states", () => {
  const gyms = getData().climbingGyms;

  it("is alphabetical by name", () => {
    const names = states.map(state => state.name);
    expect(names).toEqual(names.toSorted((a, b) => a.localeCompare(b, "en")));
  });

  it("lists every state that has a gym", () => {
    const listed = states.map(state => state.code);
    for (const gym of gyms) expect(listed, gym.name).toContain(gym.address.state);
  });

  it("puts every gym inside its state", () => {
    for (const { name, address } of gyms) {
      const [south, west, north, east] = bounds[address.state];
      expect(address.latitude, name).toBeGreaterThan(south);
      expect(address.latitude, name).toBeLessThan(north);
      expect(address.longitude, name).toBeGreaterThan(west);
      expect(address.longitude, name).toBeLessThan(east);
    }
  });
});

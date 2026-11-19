import { describe, expect, it } from "vitest";
import { getData } from "./getData";
import { states } from "./states";

// Rough [south, west, north, east] boxes around each state, generous enough to need no upkeep.
// They catch a gym pinned in the wrong state or with a dropped minus sign, not a wrong street.
const bounds: Record<string, [number, number, number, number]> = {
  NY: [40.4, -79.8, 45.1, -71.8],
  NJ: [38.9, -75.6, 41.4, -73.8],
  CT: [40.9, -73.8, 42.1, -71.7],
  RI: [41.1, -71.9, 42.1, -71.1],
  MA: [41.2, -73.6, 42.9, -69.9],
  VT: [42.7, -73.5, 45.1, -71.4],
  NH: [42.6, -72.6, 45.4, -70.6],
  ME: [42.9, -71.1, 47.5, -66.9],
};

describe("states", () => {
  const gyms = getData().climbingGyms;

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

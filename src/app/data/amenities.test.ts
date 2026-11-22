import { describe, expect, it } from "vitest";
import { amenities } from "./amenities";

describe("amenities", () => {
  it("resolves names to labeled amenities, preserving order", () => {
    expect(amenities("lead", "bouldering")).toEqual([
      { name: "lead", label: "Lead climbing" },
      { name: "bouldering", label: "Bouldering" },
    ]);
  });

  it("resolves the corrected aerial-silks identifier", () => {
    expect(amenities("aerial-silks")).toEqual([
      { name: "aerial-silks", label: "Aerial silks" },
    ]);
  });

  it("returns an empty list when given no names", () => {
    expect(amenities()).toEqual([]);
  });
});

import { describe, expect, it } from "vitest";
import { amenities } from "./amenities";

describe("amenities", () => {
  it("maps names to amenities, preserving order", () => {
    expect(amenities("lead", "bouldering")).toEqual([{ name: "lead" }, { name: "bouldering" }]);
  });

  it("returns an empty list when given no names", () => {
    expect(amenities()).toEqual([]);
  });
});

import { describe, expect, it } from "vitest";
import { getData } from "./getData";
import { gymBySlug } from "./gymBySlug";
import { gymSlug } from "./gymSlug";

describe("gymBySlug", () => {
  it("finds every gym by its own slug", () => {
    for (const gym of getData().climbingGyms) expect(gymBySlug(gymSlug(gym))).toBe(gym);
  });

  it("finds nothing for a slug no gym has", () => {
    expect(gymBySlug("not-a-gym")).toBeUndefined();
  });
});

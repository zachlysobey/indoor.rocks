import { describe, expect, it } from "vitest";
import { getData } from "./getData";
import { gymSlug } from "./gymSlug";

describe("gymSlug", () => {
  const gym = getData().climbingGyms[0];

  it("lowercases and hyphenates the name", () => {
    expect(gymSlug({ ...gym, name: "The Gravity Vault Hoboken" })).toBe("the-gravity-vault-hoboken");
  });

  it("drops punctuation and accents, and trims stray hyphens", () => {
    expect(gymSlug({ ...gym, name: " Café Rocks! (LIC) " })).toBe("cafe-rocks-lic");
  });

  it("gives every gym a distinct slug", () => {
    const slugs = getData().climbingGyms.map(gymSlug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { getData } from "../getData";
import { GymDetails } from "./GymDetails";

describe("GymDetails", () => {
  it("shows human-readable amenity labels, including aerial silks", () => {
    const gym = {
      ...getData().climbingGyms[0],
      amenities: [{ name: "auto-belays" as const }, { name: "aerial-silks" as const }],
    };
    const html = renderToStaticMarkup(<GymDetails gym={gym} />);

    expect(html).toContain("Auto-belays");
    expect(html).toContain("Aerial silks");
    expect(html).not.toContain("aerial-silks");
  });
});

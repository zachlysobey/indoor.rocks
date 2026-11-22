import { describe, expect, it } from "vitest";
import { gymRoutes } from "./climbing-gyms/gymRoutes";
import { getData } from "./getData";
import { amenities } from "./data/amenities";
import { gymPageMetadata } from "./gymPageMetadata";
import { gymSlug } from "./gymSlug";

describe("gymPageMetadata", () => {
  it("includes the gym's name, location, and canonical URL", () => {
    const gym = getData().climbingGyms[0];
    const metadata = gymPageMetadata(gym);
    expect(metadata.title).toBe(`${gym.name} · indoor.rocks`);
    expect(metadata.description).toContain(gym.address.city);
    expect(metadata.description).toContain(gym.address.state);
    expect(metadata.alternates?.canonical).toBe(gymRoutes.page(gymSlug(gym)));
    expect(metadata.openGraph).toEqual(expect.objectContaining({
      title: metadata.title,
      description: metadata.description,
      url: gymRoutes.page(gymSlug(gym)),
    }));
    expect(metadata.twitter).toEqual(expect.objectContaining({
      card: "summary",
      title: metadata.title,
      description: metadata.description,
    }));
  });

  it("only describes amenities and website when they are present", () => {
    const gym = {
      ...getData().climbingGyms[0],
      amenities: [],
      website: undefined,
    };
    const minimal = gymPageMetadata(gym);
    expect(minimal.description).toBe(
      `Find ${gym.name} in ${gym.address.city}, ${gym.address.state}. View its address on indoor.rocks.`,
    );

    const complete = gymPageMetadata({
      ...gym,
      amenities: amenities("bouldering"),
      website: "https://example.com",
    });
    expect(complete.description).toContain("listed amenities");
    expect(complete.description).toContain("a link to the gym's website");
    expect(complete.description).not.toContain("https://example.com");
  });
});

import { describe, expect, it } from "vitest";
import { gymRoutes } from "./climbing-gyms/gymRoutes";
import { getData } from "./getData";
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
});

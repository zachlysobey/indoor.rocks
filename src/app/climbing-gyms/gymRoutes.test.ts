import { describe, expect, it } from "vitest";
import { gymRoutes } from "./gymRoutes";

describe("gymRoutes", () => {
  it("is /climbing-gyms/ for the gyms' landing page", () => {
    expect(gymRoutes.index()).toBe("/climbing-gyms/");
  });

  it("puts a gym's page under /climbing-gym/, with the trailing slash the export uses", () => {
    expect(gymRoutes.page("vital-brooklyn")).toBe("/climbing-gym/vital-brooklyn/");
  });

  it("links back to the map with the gym in focus", () => {
    expect(gymRoutes.map("vital-brooklyn")).toBe("/climbing-gyms/map/?focus=vital-brooklyn");
  });

  it("is the bare map with nothing in focus", () => {
    expect(gymRoutes.map()).toBe("/climbing-gyms/map/");
  });

  it("puts the list of every gym, without the map, at /climbing-gyms/list/", () => {
    expect(gymRoutes.list()).toBe("/climbing-gyms/list/");
  });

  it("puts the chains, with their gyms, at /climbing-gyms/chains/", () => {
    expect(gymRoutes.chains()).toBe("/climbing-gyms/chains/");
  });

  it("links back to the chains with the gym in focus", () => {
    expect(gymRoutes.chains("vital-brooklyn")).toBe("/climbing-gyms/chains/?focus=vital-brooklyn");
  });
});

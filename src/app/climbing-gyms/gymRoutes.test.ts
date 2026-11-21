import { describe, expect, it } from "vitest";
import { gymRoutes } from "./gymRoutes";

describe("gymRoutes", () => {
  it("puts a gym's page under /climbing-gyms/, with the trailing slash the export uses", () => {
    expect(gymRoutes.page("vital-brooklyn")).toBe("/climbing-gyms/vital-brooklyn/");
  });

  it("links back to the list with the gym in focus", () => {
    expect(gymRoutes.list("vital-brooklyn")).toBe("/climbing-gyms/?focus=vital-brooklyn");
  });

  it("is the bare list with nothing in focus", () => {
    expect(gymRoutes.list()).toBe("/climbing-gyms/");
  });
});

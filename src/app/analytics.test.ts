import { describe, expect, it } from "vitest";
import { gaMeasurementId } from "./analytics";

describe("gaMeasurementId", () => {
  it("disables analytics when unset or empty", () => {
    expect(gaMeasurementId(undefined)).toBeUndefined();
    expect(gaMeasurementId("")).toBeUndefined();
  });

  it("passes a measurement ID through", () => {
    expect(gaMeasurementId("G-AB12CD34EF")).toBe("G-AB12CD34EF");
  });

  it("rejects anything else, including Tag Manager container IDs", () => {
    for (const bad of ["GTM-AB12CD3", "UA-12345-1", "G-", "g-ab12cd3", " G-AB12CD3"])
      expect(() => gaMeasurementId(bad)).toThrow(/GA4 measurement ID/);
  });
});

import { describe, expect, it } from "vitest";
import { gaMeasurementId } from "./analytics";

describe("gaMeasurementId", () => {
  it("leaves pages untagged when unset or empty", () => {
    expect(gaMeasurementId(undefined)).toBeUndefined();
    expect(gaMeasurementId("")).toBeUndefined();
  });

  it("passes a GA4 measurement ID through", () => {
    expect(gaMeasurementId("G-AB12CD34EF")).toBe("G-AB12CD34EF");
  });

  it("rejects anything else", () => {
    for (const bad of ["UA-12345-1", "GTM-ABC123", "G-", "g-ab12cd34ef", " G-AB12CD34EF"])
      expect(() => gaMeasurementId(bad)).toThrow(/GA4 measurement ID/);
  });
});

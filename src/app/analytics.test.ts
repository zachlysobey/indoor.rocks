import { afterEach, describe, expect, it, vi } from "vitest";
import { gaMeasurementId } from "./analytics";

describe("gaMeasurementId", () => {
  afterEach(() => vi.unstubAllEnvs());

  it("disables analytics when unset or empty", () => {
    vi.stubEnv("NEXT_PUBLIC_GA_MEASUREMENT_ID", undefined);
    expect(gaMeasurementId()).toBeUndefined();
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

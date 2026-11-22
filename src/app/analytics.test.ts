import { describe, expect, it } from "vitest";
import { gtmContainerId } from "./analytics";

describe("gtmContainerId", () => {
  it("loads no container when unset or empty", () => {
    expect(gtmContainerId(undefined)).toBeUndefined();
    expect(gtmContainerId("")).toBeUndefined();
  });

  it("passes a container ID through", () => {
    expect(gtmContainerId("GTM-AB12CD3")).toBe("GTM-AB12CD3");
  });

  it("rejects anything else, like a GA4 measurement ID", () => {
    for (const bad of ["G-AB12CD34EF", "UA-12345-1", "GTM-", "gtm-ab12cd3", " GTM-AB12CD3"])
      expect(() => gtmContainerId(bad)).toThrow(/Tag Manager container ID/);
  });
});

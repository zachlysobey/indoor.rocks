import { describe, expect, it } from "vitest";
import { formatAddress } from "./address";

describe("formatAddress", () => {
  it("renders a single-line US address, omitting country and coordinates", () => {
    expect(
      formatAddress({
        streetNumber: "123",
        streetName: "Main St",
        city: "Brooklyn",
        state: "NY",
        postalCode: "11215",
        country: "USA",
        latitude: 40.67,
        longitude: -73.99,
      }),
    ).toBe("123 Main St, Brooklyn, NY 11215");
  });
});

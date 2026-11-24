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

  it("renders a Canadian address the same way, with its province and postal code", () => {
    expect(
      formatAddress({
        streetNumber: "520",
        streetName: "Industrial Ave",
        city: "Vancouver",
        state: "BC",
        postalCode: "V6A 2P3",
        country: "Canada",
        latitude: 49.27,
        longitude: -123.09,
      }),
    ).toBe("520 Industrial Ave, Vancouver, BC V6A 2P3");
  });
});

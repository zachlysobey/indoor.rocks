import { describe, expect, it } from "vitest";
import { formatAddress } from "./address";

describe("formatAddress", () => {
  it("renders a single-line US address, omitting country and coordinates", () => {
    expect(
      formatAddress({
        streetNumber: "123",
        streetName: "Main St",
        city: "Brooklyn",
        region: "NY",
        postalCode: "11215",
        country: "US",
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
        region: "BC",
        postalCode: "V6A 2P3",
        country: "CA",
        latitude: 49.27,
        longitude: -123.09,
      }),
    ).toBe("520 Industrial Ave, Vancouver, BC V6A 2P3");
  });

  it("puts the street name before the number in a Mexican address", () => {
    expect(
      formatAddress({
        streetNumber: "195",
        streetName: "Av. José Martí",
        city: "Ciudad de México",
        region: "CMX",
        postalCode: "11800",
        country: "MX",
        latitude: 19.4,
        longitude: -99.18,
      }),
    ).toBe("Av. José Martí 195, Ciudad de México, CMX 11800");
  });

  it("leaves out a missing street number or postal code", () => {
    expect(
      formatAddress({
        streetNumber: "",
        streetName: "Calle 35 x 18",
        city: "Mérida",
        region: "YUC",
        postalCode: "",
        country: "MX",
        latitude: 21.0,
        longitude: -89.64,
      }),
    ).toBe("Calle 35 x 18, Mérida, YUC");
  });
});

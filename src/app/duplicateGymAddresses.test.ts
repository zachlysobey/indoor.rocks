import { describe, expect, it } from "vitest";
import { getData } from "./getData";
import { duplicateGymAddresses } from "./duplicateGymAddresses";

describe("duplicateGymAddresses", () => {
  const sample = getData().climbingGyms[0];

  it("recognizes the same address despite formatting differences", () => {
    const duplicate = {
      ...sample,
      name: "Another climbing gym",
      address: {
        ...sample.address,
        streetName: sample.address.streetName.toUpperCase(),
        city: sample.address.city.toUpperCase(),
      },
    };
    expect(duplicateGymAddresses([sample, duplicate])).toEqual([
      expect.objectContaining({ gyms: [duplicate.name, sample.name].sort() }),
    ]);
  });

  it("does not flag distinct addresses", () => {
    const other = {
      ...sample,
      name: "A different gym",
      address: { ...sample.address, streetNumber: "999999" },
    };
    expect(duplicateGymAddresses([sample, other])).toEqual([]);
  });

  it("does not flag records missing a street address", () => {
    const unknown = { ...sample, address: { ...sample.address, streetNumber: "" } };
    expect(duplicateGymAddresses([unknown, unknown])).toEqual([]);
  });
});

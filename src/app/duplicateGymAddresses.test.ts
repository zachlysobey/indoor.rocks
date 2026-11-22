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

  it("flags the same street address even with different postal codes", () => {
    const duplicate = {
      ...sample,
      name: "Other gym",
      address: { ...sample.address, postalCode: "99999" },
    };
    expect(duplicateGymAddresses([sample, duplicate])).toHaveLength(1);
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
  it("does not contain duplicate street addresses in the real gym dataset", () => {
    const duplicates = duplicateGymAddresses(getData().climbingGyms);
    // If two separate gyms legitimately share an address, document and allowlist
    // that exact pair rather than silently ignoring collisions.
    expect(duplicates).toEqual([]);
  });
});

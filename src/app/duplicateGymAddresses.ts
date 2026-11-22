import type { ClimbingGym } from "./dataModel";

// Conservative matching: punctuation, capitalization, spacing, and common street suffixes.
// Check for collisions in CI; legitimate co-located gyms need an explicit exception.
const normalize = (value: string): string =>
  value
    .toLowerCase()
    .replace(/\b(street|st)\b/g, "st")
    .replace(/\b(avenue|ave)\b/g, "ave")
    .replace(/\b(road|rd)\b/g, "rd")
    .replace(/[^a-z0-9]/g, "");

export type AddressCollision = {
  address: string;
  gyms: string[];
};

export function duplicateGymAddresses(gyms: readonly ClimbingGym[]): AddressCollision[] {
  const byAddress = new Map<string, ClimbingGym[]>();
  for (const gym of gyms) {
    const { streetNumber, streetName, city, state, country } = gym.address;
    if (!streetNumber.trim() || !streetName.trim() || !city.trim()) continue;
    const key = [country, state, city, streetNumber, streetName]
      .map(normalize)
      .join("|");
    const atAddress = byAddress.get(key) ?? [];
    atAddress.push(gym);
    byAddress.set(key, atAddress);
  }

  return [...byAddress.values()]
    .filter(atAddress => atAddress.length > 1)
    .map(atAddress => ({
      address: [
        atAddress[0].address.streetNumber,
        atAddress[0].address.streetName,
        atAddress[0].address.city,
        atAddress[0].address.state,
      ].join(" "),
      gyms: atAddress.map(gym => gym.name).sort(),
    }));
}

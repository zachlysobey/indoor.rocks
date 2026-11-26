import type { Address } from "./dataModel";

// Countries that write the street name before the number ("Av. José Martí 195").
const nameFirst = new Set(["MX"]);

const join = (...parts: string[]): string => parts.filter(Boolean).join(" ");

// One line, leaving out any part a gym's data doesn't have (some Mexican addresses have no number).
export const formatAddress = (a: Address): string => {
  const street = nameFirst.has(a.country) ? join(a.streetName, a.streetNumber) : join(a.streetNumber, a.streetName);
  return `${street}, ${a.city}, ${join(a.region, a.postalCode)}`;
};

import type { Address } from "./dataModel";

export const formatAddress = (a: Address): string =>
  `${a.streetNumber} ${a.streetName}, ${a.city}, ${a.region} ${a.postalCode}`;

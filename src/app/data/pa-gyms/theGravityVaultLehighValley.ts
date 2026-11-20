import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gravityVault } from "../companies/gravityVault";

export const theGravityVaultLehighValley: ClimbingGym = {
  name: 'The Gravity Vault Lehigh Valley',
  parent: gravityVault,
  address: {
    streetNumber: '1951',
    streetName: 'Whitehall Mall',
    city: 'Whitehall',
    state: 'PA',
    postalCode: '18052',
    country: 'USA',
    latitude: 40.634,
    longitude: -75.490,
  },
  amenities: amenities(),
};

import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gravityVault } from "../companies/gravityVault";

export const theGravityVaultRadnor: ClimbingGym = {
  name: 'The Gravity Vault Radnor',
  website: 'https://gravityvault.com/locations/radnor-pa',
  parent: gravityVault,
  address: {
    streetNumber: '175',
    streetName: 'King of Prussia Rd',
    city: 'Radnor',
    state: 'PA',
    postalCode: '19087',
    country: 'USA',
    latitude: 40.042,
    longitude: -75.369,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};

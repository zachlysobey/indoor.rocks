import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gravityVault } from "../companies/gravityVault";

export const theGravityVaultFlemington: ClimbingGym = {
  name: 'The Gravity Vault Flemington',
  website: 'https://gravityvault.com/locations/flemington-nj',
  parent: gravityVault,
  address: {
    streetNumber: '17',
    streetName: 'Minneakoning Rd',
    city: 'Flemington',
    state: 'NJ',
    postalCode: '08822',
    country: 'USA',
    latitude: 40.530,
    longitude: -74.851,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights'),
};

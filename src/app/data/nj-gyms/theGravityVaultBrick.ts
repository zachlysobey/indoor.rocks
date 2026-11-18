import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gravityVault } from "../companies/gravityVault";

export const theGravityVaultBrick: ClimbingGym = {
  name: 'The Gravity Vault Brick',
  website: 'https://gravityvault.com/locations/brick-nj',
  parent: gravityVault,
  address: {
    streetNumber: '110',
    streetName: 'Brick Plaza',
    city: 'Brick',
    state: 'NJ',
    postalCode: '08723',
    country: 'USA',
    latitude: 40.058,
    longitude: -74.143,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};

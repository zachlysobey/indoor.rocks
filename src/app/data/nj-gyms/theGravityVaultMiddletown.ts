import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gravityVault } from "../companies/gravityVault";

export const theGravityVaultMiddletown: ClimbingGym = {
  name: 'The Gravity Vault Middletown',
  website: 'https://gravityvault.com/locations/middletown-nj',
  parent: gravityVault,
  address: {
    streetNumber: '37',
    streetName: 'Kanes Ln',
    city: 'Middletown',
    region: 'NJ',
    postalCode: '07748',
    country: 'US',
    latitude: 40.386,
    longitude: -74.088,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
};

import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gravityVault } from "../companies/gravityVault";

export const theGravityVaultVoorhees: ClimbingGym = {
  name: 'The Gravity Vault Voorhees',
  website: 'https://gravityvault.com/locations/voorhees-nj',
  parent: gravityVault,
  address: {
    streetNumber: '333',
    streetName: 'Preston Ave',
    city: 'Voorhees',
    state: 'NJ',
    postalCode: '08043',
    country: 'USA',
    latitude: 39.853,
    longitude: -75.014,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights'),
};

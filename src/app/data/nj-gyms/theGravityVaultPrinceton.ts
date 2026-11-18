import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gravityVault } from "../companies/gravityVault";

export const theGravityVaultPrinceton: ClimbingGym = {
  name: 'The Gravity Vault Princeton',
  website: 'https://gravityvault.com/locations/princeton-nj',
  parent: gravityVault,
  address: {
    streetNumber: '10',
    streetName: 'Schalks Crossing Rd',
    city: 'Plainsboro',
    state: 'NJ',
    postalCode: '08536',
    country: 'USA',
    latitude: 40.337,
    longitude: -74.594,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
};

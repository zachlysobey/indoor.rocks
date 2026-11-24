import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gravityVault } from "../companies/gravityVault";

export const theGravityVaultUpperSaddleRiver: ClimbingGym = {
  name: 'The Gravity Vault Upper Saddle River',
  website: 'https://gravityvault.com/locations/upper-saddle-river-nj',
  parent: gravityVault,
  address: {
    streetNumber: '107',
    streetName: 'Pleasant Ave',
    city: 'Upper Saddle River',
    region: 'NJ',
    postalCode: '07458',
    country: 'US',
    latitude: 41.053,
    longitude: -74.113,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
};

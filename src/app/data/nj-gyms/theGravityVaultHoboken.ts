import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gravityVault } from "../companies/gravityVault";

export const theGravityVaultHoboken: ClimbingGym = {
  name: 'The Gravity Vault Hoboken',
  website: 'https://gravityvault.com/locations/hoboken-nj',
  parent: gravityVault,
  address: {
    streetNumber: '1423',
    streetName: 'Clinton St',
    city: 'Hoboken',
    state: 'NJ',
    postalCode: '07030',
    country: 'USA',
    latitude: 40.754,
    longitude: -74.031,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
};

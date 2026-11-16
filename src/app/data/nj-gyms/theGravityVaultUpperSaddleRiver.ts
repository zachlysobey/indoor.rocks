import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";
import { gravityVault } from "../companies";

export const theGravityVaultUpperSaddleRiver: ClimbingGym = {
  name: 'The Gravity Vault Upper Saddle River',
  parent: gravityVault,
  address: {
    streetNumber: '107',
    streetName: 'Pleasant Ave',
    city: 'Upper Saddle River',
    state: 'NJ',
    postalCode: '07458',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
};

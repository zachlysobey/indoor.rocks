import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gravityVault } from "../companies/gravityVault";

export const theGravityVaultHoboken: ClimbingGym = {
  name: 'The Gravity Vault Hoboken',
  parent: gravityVault,
  address: {
    streetNumber: '1423',
    streetName: 'Clinton St',
    city: 'Hoboken',
    state: 'NJ',
    postalCode: '07030',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
};

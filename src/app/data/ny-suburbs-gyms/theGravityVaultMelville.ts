import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";
import { gravityVault } from "../companies";

export const theGravityVaultMelville: ClimbingGym = {
  name: 'The Gravity Vault Melville',
  parent: gravityVault,
  address: {
    streetNumber: '40',
    streetName: 'Melville Park Rd',
    city: 'Melville',
    state: 'NY',
    postalCode: '11747',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
};

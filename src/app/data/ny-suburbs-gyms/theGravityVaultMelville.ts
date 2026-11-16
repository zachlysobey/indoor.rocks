import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gravityVault } from "../companies/gravityVault";

export const theGravityVaultMelville: ClimbingGym = {
  name: 'The Gravity Vault Melville',
  website: 'https://gravityvault.com/locations/melville-ny',
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

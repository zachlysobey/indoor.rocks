import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gravityVault } from "../companies/gravityVault";

export const theGravityVaultWestbury: ClimbingGym = {
  name: 'The Gravity Vault Westbury',
  description: '2nd floor of the Samanea New York Mall.',
  parent: gravityVault,
  address: {
    streetNumber: '1500',
    streetName: 'Old Country Rd',
    city: 'Westbury',
    state: 'NY',
    postalCode: '11590',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'machines', 'free-weights', 'yoga'),
};

import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";
import { gravityVault } from "../companies";

export const theGravityVaultMontclair: ClimbingGym = {
  name: 'The Gravity Vault Montclair',
  description: "Gravity Vault's first bouldering-only gym.",
  parent: gravityVault,
  address: {
    streetNumber: '8',
    streetName: 'Seymour Plaza',
    city: 'Montclair',
    state: 'NJ',
    postalCode: '07042',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'machines', 'free-weights', 'yoga'),
};

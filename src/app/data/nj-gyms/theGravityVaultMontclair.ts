import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gravityVault } from "../companies/gravityVault";

export const theGravityVaultMontclair: ClimbingGym = {
  name: 'The Gravity Vault Montclair',
  website: 'https://gravityvault.com/locations/montclair-nj',
  description: "Gravity Vault's first bouldering-only gym.",
  parent: gravityVault,
  address: {
    streetNumber: '8',
    streetName: 'Seymour Plaza',
    city: 'Montclair',
    state: 'NJ',
    postalCode: '07042',
    country: 'USA',
    latitude: 40.812,
    longitude: -74.216,
  },
  amenities: amenities('bouldering', 'machines', 'free-weights', 'yoga'),
};

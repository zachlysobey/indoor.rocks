import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gravityVault } from "../companies/gravityVault";

export const theGravityVaultWestbury: ClimbingGym = {
  name: 'The Gravity Vault Westbury',
  website: 'https://gravityvault.com/locations/westbury-ny',
  description: '2nd floor of the Samanea New York Mall.',
  parent: gravityVault,
  address: {
    streetNumber: '1500',
    streetName: 'Old Country Rd',
    city: 'Westbury',
    region: 'NY',
    postalCode: '11590',
    country: 'US',
    latitude: 40.745,
    longitude: -73.570,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'machines', 'free-weights', 'yoga'),
};

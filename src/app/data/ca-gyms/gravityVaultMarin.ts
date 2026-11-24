import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gravityVault } from "../companies/gravityVault";

export const gravityVaultMarin: ClimbingGym = {
  name: 'Gravity Vault Marin',
  website: 'https://gravityvault.com/locations/marin-county-ca',
  parent: gravityVault,
  address: {
    streetNumber: '440',
    streetName: 'Smith Ranch Rd',
    city: 'San Rafael',
    region: 'CA',
    postalCode: '94903',
    country: 'US',
    latitude: 38.016,
    longitude: -122.531,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'machines', 'yoga'),
};

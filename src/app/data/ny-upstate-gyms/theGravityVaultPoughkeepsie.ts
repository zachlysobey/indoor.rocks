import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { gravityVault } from "../companies/gravityVault";

export const theGravityVaultPoughkeepsie: ClimbingGym = {
  name: 'The Gravity Vault Poughkeepsie',
  website: 'https://gravityvault.com/locations/poughkeepsie-ny',
  parent: gravityVault,
  address: {
    streetNumber: '6',
    streetName: 'Neptune Rd',
    city: 'Poughkeepsie',
    region: 'NY',
    postalCode: '12601',
    country: 'US',
    latitude: 41.668,
    longitude: -73.928,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};

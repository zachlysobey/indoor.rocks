import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const tufasBoulderLounge: ClimbingGym = {
  name: 'Tufas Boulder Lounge',
  website: 'https://tufasboulderlounge.com/',
  address: {
    streetNumber: '1614',
    streetName: 'N 5th St',
    city: 'Philadelphia',
    region: 'PA',
    postalCode: '19122',
    country: 'US',
    latitude: 39.976,
    longitude: -75.144,
  },
  amenities: amenities('bouldering'),
};

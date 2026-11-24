import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const dynoRockIndoorClimbingCenter: ClimbingGym = {
  name: 'Dyno-Rock Indoor Climbing Center',
  website: 'http://www.dynorock.com',
  address: {
    streetNumber: '608',
    streetName: 'E Front St',
    city: 'Arlington',
    region: 'TX',
    postalCode: '76011',
    country: 'US',
    latitude: 32.737,
    longitude: -97.100,
  },
  amenities: amenities('bouldering', 'auto-belays'),
};

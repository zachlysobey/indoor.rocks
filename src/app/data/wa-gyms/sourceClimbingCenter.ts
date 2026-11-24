import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const sourceClimbingCenter: ClimbingGym = {
  name: 'Source Climbing Center',
  website: 'https://www.sourceclimbing.com/',
  address: {
    streetNumber: '1118',
    streetName: 'Main St',
    city: 'Vancouver',
    region: 'WA',
    postalCode: '98660',
    country: 'US',
    latitude: 45.631,
    longitude: -122.672,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};

import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const zenithClimbingCenter: ClimbingGym = {
  name: 'Zenith Climbing Center',
  website: 'https://zenithclimbing.com',
  address: {
    streetNumber: '3534',
    streetName: 'E Sunshine St',
    city: 'Springfield',
    region: 'MO',
    postalCode: '65809',
    country: 'US',
    latitude: 37.181,
    longitude: -93.220,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga'),
};

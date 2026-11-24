import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymCitrusPark: ClimbingGym = {
  name: 'Central Rock Gym Citrus Park',
  website: 'https://centralrockgym.com',
  parent: centralRockGym,
  address: {
    streetNumber: '6918',
    streetName: 'Gunn Hwy',
    city: 'Tampa',
    region: 'FL',
    postalCode: '33625',
    country: 'US',
    latitude: 28.069,
    longitude: -82.570,
  },
  amenities: amenities('bouldering', 'yoga'),
};

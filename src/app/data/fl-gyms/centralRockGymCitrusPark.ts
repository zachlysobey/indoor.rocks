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
    state: 'FL',
    postalCode: '33625',
    country: 'USA',
    latitude: 28.069,
    longitude: -82.570,
  },
  amenities: amenities('bouldering', 'yoga'),
};

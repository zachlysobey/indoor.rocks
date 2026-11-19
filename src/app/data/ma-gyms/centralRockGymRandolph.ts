import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymRandolph: ClimbingGym = {
  name: 'Central Rock Gym Randolph',
  website: 'https://centralrockgym.com/randolph/',
  parent: centralRockGym,
  address: {
    streetNumber: '445',
    streetName: 'High St',
    city: 'Randolph',
    state: 'MA',
    postalCode: '02368',
    country: 'USA',
    latitude: 42.200,
    longitude: -71.066,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};

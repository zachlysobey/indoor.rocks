import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymTroy: ClimbingGym = {
  name: 'Central Rock Gym Troy',
  website: 'https://centralrockgym.com/troy/',
  parent: centralRockGym,
  address: {
    streetNumber: '547',
    streetName: 'River St',
    city: 'Troy',
    state: 'NY',
    postalCode: '12180',
    country: 'USA',
    latitude: 42.741,
    longitude: -73.689,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};

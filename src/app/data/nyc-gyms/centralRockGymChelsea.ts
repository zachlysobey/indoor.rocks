import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";
import { centralRockGym } from "../companies";

export const centralRockGymChelsea: ClimbingGym = {
  name: 'Central Rock Gym Chelsea',
  parent: centralRockGym,
  address: {
    streetNumber: '537',
    streetName: 'W 27th St',
    city: 'New York',
    state: 'NY',
    postalCode: '10001',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'yoga'),
};

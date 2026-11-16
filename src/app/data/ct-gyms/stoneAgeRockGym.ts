import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";

export const stoneAgeRockGym: ClimbingGym = {
  name: 'Stone Age Rock Gym',
  address: {
    streetNumber: '195',
    streetName: 'Adams St',
    city: 'Manchester',
    state: 'CT',
    postalCode: '06042',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};

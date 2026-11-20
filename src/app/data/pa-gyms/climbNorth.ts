import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbNorth: ClimbingGym = {
  name: 'Climb North',
  website: 'https://climbnorth.com/',
  address: {
    streetNumber: '2468',
    streetName: 'Wildwood Rd',
    city: 'Wildwood',
    state: 'PA',
    postalCode: '15091',
    country: 'USA',
    latitude: 40.590,
    longitude: -79.964,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};

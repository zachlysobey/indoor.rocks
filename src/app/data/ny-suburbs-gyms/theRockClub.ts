import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";

export const theRockClub: ClimbingGym = {
  name: 'The Rock Club',
  description: 'Inside the Pine Brook Fitness building.',
  address: {
    streetNumber: '130',
    streetName: 'Rhodes St',
    city: 'New Rochelle',
    state: 'NY',
    postalCode: '10801',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};

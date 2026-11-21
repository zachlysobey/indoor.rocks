import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { climbNashville } from "../companies/climbNashville";

export const climbNashvilleEast: ClimbingGym = {
  name: 'Climb Nashville East',
  parent: climbNashville,
  address: {
    streetNumber: '1900',
    streetName: 'Eastland Ave',
    city: 'Nashville',
    state: 'TN',
    postalCode: '37206',
    country: 'USA',
    latitude: 36.186,
    longitude: -86.738,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga'),
};

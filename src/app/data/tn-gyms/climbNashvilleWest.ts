import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { climbNashville } from "../companies/climbNashville";

export const climbNashvilleWest: ClimbingGym = {
  name: 'Climb Nashville West',
  parent: climbNashville,
  address: {
    streetNumber: '3600',
    streetName: 'Charlotte Ave',
    city: 'Nashville',
    state: 'TN',
    postalCode: '37209',
    country: 'USA',
    latitude: 36.152,
    longitude: -86.828,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};

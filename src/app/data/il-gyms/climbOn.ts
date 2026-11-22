import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbOn: ClimbingGym = {
  name: 'Climb On',
  website: 'http://www.climbonrockgym.com/',
  address: {
    streetNumber: '18120',
    streetName: 'Harwood Ave',
    city: 'Homewood',
    state: 'IL',
    postalCode: '60430',
    country: 'USA',
    latitude: 41.561,
    longitude: -87.666,
  },
  amenities: amenities('bouldering', 'auto-belays'),
};

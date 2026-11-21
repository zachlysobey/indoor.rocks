import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbYoungstown: ClimbingGym = {
  name: 'Climb Youngstown',
  website: 'https://climbyoungstown.com',
  description: 'Formerly Ascend Youngstown.',
  address: {
    streetNumber: '1221',
    streetName: 'W Western Reserve Rd',
    city: 'Youngstown',
    state: 'OH',
    postalCode: '44514',
    country: 'USA',
    latitude: 41.012,
    longitude: -80.660,
  },
  amenities: amenities('bouldering', 'yoga'),
};

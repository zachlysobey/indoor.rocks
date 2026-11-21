import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbingRoots: ClimbingGym = {
  name: 'Climbing Roots',
  description: 'Bouldering only. At Baker Creek.',
  address: {
    streetNumber: '1774',
    streetName: 'Wallace Dr',
    city: 'Knoxville',
    state: 'TN',
    postalCode: '37920',
    country: 'USA',
    latitude: 35.940,
    longitude: -83.900,
  },
  amenities: amenities('bouldering', 'free-weights', 'yoga'),
};

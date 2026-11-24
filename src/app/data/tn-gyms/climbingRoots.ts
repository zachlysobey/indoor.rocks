import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbingRoots: ClimbingGym = {
  name: 'Climbing Roots',
  description: 'Bouldering only. At Baker Creek.',
  address: {
    streetNumber: '1774',
    streetName: 'Wallace Dr',
    city: 'Knoxville',
    region: 'TN',
    postalCode: '37920',
    country: 'US',
    latitude: 35.940,
    longitude: -83.900,
  },
  amenities: amenities('bouldering', 'free-weights', 'yoga'),
};

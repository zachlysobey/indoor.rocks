import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const duluthClimbingCoop: ClimbingGym = {
  name: 'Duluth Climbing and Fitness Co-op',
  description: 'A volunteer-run, member-owned bouldering co-op.',
  address: {
    streetNumber: '22',
    streetName: 'N 1st Ave W',
    city: 'Duluth',
    state: 'MN',
    postalCode: '55802',
    country: 'USA',
    latitude: 46.787,
    longitude: -92.101,
  },
  amenities: amenities('bouldering'),
};

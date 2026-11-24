import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const santaFeClimbingCenter: ClimbingGym = {
  name: 'Santa Fe Climbing Center',
  website: 'https://www.climbsantafe.com',
  address: {
    streetNumber: '3008',
    streetName: 'Cielo Ct',
    city: 'Santa Fe',
    region: 'NM',
    postalCode: '87507',
    country: 'US',
    latitude: 35.650,
    longitude: -106.004,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
};

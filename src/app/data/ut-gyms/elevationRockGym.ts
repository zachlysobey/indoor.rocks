import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const elevationRockGym: ClimbingGym = {
  name: 'Elevation Rock Gym',
  website: 'https://www.elevationrockgym.com/',
  address: {
    streetNumber: '1780',
    streetName: 'N 200 E',
    city: 'North Logan',
    region: 'UT',
    postalCode: '84341',
    country: 'US',
    latitude: 41.765,
    longitude: -111.828,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};

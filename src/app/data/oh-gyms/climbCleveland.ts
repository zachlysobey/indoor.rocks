import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbCleveland: ClimbingGym = {
  name: 'Climb Cleveland',
  address: {
    streetNumber: '2190',
    streetName: 'Professor Ave',
    city: 'Cleveland',
    region: 'OH',
    postalCode: '44113',
    country: 'US',
    latitude: 41.479,
    longitude: -81.688,
  },
  amenities: amenities('bouldering', 'yoga'),
};

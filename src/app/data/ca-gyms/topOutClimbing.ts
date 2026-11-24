import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const topOutClimbing: ClimbingGym = {
  name: 'Top Out Climbing',
  website: 'https://topoutclimbing.squarespace.com',
  address: {
    streetNumber: '26332',
    streetName: 'Ferry Ct',
    city: 'Santa Clarita',
    region: 'CA',
    postalCode: '91350',
    country: 'US',
    latitude: 34.427,
    longitude: -118.505,
  },
  amenities: amenities('bouldering', 'auto-belays', 'yoga'),
};

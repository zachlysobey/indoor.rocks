import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const clevelandRocksClimbing: ClimbingGym = {
  name: 'Cleveland Rocks Climbing',
  website: 'https://www.clevelandrocksclimbing.com',
  description: 'In the old Ohio City Masonic Temple.',
  address: {
    streetNumber: '2831',
    streetName: 'Franklin Blvd',
    city: 'Cleveland',
    region: 'OH',
    postalCode: '44113',
    country: 'US',
    latitude: 41.485,
    longitude: -81.707,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};

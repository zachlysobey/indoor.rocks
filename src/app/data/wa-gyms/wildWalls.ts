import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const wildWalls: ClimbingGym = {
  name: 'Wild Walls',
  website: 'https://www.wildwalls.com/',
  description: '40-foot roped walls plus two bouldering areas.',
  address: {
    streetNumber: '202',
    streetName: 'W 2nd Ave',
    city: 'Spokane',
    region: 'WA',
    postalCode: '99201',
    country: 'US',
    latitude: 47.654,
    longitude: -117.414,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};

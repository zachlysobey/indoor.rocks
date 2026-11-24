import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { climbingCollective } from "../companies/climbingCollective";

export const climbingCollectiveGreeley: ClimbingGym = {
  name: 'Climbing Collective Greeley',
  website: 'https://climbingcollective.co/greeley',
  parent: climbingCollective,
  address: {
    streetNumber: '1516',
    streetName: '8th Ave',
    city: 'Greeley',
    region: 'CO',
    postalCode: '80631',
    country: 'US',
    latitude: 40.414,
    longitude: -104.692,
  },
  amenities: amenities('bouldering', 'auto-belays', 'yoga'),
};

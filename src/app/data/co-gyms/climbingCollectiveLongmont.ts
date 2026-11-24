import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { climbingCollective } from "../companies/climbingCollective";

export const climbingCollectiveLongmont: ClimbingGym = {
  name: 'Climbing Collective Longmont',
  website: 'https://climbingcollective.co/longmont',
  parent: climbingCollective,
  address: {
    streetNumber: '155',
    streetName: 'Pinnacle St',
    city: 'Longmont',
    region: 'CO',
    postalCode: '80504',
    country: 'US',
    latitude: 40.160,
    longitude: -105.090,
  },
  amenities: amenities('auto-belays', 'yoga'),
};

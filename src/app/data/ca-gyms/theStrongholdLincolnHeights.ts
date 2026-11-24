import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { stronghold } from "../companies/stronghold";

export const theStrongholdLincolnHeights: ClimbingGym = {
  name: 'The Stronghold Lincoln Heights',
  website: 'https://strongholdclimb.com/lh/',
  parent: stronghold,
  address: {
    streetNumber: '650',
    streetName: 'S Avenue 21',
    city: 'Los Angeles',
    region: 'CA',
    postalCode: '90031',
    country: 'US',
    latitude: 34.070,
    longitude: -118.225,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};

import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { rockSpot } from "../companies/rockSpot";

export const rockSpotClimbingBrookline: ClimbingGym = {
  name: 'Rock Spot Climbing Brookline',
  website: 'https://rockspotclimbing.com/locations/ma/brookline/',
  description: 'Opened 2024.',
  parent: rockSpot,
  address: {
    streetNumber: '880B',
    streetName: 'Commonwealth Ave',
    city: 'Brookline',
    state: 'MA',
    postalCode: '02446',
    country: 'USA',
    latitude: 42.350,
    longitude: -71.115,
  },
  amenities: amenities('bouldering', 'auto-belays', 'yoga'),
};

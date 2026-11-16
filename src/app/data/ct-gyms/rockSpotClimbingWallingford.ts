import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { rockSpot } from "../companies/rockSpot";

export const rockSpotClimbingWallingford: ClimbingGym = {
  name: 'Rock Spot Climbing Wallingford',
  website: 'https://rockspotclimbing.com/locations/ct/wallingford/',
  parent: rockSpot,
  address: {
    streetNumber: '340',
    streetName: 'Quinnipiac St',
    city: 'Wallingford',
    state: 'CT',
    postalCode: '06492',
    country: 'USA',
    latitude: 41.456,
    longitude: -72.834,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'yoga'),
};

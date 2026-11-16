import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { rockSpot } from "../companies/rockSpot";

export const rockSpotClimbingWallingford: ClimbingGym = {
  name: 'Rock Spot Climbing Wallingford',
  parent: rockSpot,
  address: {
    streetNumber: '340',
    streetName: 'Quinnipiac St',
    city: 'Wallingford',
    state: 'CT',
    postalCode: '06492',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'yoga'),
};

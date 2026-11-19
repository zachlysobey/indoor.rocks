import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { rockSpot } from "../companies/rockSpot";

export const rockSpotClimbingPeaceDale: ClimbingGym = {
  name: 'Rock Spot Climbing Peace Dale',
  website: 'https://rockspotclimbing.com/locations/ri/peacedale/',
  parent: rockSpot,
  address: {
    streetNumber: '1174',
    streetName: 'Kingstown Rd',
    city: 'Peace Dale',
    state: 'RI',
    postalCode: '02879',
    country: 'USA',
    latitude: 41.451,
    longitude: -71.500,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'yoga'),
};

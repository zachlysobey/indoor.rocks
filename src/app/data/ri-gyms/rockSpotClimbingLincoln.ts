import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { rockSpot } from "../companies/rockSpot";

export const rockSpotClimbingLincoln: ClimbingGym = {
  name: 'Rock Spot Climbing Lincoln',
  website: 'https://rockspotclimbing.com/locations/ri/lincoln/',
  parent: rockSpot,
  address: {
    streetNumber: '100',
    streetName: 'Higginson Ave',
    city: 'Lincoln',
    region: 'RI',
    postalCode: '02865',
    country: 'US',
    latitude: 41.886,
    longitude: -71.408,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};

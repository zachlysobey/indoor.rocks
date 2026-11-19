import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { rockSpot } from "../companies/rockSpot";

export const rockSpotClimbingProvidence: ClimbingGym = {
  name: 'Rock Spot Climbing Providence',
  website: 'https://rockspotclimbing.com/locations/ri/providence/',
  description: 'Bouldering only.',
  parent: rockSpot,
  address: {
    streetNumber: '42',
    streetName: 'Rice St',
    city: 'Providence',
    state: 'RI',
    postalCode: '02907',
    country: 'USA',
    latitude: 41.812,
    longitude: -71.425,
  },
  amenities: amenities('bouldering', 'free-weights'),
};

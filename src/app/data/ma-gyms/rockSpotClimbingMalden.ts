import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { rockSpot } from "../companies/rockSpot";

export const rockSpotClimbingMalden: ClimbingGym = {
  name: 'Rock Spot Climbing Malden',
  website: 'https://rockspotclimbing.com/locations/ma/malden/',
  description: 'Bouldering only.',
  parent: rockSpot,
  address: {
    streetNumber: '195',
    streetName: 'Exchange St',
    city: 'Malden',
    state: 'MA',
    postalCode: '02148',
    country: 'USA',
    latitude: 42.426,
    longitude: -71.073,
  },
  amenities: amenities('bouldering', 'yoga'),
};

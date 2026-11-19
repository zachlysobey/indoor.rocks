import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { rockSpot } from "../companies/rockSpot";

export const rockSpotClimbingBoston: ClimbingGym = {
  name: 'Rock Spot Climbing Boston',
  website: 'https://rockspotclimbing.com/locations/ma/boston/',
  description: 'In Readville (Hyde Park), at the Dedham line.',
  parent: rockSpot,
  address: {
    streetNumber: '67',
    streetName: 'Sprague St',
    city: 'Boston',
    state: 'MA',
    postalCode: '02136',
    country: 'USA',
    latitude: 42.235,
    longitude: -71.138,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'yoga'),
};

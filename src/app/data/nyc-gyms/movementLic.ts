import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";
import { movement } from "../companies";

export const movementLic: ClimbingGym = {
  name: 'Movement LIC',
  description: 'Formerly The Cliffs at LIC.',
  parent: movement,
  address: {
    streetNumber: '11-11',
    streetName: '44th Dr',
    city: 'Long Island City',
    state: 'NY',
    postalCode: '11101',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'machines', 'free-weights', 'yoga'),
};

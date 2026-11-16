import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";
import { movement } from "../companies";

export const movementHarlem: ClimbingGym = {
  name: 'Movement Harlem',
  description: 'Formerly The Cliffs at Harlem.',
  parent: movement,
  address: {
    streetNumber: '256',
    streetName: 'W 125th St',
    city: 'New York',
    state: 'NY',
    postalCode: '10027',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'free-weights', 'yoga'),
};

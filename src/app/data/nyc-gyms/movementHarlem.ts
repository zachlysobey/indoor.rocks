import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementHarlem: ClimbingGym = {
  name: 'Movement Harlem',
  website: 'https://movementgyms.com/harlem/',
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

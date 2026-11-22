import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementEnglewood: ClimbingGym = {
  name: 'Movement Englewood',
  website: 'https://movementgyms.com/englewood/',
  parent: movement,
  address: {
    streetNumber: '1050',
    streetName: 'W Hampden Ave',
    city: 'Englewood',
    state: 'CO',
    postalCode: '80110',
    country: 'USA',
    latitude: 39.653,
    longitude: -105.001,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'yoga'),
};

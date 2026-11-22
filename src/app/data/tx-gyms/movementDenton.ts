import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementDenton: ClimbingGym = {
  name: 'Movement Denton',
  website: 'https://movementgyms.com/denton/',
  description: 'Bouldering only (formerly Summit Denton).',
  parent: movement,
  address: {
    streetNumber: '220',
    streetName: 'W Oak St',
    city: 'Denton',
    state: 'TX',
    postalCode: '76201',
    country: 'USA',
    latitude: 33.215,
    longitude: -97.136,
  },
  amenities: amenities('bouldering', 'free-weights', 'yoga'),
};

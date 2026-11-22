import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementFortWorth: ClimbingGym = {
  name: 'Movement Fort Worth',
  website: 'https://movementgyms.com/fort-worth/',
  description: 'Bouldering only (formerly Summit Fort Worth).',
  parent: movement,
  address: {
    streetNumber: '2828',
    streetName: 'W Lancaster Ave',
    city: 'Fort Worth',
    state: 'TX',
    postalCode: '76107',
    country: 'USA',
    latitude: 32.749,
    longitude: -97.357,
  },
  amenities: amenities('bouldering', 'free-weights', 'yoga'),
};

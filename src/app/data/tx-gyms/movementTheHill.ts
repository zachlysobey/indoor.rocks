import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementTheHill: ClimbingGym = {
  name: 'Movement The Hill',
  website: 'https://movementgyms.com/the-hill/',
  description: 'Bouldering only.',
  parent: movement,
  address: {
    streetNumber: '8021',
    streetName: 'Walnut Hill Ln',
    city: 'Dallas',
    state: 'TX',
    postalCode: '75231',
    country: 'USA',
    latitude: 32.881,
    longitude: -96.758,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga', 'sauna'),
};

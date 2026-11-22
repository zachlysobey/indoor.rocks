import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementRino: ClimbingGym = {
  name: 'Movement RiNo',
  website: 'https://movementgyms.com/rino/',
  description: 'Bouldering only.',
  parent: movement,
  address: {
    streetNumber: '3201',
    streetName: 'Walnut St',
    city: 'Denver',
    state: 'CO',
    postalCode: '80205',
    country: 'USA',
    latitude: 39.766,
    longitude: -104.980,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga'),
};

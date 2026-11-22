import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementCentennial: ClimbingGym = {
  name: 'Movement Centennial',
  website: 'https://movementgyms.com/centennial/',
  parent: movement,
  address: {
    streetNumber: '9657',
    streetName: 'E County Line Rd',
    city: 'Centennial',
    state: 'CO',
    postalCode: '80112',
    country: 'USA',
    latitude: 39.566,
    longitude: -104.874,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'machines', 'yoga'),
};

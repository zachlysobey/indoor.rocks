import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementBoulder: ClimbingGym = {
  name: 'Movement Boulder',
  website: 'https://movementgyms.com/boulder/',
  parent: movement,
  address: {
    streetNumber: '2845',
    streetName: 'Valmont Rd',
    city: 'Boulder',
    region: 'CO',
    postalCode: '80301',
    country: 'US',
    latitude: 40.028,
    longitude: -105.255,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'yoga'),
};

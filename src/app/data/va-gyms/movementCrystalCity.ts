import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementCrystalCity: ClimbingGym = {
  name: 'Movement Crystal City',
  website: 'https://movementgyms.com/crystal-city/',
  description: 'Formerly Earth Treks Crystal City.',
  parent: movement,
  address: {
    streetNumber: '1235',
    streetName: 'S Clark St',
    city: 'Arlington',
    region: 'VA',
    postalCode: '22202',
    country: 'US',
    latitude: 38.862,
    longitude: -77.051,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'yoga'),
};

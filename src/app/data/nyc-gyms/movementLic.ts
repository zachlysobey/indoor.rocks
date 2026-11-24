import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementLic: ClimbingGym = {
  name: 'Movement LIC',
  website: 'https://movementgyms.com/lic/',
  description: 'Formerly The Cliffs at LIC.',
  parent: movement,
  address: {
    streetNumber: '11-11',
    streetName: '44th Dr',
    city: 'Long Island City',
    region: 'NY',
    postalCode: '11101',
    country: 'US',
    latitude: 40.74869,
    longitude: -73.94869,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'machines', 'free-weights', 'yoga'),
};

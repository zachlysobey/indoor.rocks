import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementBaker: ClimbingGym = {
  name: 'Movement Baker',
  website: 'https://movementgyms.com/baker/',
  parent: movement,
  address: {
    streetNumber: '1155',
    streetName: 'W 5th Ave',
    city: 'Denver',
    region: 'CO',
    postalCode: '80204',
    country: 'US',
    latitude: 39.724,
    longitude: -105.002,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'machines', 'yoga'),
};

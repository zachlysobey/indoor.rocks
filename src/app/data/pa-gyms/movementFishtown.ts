import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementFishtown: ClimbingGym = {
  name: 'Movement Fishtown',
  website: 'https://movementgyms.com/fishtown/',
  parent: movement,
  address: {
    streetNumber: '1700',
    streetName: 'N American St',
    city: 'Philadelphia',
    state: 'PA',
    postalCode: '19122',
    country: 'USA',
    latitude: 39.977,
    longitude: -75.140,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'yoga'),
};

import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementPortland: ClimbingGym = {
  name: 'Movement Portland',
  website: 'https://movementgyms.com/portland/',
  parent: movement,
  address: {
    streetNumber: '1405',
    streetName: 'NW 14th Ave',
    city: 'Portland',
    region: 'OR',
    postalCode: '97209',
    country: 'US',
    latitude: 45.532,
    longitude: -122.686,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'yoga', 'sauna'),
};

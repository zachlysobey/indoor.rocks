import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementGolden: ClimbingGym = {
  name: 'Movement Golden',
  website: 'https://movementgyms.com/golden/',
  parent: movement,
  address: {
    streetNumber: '700',
    streetName: 'Golden Ridge Rd',
    city: 'Golden',
    region: 'CO',
    postalCode: '80401',
    country: 'US',
    latitude: 39.732,
    longitude: -105.192,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'machines', 'yoga'),
};

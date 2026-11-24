import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementHampden: ClimbingGym = {
  name: 'Movement Hampden',
  website: 'https://movementgyms.com/hampden/',
  description: 'Formerly Earth Treks Hampden.',
  parent: movement,
  address: {
    streetNumber: '1700',
    streetName: 'W 41st St',
    city: 'Baltimore',
    region: 'MD',
    postalCode: '21211',
    country: 'US',
    latitude: 39.334,
    longitude: -76.645,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga'),
};

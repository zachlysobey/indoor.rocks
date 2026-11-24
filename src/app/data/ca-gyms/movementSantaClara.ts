import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementSantaClara: ClimbingGym = {
  name: 'Movement Santa Clara',
  website: 'https://movementgyms.com/santa-clara/',
  parent: movement,
  address: {
    streetNumber: '801',
    streetName: 'Martin Ave',
    city: 'Santa Clara',
    region: 'CA',
    postalCode: '95050',
    country: 'US',
    latitude: 37.362,
    longitude: -121.940,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga'),
};

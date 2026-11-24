import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const risenRock: ClimbingGym = {
  name: 'Risen Rock Climbing Gym',
  website: 'https://www.risenrockclimbing.com',
  address: {
    streetNumber: '1060',
    streetName: 'Chinaberry Dr',
    city: 'Bossier City',
    region: 'LA',
    postalCode: '71111',
    country: 'US',
    latitude: 32.560,
    longitude: -93.700,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};

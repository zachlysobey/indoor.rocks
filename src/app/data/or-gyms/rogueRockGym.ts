import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rogueRockGym: ClimbingGym = {
  name: 'Rogue Rock Gym',
  website: 'https://www.roguerockgym.com/',
  address: {
    streetNumber: '3001',
    streetName: 'Samike Dr',
    city: 'Medford',
    region: 'OR',
    postalCode: '97501',
    country: 'US',
    latitude: 42.296,
    longitude: -122.851,
  },
  amenities: amenities('bouldering', 'lead', 'free-weights', 'machines'),
};

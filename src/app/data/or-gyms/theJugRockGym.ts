import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theJugRockGym: ClimbingGym = {
  name: 'The Jug Rock Gym',
  website: 'https://thejugrockgym.com/',
  description: 'Bouldering only.',
  address: {
    streetNumber: '2605',
    streetName: 'S 1st St',
    city: 'Redmond',
    region: 'OR',
    postalCode: '97756',
    country: 'US',
    latitude: 44.257,
    longitude: -121.176,
  },
  amenities: amenities('bouldering', 'free-weights'),
};

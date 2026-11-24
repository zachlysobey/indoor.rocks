import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const thePadClimbingBinghamton: ClimbingGym = {
  name: 'The Pad Climbing Binghamton',
  website: 'https://thepadclimbing.org/binghamton/',
  description: 'Run by a nonprofit.',
  address: {
    streetNumber: '2220',
    streetName: 'Vestal Rd',
    city: 'Vestal',
    region: 'NY',
    postalCode: '13850',
    country: 'US',
    latitude: 42.093,
    longitude: -75.980,
  },
  amenities: amenities('bouldering', 'top-rope'),
};

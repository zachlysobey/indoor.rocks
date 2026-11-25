import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const shaktiRockGym: ClimbingGym = {
  name: 'Shakti Rock Gym',
  website: 'https://shaktirockgym.com',
  description: 'Bouldering, open since 2012.',
  address: {
    streetNumber: '175',
    streetName: 'Rue Saint-Viateur E',
    city: 'Montréal',
    region: 'QC',
    postalCode: 'H2T 1B4',
    country: 'CA',
    latitude: 45.525,
    longitude: -73.595,
  },
  amenities: amenities('bouldering'),
};

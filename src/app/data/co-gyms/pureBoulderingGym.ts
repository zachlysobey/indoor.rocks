import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const pureBoulderingGym: ClimbingGym = {
  name: 'Pure Bouldering Gym',
  website: 'https://pureboulderinggym.com/',
  description: 'Bouldering only.',
  address: {
    streetNumber: '1401',
    streetName: 'S 8th St',
    city: 'Colorado Springs',
    region: 'CO',
    postalCode: '80905',
    country: 'US',
    latitude: 38.814,
    longitude: -104.838,
  },
  amenities: amenities('bouldering', 'yoga'),
};

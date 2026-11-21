import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { centralRockGym } from "../companies/centralRockGym";

export const centralRockGymMidtown: ClimbingGym = {
  name: 'Central Rock Gym Midtown',
  website: 'https://centralrockgym.com/midtown/',
  description: 'Bouldering only. Formerly Stone Summit.',
  parent: centralRockGym,
  address: {
    streetNumber: '715',
    streetName: 'Peachtree St NE',
    city: 'Atlanta',
    state: 'GA',
    postalCode: '30308',
    country: 'USA',
    latitude: 33.774,
    longitude: -84.385,
  },
  amenities: amenities('bouldering'),
};

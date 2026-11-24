import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const goatClimbingGym: ClimbingGym = {
  name: 'GOAT Climbing Gym',
  website: 'https://goatclimbinggym.com/',
  description: 'Two floors of bouldering.',
  address: {
    streetNumber: '77',
    streetName: 'River St',
    city: 'Hackensack',
    region: 'NJ',
    postalCode: '07601',
    country: 'US',
    latitude: 40.880,
    longitude: -74.040,
  },
  amenities: amenities('bouldering'),
};

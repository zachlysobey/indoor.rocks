import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const goatClimbingGym: ClimbingGym = {
  name: 'GOAT Climbing Gym',
  description: 'Two floors of bouldering.',
  address: {
    streetNumber: '77',
    streetName: 'River St',
    city: 'Hackensack',
    state: 'NJ',
    postalCode: '07601',
    country: 'USA',
  },
  amenities: amenities('bouldering'),
};

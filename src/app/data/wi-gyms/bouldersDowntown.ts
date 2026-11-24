import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const bouldersDowntown: ClimbingGym = {
  name: 'Boulders Climbing Gym',
  description: 'Bouldering only.',
  address: {
    streetNumber: '129',
    streetName: 'S Carroll St',
    city: 'Madison',
    region: 'WI',
    postalCode: '53703',
    country: 'US',
    latitude: 43.073,
    longitude: -89.385,
  },
  amenities: amenities('bouldering'),
};

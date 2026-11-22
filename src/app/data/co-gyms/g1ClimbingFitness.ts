import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const g1ClimbingFitness: ClimbingGym = {
  name: 'G1 Climbing + Fitness',
  website: 'https://www.g1climbing.com/',
  address: {
    streetNumber: '8845',
    streetName: 'W 116th Cir',
    city: 'Broomfield',
    state: 'CO',
    postalCode: '80021',
    country: 'USA',
    latitude: 39.909,
    longitude: -105.098,
  },
  amenities: amenities('bouldering', 'free-weights', 'yoga'),
};

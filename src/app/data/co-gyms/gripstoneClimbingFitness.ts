import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const gripstoneClimbingFitness: ClimbingGym = {
  name: 'Gripstone Climbing & Fitness',
  website: 'https://gripstonecs.com/',
  address: {
    streetNumber: '6220',
    streetName: 'Tutt Blvd',
    city: 'Colorado Springs',
    state: 'CO',
    postalCode: '80923',
    country: 'USA',
    latitude: 38.919,
    longitude: -104.719,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};

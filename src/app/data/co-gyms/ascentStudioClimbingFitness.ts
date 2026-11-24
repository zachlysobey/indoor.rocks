import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const ascentStudioClimbingFitness: ClimbingGym = {
  name: 'Ascent Studio Climbing & Fitness',
  website: 'https://ascentstudio.com/',
  address: {
    streetNumber: '2150',
    streetName: 'Joseph Allen Dr',
    city: 'Fort Collins',
    region: 'CO',
    postalCode: '80525',
    country: 'US',
    latitude: 40.556,
    longitude: -105.040,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'machines', 'yoga'),
};

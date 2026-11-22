import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const summitStrengthFitness: ClimbingGym = {
  name: 'Summit Strength & Fitness',
  description: 'A small climbing and strength-training gym.',
  address: {
    streetNumber: '3118',
    streetName: 'Kingsley Way',
    city: 'Madison',
    state: 'WI',
    postalCode: '53713',
    country: 'USA',
    latitude: 43.027,
    longitude: -89.417,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'free-weights'),
};

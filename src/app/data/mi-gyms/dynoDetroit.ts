import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const dynoDetroit: ClimbingGym = {
  name: 'DYNO Detroit',
  website: 'https://dynodetroit.com',
  description: 'In Eastern Market.',
  address: {
    streetNumber: '3500',
    streetName: 'Orleans St',
    city: 'Detroit',
    state: 'MI',
    postalCode: '48207',
    country: 'USA',
    latitude: 42.350,
    longitude: -83.038,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
};

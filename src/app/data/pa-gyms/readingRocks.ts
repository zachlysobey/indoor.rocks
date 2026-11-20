import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const readingRocks: ClimbingGym = {
  name: 'Reading Rocks Climbing & Fitness',
  address: {
    streetNumber: '550',
    streetName: 'George St',
    city: 'Reading',
    state: 'PA',
    postalCode: '19605',
    country: 'USA',
    latitude: 40.364,
    longitude: -75.930,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};

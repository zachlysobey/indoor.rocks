import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theBoulderYard: ClimbingGym = {
  name: 'The Boulder Yard',
  address: {
    streetNumber: '5714',
    streetName: 'Industry Ln',
    city: 'Frederick',
    state: 'MD',
    postalCode: '21704',
    country: 'USA',
    latitude: 39.391,
    longitude: -77.406,
  },
  amenities: amenities('bouldering', 'yoga'),
};

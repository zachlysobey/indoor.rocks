import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theBoulderYard: ClimbingGym = {
  name: 'The Boulder Yard',
  address: {
    streetNumber: '5714',
    streetName: 'Industry Ln',
    city: 'Frederick',
    region: 'MD',
    postalCode: '21704',
    country: 'US',
    latitude: 39.391,
    longitude: -77.406,
  },
  amenities: amenities('bouldering', 'yoga'),
};

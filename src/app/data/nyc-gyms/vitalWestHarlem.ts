import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";
import { vital } from "../companies";

export const vitalWestHarlem: ClimbingGym = {
  name: 'Vital West Harlem',
  parent: vital,
  address: {
    streetNumber: '3225',
    streetName: 'Broadway',
    city: 'New York',
    state: 'NY',
    postalCode: '10027',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'free-weights', 'yoga'),
};

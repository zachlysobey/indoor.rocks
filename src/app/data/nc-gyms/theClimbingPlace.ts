import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theClimbingPlace: ClimbingGym = {
  name: 'The Climbing Place',
  address: {
    streetNumber: '436',
    streetName: 'W Russell St',
    city: 'Fayetteville',
    state: 'NC',
    postalCode: '28301',
    country: 'USA',
    latitude: 35.050,
    longitude: -78.883,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};

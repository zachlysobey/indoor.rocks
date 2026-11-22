import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbCapuchin: ClimbingGym = {
  name: 'Climb Capuchin',
  website: 'https://climb-capuchin.com/',
  address: {
    streetNumber: '1526',
    streetName: 'Campbell Rd',
    city: 'Houston',
    state: 'TX',
    postalCode: '77055',
    country: 'USA',
    latitude: 29.800,
    longitude: -95.510,
  },
  amenities: amenities('bouldering', 'top-rope'),
};

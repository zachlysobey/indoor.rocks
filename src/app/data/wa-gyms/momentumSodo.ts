import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { momentum } from "../companies/momentum";

export const momentumSodo: ClimbingGym = {
  name: 'Momentum SODO',
  website: 'https://momentumclimbing.com/sodo/',
  description: 'Bouldering only.',
  parent: momentum,
  address: {
    streetNumber: '2759',
    streetName: '1st Ave S',
    city: 'Seattle',
    state: 'WA',
    postalCode: '98134',
    country: 'USA',
    latitude: 47.578,
    longitude: -122.335,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga'),
};

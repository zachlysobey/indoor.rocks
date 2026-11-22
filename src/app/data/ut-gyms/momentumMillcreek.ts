import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { momentum } from "../companies/momentum";

export const momentumMillcreek: ClimbingGym = {
  name: 'Momentum Millcreek',
  website: 'https://momentumclimbing.com/millcreek/',
  parent: momentum,
  address: {
    streetNumber: '3173',
    streetName: 'E 3300 S',
    city: 'Salt Lake City',
    state: 'UT',
    postalCode: '84109',
    country: 'USA',
    latitude: 40.699,
    longitude: -111.800,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'machines', 'yoga', 'sauna'),
};

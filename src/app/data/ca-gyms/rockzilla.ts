import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockzilla: ClimbingGym = {
  name: 'Rockzilla',
  website: 'https://www.climbrockzilla.rocks/',
  description: 'Family-oriented gym with bouldering, ropes and indoor chimneys.',
  address: {
    streetNumber: '849',
    streetName: 'Jackson St',
    city: 'Napa',
    state: 'CA',
    postalCode: '94559',
    country: 'USA',
    latitude: 38.305,
    longitude: -122.284,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};

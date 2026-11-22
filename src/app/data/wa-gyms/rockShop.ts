import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockShop: ClimbingGym = {
  name: 'Rock Shop',
  website: 'https://www.rockshopclimbing.com/',
  description: 'Bouldering-focused gym.',
  address: {
    streetNumber: '1965',
    streetName: 'Fowler St',
    city: 'Richland',
    state: 'WA',
    postalCode: '99352',
    country: 'USA',
    latitude: 46.295,
    longitude: -119.291,
  },
  amenities: amenities('bouldering'),
};

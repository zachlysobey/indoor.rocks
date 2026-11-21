import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { highPoint } from "../companies/highPoint";

export const highPointMidcity: ClimbingGym = {
  name: 'High Point Midcity',
  website: 'https://www.highpointclimbing.com',
  description: 'Has an outdoor freestanding wall.',
  parent: highPoint,
  address: {
    streetNumber: '1020',
    streetName: 'Nunnahsae Park Dr NW',
    city: 'Huntsville',
    state: 'AL',
    postalCode: '35806',
    country: 'USA',
    latitude: 34.716,
    longitude: -86.665,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga'),
};

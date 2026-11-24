import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { highPoint } from "../companies/highPoint";

export const highPointMemphis: ClimbingGym = {
  name: 'High Point Memphis',
  website: 'https://www.highpointclimbing.com',
  description: 'Next to Shelby Farms Park.',
  parent: highPoint,
  address: {
    streetNumber: '21',
    streetName: 'N Humphreys Blvd',
    city: 'Memphis',
    region: 'TN',
    postalCode: '38120',
    country: 'US',
    latitude: 35.125,
    longitude: -89.835,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga'),
};

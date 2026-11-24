import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { highPoint } from "../companies/highPoint";

export const highPointOrlando: ClimbingGym = {
  name: 'High Point Orlando',
  website: 'https://www.highpointclimbing.com/orlando',
  description: 'In the Packing District.',
  parent: highPoint,
  address: {
    streetNumber: '1978',
    streetName: 'Stanhome Way',
    city: 'Orlando',
    region: 'FL',
    postalCode: '32804',
    country: 'US',
    latitude: 28.566,
    longitude: -81.405,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'yoga'),
};

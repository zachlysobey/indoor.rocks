import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { highPoint } from "../companies/highPoint";

export const highPointDowntown: ClimbingGym = {
  name: 'High Point Downtown',
  website: 'https://www.highpointclimbing.com/locations/downtown',
  description: 'Outdoor walls above Broad Street.',
  parent: highPoint,
  address: {
    streetNumber: '219',
    streetName: 'Broad St',
    city: 'Chattanooga',
    region: 'TN',
    postalCode: '37402',
    country: 'US',
    latitude: 35.051,
    longitude: -85.311,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};

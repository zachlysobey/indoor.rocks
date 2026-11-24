import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { highPoint } from "../companies/highPoint";

export const highPointRiverside: ClimbingGym = {
  name: 'High Point Riverside',
  website: 'https://www.highpointclimbing.com',
  parent: highPoint,
  address: {
    streetNumber: '1007',
    streetName: 'Appling St',
    city: 'Chattanooga',
    region: 'TN',
    postalCode: '37406',
    country: 'US',
    latitude: 35.065,
    longitude: -85.250,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};

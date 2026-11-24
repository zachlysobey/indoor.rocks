import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const trueNorthClimbing: ClimbingGym = {
  name: 'True North Climbing',
  website: 'https://truenorthclimbing.com',
  description: 'In the Downsview Park Sports Centre.',
  address: {
    streetNumber: '75',
    streetName: 'Carl Hall Rd, Unit 14',
    city: 'Toronto',
    region: 'ON',
    postalCode: 'M3K 2B9',
    country: 'CA',
    latitude: 43.743,
    longitude: -79.480,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};

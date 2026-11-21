import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { highPoint } from "../companies/highPoint";

export const highPointCleveland: ClimbingGym = {
  name: 'High Point Cleveland',
  website: 'https://www.highpointclimbing.com',
  description: 'Bouldering only.',
  parent: highPoint,
  address: {
    streetNumber: '2499',
    streetName: 'Keith St NW',
    city: 'Cleveland',
    state: 'TN',
    postalCode: '37311',
    country: 'USA',
    latitude: 35.190,
    longitude: -84.875,
  },
  amenities: amenities('bouldering'),
};

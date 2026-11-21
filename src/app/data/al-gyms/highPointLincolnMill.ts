import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { highPoint } from "../companies/highPoint";

export const highPointLincolnMill: ClimbingGym = {
  name: 'High Point Lincoln Mill',
  website: 'https://www.highpointclimbing.com',
  description: 'Steeper bouldering and training terrain.',
  parent: highPoint,
  address: {
    streetNumber: '1300',
    streetName: 'Meridian St N',
    city: 'Huntsville',
    state: 'AL',
    postalCode: '35801',
    country: 'USA',
    latitude: 34.750,
    longitude: -86.585,
  },
  amenities: amenities('bouldering'),
};

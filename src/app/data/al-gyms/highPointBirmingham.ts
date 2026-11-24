import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { highPoint } from "../companies/highPoint";

export const highPointBirmingham: ClimbingGym = {
  name: 'High Point Birmingham',
  website: 'https://www.highpointclimbing.com',
  parent: highPoint,
  address: {
    streetNumber: '4766',
    streetName: 'Hwy 280',
    city: 'Birmingham',
    region: 'AL',
    postalCode: '35242',
    country: 'US',
    latitude: 33.415,
    longitude: -86.690,
  },
  amenities: amenities('bouldering', 'top-rope', 'yoga', 'free-weights'),
};

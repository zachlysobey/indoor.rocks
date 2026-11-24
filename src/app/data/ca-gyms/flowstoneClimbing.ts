import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const flowstoneClimbing: ClimbingGym = {
  name: 'Flowstone Climbing',
  website: 'https://www.flowstoneclimbing.com/',
  description: 'Bouldering gym with yoga and fitness.',
  address: {
    streetNumber: '1411',
    streetName: 'W State St',
    city: 'Redlands',
    region: 'CA',
    postalCode: '92373',
    country: 'US',
    latitude: 34.058,
    longitude: -117.206,
  },
  amenities: amenities('bouldering', 'yoga', 'free-weights', 'machines'),
};

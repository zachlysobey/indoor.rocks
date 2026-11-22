import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const summitEverett: ClimbingGym = {
  name: 'Summit Everett',
  website: 'https://summiteverett.com/',
  description: 'Bouldering gym with 24-hour member access.',
  address: {
    streetNumber: '2900',
    streetName: 'Grand Ave',
    city: 'Everett',
    state: 'WA',
    postalCode: '98201',
    country: 'USA',
    latitude: 47.980,
    longitude: -122.215,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines'),
};

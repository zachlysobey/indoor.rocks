import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theKnot: ClimbingGym = {
  name: 'The Knot Climbing Gym',
  address: {
    streetNumber: '704',
    streetName: 'S Main St',
    city: 'Gainesville',
    state: 'FL',
    postalCode: '32601',
    country: 'USA',
    latitude: 29.645,
    longitude: -82.324,
  },
  amenities: amenities(),
};

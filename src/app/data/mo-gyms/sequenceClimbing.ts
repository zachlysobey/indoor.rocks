import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const sequenceClimbing: ClimbingGym = {
  name: 'Sequence Climbing',
  description: 'Bouldering only. In the Crossroads.',
  address: {
    streetNumber: '1710',
    streetName: 'Washington St',
    city: 'Kansas City',
    state: 'MO',
    postalCode: '64108',
    country: 'USA',
    latitude: 39.090,
    longitude: -94.590,
  },
  amenities: amenities('bouldering', 'yoga'),
};

import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const ozarkClimbingGym: ClimbingGym = {
  name: 'Ozark Climbing Gym',
  description: 'Bouldering only.',
  address: {
    streetNumber: '875',
    streetName: 'E Robinson Ave',
    city: 'Springdale',
    state: 'AR',
    postalCode: '72764',
    country: 'USA',
    latitude: 36.167,
    longitude: -94.123,
  },
  amenities: amenities('bouldering'),
};

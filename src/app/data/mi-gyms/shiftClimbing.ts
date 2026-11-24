import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const shiftClimbing: ClimbingGym = {
  name: 'Shift Climbing',
  website: 'https://www.shiftclimbing.com',
  description: 'Bouldering only.',
  address: {
    streetNumber: '12345',
    streetName: 'James St',
    city: 'Holland',
    region: 'MI',
    postalCode: '49424',
    country: 'US',
    latitude: 42.809,
    longitude: -86.067,
  },
  amenities: amenities('bouldering'),
};

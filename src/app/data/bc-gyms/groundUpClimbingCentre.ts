import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const groundUpClimbingCentre: ClimbingGym = {
  name: 'Ground Up Climbing Centre',
  website: 'https://climbgroundup.com',
  address: {
    streetNumber: '1201',
    streetName: 'Commercial Way, Unit 207',
    city: 'Squamish',
    region: 'BC',
    postalCode: 'V8B 0V1',
    country: 'CA',
    latitude: 49.718,
    longitude: -123.146,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};

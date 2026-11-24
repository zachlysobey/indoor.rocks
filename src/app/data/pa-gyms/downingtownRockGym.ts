import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const downingtownRockGym: ClimbingGym = {
  name: 'Downingtown Rock Gym',
  description: 'Formerly Vertical Extreme.',
  address: {
    streetNumber: '462',
    streetName: 'Acorn Ln',
    city: 'Downingtown',
    region: 'PA',
    postalCode: '19335',
    country: 'US',
    latitude: 40.011,
    longitude: -75.693,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};

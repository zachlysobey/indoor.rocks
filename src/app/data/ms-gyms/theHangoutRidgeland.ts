import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theHangoutRidgeland: ClimbingGym = {
  name: 'The Hangout',
  description: 'Bouldering only. Limited evening hours.',
  address: {
    streetNumber: '125',
    streetName: 'Dyess Rd',
    city: 'Ridgeland',
    region: 'MS',
    postalCode: '39157',
    country: 'US',
    latitude: 32.435,
    longitude: -90.125,
  },
  amenities: amenities('bouldering'),
};

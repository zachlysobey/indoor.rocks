import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theHangoutDuncan: ClimbingGym = {
  name: 'The Hangout Duncan',
  website: 'https://www.climbhangout.com',
  address: {
    streetNumber: '1065',
    streetName: 'Canada Ave, Unit 2',
    city: 'Duncan',
    state: 'BC',
    postalCode: 'V9L 1V2',
    country: 'Canada',
    latitude: 48.783,
    longitude: -123.705,
  },
  amenities: amenities('bouldering', 'top-rope'),
};

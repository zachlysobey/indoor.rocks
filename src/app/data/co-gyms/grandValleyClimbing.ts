import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const grandValleyClimbing: ClimbingGym = {
  name: 'Grand Valley Climbing',
  website: 'https://www.grandvalleyclimbing.com/',
  address: {
    streetNumber: '611',
    streetName: '25 Rd',
    city: 'Grand Junction',
    state: 'CO',
    postalCode: '81505',
    country: 'USA',
    latitude: 39.075,
    longitude: -108.584,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'machines'),
};

import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const sessionClimbing: ClimbingGym = {
  name: 'Session Climbing',
  website: 'https://www.sessionclimbing.com/',
  address: {
    streetNumber: '965',
    streetName: 'S A St',
    city: 'Santa Rosa',
    state: 'CA',
    postalCode: '95404',
    country: 'USA',
    latitude: 38.428,
    longitude: -122.712,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};

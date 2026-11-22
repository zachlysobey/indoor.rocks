import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const northPeakClimbing: ClimbingGym = {
  name: 'North Peak Climbing & Fitness',
  website: 'https://www.northpeakclimbing.com',
  address: {
    streetNumber: '1901',
    streetName: 'Silverada Blvd',
    city: 'Reno',
    state: 'NV',
    postalCode: '89512',
    country: 'USA',
    latitude: 39.544,
    longitude: -119.790,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'machines', 'yoga'),
};

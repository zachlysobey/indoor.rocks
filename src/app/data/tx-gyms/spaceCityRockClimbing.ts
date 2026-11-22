import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const spaceCityRockClimbing: ClimbingGym = {
  name: 'Space City Rock Climbing',
  website: 'http://spacecityrockclimbing.com',
  address: {
    streetNumber: '201',
    streetName: 'Hobbs Rd',
    city: 'League City',
    state: 'TX',
    postalCode: '77573',
    country: 'USA',
    latitude: 29.506,
    longitude: -95.115,
  },
  amenities: amenities('bouldering', 'top-rope'),
};

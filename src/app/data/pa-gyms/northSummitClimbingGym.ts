import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const northSummitClimbingGym: ClimbingGym = {
  name: 'North Summit Climbing Gym',
  address: {
    streetNumber: '481',
    streetName: 'Bushkill Plaza Ln',
    city: 'Wind Gap',
    state: 'PA',
    postalCode: '18091',
    country: 'USA',
    latitude: 40.846,
    longitude: -75.297,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};

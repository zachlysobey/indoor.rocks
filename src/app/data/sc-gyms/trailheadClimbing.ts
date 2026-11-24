import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const trailheadClimbing: ClimbingGym = {
  name: 'Trailhead Climbing & Outdoor Center',
  address: {
    streetNumber: '505',
    streetName: 'Camson Rd',
    city: 'Anderson',
    region: 'SC',
    postalCode: '29625',
    country: 'US',
    latitude: 34.540,
    longitude: -82.690,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};

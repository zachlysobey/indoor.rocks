import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const roxClimbing: ClimbingGym = {
  name: 'ROX Climbing Gym',
  description: 'At Lake Nona Performance Club.',
  address: {
    streetNumber: '6775',
    streetName: 'Chopra Ter',
    city: 'Orlando',
    region: 'FL',
    postalCode: '32827',
    country: 'US',
    latitude: 28.371,
    longitude: -81.276,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};

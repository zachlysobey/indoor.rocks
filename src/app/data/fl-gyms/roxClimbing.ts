import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const roxClimbing: ClimbingGym = {
  name: 'ROX Climbing Gym',
  description: 'At Lake Nona Performance Club.',
  address: {
    streetNumber: '6775',
    streetName: 'Chopra Ter',
    city: 'Orlando',
    state: 'FL',
    postalCode: '32827',
    country: 'USA',
    latitude: 28.371,
    longitude: -81.276,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};

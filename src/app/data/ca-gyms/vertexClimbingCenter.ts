import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const vertexClimbingCenter: ClimbingGym = {
  name: 'Vertex Climbing Center',
  website: 'https://www.climbvertex.com/',
  address: {
    streetNumber: '3358',
    streetName: 'Coffey Ln',
    city: 'Santa Rosa',
    region: 'CA',
    postalCode: '95403',
    country: 'US',
    latitude: 38.475,
    longitude: -122.735,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'machines', 'yoga', 'aerial-silks'),
};

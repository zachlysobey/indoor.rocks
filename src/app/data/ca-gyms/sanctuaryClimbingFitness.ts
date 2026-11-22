import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const sanctuaryClimbingFitness: ClimbingGym = {
  name: 'Sanctuary Climbing & Fitness',
  website: 'https://www.rockgym.com/',
  address: {
    streetNumber: '1760',
    streetName: 'Fremont Blvd',
    city: 'Seaside',
    state: 'CA',
    postalCode: '93955',
    country: 'USA',
    latitude: 36.611,
    longitude: -121.844,
  },
  amenities: amenities('bouldering', 'top-rope', 'free-weights', 'yoga', 'arial-silks'),
};

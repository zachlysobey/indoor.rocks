import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const sessionsClimbingFitness: ClimbingGym = {
  name: 'Sessions Climbing + Fitness',
  website: 'https://www.sessionsclimbing.com/',
  address: {
    streetNumber: '1775',
    streetName: 'Cimarron Rialto',
    city: 'El Paso',
    state: 'TX',
    postalCode: '79912',
    country: 'USA',
    latitude: 31.868,
    longitude: -106.580,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
};

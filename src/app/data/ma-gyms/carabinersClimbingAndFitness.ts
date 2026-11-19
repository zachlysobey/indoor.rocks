import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const carabinersClimbingAndFitness: ClimbingGym = {
  name: "Carabiner's Climbing & Fitness",
  website: 'https://www.carabiners.com/',
  description: '65-foot walls plus a full fitness center.',
  address: {
    streetNumber: '328',
    streetName: 'Parker St',
    city: 'New Bedford',
    state: 'MA',
    postalCode: '02740',
    country: 'USA',
    latitude: 41.642,
    longitude: -70.948,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'yoga'),
};

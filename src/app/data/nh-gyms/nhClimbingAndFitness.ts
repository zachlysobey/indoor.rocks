import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const nhClimbingAndFitness: ClimbingGym = {
  name: 'NH Climbing & Fitness',
  website: 'https://www.nhclimbinggym.com/',
  description: 'Formerly Evolution (Evo) Rock + Fitness.',
  address: {
    streetNumber: '10',
    streetName: 'Langdon Ave',
    city: 'Concord',
    state: 'NH',
    postalCode: '03301',
    country: 'USA',
    latitude: 43.188,
    longitude: -71.535,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'yoga'),
};

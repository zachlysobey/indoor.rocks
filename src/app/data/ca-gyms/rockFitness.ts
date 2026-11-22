import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockFitness: ClimbingGym = {
  name: 'Rock Fitness',
  website: 'http://www.rockfitnessgym.com/',
  address: {
    streetNumber: '24305',
    streetName: 'Prielipp Rd',
    city: 'Wildomar',
    state: 'CA',
    postalCode: '92595',
    country: 'USA',
    latitude: 33.580,
    longitude: -117.247,
  },
  amenities: amenities('bouldering', 'auto-belays', 'yoga', 'arial-silks'),
};

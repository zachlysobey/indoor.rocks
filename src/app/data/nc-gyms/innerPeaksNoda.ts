import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { innerPeaks } from "../companies/innerPeaks";

export const innerPeaksNoda: ClimbingGym = {
  name: 'Inner Peaks NoDa',
  website: 'https://innerpeaks.com/noda/',
  description: 'Bouldering only.',
  parent: innerPeaks,
  address: {
    streetNumber: '1837',
    streetName: 'N Tryon St',
    city: 'Charlotte',
    state: 'NC',
    postalCode: '28206',
    country: 'USA',
    latitude: 35.244,
    longitude: -80.818,
  },
  amenities: amenities('bouldering', 'free-weights', 'yoga'),
};

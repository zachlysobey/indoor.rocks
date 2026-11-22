import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { momentum } from "../companies/momentum";

export const momentumMemorial: ClimbingGym = {
  name: 'Momentum Memorial',
  website: 'https://momentumclimbing.com/memorial/',
  description: 'Bouldering gym in Memorial City; opened 2026.',
  parent: momentum,
  address: {
    streetNumber: '10516',
    streetName: 'Katy Fwy',
    city: 'Houston',
    state: 'TX',
    postalCode: '77043',
    country: 'USA',
    latitude: 29.784,
    longitude: -95.555,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga'),
};

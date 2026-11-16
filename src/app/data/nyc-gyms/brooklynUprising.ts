import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";

export const brooklynUprising: ClimbingGym = {
  name: 'Brooklyn Uprising',
  description: 'Bouldering gym in DUMBO, opened 2026. Ages 16 and up.',
  address: {
    streetNumber: '20',
    streetName: 'John St',
    city: 'Brooklyn',
    state: 'NY',
    postalCode: '11201',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'free-weights', 'sauna'),
};

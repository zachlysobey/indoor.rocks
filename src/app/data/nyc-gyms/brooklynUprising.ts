import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const brooklynUprising: ClimbingGym = {
  name: 'Brooklyn Uprising',
  website: 'https://www.bkup.nyc/',
  description: 'Bouldering gym in DUMBO, opened 2026. Ages 16 and up.',
  address: {
    streetNumber: '20',
    streetName: 'John St',
    city: 'Brooklyn',
    state: 'NY',
    postalCode: '11201',
    country: 'USA',
    latitude: 40.705,
    longitude: -73.987,
  },
  amenities: amenities('bouldering', 'free-weights', 'sauna'),
};

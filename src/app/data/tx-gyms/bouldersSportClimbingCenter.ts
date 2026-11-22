import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const bouldersSportClimbingCenter: ClimbingGym = {
  name: 'Boulders Sport Climbing Center',
  website: 'https://www.climbboulders.com/',
  address: {
    streetNumber: '325',
    streetName: 'Indian Trail',
    city: 'Harker Heights',
    state: 'TX',
    postalCode: '76548',
    country: 'USA',
    latitude: 31.077,
    longitude: -97.660,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines'),
};

import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const cityrock: ClimbingGym = {
  name: 'CityROCK',
  website: 'https://www.climbcityrock.com/',
  address: {
    streetNumber: '21',
    streetName: 'N Nevada Ave',
    city: 'Colorado Springs',
    state: 'CO',
    postalCode: '80903',
    country: 'USA',
    latitude: 38.834,
    longitude: -104.821,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'yoga'),
};

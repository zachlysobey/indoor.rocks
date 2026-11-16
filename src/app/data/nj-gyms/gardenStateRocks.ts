import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const gardenStateRocks: ClimbingGym = {
  name: 'Garden State Rocks',
  address: {
    streetNumber: '705',
    streetName: 'Ginesi Dr',
    city: 'Morganville',
    state: 'NJ',
    postalCode: '07751',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};

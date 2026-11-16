import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const gardenStateRocks: ClimbingGym = {
  name: 'Garden State Rocks',
  website: 'https://www.gardenstaterocks.com/',
  address: {
    streetNumber: '705',
    streetName: 'Ginesi Dr',
    city: 'Morganville',
    state: 'NJ',
    postalCode: '07751',
    country: 'USA',
    latitude: 40.35180,
    longitude: -74.29320,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};

import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theBoulderingGardenColumbia: ClimbingGym = {
  name: 'The Bouldering Garden',
  address: {
    streetNumber: '5400',
    streetName: 'E St Charles Rd',
    city: 'Columbia',
    state: 'MO',
    postalCode: '65201',
    country: 'USA',
    latitude: 38.965,
    longitude: -92.270,
  },
  amenities: amenities('bouldering'),
};

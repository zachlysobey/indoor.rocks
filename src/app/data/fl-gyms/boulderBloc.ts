import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const boulderBloc: ClimbingGym = {
  name: 'Boulder Bloc',
  description: 'Bouldering only.',
  address: {
    streetNumber: '437',
    streetName: 'E Atlantic Blvd',
    city: 'Pompano Beach',
    state: 'FL',
    postalCode: '33060',
    country: 'USA',
    latitude: 26.232,
    longitude: -80.118,
  },
  amenities: amenities('bouldering'),
};

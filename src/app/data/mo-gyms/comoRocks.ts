import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const comoRocks: ClimbingGym = {
  name: 'CoMo Rocks',
  address: {
    streetNumber: '205',
    streetName: 'E Nifong Blvd',
    city: 'Columbia',
    state: 'MO',
    postalCode: '65203',
    country: 'USA',
    latitude: 38.903,
    longitude: -92.335,
  },
  amenities: amenities('bouldering', 'top-rope'),
};

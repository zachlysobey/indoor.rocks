import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theAscent: ClimbingGym = {
  name: 'The Ascent',
  address: {
    streetNumber: '831',
    streetName: 'Park Ave',
    city: 'Murfreesboro',
    state: 'TN',
    postalCode: '37129',
    country: 'USA',
    latitude: 35.852,
    longitude: -86.400,
  },
  amenities: amenities(),
};

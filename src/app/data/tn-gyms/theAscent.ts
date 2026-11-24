import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const theAscent: ClimbingGym = {
  name: 'The Ascent',
  address: {
    streetNumber: '831',
    streetName: 'Park Ave',
    city: 'Murfreesboro',
    region: 'TN',
    postalCode: '37129',
    country: 'US',
    latitude: 35.852,
    longitude: -86.400,
  },
  amenities: amenities(),
};

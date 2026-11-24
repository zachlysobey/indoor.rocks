import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const cragX: ClimbingGym = {
  name: 'Crag X',
  website: 'https://cragx.ca',
  address: {
    streetNumber: '769',
    streetName: 'Pandora Ave',
    city: 'Victoria',
    state: 'BC',
    postalCode: 'V8W 1N9',
    country: 'Canada',
    latitude: 48.428,
    longitude: -123.362,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};

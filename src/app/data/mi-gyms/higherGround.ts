import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const higherGround: ClimbingGym = {
  name: 'Higher Ground Rock Climbing Centre',
  address: {
    streetNumber: '820',
    streetName: 'Monroe Ave NW',
    city: 'Grand Rapids',
    state: 'MI',
    postalCode: '49503',
    country: 'USA',
    latitude: 42.980,
    longitude: -85.672,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};

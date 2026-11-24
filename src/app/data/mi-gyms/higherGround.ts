import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const higherGround: ClimbingGym = {
  name: 'Higher Ground Rock Climbing Centre',
  address: {
    streetNumber: '820',
    streetName: 'Monroe Ave NW',
    city: 'Grand Rapids',
    region: 'MI',
    postalCode: '49503',
    country: 'US',
    latitude: 42.980,
    longitude: -85.672,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead'),
};

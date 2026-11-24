import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { alta } from "../companies/alta";

export const altaScottsdale: ClimbingGym = {
  name: 'Alta Scottsdale',
  website: 'https://www.altaclimbing.com/scottsdale',
  parent: alta,
  address: {
    streetNumber: '16447',
    streetName: 'N 91st St',
    city: 'Scottsdale',
    region: 'AZ',
    postalCode: '85260',
    country: 'US',
    latitude: 33.638,
    longitude: -111.884,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'yoga'),
};

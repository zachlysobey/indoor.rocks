import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { alta } from "../companies/alta";

export const altaGilbert: ClimbingGym = {
  name: 'Alta Gilbert',
  website: 'https://www.altaclimbing.com/gilbert',
  description: 'Mixed-discipline gym with a 15 m speed wall.',
  parent: alta,
  address: {
    streetNumber: '3193',
    streetName: 'S Ranch House Ct',
    city: 'Gilbert',
    state: 'AZ',
    postalCode: '85297',
    country: 'USA',
    latitude: 33.300,
    longitude: -111.729,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays', 'yoga'),
};

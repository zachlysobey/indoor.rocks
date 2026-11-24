import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { edgeworks } from "../companies/edgeworks";

export const edgeworksSeattle: ClimbingGym = {
  name: 'Edgeworks Seattle',
  website: 'https://edgeworksclimbing.com/seattle/',
  description: 'Formerly Stone Gardens Seattle; has an outdoor wall.',
  parent: edgeworks,
  address: {
    streetNumber: '2839',
    streetName: 'NW Market St',
    city: 'Seattle',
    region: 'WA',
    postalCode: '98107',
    country: 'US',
    latitude: 47.669,
    longitude: -122.392,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'yoga'),
};

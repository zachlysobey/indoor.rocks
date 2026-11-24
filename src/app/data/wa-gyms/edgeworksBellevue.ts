import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { edgeworks } from "../companies/edgeworks";

export const edgeworksBellevue: ClimbingGym = {
  name: 'Edgeworks Bellevue',
  website: 'https://edgeworksclimbing.com/bellevue/',
  description: 'Formerly Stone Gardens Bellevue, in Crossroads Mall.',
  parent: edgeworks,
  address: {
    streetNumber: '15600',
    streetName: 'NE 8th St',
    city: 'Bellevue',
    region: 'WA',
    postalCode: '98008',
    country: 'US',
    latitude: 47.618,
    longitude: -122.132,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'machines', 'yoga', 'sauna'),
};

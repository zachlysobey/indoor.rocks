import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { edgeworks } from "../companies/edgeworks";

export const edgeworksTacoma: ClimbingGym = {
  name: 'Edgeworks Tacoma',
  website: 'https://edgeworksclimbing.com/tacoma/',
  parent: edgeworks,
  address: {
    streetNumber: '6102',
    streetName: 'N 9th St',
    city: 'Tacoma',
    state: 'WA',
    postalCode: '98406',
    country: 'USA',
    latitude: 47.263,
    longitude: -122.514,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'machines', 'yoga'),
};

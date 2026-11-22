import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { grotto } from "../companies/grotto";

export const grottoClimbingYogaMiramar: ClimbingGym = {
  name: 'Grotto Climbing & Yoga Miramar',
  website: 'https://www.grottoclimbing.com/',
  description: 'Bouldering and yoga.',
  parent: grotto,
  address: {
    streetNumber: '9282',
    streetName: 'Miramar Rd',
    city: 'San Diego',
    state: 'CA',
    postalCode: '92126',
    country: 'USA',
    latitude: 32.887,
    longitude: -117.135,
  },
  amenities: amenities('bouldering', 'yoga', 'free-weights'),
};

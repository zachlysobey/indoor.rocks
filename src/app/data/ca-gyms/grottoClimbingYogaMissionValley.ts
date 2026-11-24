import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { grotto } from "../companies/grotto";

export const grottoClimbingYogaMissionValley: ClimbingGym = {
  name: 'Grotto Climbing & Yoga Mission Valley',
  website: 'https://www.grottoclimbing.com/',
  description: 'Bouldering and yoga.',
  parent: grotto,
  address: {
    streetNumber: '4460',
    streetName: 'Alvarado Canyon Rd',
    city: 'San Diego',
    region: 'CA',
    postalCode: '92120',
    country: 'US',
    latitude: 32.784,
    longitude: -117.093,
  },
  amenities: amenities('bouldering', 'yoga', 'free-weights', 'machines'),
};

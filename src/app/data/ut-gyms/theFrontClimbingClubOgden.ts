import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { theFront } from "../companies/theFront";

export const theFrontClimbingClubOgden: ClimbingGym = {
  name: 'The Front Climbing Club Ogden',
  website: 'https://thefrontclimbingclub.com/ogden',
  parent: theFront,
  address: {
    streetNumber: '225',
    streetName: '20th St',
    city: 'Ogden',
    state: 'UT',
    postalCode: '84401',
    country: 'USA',
    latitude: 41.229,
    longitude: -111.978,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'machines', 'yoga'),
};

import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { theFront } from "../companies/theFront";

export const theFrontClimbingClubSaltLakeCity: ClimbingGym = {
  name: 'The Front Climbing Club Salt Lake City',
  website: 'https://thefrontclimbingclub.com/slc',
  parent: theFront,
  address: {
    streetNumber: '1470',
    streetName: 'S 400 W',
    city: 'Salt Lake City',
    state: 'UT',
    postalCode: '84115',
    country: 'USA',
    latitude: 40.738,
    longitude: -111.903,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'machines', 'yoga', 'sauna'),
};

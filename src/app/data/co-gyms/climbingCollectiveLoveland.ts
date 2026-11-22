import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { climbingCollective } from "../companies/climbingCollective";

export const climbingCollectiveLoveland: ClimbingGym = {
  name: 'Climbing Collective Loveland',
  website: 'https://climbingcollective.co/loveland',
  description: 'Mostly bouldering.',
  parent: climbingCollective,
  address: {
    streetNumber: '1503',
    streetName: 'Taurus Ct',
    city: 'Loveland',
    state: 'CO',
    postalCode: '80537',
    country: 'USA',
    latitude: 40.388,
    longitude: -105.055,
  },
  amenities: amenities('bouldering', 'auto-belays'),
};

import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { upperLimits } from "../companies/upperLimits";

export const upperLimitsBloomington: ClimbingGym = {
  name: 'Upper Limits Bloomington',
  website: 'https://www.upperlimits.com/bloomington/',
  description: 'Climbing in former grain silos.',
  parent: upperLimits,
  address: {
    streetNumber: '1304',
    streetName: 'W Washington St',
    city: 'Bloomington',
    state: 'IL',
    postalCode: '61701',
    country: 'USA',
    latitude: 40.479,
    longitude: -89.011,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays'),
};

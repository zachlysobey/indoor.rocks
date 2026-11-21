import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const scrapyardClimbing: ClimbingGym = {
  name: 'Scrapyard Climbing Collective',
  address: {
    streetNumber: '76',
    streetName: 'S River Ave',
    city: 'Holland',
    state: 'MI',
    postalCode: '49423',
    country: 'USA',
    latitude: 42.788,
    longitude: -86.100,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays'),
};

import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const scrapyardClimbing: ClimbingGym = {
  name: 'Scrapyard Climbing Collective',
  address: {
    streetNumber: '76',
    streetName: 'S River Ave',
    city: 'Holland',
    region: 'MI',
    postalCode: '49423',
    country: 'US',
    latitude: 42.788,
    longitude: -86.100,
  },
  amenities: amenities('bouldering', 'top-rope', 'auto-belays'),
};

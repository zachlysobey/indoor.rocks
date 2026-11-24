import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const stateClimb: ClimbingGym = {
  name: 'State Climb',
  website: 'https://stateclimb.com',
  description: 'Nonprofit, in the old State Theater.',
  address: {
    streetNumber: '115',
    streetName: 'E Locust St',
    city: 'Culpeper',
    region: 'VA',
    postalCode: '22701',
    country: 'US',
    latitude: 38.473,
    longitude: -77.995,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'aerial-silks'),
};

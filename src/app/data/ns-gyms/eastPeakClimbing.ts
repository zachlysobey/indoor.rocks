import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const eastPeakClimbing: ClimbingGym = {
  name: 'East Peak Climbing',
  website: 'https://eastpeakclimbing.ca',
  description: 'In the former Oxford Theatre, with walls up to 50 feet.',
  address: {
    streetNumber: '6408',
    streetName: 'Quinpool Rd',
    city: 'Halifax',
    region: 'NS',
    postalCode: 'B3L 1A7',
    country: 'CA',
    latitude: 44.648,
    longitude: -63.596,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};

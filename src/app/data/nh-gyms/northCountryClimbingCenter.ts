import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const northCountryClimbingCenter: ClimbingGym = {
  name: 'North Country Climbing Center',
  description: 'The only indoor climbing gym in the White Mountains.',
  address: {
    streetNumber: '2572',
    streetName: 'US Route 302',
    city: 'Lisbon',
    state: 'NH',
    postalCode: '03585',
    country: 'USA',
    latitude: 44.229,
    longitude: -71.880,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'aerial-silks'),
};

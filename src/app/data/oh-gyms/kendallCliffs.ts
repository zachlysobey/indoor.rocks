import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const kendallCliffs: ClimbingGym = {
  name: 'Kendall Cliffs Climbing Gym',
  description: 'Inside Cuyahoga Valley National Park.',
  address: {
    streetNumber: '60',
    streetName: 'Kendall Park Rd',
    city: 'Peninsula',
    region: 'OH',
    postalCode: '44264',
    country: 'US',
    latitude: 41.233,
    longitude: -81.535,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};

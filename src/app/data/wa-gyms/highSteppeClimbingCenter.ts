import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const highSteppeClimbingCenter: ClimbingGym = {
  name: 'High Steppe Climbing Center',
  website: 'https://highsteppeclimbing.com/',
  address: {
    streetNumber: '1015',
    streetName: 'E Lincoln Ave',
    city: 'Yakima',
    region: 'WA',
    postalCode: '98901',
    country: 'US',
    latitude: 46.609,
    longitude: -120.494,
  },
  amenities: amenities('bouldering', 'auto-belays', 'top-rope', 'lead'),
};

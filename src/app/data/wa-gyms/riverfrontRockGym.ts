import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const riverfrontRockGym: ClimbingGym = {
  name: 'Riverfront Rock Gym',
  website: 'https://www.riverfrontrockgym.com/',
  description: 'Climbing gym and fitness center with a cafe (The Last Pitch).',
  address: {
    streetNumber: '1319',
    streetName: 'Walla Walla Ave',
    city: 'Wenatchee',
    region: 'WA',
    postalCode: '98801',
    country: 'US',
    latitude: 47.440,
    longitude: -120.324,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays'),
};

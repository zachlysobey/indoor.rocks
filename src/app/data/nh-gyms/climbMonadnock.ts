import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const climbMonadnock: ClimbingGym = {
  name: 'Climb Monadnock',
  website: 'https://www.climb-monadnock.com/',
  description: 'Bouldering, plus a dry-tooling wall.',
  address: {
    streetNumber: '32',
    streetName: 'Carpenter St',
    city: 'Keene',
    state: 'NH',
    postalCode: '03431',
    country: 'USA',
    latitude: 42.938,
    longitude: -72.284,
  },
  amenities: amenities('bouldering'),
};

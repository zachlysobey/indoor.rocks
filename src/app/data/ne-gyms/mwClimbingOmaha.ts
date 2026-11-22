import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { mwClimbing } from "../companies/mwClimbing";

export const mwClimbingOmaha: ClimbingGym = {
  name: 'MW Climbing Omaha',
  parent: mwClimbing,
  website: 'https://www.mwclimbing.com',
  description: 'Bouldering only.',
  address: {
    streetNumber: '2809',
    streetName: 'S 125th Ave',
    city: 'Omaha',
    state: 'NE',
    postalCode: '68144',
    country: 'USA',
    latitude: 41.232,
    longitude: -96.104,
  },
  amenities: amenities('bouldering'),
};

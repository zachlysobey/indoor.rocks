import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { mwClimbing } from "../companies/mwClimbing";

export const mwClimbingLincoln: ClimbingGym = {
  name: 'MW Climbing Lincoln',
  parent: mwClimbing,
  website: 'https://www.mwclimbing.com',
  description: 'Bouldering only.',
  address: {
    streetNumber: '400',
    streetName: 'N 48th St',
    city: 'Lincoln',
    state: 'NE',
    postalCode: '68504',
    country: 'USA',
    latitude: 40.817,
    longitude: -96.648,
  },
  amenities: amenities('bouldering'),
};

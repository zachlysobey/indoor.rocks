import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { wipClimbing } from "../companies/wipClimbing";

export const wipClimbingNanaimo: ClimbingGym = {
  name: 'WIP Climbing Nanaimo',
  description: 'Formerly RavenWood Boulders, then The Bloc.',
  parent: wipClimbing,
  address: {
    streetNumber: '1870',
    streetName: 'Boxwood Rd',
    city: 'Nanaimo',
    state: 'BC',
    postalCode: 'V9S 5Y2',
    country: 'Canada',
    latitude: 49.190,
    longitude: -123.989,
  },
  amenities: amenities('bouldering', 'free-weights', 'sauna'),
};

import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const northernHeightsRockGym: ClimbingGym = {
  name: 'Northern Heights Rock Gym',
  description: 'In the Midtown District mall, formerly Grand Cities Mall.',
  address: {
    streetNumber: '1726',
    streetName: 'S Washington St',
    city: 'Grand Forks',
    state: 'ND',
    postalCode: '58201',
    country: 'USA',
    latitude: 47.906,
    longitude: -97.051,
  },
  amenities: amenities('top-rope', 'auto-belays'),
};

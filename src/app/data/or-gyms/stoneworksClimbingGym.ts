import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const stoneworksClimbingGym: ClimbingGym = {
  name: 'Stoneworks Climbing Gym',
  website: 'https://www.belay.com/',
  address: {
    streetNumber: '6775',
    streetName: 'SW 111th Ave',
    city: 'Beaverton',
    state: 'OR',
    postalCode: '97008',
    country: 'USA',
    latitude: 45.471,
    longitude: -122.791,
  },
  amenities: amenities('bouldering', 'lead', 'auto-belays'),
};

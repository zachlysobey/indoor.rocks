import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { stoneClimbing } from "../companies/stoneClimbing";

export const stoneClimbingJacksonville: ClimbingGym = {
  name: 'Stone Climbing Jacksonville',
  website: 'https://www.stone-climbing.com',
  parent: stoneClimbing,
  address: {
    streetNumber: '10575',
    streetName: 'Deerwood Park Blvd',
    city: 'Jacksonville',
    region: 'FL',
    postalCode: '32256',
    country: 'US',
    latitude: 30.255,
    longitude: -81.540,
  },
  amenities: amenities('bouldering', 'lead', 'free-weights'),
};

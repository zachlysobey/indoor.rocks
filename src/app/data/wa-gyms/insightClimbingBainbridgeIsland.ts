import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { insightClimbing } from "../companies/insightClimbing";

export const insightClimbingBainbridgeIsland: ClimbingGym = {
  name: 'Insight Climbing Bainbridge Island',
  website: 'https://www.insightclimbing.com/',
  description: 'Formerly Island Rock Gym.',
  parent: insightClimbing,
  address: {
    streetNumber: '9437',
    streetName: 'Coppertop Loop NE',
    city: 'Bainbridge Island',
    state: 'WA',
    postalCode: '98110',
    country: 'USA',
    latitude: 47.650,
    longitude: -122.540,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'free-weights', 'machines'),
};

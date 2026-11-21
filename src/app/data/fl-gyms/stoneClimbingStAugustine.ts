import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { stoneClimbing } from "../companies/stoneClimbing";

export const stoneClimbingStAugustine: ClimbingGym = {
  name: 'Stone Climbing St. Augustine',
  website: 'https://www.stone-climbing.com',
  parent: stoneClimbing,
  address: {
    streetNumber: '115',
    streetName: 'Strongway Ct',
    city: 'St. Augustine',
    state: 'FL',
    postalCode: '32086',
    country: 'USA',
    latitude: 29.840,
    longitude: -81.330,
  },
  amenities: amenities('bouldering', 'top-rope', 'free-weights', 'yoga'),
};

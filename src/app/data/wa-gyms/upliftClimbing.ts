import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { verticalWorld } from "../companies/verticalWorld";

export const upliftClimbing: ClimbingGym = {
  name: 'Uplift Climbing',
  website: 'https://www.upliftclimbing.com/',
  description: 'Bouldering gym; part of the Vertical World family.',
  parent: verticalWorld,
  address: {
    streetNumber: '17229',
    streetName: '15th Ave NE',
    city: 'Shoreline',
    state: 'WA',
    postalCode: '98155',
    country: 'USA',
    latitude: 47.755,
    longitude: -122.312,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines'),
};

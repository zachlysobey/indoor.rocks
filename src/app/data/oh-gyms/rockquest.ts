import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";

export const rockquest: ClimbingGym = {
  name: 'RockQuest Climbing Center',
  address: {
    streetNumber: '3475',
    streetName: 'E Kemper Rd',
    city: 'Cincinnati',
    state: 'OH',
    postalCode: '45241',
    country: 'USA',
    latitude: 39.290,
    longitude: -84.395,
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'auto-belays', 'yoga'),
};

import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";
import { movement } from "../companies";

export const movementValhalla: ClimbingGym = {
  name: 'Movement Valhalla',
  description: 'Formerly The Cliffs at Valhalla.',
  parent: movement,
  address: {
    streetNumber: '1',
    streetName: 'Commerce St',
    city: 'Valhalla',
    state: 'NY',
    postalCode: '10595',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'free-weights', 'yoga'),
};

import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementValhalla: ClimbingGym = {
  name: 'Movement Valhalla',
  website: 'https://movementgyms.com/valhalla/',
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

import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { movement } from "../companies/movement";

export const movementGowanus: ClimbingGym = {
  name: 'Movement Gowanus',
  parent: movement,
  address: {
    streetNumber: '242',
    streetName: 'Butler St',
    city: 'Brooklyn',
    state: 'NY',
    postalCode: '11217',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'top-rope', 'lead', 'yoga', 'sauna'),
};

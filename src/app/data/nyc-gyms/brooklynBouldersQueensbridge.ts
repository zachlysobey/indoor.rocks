import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { brooklynBoulders } from "../companies/brooklynBoulders";

export const brooklynBouldersQueensbridge: ClimbingGym = {
  name: 'Brooklyn Boulders Queensbridge',
  description: 'Despite the name, this one is in Queens.',
  parent: brooklynBoulders,
  address: {
    streetNumber: '23-10',
    streetName: '41st Ave',
    city: 'Long Island City',
    state: 'NY',
    postalCode: '11101',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'free-weights', 'yoga', 'sauna'),
};

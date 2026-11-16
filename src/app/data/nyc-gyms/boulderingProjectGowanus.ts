import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenityMap";
import { boulderingProject } from "../companies";

export const boulderingProjectGowanus: ClimbingGym = {
  name: 'Bouldering Project Gowanus',
  description: 'Formerly Brooklyn Boulders Gowanus; reopened under Bouldering Project in January 2024.',
  parent: boulderingProject,
  address: {
    streetNumber: '575',
    streetName: 'Degraw St',
    city: 'Brooklyn',
    state: 'NY',
    postalCode: '11217',
    country: 'USA',
  },
  amenities: amenities('bouldering', 'free-weights', 'yoga'),
};

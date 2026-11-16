import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boulderingProject } from "../companies/boulderingProject";

export const boulderingProjectGowanus: ClimbingGym = {
  name: 'Bouldering Project Gowanus',
  website: 'https://boulderingproject.com/location/gowanus',
  description: 'Formerly Brooklyn Boulders Gowanus; reopened under Bouldering Project in January 2024.',
  parent: boulderingProject,
  address: {
    streetNumber: '575',
    streetName: 'Degraw St',
    city: 'Brooklyn',
    state: 'NY',
    postalCode: '11217',
    country: 'USA',
    latitude: 40.67973,
    longitude: -73.98422,
  },
  amenities: amenities('bouldering', 'free-weights', 'yoga'),
};

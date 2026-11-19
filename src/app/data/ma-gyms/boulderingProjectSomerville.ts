import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boulderingProject } from "../companies/boulderingProject";

export const boulderingProjectSomerville: ClimbingGym = {
  name: 'Bouldering Project Somerville',
  website: 'https://boulderingproject.com/location/somerville/',
  description: 'In the former Brooklyn Boulders Somerville space.',
  parent: boulderingProject,
  address: {
    streetNumber: '12A',
    streetName: 'Tyler St',
    city: 'Somerville',
    state: 'MA',
    postalCode: '02143',
    country: 'USA',
    latitude: 42.382,
    longitude: -71.106,
  },
  amenities: amenities('bouldering', 'top-rope', 'free-weights', 'yoga', 'sauna'),
};

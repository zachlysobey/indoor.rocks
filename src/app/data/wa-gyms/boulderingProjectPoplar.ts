import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boulderingProject } from "../companies/boulderingProject";

export const boulderingProjectPoplar: ClimbingGym = {
  name: 'Bouldering Project Poplar',
  website: 'https://boulderingproject.com/location/poplar/',
  description: 'Bouldering on two floors, with yoga, fitness and saunas.',
  parent: boulderingProject,
  address: {
    streetNumber: '900',
    streetName: 'Poplar Pl S',
    city: 'Seattle',
    state: 'WA',
    postalCode: '98144',
    country: 'USA',
    latitude: 47.591,
    longitude: -122.307,
  },
  amenities: amenities('bouldering', 'yoga', 'machines', 'sauna'),
};

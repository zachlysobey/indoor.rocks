import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boulderingProject } from "../companies/boulderingProject";

export const boulderingProjectFremont: ClimbingGym = {
  name: 'Bouldering Project Fremont',
  website: 'https://boulderingproject.com/location/fremont-upper-walls/',
  description: 'Bouldering on two floors, with yoga and a weight room.',
  parent: boulderingProject,
  address: {
    streetNumber: '3535',
    streetName: 'Interlake Ave N',
    city: 'Seattle',
    region: 'WA',
    postalCode: '98103',
    country: 'US',
    latitude: 47.650,
    longitude: -122.342,
  },
  amenities: amenities('bouldering', 'yoga', 'free-weights', 'machines'),
};

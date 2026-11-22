import type { ClimbingGym } from "@/app/dataModel";
import { amenities } from "../amenities";
import { boulderingProject } from "../companies/boulderingProject";

export const boulderingProjectSaltLakeCity: ClimbingGym = {
  name: 'Bouldering Project Salt Lake City',
  website: 'https://boulderingproject.com/location/the-granary',
  description: 'Bouldering only, in the Granary building.',
  parent: boulderingProject,
  address: {
    streetNumber: '660',
    streetName: 'S 400 W',
    city: 'Salt Lake City',
    state: 'UT',
    postalCode: '84101',
    country: 'USA',
    latitude: 40.755,
    longitude: -111.903,
  },
  amenities: amenities('bouldering', 'free-weights', 'machines', 'yoga', 'sauna'),
};
